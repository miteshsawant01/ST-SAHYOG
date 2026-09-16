export type UserRole = 'applicant' | 'admin';

export type ApplicantTab = 
  | 'home' 
  | 'explore-schemes' 
  | 'check-eligibility' 
  | 'apply-now' 
  | 'track-application' 
  | 'document-assistant' 
  | 'deficiency-centre' 
  | 'resources' 
  | 'help-support';

export type AdminTab = 
  | 'dashboard' 
  | 'queue' 
  | 'review' 
  | 'scheme-engine' 
  | 'audit-trail' 
  | 'analytics';

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
  category: string;
  subTribe: string;
  academicLevel: string;
  course: string;
  institutionType: string;
  annualFamilyIncome: number;
  studyLocation: 'Domestic' | 'Overseas';
  schemeId: string;
}

export interface EligibilityResult {
  status: 'potentially_eligible' | 'requires_scrutiny' | 'not_eligible';
  title: string;
  matchedConditionsCount: number;
  pendingConditionsCount: number;
  matchedConditions: string[];
  pendingConditions: string[];
  unmatchedConditions: string[];
  aiExplanation: string;
  disclaimer: string;
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

export interface ApplicationRecord {
  id: string; // e.g. ST26-10482
  schemeId: string;
  schemeName: string;
  applicantName: string;
  gender: 'Female' | 'Male' | 'Other';
  dob: string;
  mobile: string;
  email: string;
  stSubTribe: string;
  isPVTG: boolean; // Particularly Vulnerable Tribal Group
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
  pvtgWeightageBonus: number; // percentage or points
  femaleQuotaPercentage: number;
  ocrConfidenceCutoff: number; // percentage
  allowDigiLockerBypass: boolean;
  workflowStages: string[];
  selectionFormula: string;
  notificationTemplateSMS: string;
  notificationTemplateEmail: string;
  applicationOpenDate: string;
  applicationCloseDate: string;
}

export interface AuditLogEntry {
  id: string;
  timestamp: string;
  actor: string;
  actorRole: 'System AI Engine' | 'Scrutiny Officer' | 'Applicant' | 'Scheme Admin';
  action: string;
  target: string;
  details: string;
  hash: string;
}
