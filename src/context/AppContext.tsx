import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  UserRole, 
  StudentTab, 
  OfficerTab, 
  AdminTab, 
  ApplicationRecord, 
  SchemeRuleConfig, 
  AuditLogEntry, 
  Scheme 
} from '../types';
import { 
  PRIMARY_APPLICATION, 
  MOCK_APPLICATIONS_QUEUE, 
  INITIAL_SCHEME_CONFIG, 
  INITIAL_AUDIT_TRAIL, 
  MOCK_SCHEMES 
} from '../data/mockData';

interface AppContextType {
  role: UserRole;
  setRole: (role: UserRole) => void;
  studentTab: StudentTab;
  setStudentTab: (tab: StudentTab) => void;
  officerTab: OfficerTab;
  setOfficerTab: (tab: OfficerTab) => void;
  adminTab: AdminTab;
  setAdminTab: (tab: AdminTab) => void;

  language: 'en' | 'hi' | 'mr';
  setLanguage: (lang: 'en' | 'hi' | 'mr') => void;
  fontSize: 'normal' | 'large' | 'xlarge';
  setFontSize: (size: 'normal' | 'large' | 'xlarge') => void;
  highContrast: boolean;
  setHighContrast: (val: boolean | ((prev: boolean) => boolean)) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;

  schemes: Scheme[];
  application: ApplicationRecord;
  queue: ApplicationRecord[];
  activeReviewAppId: string;
  setActiveReviewAppId: (id: string) => void;
  schemeConfig: SchemeRuleConfig;
  auditTrail: AuditLogEntry[];

  // Interactive Actions
  resolveDeficiencyWithAIRecheck: (replacementFileName: string) => Promise<void>;
  officerVerifyDocument: (appId: string, docId: string, newConfidence?: number) => void;
  officerRaiseDeficiency: (appId: string, docId: string, reason: string) => void;
  officerSubmitDecision: (appId: string, decision: 'Accepted' | 'Correction Requested' | 'Escalated' | 'Rejected', notes: string) => void;
  recordSelectionAction: (appId: string, action: 'Approve for Selection' | 'Request Clarification' | 'Reject', reason: string) => void;
  saveNewSchemeVersion: (updatedConfig: Partial<SchemeRuleConfig>, newVersion: string, changeNote: string) => void;
  addAuditEntry: (date: string, actor: string, role: AuditLogEntry['actorRole'], action: string, target?: string, details?: string) => void;

  // Quick View helper
  selectedSchemeForModal: Scheme | null;
  setSelectedSchemeForModal: (scheme: Scheme | null) => void;
  showHelpModal: boolean;
  setShowHelpModal: (val: boolean) => void;

  // Backwards compatibility alias
  applicantTab: string;
  setApplicantTab: (tab: any) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRole] = useState<UserRole>('student');
  const [studentTab, setStudentTab] = useState<StudentTab>('home');
  const [officerTab, setOfficerTab] = useState<OfficerTab>('command-center');
  const [adminTab, setAdminTab] = useState<AdminTab>('scheme-config');

  const [language, setLanguage] = useState<'en' | 'hi' | 'mr'>('en');
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [highContrast, setHighContrast] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [schemes] = useState<Scheme[]>(MOCK_SCHEMES);
  const [application, setApplication] = useState<ApplicationRecord>(PRIMARY_APPLICATION);
  const [queue, setQueue] = useState<ApplicationRecord[]>(MOCK_APPLICATIONS_QUEUE);
  const [activeReviewAppId, setActiveReviewAppId] = useState<string>('ST26-DEMO001');
  const [schemeConfig, setSchemeConfig] = useState<SchemeRuleConfig>(INITIAL_SCHEME_CONFIG);
  const [auditTrail, setAuditTrail] = useState<AuditLogEntry[]>(INITIAL_AUDIT_TRAIL);

  const [selectedSchemeForModal, setSelectedSchemeForModal] = useState<Scheme | null>(null);
  const [showHelpModal, setShowHelpModal] = useState<boolean>(false);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('text-scale-large', 'text-scale-xlarge', 'high-contrast');
    if (fontSize === 'large') root.classList.add('text-scale-large');
    if (fontSize === 'xlarge') root.classList.add('text-scale-xlarge');
    if (highContrast) root.classList.add('high-contrast');
  }, [fontSize, highContrast]);

  const addAuditEntry = (
    date: string,
    actor: string,
    role: AuditLogEntry['actorRole'],
    action: string,
    target?: string,
    details?: string
  ) => {
    const now = new Date();
    const timeString = now.toTimeString().split(' ')[0];
    const randomHash = Math.random().toString(16).substring(2, 8) + '...' + Math.random().toString(16).substring(2, 6);

    const newEntry: AuditLogEntry = {
      id: `log-${Date.now()}`,
      date,
      timestamp: timeString,
      actor,
      actorRole: role,
      action,
      target,
      details,
      hash: randomHash
    };

    setAuditTrail(prev => [newEntry, ...prev]);
  };

  // Item 4: Interactive Deficiency Loop: Detect → Notify → Resubmit → Recheck → Decide
  const resolveDeficiencyWithAIRecheck = async (replacementFileName: string) => {
    const now = new Date();
    const timeString = now.toTimeString().split(' ')[0];

    // 1. Update document to re-checking / verified state with high confidence
    setApplication(prev => {
      const updatedDocs = prev.documents.map(doc => {
        if (doc.id === 'doc-income') {
          return {
            ...doc,
            fileName: replacementFileName,
            uploadedAt: `Today, ${timeString}`,
            status: 'verified' as const,
            confidenceScore: 98,
            isReplaced: true,
            reissueDate: '14/07/2025',
            extractedFields: [
              { label: 'Applicant Name', value: 'Rahul Jadhav', confidence: 100, status: 'verified' as const, bbox: { x: 40, y: 95, w: 190, h: 24 } },
              { label: 'Certificate No.', value: 'MHA/REV/2025/88921', confidence: 99, status: 'verified' as const, bbox: { x: 40, y: 130, w: 210, h: 24 } },
              { label: 'Income', value: '₹1,80,000', confidence: 98, status: 'verified' as const, bbox: { x: 40, y: 165, w: 320, h: 24 } },
              { label: 'Issue Date', value: '14/07/2025', confidence: 98, status: 'verified' as const, bbox: { x: 40, y: 200, w: 280, h: 24 } }
            ],
            aiIssue: undefined,
            aiRecommendation: 'Revalidation complete. Date verified matching active financial year. Ready for officer verification.'
          };
        }
        return doc;
      });

      const updatedDeficiencies = prev.deficiencies.map(def => {
        if (def.docId === 'doc-income') {
          return {
            ...def,
            status: 'resolved' as const,
            resolvedAt: timeString,
            replacementFileName,
            replacementUploadedAt: timeString
          };
        }
        return def;
      });

      return {
        ...prev,
        documents: updatedDocs,
        deficiencies: updatedDeficiencies,
        completionPercentage: 75,
        overallStatus: 'In Review' as const
      };
    });

    // 2. Update queue for officer view
    setQueue(prev => prev.map(app => {
      if (app.id === 'ST26-DEMO001') {
        return {
          ...app,
          overallStatus: 'In Review' as const,
          completionPercentage: 75
        };
      }
      return app;
    }));

    // 3. Add to Audit Trail
    addAuditEntry(
      'Today',
      'Student',
      'Student',
      'Document resubmitted',
      'ST26-DEMO001 / doc-income',
      `Rahul Jadhav uploaded replacement certificate "${replacementFileName}".`
    );
    addAuditEntry(
      'Today',
      'System',
      'System',
      'Recheck completed',
      'ST26-DEMO001 / doc-income',
      'AI Recheck complete (98% confidence). Revalidation complete.'
    );
  };

  const officerVerifyDocument = (appId: string, docId: string, newConfidence: number = 98) => {
    setApplication(prev => {
      if (prev.id !== appId) return prev;
      const updatedDocs = prev.documents.map(d => {
        if (d.id === docId) {
          return {
            ...d,
            status: 'verified' as const,
            confidenceScore: newConfidence,
            aiIssue: undefined
          };
        }
        return d;
      });
      return {
        ...prev,
        documents: updatedDocs,
        completionPercentage: 90,
        overallStatus: 'Verified' as const
      };
    });

    addAuditEntry(
      'Today',
      'Officer',
      'Officer',
      'Verification completed',
      `${appId} / ${docId}`,
      'Officer verified physical validity and stamps. Marked verified.'
    );
  };

  const officerRaiseDeficiency = (appId: string, docId: string, reason: string) => {
    addAuditEntry(
      'Today',
      'Officer',
      'Officer',
      'Deficiency flagged',
      `${appId} / ${docId}`,
      `Officer issued deficiency notice: "${reason}".`
    );
  };

  const officerSubmitDecision = (
    appId: string, 
    decision: 'Accepted' | 'Correction Requested' | 'Escalated' | 'Rejected', 
    notes: string
  ) => {
    setApplication(prev => {
      if (prev.id !== appId) return prev;
      return {
        ...prev,
        officerDecision: decision,
        officerNotes: notes,
        overallStatus: decision === 'Accepted' ? 'Selection Ready' : decision === 'Correction Requested' ? 'Deficiency Raised' : 'In Review',
        completionPercentage: decision === 'Accepted' ? 95 : prev.completionPercentage
      };
    });

    setQueue(prev => prev.map(app => {
      if (app.id === appId) {
        return {
          ...app,
          officerDecision: decision,
          officerNotes: notes,
          overallStatus: decision === 'Accepted' ? 'Selection Ready' : decision === 'Correction Requested' ? 'Deficiency Raised' : 'In Review'
        };
      }
      return app;
    }));

    addAuditEntry(
      'Today',
      'Officer',
      'Officer',
      `Officer Decision: ${decision}`,
      appId,
      `Official Notes: "${notes}"`
    );
  };

  // Item 13: Selection Review decision recorder
  const recordSelectionAction = (
    appId: string, 
    action: 'Approve for Selection' | 'Request Clarification' | 'Reject', 
    reason: string
  ) => {
    const officerId = 'MoTA-OFFICER-04 (Ramesh Sharma)';
    const today = 'Today';

    setApplication(prev => ({
      ...prev,
      overallStatus: action === 'Approve for Selection' ? 'Selection Ready' : action === 'Reject' ? 'In Review' : 'Deficiency Raised',
      completionPercentage: action === 'Approve for Selection' ? 100 : prev.completionPercentage
    }));

    addAuditEntry(
      today,
      'Officer',
      'Officer',
      `${action} - ${officerId}`,
      appId,
      `Reason: ${reason}`
    );
  };

  const saveNewSchemeVersion = (
    updatedConfig: Partial<SchemeRuleConfig>, 
    newVersion: string, 
    changeNote: string
  ) => {
    const now = new Date();
    const formattedDate = `${now.getDate()} ${now.toLocaleString('default', { month: 'short' })} ${now.getFullYear()}, ${now.toTimeString().split(' ')[0]} IST`;

    setSchemeConfig(prev => ({
      ...prev,
      ...updatedConfig,
      version: newVersion,
      lastUpdated: formattedDate,
      updatedBy: 'Ramesh Sharma, Scrutiny Officer (Approved by Director, MoTA)'
    }));

    addAuditEntry(
      'Today',
      'Officer',
      'Officer',
      `Configured & Saved Scheme Version ${newVersion}`,
      schemeConfig.schemeName,
      `Rule updates: "${changeNote}". Dynamic scheme engine recompiled without rebuilding codebase.`
    );
  };

  return (
    <AppContext.Provider
      value={{
        role,
        setRole,
        studentTab,
        setStudentTab,
        officerTab,
        setOfficerTab,
        adminTab,
        setAdminTab,
        language,
        setLanguage,
        fontSize,
        setFontSize,
        highContrast,
        setHighContrast,
        searchQuery,
        setSearchQuery,
        schemes,
        application,
        queue,
        activeReviewAppId,
        setActiveReviewAppId,
        schemeConfig,
        auditTrail,
        resolveDeficiencyWithAIRecheck,
        officerVerifyDocument,
        officerRaiseDeficiency,
        officerSubmitDecision,
        recordSelectionAction,
        saveNewSchemeVersion,
        addAuditEntry,
        selectedSchemeForModal,
        setSelectedSchemeForModal,
        showHelpModal,
        setShowHelpModal,
        applicantTab: studentTab,
        setApplicantTab: (tab: any) => {
          if (tab === 'track-application') setStudentTab('track-status');
          else if (tab === 'document-assistant' || tab === 'deficiency-centre') setStudentTab('documents');
          else setStudentTab(tab);
        }
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
