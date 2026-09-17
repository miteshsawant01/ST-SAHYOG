export type UserRole = 'student' | 'officer' | 'admin';

export type StudentTab = 
  | 'home' 
  | 'explore-schemes' 
  | 'check-eligibility' 
  | 'my-applications' 
  | 'documents' 
  | 'notifications' 
  | 'track-status';

export type OfficerTab = 
  | 'command-center' 
  | 'applications' 
  | 'ai-doc-review' 
  | 'eligibility-review' 
  | 'deficiencies' 
  | 'selection-support' 
  | 'analytics' 
  | 'audit-trail';

export type AdminTab = 
  | 'scheme-config' 
  | 'users-roles' 
  | 'workflow-config' 
  | 'system-analytics';

export interface Scheme {
  id: string;
  code: string;
  name: string;
  ministry: string;
  shortDesc: string;
  longDesc: string;
  category: 'Higher Education' | 'Overseas' | 'Excellence' | 'Post-Matric' | 'Pre-Matric';
  academicLevel: 'Research / Ph.D' | 'Masters / Overseas' | 'UG / Professional' | 'Class 11-12' | 'Class 9-10';
  targetAudience: string[];
  maxBenefit: string;
  annualIncomeLimit: number; // in INR
  currentVersion: string;
  deadline: string;
  totalSlots: number;
  coveredExpenses: string[];
  eligibilityConditions: string[];
  requiredDocs: string[];
}

export interface EligibilityQuery {
  // Step 1: Personal Details
  category: string;
  state: string;
  gender: string;
  dob: string;
  // Step 2: Academic Details
  courseDegree: string;
  yearOfStudy: string;
  institution: string;
  academicScore: string;
  // Step 3: Scheme-Specific Details
  annualIncome: number;
  schemeId: string;
  admissionDetails: string;
  otherCriteria: string;
}

export interface ExplainableCriterion {
  criterion: string;
  result: 'satisfied' | 'pending' | 'failed';
  evidence: string;
}

export interface DocumentField {
  label: string;
  value: string;
  confidence: number;
  status: 'verified' | 'warning' | 'error';
  bbox?: { x: number; y: number; w: number; h: number };
}

export interface ApplicationDocument {
  id: string;
  docType: 'st_certificate' | 'income_certificate' | 'marksheet' | 'admission_proof' | 'caste_validity';
  title: string;
  fileName: string;
  fileSize: string;
  uploadedAt: string;
  status: 'verified' | 'review_required' | 'deficient' | 'pending';
  confidenceScore: number;
  extractedFields: DocumentField[];
  aiIssue?: string;
  aiRecommendation?: string;
  previewUrl?: string;
  isReplaced?: boolean;
  reissueDate?: string;
}

export interface ApplicationDeficiency {
  id: string;
  docId: string;
  docTitle: string;
  issue: string;
  confidence: number;
  requiredAction: string;
  status: 'action_required' | 'under_review' | 'resolved';
  raisedAt: string;
  resolvedAt?: string;
  replacementFileName?: string;
  replacementUploadedAt?: string;
}

export interface ApplicationTimelineEvent {
  date: string;
  title: string;
  status: 'completed' | 'warning' | 'pending' | 'in_progress';
  description: string;
}

export interface ApplicationRecord {
  id: string; // e.g. ST26-DEMO001
  schemeId: string;
  schemeName: string;
  applicantName: string;
  gender: 'Female' | 'Male' | 'Other';
  dob: string;
  mobile: string;
  email: string;
  stSubTribe: string;
  isPVTG: boolean;
  state: string;
  district: string;
  institution: string;
  course: string;
  cgpaPercentage: string;
  annualIncome: number;
  appliedDate: string;
  currentStage: 'SUBMITTED' | 'INITIAL_CHECK' | 'AI_REVIEW' | 'DOCUMENT_VERIFICATION' | 'SELECTION' | 'FINAL_COMMUNICATION';
  completionPercentage: number;
  overallStatus: 'In Review' | 'Deficiency Raised' | 'Verified' | 'Selection Ready' | 'Sanctioned';
  documents: ApplicationDocument[];
  deficiencies: ApplicationDeficiency[];
  timeline: ApplicationTimelineEvent[];
  dbtAccountLinked: boolean;
  dbtBankName: string;
  digiLockerVerified: boolean;
  officerDecision?: 'Pending' | 'Accepted' | 'Correction Requested' | 'Escalated' | 'Rejected';
  officerNotes?: string;
}

export interface SchemeRuleConfig {
  version: string;
  lastUpdated: string;
  updatedBy: string;
  schemeId: string;
  schemeName: string;
  annualIncomeCeiling: number;
  minGraduationMarks: number;
  pvtgWeightageBonus: number;
  femaleQuotaPercentage: number;
  ocrConfidenceCutoff: number;
  allowDigiLockerBypass: boolean;
  workflowStages: string[];
  selectionFormula: string;
  notificationTemplateSMS: string;
  notificationTemplateEmail: string;
  applicationOpenDate: string;
  applicationCloseDate: string;
  rulesChecked: {
    academic: boolean;
    stEligibility: boolean;
    incomeCriteria: boolean;
    schemeSpecific: boolean;
  };
  requiredDocsChecked: {
    caste: boolean;
    academic: boolean;
    income: boolean;
    schemeSpecific: boolean;
  };
}

export interface AuditLogEntry {
  id: string;
  date: string; // e.g. "17 Sep", "18 Sep", "19 Sep"
  timestamp: string;
  actor: string;
  actorRole: 'System' | 'Officer' | 'Student' | 'AI';
  action: string;
  target?: string;
  details?: string;
  hash?: string;
}
