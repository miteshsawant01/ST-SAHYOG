import { Scheme, ApplicationRecord, SchemeRuleConfig, AuditLogEntry } from '../types';

export const MOCK_SCHEMES: Scheme[] = [
  {
    id: 'nfst',
    code: 'MoTA/NFST/2026',
    name: 'National Fellowship for ST Students (NFST)',
    ministry: 'Ministry of Tribal Affairs',
    shortDesc: 'Financial support for pursuing regular and full-time M.Phil. and Ph.D. degrees in premier universities and research institutes.',
    longDesc: 'The National Fellowship scheme enables meritorious Scheduled Tribe students to pursue higher studies leading to M.Phil and Ph.D. degrees in Sciences, Humanities, Social Sciences and Engineering & Technology across UGC/AICTE recognized institutions.',
    category: 'Higher Education',
    academicLevel: 'Research / Ph.D',
    targetAudience: ['ST Scholars', 'Ph.D Candidates', 'M.Phil Scholars'],
    maxBenefit: '₹31,000 - ₹35,000/mo + ₹25,000 annual contingency',
    annualIncomeLimit: 600000,
    currentVersion: 'v3.2',
    deadline: '31 Oct 2026',
    totalSlots: 750,
    coveredExpenses: ['Monthly JRF/SRF Stipend', 'Annual Contingency Allowance', 'Departmental Assistance', 'Escort Allowance for PwD'],
    eligibilityConditions: [
      'Belong to Scheduled Tribe community with valid certificate',
      'Completed Post-Graduation with minimum 55% aggregate marks',
      'Secured regular admission in Ph.D / M.Phil program in recognized institution',
      'Annual family gross income from all sources not exceeding ₹6,00,000',
      'Candidate must not be in receipt of any other central/state research fellowship'
    ],
    requiredDocs: [
      'ST Caste Certificate issued by competent SDM/Collector',
      'Income Certificate issued by Tehsildar / Revenue Authority',
      'Master Degree Marksheet & Convocation Degree',
      'Bonafide Research Scholar Admission Letter & Guide Undertaking',
      'Aadhaar Linked Bank Account Passbook (PFMS Verified)'
    ]
  },
  {
    id: 'nos',
    code: 'MoTA/NOS/2026',
    name: 'National Overseas Scholarship for ST Students (NOS)',
    ministry: 'Ministry of Tribal Affairs',
    shortDesc: 'Fully funded overseas education for ST candidates to pursue Master’s and Ph.D. in top QS World Ranked foreign universities.',
    longDesc: 'Under this scheme, 100 meritorious Scheduled Tribe students are sponsored annually to pursue Master’s degree and Ph.D. abroad in prestigious international universities ranked in the top 500 QS World University Rankings.',
    category: 'Overseas',
    academicLevel: 'Masters / Overseas',
    targetAudience: ['ST Students', 'Graduates pursuing studies abroad'],
    maxBenefit: '100% Tuition Fees + USD 15,400 / GBP 9,900 annual maintenance + Airfare',
    annualIncomeLimit: 800000,
    currentVersion: 'v2.8',
    deadline: '15 Nov 2026',
    totalSlots: 100,
    coveredExpenses: ['Full University Tuition Fees', 'Annual Maintenance Allowance', 'Return Economy Airfare', 'Contingency & Equipment Allowance'],
    eligibilityConditions: [
      'ST community belonging with permanent resident certificate',
      'Unconditional admission offer from Top 500 QS World Ranked University',
      'Minimum 60% marks or equivalent in qualifying Bachelor/Master degree',
      'Family income ceiling of ₹8,00,000 per annum',
      'Age below 35 years as on 1st of July of academic year'
    ],
    requiredDocs: [
      'Valid Indian Passport copy',
      'Unconditional Admission Letter from Foreign University',
      'ST Certificate with English translation if applicable',
      'Income Certificate / ITR Acknowledgement of parents',
      'GRE / GMAT / IELTS / TOEFL scorecard'
    ]
  },
  {
    id: 'top-class',
    code: 'MoTA/TCES/2026',
    name: 'Top Class Education Scheme for ST Students',
    ministry: 'Ministry of Tribal Affairs',
    shortDesc: 'Full financial support for ST students admitted to 260+ premier institutions including IITs, IIMs, NITs, AIIMS, and National Law Universities.',
    longDesc: 'Encourages tribal youth to gain admission into notified institutions of excellence across the country, covering full tuition, hostel boarding, computer allowance, and book grants.',
    category: 'Excellence',
    academicLevel: 'UG / Professional',
    targetAudience: ['ST Students', 'UG/PG students in premier institutions'],
    maxBenefit: 'Full Tuition Fee + ₹3,000/mo boarding + ₹45,000 laptop grant',
    annualIncomeLimit: 600000,
    currentVersion: 'v3.1',
    deadline: '30 Nov 2026',
    totalSlots: 1000,
    coveredExpenses: ['Full Non-Refundable Tuition Fee', 'Monthly Living Expenses', 'One-time IT Allowance for Laptop', 'Annual Book Grant'],
    eligibilityConditions: [
      'Scheduled Tribe student with valid caste certificate',
      'Secured admission in notified premier institution (e.g. IIT, IIM, NIT, AIIMS, NLU)',
      'Total annual family income from all sources not exceeding ₹6.00 Lakh',
      'Admitted through national entrance examinations (JEE Advanced, CAT, NEET, CLAT)'
    ],
    requiredDocs: [
      'Institutional Allotment Letter & Institute ID Card',
      'ST Community Certificate',
      'Income Certificate / Income Affidavit',
      'Fee Structure receipt certified by Registrar/Finance Officer',
      'Class 12th & Entrance Rank Card'
    ]
  },
  {
    id: 'post-matric',
    code: 'MoTA/PMS/2026',
    name: 'Post-Matric Scholarship for ST Students (PMS-ST)',
    ministry: 'Ministry of Tribal Affairs',
    shortDesc: 'Centrally sponsored flagship scholarship for ST students studying at post-matriculation or post-secondary stages.',
    longDesc: 'Provides direct financial assistance to ST students in higher secondary schools, undergraduate colleges, professional degree colleges, and polytechnics to overcome economic constraints.',
    category: 'Post-Matric',
    academicLevel: 'UG / Professional',
    targetAudience: ['ST Students', 'Class 11, 12, Degree, Diploma Scholars'],
    maxBenefit: 'Complete Course Tuition + ₹4,000 to ₹13,500 annual maintenance',
    annualIncomeLimit: 250000,
    currentVersion: 'v4.0',
    deadline: '15 Dec 2026',
    totalSlots: 3200000,
    coveredExpenses: ['Compulsory Course Tuition Fees', 'Monthly Maintenance Allowance', 'Study Tour Charges', 'Thesis Typing/Printing Allowance'],
    eligibilityConditions: [
      'ST student with valid caste certificate of relevant state',
      'Enrolled in post-matric recognized government or recognized private institute',
      'Family income limit ₹2,50,000 per annum',
      'Student should not be employed or drawing other regular stipend'
    ],
    requiredDocs: [
      'ST Certificate with Barcode / Digital Sign',
      'Competent Authority Income Certificate',
      'Previous Examination Passing Marksheet',
      'Institution Bonafide & Fee Receipt',
      'Aadhaar-seeded Bank Account passbook'
    ]
  },
  {
    id: 'pre-matric',
    code: 'MoTA/PRE/2026',
    name: 'Pre-Matric Scholarship for ST Students (Class IX & X)',
    ministry: 'Ministry of Tribal Affairs',
    shortDesc: 'Scholarship to support ST students in secondary education, curbing dropouts in Class 9 and 10.',
    longDesc: 'Aimed at encouraging tribal families to retain their children in schools during transition to secondary education, providing stipend for day scholars and hostellers.',
    category: 'Pre-Matric',
    academicLevel: 'Class 9-10',
    targetAudience: ['ST Students', 'Secondary School Students'],
    maxBenefit: '₹3,500 (Day Scholar) to ₹7,000 (Hosteller) per annum + ₹1,000 book grant',
    annualIncomeLimit: 250000,
    currentVersion: 'v2.4',
    deadline: '30 Dec 2026',
    totalSlots: 1500000,
    coveredExpenses: ['Monthly Maintenance Stipend for 10 months', 'Annual Ad-hoc Book and Stationery Grant'],
    eligibilityConditions: [
      'ST community student studying in recognized Class IX or X',
      'Annual parental income does not exceed ₹2,50,000',
      'Regular attendance in recognized school'
    ],
    requiredDocs: [
      'ST Certificate of student or parent',
      'Income Declaration certified by Revenue Officer',
      'School Headmaster Bonafide Certificate',
      'Bank passbook details'
    ]
  }
];

export const PRIMARY_APPLICATION: ApplicationRecord = {
  id: 'ST26-DEMO001',
  schemeId: 'nfst',
  schemeName: 'National Fellowship for ST Students (NFST)',
  applicantName: 'Rahul Jadhav',
  gender: 'Male',
  dob: '2001-04-18',
  mobile: '+91 98765 43210',
  email: 'rahul.jadhav.st@iitkgp.ac.in',
  stSubTribe: 'Gond (Scheduled Tribe of Maharashtra)',
  isPVTG: false,
  state: 'Maharashtra',
  district: 'Gadchiroli',
  institution: 'Indian Institute of Technology (IIT) Kharagpur',
  course: 'Ph.D. in Environmental Biotechnology',
  cgpaPercentage: '8.84 CGPA (88.4%)',
  annualIncome: 180000,
  appliedDate: '17 Sep 2026',
  currentStage: 'INITIAL_CHECK',
  completionPercentage: 50,
  overallStatus: 'Deficiency Raised',
  dbtAccountLinked: true,
  dbtBankName: 'State Bank of India (A/c ending in ...4902)',
  digiLockerVerified: true,
  officerDecision: 'Pending',
  officerNotes: 'Scrutiny Officer noted date discrepancy during OCR check. Deficiency notice generated.',
  timeline: [
    { date: '17 Sep', title: 'Application submitted', status: 'completed', description: 'Application received and registered on ST-Sahyog central gateway.' },
    { date: '17 Sep', title: 'Documents AI-reviewed', status: 'completed', description: 'AI OCR extracted candidate credentials with digital seal analysis.' },
    { date: '18 Sep', title: 'Deficiency detected', status: 'warning', description: 'Income certificate issue date requires reverification (Confidence: 61%).' },
    { date: '18 Sep', title: 'Applicant notified', status: 'completed', description: 'Deficiency SMS alert and portal notice dispatched to Rahul Jadhav.' },
    { date: '19 Sep', title: 'Corrected document submitted', status: 'completed', description: 'Applicant uploaded replacement certificate issued by Tehsildar.' },
    { date: '19 Sep', title: 'AI recheck completed', status: 'completed', description: 'AI revalidation complete (98% confidence). QR seal verified.' },
    { date: 'Pending', title: 'Officer verification', status: 'in_progress', description: 'Dossier placed in MoTA Desk 04 officer queue for institutional sign-off.' }
  ],
  deficiencies: [
    {
      id: 'def-01',
      docId: 'doc-income',
      docTitle: 'Income Certificate',
      issue: 'Certificate information requires correction/reverification. The issue date is unclear.',
      confidence: 61,
      requiredAction: 'Upload a clearer certificate or competent authority reissue.',
      status: 'action_required',
      raisedAt: '18 Sep 2026, 14:34 IST'
    }
  ],
  documents: [
    {
      id: 'doc-st',
      docType: 'st_certificate',
      title: 'ST Caste Certificate',
      fileName: 'Rahul_ST_Caste_Certificate_SDM.pdf',
      fileSize: '1.4 MB',
      uploadedAt: '17 Sep 2026, 11:15 AM',
      status: 'verified',
      confidenceScore: 99,
      extractedFields: [
        { label: 'Applicant Name', value: 'Rahul Jadhav', confidence: 100, status: 'verified', bbox: { x: 30, y: 110, w: 220, h: 26 } },
        { label: 'Father Name', value: 'Suresh Jadhav Gond', confidence: 99, status: 'verified', bbox: { x: 30, y: 145, w: 240, h: 26 } },
        { label: 'Tribe Name', value: 'Gond (ST Entry #18)', confidence: 98, status: 'verified', bbox: { x: 30, y: 180, w: 210, h: 26 } },
        { label: 'Issuing Officer', value: 'Sub-Divisional Magistrate, Gadchiroli', confidence: 97, status: 'verified', bbox: { x: 30, y: 220, w: 310, h: 26 } },
        { label: 'Digital Sign / Barcode', value: 'Valid NIC-Gov e-Pramaan Token', confidence: 100, status: 'verified', bbox: { x: 280, y: 350, w: 140, h: 60 } }
      ],
      aiRecommendation: 'Valid digital certificate matching central ST Gazette list.'
    },
    {
      id: 'doc-income',
      docType: 'income_certificate',
      title: 'Income Certificate',
      fileName: 'Income_Certificate_2025_26_Scan.pdf',
      fileSize: '890 KB',
      uploadedAt: '17 Sep 2026, 11:22 AM',
      status: 'review_required',
      confidenceScore: 61,
      extractedFields: [
        { label: 'Applicant Name', value: 'Rahul Jadhav', confidence: 98, status: 'verified', bbox: { x: 40, y: 95, w: 190, h: 24 } },
        { label: 'Certificate No.', value: 'MHA/REV/2025/88921', confidence: 96, status: 'verified', bbox: { x: 40, y: 130, w: 210, h: 24 } },
        { label: 'Income', value: '₹1,80,000', confidence: 95, status: 'verified', bbox: { x: 40, y: 165, w: 320, h: 24 } },
        { label: 'Issue Date', value: '12/??/2024', confidence: 61, status: 'warning', bbox: { x: 40, y: 200, w: 260, h: 24 } }
      ],
      aiIssue: 'Potential discrepancy detected. Income certificate date differs from configured validity requirement.',
      aiRecommendation: 'Manual review required. Request officer verification.'
    },
    {
      id: 'doc-marksheet',
      docType: 'marksheet',
      title: 'Academic Certificate / Marksheet',
      fileName: 'MSc_Biotechnology_Consolidated_Marksheet.pdf',
      fileSize: '2.1 MB',
      uploadedAt: '17 Sep 2026, 11:30 AM',
      status: 'verified',
      confidenceScore: 98,
      extractedFields: [
        { label: 'Candidate Name', value: 'Rahul Jadhav', confidence: 100, status: 'verified', bbox: { x: 50, y: 90, w: 200, h: 22 } },
        { label: 'Roll Number', value: '23BT91R04', confidence: 99, status: 'verified', bbox: { x: 50, y: 120, w: 150, h: 22 } },
        { label: 'CGPA / Grade', value: '8.84 / 10.0 (First Class)', confidence: 98, status: 'verified', bbox: { x: 50, y: 150, w: 290, h: 22 } },
        { label: 'Awarding Institute', value: 'Savitribai Phule Pune University', confidence: 97, status: 'verified', bbox: { x: 50, y: 180, w: 280, h: 22 } }
      ],
      aiRecommendation: 'Meets minimum requirement of 55% for ST candidates in NFST.'
    },
    {
      id: 'doc-admission',
      docType: 'admission_proof',
      title: 'Scheme-Specific Admission Bonafide',
      fileName: 'IITKGP_PhD_Bonafide_Enrolment.pdf',
      fileSize: '1.2 MB',
      uploadedAt: '17 Sep 2026, 11:42 AM',
      status: 'verified',
      confidenceScore: 97,
      extractedFields: [
        { label: 'Institution', value: 'Indian Institute of Technology Kharagpur', confidence: 100, status: 'verified', bbox: { x: 40, y: 80, w: 320, h: 24 } },
        { label: 'Admission Category', value: 'Regular Full-Time Ph.D Scholar', confidence: 97, status: 'verified', bbox: { x: 40, y: 115, w: 260, h: 24 } },
        { label: 'Date of Joining', value: '24 July 2026', confidence: 96, status: 'verified', bbox: { x: 40, y: 150, w: 180, h: 24 } },
        { label: 'Registrar Seal', value: 'Official IIT KGP Academic Section Seal', confidence: 98, status: 'verified', bbox: { x: 260, y: 310, w: 110, h: 50 } }
      ],
      aiRecommendation: 'Enrolment verified with institute academic portal database.'
    }
  ]
};

// Student's multiple applications (Item 8 requirement)
export const STUDENT_APPLICATIONS_LIST = [
  {
    id: 'ST26-DEMO001',
    schemeName: 'National Fellowship for ST Students (NFST)',
    cycle: '2026',
    status: 'Under Officer Verification',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
    progress: 50,
    action: 'Track Application'
  },
  {
    id: 'ST26-PMS-4491',
    schemeName: 'Post-Matric Scholarship for ST Students',
    cycle: '2026',
    status: 'Document Correction Required',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
    progress: 35,
    action: 'Resolve Deficiency'
  },
  {
    id: 'ST26-NOS-0192',
    schemeName: 'National Overseas Scholarship (NOS)',
    cycle: '2026',
    status: 'Draft',
    badgeColor: 'bg-slate-100 text-slate-700 border-slate-200',
    progress: 15,
    action: 'Complete Application'
  }
];

export const MOCK_APPLICATIONS_QUEUE: ApplicationRecord[] = [
  PRIMARY_APPLICATION,
  {
    id: 'ST26-DEMO002',
    schemeId: 'top-class',
    schemeName: 'Top Class Education Scheme for ST Students',
    applicantName: 'Birsa Soren',
    gender: 'Male',
    dob: '2004-09-12',
    mobile: '+91 94312 87654',
    email: 'birsa.soren@iitb.ac.in',
    stSubTribe: 'Santhal (Jharkhand)',
    isPVTG: false,
    state: 'Jharkhand',
    district: 'Ranchi',
    institution: 'Indian Institute of Technology (IIT) Bombay',
    course: 'B.Tech in Computer Science & Engineering',
    cgpaPercentage: 'JEE Adv Rank: 842 (ST)',
    annualIncome: 140000,
    appliedDate: '04 Sep 2026',
    currentStage: 'SELECTION',
    completionPercentage: 88,
    overallStatus: 'Selection Ready',
    dbtAccountLinked: true,
    dbtBankName: 'Punjab National Bank (...7109)',
    digiLockerVerified: true,
    officerDecision: 'Accepted',
    officerNotes: 'All documents verified via DigiLocker and IIT Bombay registrar.',
    timeline: [],
    deficiencies: [],
    documents: []
  },
  {
    id: 'ST26-DEMO003',
    schemeId: 'nos',
    schemeName: 'National Overseas Scholarship for ST Students (NOS)',
    applicantName: 'Sunita Oraon',
    gender: 'Female',
    dob: '1999-11-20',
    mobile: '+91 91234 56789',
    email: 'sunita.oraon@oxford.alumni.org',
    stSubTribe: 'Oraon (Chhattisgarh)',
    isPVTG: false,
    state: 'Chhattisgarh',
    district: 'Jashpur',
    institution: 'University of Oxford, United Kingdom',
    course: 'M.Sc in Biodiversity, Conservation and Management',
    cgpaPercentage: '89.2% (Gold Medalist, DU)',
    annualIncome: 320000,
    appliedDate: '01 Sep 2026',
    currentStage: 'SELECTION',
    completionPercentage: 92,
    overallStatus: 'Selection Ready',
    dbtAccountLinked: true,
    dbtBankName: 'Union Bank of India (...3312)',
    digiLockerVerified: true,
    officerDecision: 'Accepted',
    officerNotes: 'QS Rank 3 university unconditional offer verified.',
    timeline: [],
    deficiencies: [],
    documents: []
  },
  {
    id: 'ST26-DEMO004',
    schemeId: 'post-matric',
    schemeName: 'Post-Matric Scholarship for ST Students (PMS-ST)',
    applicantName: 'Rameshwar Koya',
    gender: 'Male',
    dob: '2005-06-14',
    mobile: '+91 89123 44321',
    email: 'rameshwar.koya@nitrkl.ac.in',
    stSubTribe: 'Koya (Particularly Vulnerable Tribal Group - PVTG)',
    isPVTG: true,
    state: 'Odisha',
    district: 'Malkangiri',
    institution: 'National Institute of Technology (NIT) Rourkela',
    course: 'B.Tech in Metallurgy & Materials',
    cgpaPercentage: '8.40 CGPA',
    annualIncome: 90000,
    appliedDate: '08 Sep 2026',
    currentStage: 'INITIAL_CHECK',
    completionPercentage: 45,
    overallStatus: 'In Review',
    dbtAccountLinked: true,
    dbtBankName: 'State Bank of India (...1104)',
    digiLockerVerified: false,
    officerDecision: 'Pending',
    officerNotes: 'PVTG candidate - high priority scrutiny flagged.',
    timeline: [],
    deficiencies: [],
    documents: []
  }
];

export const INITIAL_SCHEME_CONFIG: SchemeRuleConfig = {
  version: 'v3.2',
  lastUpdated: '17 Sep 2026, 17:40 IST',
  updatedBy: 'Dr. Anita Meena, Joint Secretary (Education), MoTA',
  schemeId: 'nfst',
  schemeName: 'National Fellowship for ST Students (NFST)',
  annualIncomeCeiling: 600000,
  minGraduationMarks: 55,
  pvtgWeightageBonus: 10,
  femaleQuotaPercentage: 33,
  ocrConfidenceCutoff: 75,
  allowDigiLockerBypass: true,
  workflowStages: [
    'Application Submission',
    'Document Review (OCR)',
    'Eligibility Verification',
    'Scrutiny Officer Sign-off',
    'Committee Selection'
  ],
  selectionFormula: 'CompositeScore = (PG_Marks * 0.50) + (NIRF_Rank_Weight * 0.20) + (Research_Proposal_Score * 0.20) + (PVTG_Bonus * 10)',
  notificationTemplateSMS: 'Dear [ApplicantName], your ST-SAHYOG Application [AppID] status updated to [Status]. Check https://sahyog.tribal.gov.in',
  notificationTemplateEmail: 'Government of India - Ministry of Tribal Affairs\nNotice for Application [AppID]: Please review your dashboard for scrutiny notes.',
  applicationOpenDate: '2026-07-01',
  applicationCloseDate: '2026-10-31',
  rulesChecked: {
    academic: true,
    stEligibility: true,
    incomeCriteria: true,
    schemeSpecific: true
  },
  requiredDocsChecked: {
    caste: true,
    academic: true,
    income: true,
    schemeSpecific: true
  }
};

export const INITIAL_AUDIT_TRAIL: AuditLogEntry[] = [
  {
    id: 'log-001',
    date: '17 Sep',
    timestamp: '11:20:04',
    actor: 'Student',
    actorRole: 'Student',
    action: 'Application submitted',
    target: 'ST26-DEMO001 (Rahul Jadhav)',
    details: 'Initial application submitted for National Fellowship for ST Students.',
    hash: '8f4c2e...b19a'
  },
  {
    id: 'log-002',
    date: '17 Sep',
    timestamp: '11:25:12',
    actor: 'System',
    actorRole: 'System',
    action: 'OCR completed',
    target: 'Income Certificate (doc-income)',
    details: 'Multi-modal OCR processed extracted fields with digital seal check.',
    hash: '3d91ae...77cc'
  },
  {
    id: 'log-003',
    date: '17 Sep',
    timestamp: '11:28:45',
    actor: 'AI',
    actorRole: 'AI',
    action: 'Discrepancy flagged',
    target: 'Income Certificate (doc-income)',
    details: 'Income certificate date differs from configured validity requirement (Confidence: 61%).',
    hash: '6a02df...44e1'
  },
  {
    id: 'log-004',
    date: '18 Sep',
    timestamp: '14:38:54',
    actor: 'Student',
    actorRole: 'Student',
    action: 'Document resubmitted',
    target: 'ST26-DEMO001 / doc-income',
    details: 'Candidate uploaded reissued Tehsildar certificate with clear date stamp.',
    hash: '9c44ea...88f1'
  },
  {
    id: 'log-005',
    date: '18 Sep',
    timestamp: '14:39:20',
    actor: 'System',
    actorRole: 'System',
    action: 'Recheck completed',
    target: 'ST26-DEMO001 / doc-income',
    details: 'AI Recheck completed. Revalidation complete (98% confidence).',
    hash: '4d11bb...55a2'
  },
  {
    id: 'log-006',
    date: '19 Sep',
    timestamp: '10:15:30',
    actor: 'Officer',
    actorRole: 'Officer',
    action: 'Verification completed',
    target: 'ST26-DEMO001 (Rahul Jadhav)',
    details: 'Officer Ramesh Sharma confirmed physical seal and approved for selection stage.',
    hash: '1b89ef...99d2'
  }
];

export const SCHEME_CONFIG_HISTORY = [
  {
    version: 'v3.2',
    date: '17 Sep 2026',
    author: 'Dr. Anita Meena, Joint Secretary (Education)',
    changes: 'Updated OCR cutoff to 75% and female quota to 33%'
  },
  {
    version: 'v3.1',
    date: '10 Aug 2026',
    author: 'Ramesh Sharma, Scrutiny Desk 04',
    changes: 'Adjusted annual income ceiling to 6,00,000'
  },
  {
    version: 'v3.0',
    date: '01 Jul 2026',
    author: 'MoTA Policy Cell',
    changes: 'Initial FY 2026-27 policy rollout'
  }
];

