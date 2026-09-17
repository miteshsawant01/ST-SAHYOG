import React, { useState } from 'react';
import { 
  CheckCircle2, 
  AlertTriangle, 
  FileText, 
  ZoomIn, 
  ZoomOut, 
  RotateCw, 
  Check, 
  X, 
  Send, 
  ShieldAlert, 
  ShieldCheck, 
  ArrowLeft, 
  ExternalLink,
  ChevronRight,
  Info,
  Building,
  User,
  CreditCard
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ApplicationDocument } from '../../types';

export const ScrutinyWorkstation: React.FC = () => {
  const { 
    application, 
    activeReviewAppId, 
    setOfficerTab, 
    officerVerifyDocument, 
    officerRaiseDeficiency,
    officerSubmitDecision 
  } = useApp();

  const [activeDocId, setActiveDocId] = useState<string>('doc-income');
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [rotation, setRotation] = useState<number>(0);
  const [showCorrectionModal, setShowCorrectionModal] = useState<boolean>(false);
  const [correctionReason, setCorrectionReason] = useState<string>(
    'The uploaded certificate could not be fully validated because the issue date is unclear. Please upload a clearer copy reissued by the competent Tehsildar.'
  );
  const [decisionSuccessNotice, setDecisionSuccessNotice] = useState<string | null>(null);

  const currentDoc = application.documents.find(d => d.id === activeDocId) || application.documents[1];

  const handleAccept = () => {
    officerVerifyDocument(application.id, currentDoc.id, 99);
    officerSubmitDecision(application.id, 'Accepted', 'Officer verified high-contrast replacement. All fields authentic.');
    setDecisionSuccessNotice('Document verified and accepted. Application moved to Selection-Ready stage.');
    setTimeout(() => setDecisionSuccessNotice(null), 5000);
  };

  const handleRaiseCorrection = () => {
    officerRaiseDeficiency(application.id, currentDoc.id, correctionReason);
    officerSubmitDecision(application.id, 'Correction Requested', correctionReason);
    setShowCorrectionModal(false);
    setDecisionSuccessNotice('Formal Deficiency Notice dispatched to Applicant via SMS and Portal Inbox.');
    setTimeout(() => setDecisionSuccessNotice(null), 5000);
  };

  const handleEscalate = () => {
    officerSubmitDecision(application.id, 'Escalated', 'Referred to State Level Tribal Scrutiny Committee for sub-caste validity cross-verification.');
    setDecisionSuccessNotice('Application escalated to State Scrutiny Committee.');
    setTimeout(() => setDecisionSuccessNotice(null), 5000);
  };

  return (
    <div className="p-3 sm:p-5 max-w-[1500px] mx-auto space-y-4">
      {/* Top Header Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setOfficerTab('applications')}
            className="p-2 rounded-xl hover:bg-slate-100 text-slate-600 transition"
            title="Back to Queue"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-bold bg-gov-navy text-white px-2 py-0.5 rounded">
                Dossier #{application.id}
              </span>
              <span className="text-xs font-bold text-slate-800">
                {application.applicantName}
              </span>
              <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-semibold">
                {application.schemeName}
              </span>
            </div>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Assigned Scrutiny Officer: Shri Ramesh Sharma • MoTA Scrutiny Desk 04
            </p>
          </div>
        </div>

        {/* Quick Document Selector */}
        <div className="flex items-center gap-1.5 overflow-x-auto">
          {application.documents.map((doc) => (
            <button
              key={doc.id}
              onClick={() => setActiveDocId(doc.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap ${
                activeDocId === doc.id
                  ? 'bg-gov-navy text-white shadow-2xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <span>{doc.title}</span>
              {doc.status === 'verified' ? (
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              ) : (
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Decision Success Banner */}
      {decisionSuccessNotice && (
        <div className="bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-4 text-xs font-bold text-emerald-900 flex items-center justify-between animate-in fade-in">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-700" />
            <span>{decisionSuccessNotice}</span>
          </div>
          <button onClick={() => setDecisionSuccessNotice(null)} className="text-emerald-700 hover:text-emerald-950">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* 3-PANE WORKSTATION CONTAINER */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 min-h-[640px]">
        {/* PANE 1: LEFT - APPLICANT INFORMATION (3 Cols) */}
        <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <div className="border-b border-slate-100 pb-3">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Applicant Information
              </span>
              <div className="flex items-center gap-3 mt-2">
                <div className="w-12 h-12 rounded-full bg-slate-100 text-gov-navy flex items-center justify-center font-bold text-sm border border-slate-200">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-sm">{application.applicantName}</h3>
                  <p className="text-[11px] text-slate-500 font-mono">DOB: {application.dob}</p>
                </div>
              </div>
            </div>

            {/* Tribal & Community Details */}
            <div className="space-y-2 text-xs">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Tribal & Domicile Record
              </span>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-500">Sub-Tribe:</span>
                  <span className="font-bold text-slate-800">{application.stSubTribe}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">District / State:</span>
                  <span className="font-semibold text-slate-800">{application.district}, {application.state}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">PVTG Priority:</span>
                  <span className="font-bold text-slate-700">No (Standard ST)</span>
                </div>
              </div>
            </div>

            {/* Academic Record */}
            <div className="space-y-2 text-xs">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Academic & Enrolment
              </span>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1.5">
                <p className="font-bold text-slate-900 leading-snug">{application.institution}</p>
                <p className="text-slate-600 text-[11px]">{application.course}</p>
                <div className="flex justify-between pt-1 border-t border-slate-200 text-[11px]">
                  <span className="text-slate-500">Qualifying Score:</span>
                  <span className="font-mono font-bold text-gov-navy">{application.cgpaPercentage}</span>
                </div>
              </div>
            </div>

            {/* Income & DBT Status */}
            <div className="space-y-2 text-xs">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Financial & DBT Seeding
              </span>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-500">Declared Income:</span>
                  <span className="font-mono font-bold text-slate-900">
                    ₹{application.annualIncome.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex justify-between items-center text-[11px]">
                  <span className="text-slate-500">DBT Bank:</span>
                  <span className="font-semibold text-emerald-800 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    NPCI Active
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 truncate">{application.dbtBankName}</p>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 text-[10px] text-slate-400">
            Aadhaar Vault e-KYC: <strong>Verified</strong>
          </div>
        </div>

        {/* PANE 2: CENTRE - DOCUMENT PREVIEW (6 Cols) */}
        <div className="lg:col-span-6 bg-slate-900 rounded-2xl border border-slate-800 p-4 shadow-gov flex flex-col justify-between overflow-hidden">
          {/* Canvas Toolbar */}
          <div className="flex items-center justify-between bg-slate-800/90 backdrop-blur-xs px-4 py-2 rounded-xl text-white text-xs border border-slate-700/50 mb-3">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-amber-400" />
              <span className="font-mono font-bold text-[11px] truncate max-w-[220px]">
                {currentDoc.fileName}
              </span>
              {currentDoc.isReplaced && (
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[9px] px-1.5 py-0.2 rounded font-bold">
                  REPLACED FILE
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button 
                onClick={() => setZoomLevel(prev => Math.max(70, prev - 15))}
                className="p-1.5 hover:bg-slate-700 rounded transition" 
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="font-mono text-[11px] px-1">{zoomLevel}%</span>
              <button 
                onClick={() => setZoomLevel(prev => Math.min(150, prev + 15))}
                className="p-1.5 hover:bg-slate-700 rounded transition" 
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setRotation(prev => (prev + 90) % 360)}
                className="p-1.5 hover:bg-slate-700 rounded transition" 
                title="Rotate Document"
              >
                <RotateCw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Interactive Document Canvas with Bounding Boxes */}
          <div className="flex-1 bg-slate-950/80 rounded-xl p-4 overflow-auto flex items-center justify-center relative min-h-[440px]">
            <div 
              className="bg-white text-slate-900 rounded-lg shadow-2xl p-6 relative font-serif transition-transform duration-200 origin-center"
              style={{ 
                width: '440px', 
                minHeight: '520px',
                transform: `scale(${zoomLevel / 100}) rotate(${rotation}deg)` 
              }}
            >
              {/* Document Header */}
              <div className="text-center border-b-2 border-slate-900 pb-3 mb-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-700">
                  Government of Maharashtra • Revenue Department
                </p>
                <h4 className="text-sm font-extrabold uppercase mt-0.5">
                  Annual Income & Solvency Certificate
                </h4>
                <p className="text-[9px] text-slate-500 font-sans">
                  Issued under Section 4 of Maharashtra Land Revenue Code
                </p>
              </div>

              {/* Document Body with Bounding Boxes */}
              <div className="text-xs space-y-3 leading-relaxed">
                <p className="text-[11px]">
                  This is to certify on the basis of inquiry conducted by the Circle Inspector and revenue inspection records:
                </p>

                {/* Bounding Box 1: Name */}
                <div className="relative border-2 border-blue-600 bg-blue-50/40 p-1.5 rounded">
                  <span className="absolute -top-2.5 left-2 bg-blue-600 text-white text-[8px] font-mono px-1 rounded uppercase font-bold">
                    ✓ Field: Applicant Name (100%)
                  </span>
                  <p className="font-bold text-slate-900">Name: Shri Rahul Jadhav</p>
                </div>

                {/* Bounding Box 2: Certificate Number */}
                <div className="relative border-2 border-blue-600 bg-blue-50/40 p-1.5 rounded">
                  <span className="absolute -top-2.5 left-2 bg-blue-600 text-white text-[8px] font-mono px-1 rounded uppercase font-bold">
                    ✓ Field: Certificate ID (96%)
                  </span>
                  <p className="font-mono text-slate-900 font-bold">No: MHA/REV/2025/88921</p>
                </div>

                {/* Bounding Box 3: Annual Income */}
                <div className="relative border-2 border-blue-600 bg-blue-50/40 p-1.5 rounded">
                  <span className="absolute -top-2.5 left-2 bg-blue-600 text-white text-[8px] font-mono px-1 rounded uppercase font-bold">
                    ✓ Field: Total Family Income (95%)
                  </span>
                  <p className="font-bold text-slate-900 font-mono">
                    Annual Gross Income: ₹1,80,000/- (One Lakh Eighty Thousand Only)
                  </p>
                </div>

                {/* Bounding Box 4: Date of Issue (The Flagged Field!) */}
                {currentDoc.isReplaced ? (
                  <div className="relative border-2 border-emerald-600 bg-emerald-50/50 p-2 rounded">
                    <span className="absolute -top-2.5 left-2 bg-emerald-600 text-white text-[8px] font-mono px-1 rounded uppercase font-bold">
                      ✓ Reissued Issue Date (98%)
                    </span>
                    <p className="font-mono font-bold text-emerald-950">
                      Date of Issue: 14/07/2025 (Certified by SDM Office)
                    </p>
                  </div>
                ) : (
                  <div className="relative border-2 border-dashed border-amber-600 bg-amber-100/50 p-2 rounded animate-pulse">
                    <span className="absolute -top-2.5 left-2 bg-amber-600 text-white text-[8px] font-mono px-1 rounded uppercase font-bold">
                      ⚠ OCR Ambiguity: Date of Issue (61%)
                    </span>
                    <p className="font-mono font-bold text-amber-950">
                      Date of Issue: 12/??/2024 (Stamp Smudged)
                    </p>
                  </div>
                )}

                <p className="text-[10px] text-slate-500 pt-2 italic">
                  This certificate remains valid for financial assessment up to the prescribed academic tenure.
                </p>
              </div>

              {/* Bottom Official Seal & Signature */}
              <div className="mt-8 pt-4 border-t border-slate-300 flex items-center justify-between">
                <div className="w-16 h-16 rounded-full border-2 border-dashed border-slate-400 flex items-center justify-center text-center p-1 text-[8px] font-sans text-slate-500">
                  {currentDoc.isReplaced ? (
                    <span className="text-emerald-700 font-bold">SDM OFFICIAL SEAL</span>
                  ) : (
                    <span className="text-amber-700 font-bold">CIRCULAR SEAL (BLURRED)</span>
                  )}
                </div>
                <div className="text-right text-[9px] font-sans">
                  <p className="font-bold">Tehsildar & Executive Magistrate</p>
                  <p className="text-slate-500">Gadchiroli Sub-Division</p>
                  <p className="font-mono text-emerald-700">Digital Sign: Verified (NIC CA)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-2 text-center text-[10px] text-slate-400 font-mono">
            Document Hash: sha256:4a8b29f0...c81e9 • Stored in MoTA Secured Cloud
          </div>
        </div>

        {/* PANE 3: RIGHT - AI REVIEW & SCUTINY CHECKLIST (3 Cols) */}
        <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            {/* Header matching exact prompt specification */}
            <div className="border-b border-slate-100 pb-3">
              <span className="text-[10px] font-bold text-blue-900 bg-blue-50 px-2 py-0.5 rounded uppercase tracking-wider">
                AI REVIEW
              </span>
              <h3 className="text-sm font-extrabold text-slate-900 mt-1">
                Document: {currentDoc.title}
              </h3>
            </div>

            {/* Extracted Fields Checklist - Exact prompt specification */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-700 block">
                Extracted fields
              </span>
              <div className="space-y-1.5 text-xs font-medium">
                <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-100">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Name: Rahul Jadhav</span>
                  </div>
                  <span className="font-mono text-[10px] font-bold text-emerald-700">100%</span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-100">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Certificate number: MHA/88921</span>
                  </div>
                  <span className="font-mono text-[10px] font-bold text-emerald-700">96%</span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-100">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Income: ₹1,80,000</span>
                  </div>
                  <span className="font-mono text-[10px] font-bold text-emerald-700">95%</span>
                </div>

                {/* Date Check */}
                {currentDoc.isReplaced ? (
                  <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-100">
                    <div className="flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Date: 14/07/2025</span>
                    </div>
                    <span className="font-mono text-[10px] font-bold text-emerald-700">98%</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-between p-2 rounded-lg bg-amber-50 text-amber-900 border border-amber-200">
                    <div className="flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-amber-600" />
                      <span>Date: 12/??/2024</span>
                    </div>
                    <span className="font-mono text-[10px] font-bold text-amber-800">61%</span>
                  </div>
                )}
              </div>
            </div>

            {/* Potential Issue - Exact prompt specification */}
            {!currentDoc.isReplaced && (
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 space-y-1">
                <span className="text-xs font-bold text-amber-900 uppercase tracking-wider block">
                  Potential issue
                </span>
                <p className="text-xs font-bold text-amber-800 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>⚠ Date confidence: 61%</span>
                </p>
                <p className="text-[11px] text-amber-900/80 leading-snug">
                  Ink degradation on issue date numeral. Potential ambiguity between financial years 2024-25 and 2025-26.
                </p>
              </div>
            )}

            {/* Recommendation - Exact prompt specification */}
            <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-100 space-y-1">
              <span className="text-[10px] font-bold text-blue-900 uppercase tracking-wider block">
                Recommendation:
              </span>
              <p className="text-xs font-semibold text-slate-800">
                {currentDoc.isReplaced 
                  ? 'Replacement certificate clear. Recommended for Officer approval.' 
                  : 'Manual review required.'}
              </p>
            </div>
          </div>

          {/* Institutional Decision Buttons - Exact prompt specification */}
          <div className="space-y-2 pt-3 border-t border-slate-100">
            <button
              onClick={handleAccept}
              className="w-full py-2.5 px-4 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl transition flex items-center justify-center gap-2 shadow-xs"
            >
              <Check className="w-4 h-4" />
              <span>Accept & Verify Document</span>
            </button>

            <button
              onClick={() => setShowCorrectionModal(true)}
              className="w-full py-2.5 px-4 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-xl transition flex items-center justify-center gap-2 shadow-xs"
            >
              <AlertTriangle className="w-4 h-4" />
              <span>Request Correction</span>
            </button>

            <button
              onClick={handleEscalate}
              className="w-full py-2 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition flex items-center justify-center gap-2"
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Escalate to Senior Officer</span>
            </button>
          </div>
        </div>
      </div>

      {/* Deficiency Notice Modal */}
      {showCorrectionModal && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                <h3 className="text-sm font-bold text-slate-900">
                  Issue Official Deficiency Notice
                </h3>
              </div>
              <button 
                onClick={() => setShowCorrectionModal(false)}
                className="p-1 rounded-lg hover:bg-slate-100 text-slate-400"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="my-4 space-y-3 text-xs">
              <p className="text-slate-600">
                This notice will be recorded in the audit trail and dispatched immediately to candidate <strong>Rahul Jadhav</strong> via SMS, Email, and the ST-Sahyog Deficiency Centre.
              </p>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Deficiency Memo Rationale</label>
                <textarea
                  rows={4}
                  value={correctionReason}
                  onChange={e => setCorrectionReason(e.target.value)}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-500">
                Statutory Compliance: Candidate will have 15 calendar days to submit a replacement before automatic dossier escalation.
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-end gap-2">
              <button
                onClick={() => setShowCorrectionModal(false)}
                className="px-4 py-2 bg-slate-100 text-slate-700 font-bold rounded-xl text-xs"
              >
                Cancel
              </button>
              <button
                onClick={handleRaiseCorrection}
                className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl text-xs flex items-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Dispatch Deficiency Notice</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
