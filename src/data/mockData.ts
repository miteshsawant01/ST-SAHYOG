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
    targetAudience: ['ST Research Scholars', 'Ph.D Candidates', 'M.Phil Scholars'],
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
    targetAudience: ['Graduates & Post-Graduates pursuing studies abroad'],
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
    targetAudience: ['Undergraduate & Post-Graduate students in notified premier institutions'],
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
    targetAudience: ['Class 11, 12, Degree, Diploma and Technical Students'],
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
    targetAudience: ['ST Students studying in Classes IX and X'],
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

export const INITIAL_APPLICATION: ApplicationRecord = {
  id: 'ST26-10482',
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
  appliedDate: '02 Sep 2026',
  currentStage: 'DOCUMENT_VERIFICATION',
  completionPercentage: 78,
  overallStatus: 'Deficiency Raised',
  dbtAccountLinked: true,
  dbtBankName: 'State Bank of India (A/c ending in ...4902)',
  digiLockerVerified: true,
  officerDecision: 'Pending',
  officerNotes: 'Scrutiny Officer Ramesh Sharma noted unclear issue date on Income Certificate. Deficiency notification issued.',
  deficiencies: [
    {
      id: 'def-01',
      docId: 'doc-income',
      docTitle: 'Income Certificate',
      issue: 'The uploaded certificate could not be fully validated because the issue date is unclear.',
      confidence: 61,
      requiredAction: 'Upload a clearer certificate or competent authority reissue.',
      status: 'action_required',
      raisedAt: '14:34:12'
    }
  ],
  documents: [
    {
      id: 'doc-st',
      docType: 'st_certificate',
      title: 'ST Community Certificate',
      fileName: 'Rahul_ST_Caste_Certificate_SDM.pdf',
      fileSize: '1.4 MB',
      uploadedAt: '02 Sep 2026, 11:15 AM',
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
      title: 'Annual Income Certificate',
      fileName: 'Income_Certificate_2025_26_Scan.pdf',
      fileSize: '890 KB',
      uploadedAt: '02 Sep 2026, 11:22 AM',
      status: 'review_required',
      confidenceScore: 61,
      extractedFields: [
        { label: 'Name', value: 'Rahul Jadhav', confidence: 98, status: 'verified', bbox: { x: 40, y: 95, w: 190, h: 24 } },
        { label: 'Certificate Number', value: 'MHA/REV/2025/88921', confidence: 96, status: 'verified', bbox: { x: 40, y: 130, w: 210, h: 24 } },
        { label: 'Income Amount', value: '₹1,80,000 (One Lakh Eighty Thousand Only)', confidence: 95, status: 'verified', bbox: { x: 40, y: 165, w: 320, h: 24 } },
        { label: 'Issue Date', value: '12/??/2024 (Smudged / Low Contrast)', confidence: 61, status: 'warning', bbox: { x: 40, y: 200, w: 260, h: 24 } }
      ],
      aiIssue: 'Date confidence: 61%. Issuing authority circular seal partially obscured.',
      aiRecommendation: 'Manual review required. The certificate issue date is not clearly distinguishable.'
    },
    {
      id: 'doc-marksheet',
      docType: 'marksheet',
      title: 'Academic Marksheet (Master of Science)',
      fileName: 'MSc_Biotechnology_Consolidated_Marksheet.pdf',
      fileSize: '2.1 MB',
      uploadedAt: '02 Sep 2026, 11:30 AM',
      status: 'verified',
      confidenceScore: 98,
      extractedFields: [
        { label: 'Candidate Name', value: 'Rahul Jadhav', confidence: 100, status: 'verified', bbox: { x: 50, y: 90, w: 200, h: 22 } },
        { label: 'Roll Number', value: '23BT91R04', confidence: 99, status: 'verified', bbox: { x: 50, y: 120, w: 150, h: 22 } },
        { label: 'CGPA / Grade', value: '8.84 / 10.0 (First Class with Distinction)', confidence: 98, status: 'verified', bbox: { x: 50, y: 150, w: 290, h: 22 } },
        { label: 'Awarding Institute', value: 'Savitribai Phule Pune University', confidence: 97, status: 'verified', bbox: { x: 50, y: 180, w: 280, h: 22 } }
      ],
      aiRecommendation: 'Meets minimum requirement of 55% for ST candidates in NFST.'
    },
    {
      id: 'doc-admission',
      docType: 'admission_proof',
      title: 'Ph.D. Admission Bonafide Letter',
      fileName: 'IITKGP_PhD_Bonafide_Enrolment.pdf',
      fileSize: '1.2 MB',
      uploadedAt: '02 Sep 2026, 11:42 AM',
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

export const MOCK_APPLICATIONS_QUEUE: ApplicationRecord[] = [
  INITIAL_APPLICATION,
  {
    id: 'ST26-10483',
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
    deficiencies: [],
    documents: []
  },
  {
    id: 'ST26-10484',
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
    deficiencies: [],
    documents: []
  },
  {
    id: 'ST26-10485',
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
    deficiencies: [],
    documents: []
  },
  {
    id: 'ST26-10486',
    schemeId: 'nfst',
    schemeName: 'National Fellowship for ST Students (NFST)',
    applicantName: 'Laltanpuia Lushai',
    gender: 'Male',
    dob: '1998-03-25',
    mobile: '+91 97741 23098',
    email: 'laltanpuia@mzu.edu.in',
    stSubTribe: 'Mizo (Lushai)',
    isPVTG: false,
    state: 'Mizoram',
    district: 'Aizawl',
    institution: 'Mizoram University',
    course: 'Ph.D. in Forestry & Biodiversity Conservation',
    cgpaPercentage: '82.5% M.Sc Forestry',
    annualIncome: 240000,
    appliedDate: '10 Sep 2026',
    currentStage: 'DOCUMENT_VERIFICATION',
    completionPercentage: 70,
    overallStatus: 'In Review',
    dbtAccountLinked: true,
    dbtBankName: 'Canara Bank (...5567)',
    digiLockerVerified: true,
    officerDecision: 'Pending',
    deficiencies: [],
    documents: []
  }
];

export const INITIAL_SCHEME_CONFIG: SchemeRuleConfig = {
  version: 'v3.2',
  lastUpdated: '12 Aug 2026, 17:40 IST',
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
    'Submitted by Applicant',
    'AI Multi-modal OCR & Field Extraction',
    'Aadhaar / DigiLocker Cross-Consistency Check',
    'District / State Officer Scrutiny',
    'MoTA Expert Selection Committee',
    'PFMS / DBT Direct Bank Sanction'
  ],
  selectionFormula: 'CompositeScore = (PG_Marks * 0.50) + (NIRF_Rank_Weight * 0.20) + (Research_Proposal_Score * 0.20) + (PVTG_Bonus * 10)',
  notificationTemplateSMS: 'Dear [ApplicantName], your ST-SAHYOG Application [AppID] status updated to [Status]. Check https://sahyog.tribal.gov.in',
  notificationTemplateEmail: 'Government of India - Ministry of Tribal Affairs\nNotice for Application [AppID]: Please review your dashboard for scrutiny notes.',
  applicationOpenDate: '2026-07-01',
  applicationCloseDate: '2026-10-31'
};

export const SCHEME_CONFIG_HISTORY = [
  {
    version: 'v3.2',
    date: '12 Aug 2026',
    officer: 'Dr. Anita Meena (Joint Secy)',
    changes: 'Enhanced PVTG priority bonus to 10 points; reduced OCR date threshold for manual escalation to 75%; enabled DigiLocker instant auto-pass.'
  },
  {
    version: 'v3.1',
    date: '15 Mar 2026',
    officer: 'Shri R. K. Soren (Director Scholarship)',
    changes: 'Increased family annual income limit from ₹5,00,000 to ₹6,00,000; added 33% female candidate reservation policy.'
  },
  {
    version: 'v3.0',
    date: '01 Nov 2025',
    officer: 'MoTA Policy Cell',
    changes: 'Migration from legacy manual scrutiny to AI-supported Scrutiny Framework.'
  }
];

export const INITIAL_AUDIT_TRAIL: AuditLogEntry[] = [
  {
    id: 'log-001',
    timestamp: '14:32:08',
    actor: 'Ramesh Sharma (MoTA-SCR-04)',
    actorRole: 'Scrutiny Officer',
    action: 'Opened Application Dossier',
    target: 'ST26-10482 (Rahul Jadhav)',
    details: 'Initiated manual inspection on Income Certificate and ST Community Certificate.',
    hash: '8f4c2e...b19a'
  },
  {
    id: 'log-002',
    timestamp: '14:34:12',
    actor: 'AI Scrutiny Engine v2.4',
    actorRole: 'System AI Engine',
    action: 'Generated Deficiency Flag',
    target: 'Income Certificate (doc-income)',
    details: 'OCR Date Confidence 61% (below 75% cutoff). Tehsildar issue date seal blurred. Automated SMS alert dispatched.',
    hash: '3d91ae...77cc'
  },
  {
    id: 'log-003',
    timestamp: '14:38:54',
    actor: 'Rahul Jadhav',
    actorRole: 'Applicant',
    action: 'Uploaded Replacement Document',
    target: 'ST26-10482 / doc-income',
    details: 'Uploaded "Income_Certificate_CompetentAuthority_Reissued.pdf" via Deficiency Resolution Centre.',
    hash: '6a02df...44e1'
  },
  {
    id: 'log-004',
    timestamp: '14:41:03',
    actor: 'Ramesh Sharma (MoTA-SCR-04)',
    actorRole: 'Scrutiny Officer',
    action: 'Verified Replacement & Cleared Flag',
    target: 'ST26-10482 / doc-income',
    details: 'Examined high-contrast replacement. Reissue date 14/07/2025 verified. Application marked VERIFIED.',
    hash: '1b89ef...99d2'
  }
];
