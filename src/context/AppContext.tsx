import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  UserRole, 
  ApplicantTab, 
  AdminTab, 
  ApplicationRecord, 
  SchemeRuleConfig, 
  AuditLogEntry, 
  Scheme 
} from '../types';
import { 
  INITIAL_APPLICATION, 
  MOCK_APPLICATIONS_QUEUE, 
  INITIAL_SCHEME_CONFIG, 
  INITIAL_AUDIT_TRAIL, 
  MOCK_SCHEMES 
} from '../data/mockData';

interface AppContextType {
  role: UserRole;
  setRole: (role: UserRole) => void;
  applicantTab: ApplicantTab;
  setApplicantTab: (tab: ApplicantTab) => void;
  adminTab: AdminTab;
  setAdminTab: (tab: AdminTab) => void;
  language: 'en' | 'hi';
  setLanguage: (lang: 'en' | 'hi') => void;
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
  resolveDeficiency: (replacementFileName: string) => void;
  officerVerifyDocument: (appId: string, docId: string, newConfidence?: number) => void;
  officerRaiseDeficiency: (appId: string, docId: string, reason: string) => void;
  officerSubmitDecision: (appId: string, decision: 'Accepted' | 'Correction Requested' | 'Escalated' | 'Rejected', notes: string) => void;
  saveNewSchemeVersion: (updatedConfig: Partial<SchemeRuleConfig>, newVersion: string, changeNote: string) => void;
  addAuditEntry: (actor: string, role: AuditLogEntry['actorRole'], action: string, target: string, details: string) => void;
  
  // Quick View helper
  selectedSchemeForModal: Scheme | null;
  setSelectedSchemeForModal: (scheme: Scheme | null) => void;
  showHelpModal: boolean;
  setShowHelpModal: (val: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRole] = useState<UserRole>('applicant');
  const [applicantTab, setApplicantTab] = useState<ApplicantTab>('home');
  const [adminTab, setAdminTab] = useState<AdminTab>('dashboard');
  const [language, setLanguage] = useState<'en' | 'hi'>('en');
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [highContrast, setHighContrast] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [schemes] = useState<Scheme[]>(MOCK_SCHEMES);
  const [application, setApplication] = useState<ApplicationRecord>(INITIAL_APPLICATION);
  const [queue, setQueue] = useState<ApplicationRecord[]>(MOCK_APPLICATIONS_QUEUE);
  const [activeReviewAppId, setActiveReviewAppId] = useState<string>('ST26-10482');
  const [schemeConfig, setSchemeConfig] = useState<SchemeRuleConfig>(INITIAL_SCHEME_CONFIG);
  const [auditTrail, setAuditTrail] = useState<AuditLogEntry[]>(INITIAL_AUDIT_TRAIL);

  const [selectedSchemeForModal, setSelectedSchemeForModal] = useState<Scheme | null>(null);
  const [showHelpModal, setShowHelpModal] = useState<boolean>(false);

  // Apply font scale and high-contrast classes to root
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('text-scale-large', 'text-scale-xlarge', 'high-contrast');
    if (fontSize === 'large') root.classList.add('text-scale-large');
    if (fontSize === 'xlarge') root.classList.add('text-scale-xlarge');
    if (highContrast) root.classList.add('high-contrast');
  }, [fontSize, highContrast]);

  const addAuditEntry = (
    actor: string,
    role: AuditLogEntry['actorRole'],
    action: string,
    target: string,
    details: string
  ) => {
    const now = new Date();
    const timeString = now.toTimeString().split(' ')[0]; // e.g. 14:45:12
    const randomHash = Math.random().toString(16).substring(2, 8) + '...' + Math.random().toString(16).substring(2, 6);
    
    const newEntry: AuditLogEntry = {
      id: `log-${Date.now()}`,
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

  // Flagship Deficiency Resolution Action
  const resolveDeficiency = (replacementFileName: string) => {
    const now = new Date();
    const timeString = now.toTimeString().split(' ')[0];

    // Update application documents
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
              { label: 'Name', value: 'Rahul Jadhav', confidence: 100, status: 'verified' as const, bbox: { x: 40, y: 95, w: 190, h: 24 } },
              { label: 'Certificate Number', value: 'MHA/REV/2025/88921', confidence: 99, status: 'verified' as const, bbox: { x: 40, y: 130, w: 210, h: 24 } },
              { label: 'Income Amount', value: '₹1,80,000 (Certified)', confidence: 98, status: 'verified' as const, bbox: { x: 40, y: 165, w: 320, h: 24 } },
              { label: 'Issue Date', value: '14/07/2025 (Crisp Stamp / Competent Authority)', confidence: 98, status: 'verified' as const, bbox: { x: 40, y: 200, w: 280, h: 24 } }
            ],
            aiIssue: undefined,
            aiRecommendation: 'Replaced document verified. Clear SDM digital stamp and QR code validated.'
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
        completionPercentage: 88,
        overallStatus: 'In Review' as const
      };
    });

    // Also update in queue for officer view
    setQueue(prev => prev.map(app => {
      if (app.id === 'ST26-10482') {
        return {
          ...app,
          overallStatus: 'In Review' as const,
          completionPercentage: 88
        };
      }
      return app;
    }));

    // Log in Audit Trail
    addAuditEntry(
      'Rahul Jadhav',
      'Applicant',
      'Uploaded Replacement Document',
      'ST26-10482 / Income Certificate',
      `Applicant submitted reissued certificate "${replacementFileName}". AI re-scan completed with 98% confidence.`
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
        completionPercentage: 92,
        overallStatus: 'Verified' as const
      };
    });

    addAuditEntry(
      'Ramesh Sharma (MoTA-SCR-04)',
      'Scrutiny Officer',
      'Verified & Accepted Document',
      `${appId} / ${docId}`,
      'Officer verified physical validity and stamps. Marked verified in scrutiny record.'
    );
  };

  const officerRaiseDeficiency = (appId: string, docId: string, reason: string) => {
    addAuditEntry(
      'Ramesh Sharma (MoTA-SCR-04)',
      'Scrutiny Officer',
      'Raised Deficiency Notice',
      `${appId} / ${docId}`,
      `Deficiency issued: "${reason}". Applicant notified via SMS and portal inbox.`
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
      'Ramesh Sharma (MoTA-SCR-04)',
      'Scrutiny Officer',
      `Recorded Officer Decision: ${decision}`,
      appId,
      `Official Notes: "${notes}"`
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
      'Ramesh Sharma (MoTA-SCR-04)',
      'Scheme Admin',
      `Configured & Saved Scheme Version ${newVersion}`,
      schemeConfig.schemeName,
      `Rule modifications: "${changeNote}". Rule engine configuration saved as active version ${newVersion}.`
    );
  };

  return (
    <AppContext.Provider
      value={{
        role,
        setRole,
        applicantTab,
        setApplicantTab,
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
        resolveDeficiency,
        officerVerifyDocument,
        officerRaiseDeficiency,
        officerSubmitDecision,
        saveNewSchemeVersion,
        addAuditEntry,
        selectedSchemeForModal,
        setSelectedSchemeForModal,
        showHelpModal,
        setShowHelpModal
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
