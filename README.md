# ST-SAHYOG

**AI-Powered Unified Scholarship & Fellowship Management System**  
*Ministry of Tribal Affairs, Government of India*

---

## 🏛️ Project Overview

**ST-SAHYOG** is a modern government-grade web application engineered for Scheduled Tribe (ST) students and verification officers under the Ministry of Tribal Affairs (MoTA). The platform simplifies scholarship discovery, eligibility determination, document scrutiny, and deficiency resolution while upholding an institutional, trustworthy Indian digital-service aesthetic.

---

## 🏗️ Architecture & Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | React.js + TypeScript + Tailwind CSS |
| **Mobile App** | React Native |
| **Backend** | Node.js + Express.js |
| **Database** | PostgreSQL |
| **Authentication** | JWT + OTP / Aadhaar e-KYC |
| **Document Storage** | Cloudinary / Supabase Storage |
| **OCR** | Google Cloud Vision API / Tesseract OCR |
| **AI/ML** | Python + FastAPI + Gemini API |
| **Eligibility Engine** | Python rule-based policy engine |
| **Notifications** | Firebase Cloud Messaging + Email/SMS |
| **Admin Dashboard** | React.js + Recharts + Lucide Icons |
| **Maps/Location** | Google Maps API |
| **Deployment** | Vercel (Frontend) + Render/Railway (Backend) + Supabase (DB) |
| **Version Control** | Git + GitHub |

---

## ✨ Key Capabilities & Dual-Role Flows

### 👨‍🎓 1. Applicant Journey
- **Landing & Discovery**: Clean Indian government portal layout with quick action cards, featured central sector schemes (NFST, NOS, Top Class Education, Post-Matric, Pre-Matric), guidelines, and contact support.
- **Explainable Eligibility Pre-Checker**: 7-factor evaluation with *"Potentially Eligible"* determination, 5 matched conditions, 1 document verification flag, and detailed rule breakdown.
- **Application Dashboard**: Dossier tracking for `#ST26-10482`, current stage `DOCUMENT VERIFICATION`, 78% completion progress bar, and 6-stage lifecycle stepper.
- **Document Centre**: Digital repository displaying ST Certificate, Income Certificate, Academic Marksheets, and Bonafide Admission Letter with verified/review required status.
- **Deficiency Resolution Centre (Flagship Feature)**:
  - Instant notification for `Income Certificate` date ambiguity (61% confidence).
  - One-click replacement upload simulation with live OCR scanning and real-time status update.
- **Multi-Step Application Wizard**: 6-step form with Aadhaar APBS/DBT seeding validation.

### 🏛️ 2. MoTA Officer / Administrator Workstation
- **Command Dashboard**: National KPIs (48,290 Total, 1,842 Pending Scrutiny, 324 AI Flagged, 415 Deficient, 890 Verification Pending, 2,150 Selection Ready, ₹42.8 Cr Disbursed). State-wise tribal distribution across 75 notified PVTG pockets.
- **Application Scrutiny Queue**: Searchable, filterable table with multi-factor tags.
- **3-Pane AI Document Workstation**:
  - **Left**: Comprehensive applicant dossier and DBT bank status.
  - **Center**: Zoomable, rotatable document preview canvas with highlighted bounding boxes.
  - **Right**: AI Scrutiny Assistant with field extraction confidence, seal detection, and officer action buttons (`[Accept & Verify]`, `[Request Correction]`, `[Escalate]`, `[Reject]`).
- **⭐ Version-Controlled Scheme Engine (v3.2)**:
  - Configure Scheme Name, Eligibility Rules, Required Documents, Validation Cutoffs (75%), Workflow Stages, Selection Formula, and Application Periods.
  - Interactive **Version Diff Viewer** (v3.1 vs v3.2) and **Save as Version 3.3**.
- **⭐ Tamper-Evident Audit Trail**:
  - Live, immutable event log with timestamps, actor IDs, actions, and cryptographic hashes (`14:32:08`, `14:34:12`, `14:38:54`, `14:41:03`).
  - Export to CSV for CAG / RTI governance compliance.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/miteshsawant01/ST-SAHYOG.git
cd ST-SAHYOG

# Install dependencies
npm install

# Run local development server
npm run dev
```

### Production Build
```bash
npm run build
```

---

## 🌐 Deployment

The frontend is optimized for **Vercel** deployment with single-page app rewrites configured in `vercel.json`.

```bash
# Deploy with Vercel CLI
npx vercel --prod
```

Or connect the repository `miteshsawant01/ST-SAHYOG` on [vercel.com](https://vercel.com) for automated CI/CD deployments.
