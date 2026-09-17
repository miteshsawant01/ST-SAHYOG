import React, { useState } from 'react';
import { 
  ScanLine, 
  CheckCircle2, 
  AlertTriangle, 
  FileText, 
  ShieldCheck, 
  ArrowRight, 
  Send, 
  RotateCcw, 
  Eye, 
  Check, 
  X,
  Info,
  Sparkles
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const AIDocumentReview: React.FC = () => {
  const { 
    application, 
    officerVerifyDocument, 
    officerRaiseDeficiency, 
    setOfficerTab,
    addAuditEntry 
  } = useApp();

  const [selectedDocId, setSelectedDocId] = useState<string>('doc-income');
  const [actionFeedback, setActionFeedback] = useState<string | null>(null);
  const [showCorrectionModal, setShowCorrectionModal] = useState<boolean>(false);
  const [correctionNote, setCorrectionNote] = useState<string>(
    'The uploaded certificate could not be fully validated because the issue date is unclear / differs from active financial year.'
  );

  const doc = application.documents.find(d => d.id === selectedDocId) || application.documents[1];
  const isIncomeDoc = doc.id === 'doc-income';

  const handleSendForOfficerReview = () => {
    officerVerifyDocument(application.id, doc.id, 99);
    setActionFeedback('Document marked Verified and accepted by Officer Ramesh Sharma.');
    setTimeout(() => setActionFeedback(null), 4000);
  };

  const handleRequestCorrection = () => {
    officerRaiseDeficiency(application.id, doc.id, correctionNote);
    setShowCorrectionModal(false);
    setActionFeedback('Correction request notice dispatched to applicant Rahul Jadhav.');
    setTimeout(() => setActionFeedback(null), 4000);
  };

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="border-b border-slate-200 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-900 border border-blue-100 text-[10px] font-extrabold uppercase tracking-wider mb-1">
            <ScanLine className="w-3.5 h-3.5 text-gov-navy" />
            <span>Document Intelligence Suite</span>
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900">
            AI DOCUMENT REVIEW
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Multi-modal OCR extraction, cryptographic signature verification, and rule-based discrepancy analysis.
          </p>
        </div>

        {/* Document Selector Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {application.documents.map((d) => (
            <button
              key={d.id}
              onClick={() => setSelectedDocId(d.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                selectedDocId === d.id
                  ? 'bg-gov-navy text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span>{d.title}</span>
              {d.id === 'doc-income' && (
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Action Notification Toast */}
      {actionFeedback && (
        <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-4 text-xs font-bold text-emerald-900 flex items-center justify-between shadow-xs animate-in fade-in">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>{actionFeedback}</span>
          </div>
          <button
            onClick={() => setOfficerTab('selection-support')}
            className="text-xs font-bold text-emerald-800 hover:underline flex items-center gap-1"
          >
            <span>Go to Selection Review</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Review 2-Pane Workstation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Pane: Simulated Document Canvas with OCR Bounding Box */}
        <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-gov-navy" />
              <span className="text-xs font-bold text-slate-800">
                Original Document: {doc.fileName}
              </span>
            </div>
            <span className="text-[10px] font-mono bg-slate-100 px-2 py-0.5 rounded text-slate-600">
              Confidence: {doc.confidenceScore}%
            </span>
          </div>

          {/* Paper Canvas Simulation */}
          <div className="bg-slate-50 border-2 border-slate-200 rounded-xl p-6 relative font-serif text-xs leading-relaxed min-h-[460px] flex flex-col justify-between shadow-inner">
            <div className="space-y-4">
              <div className="text-center border-b border-slate-300 pb-3">
                <p className="font-bold text-slate-900 text-sm tracking-wide uppercase">
                  GOVERNMENT OF MAHARASHTRA
                </p>
                <p className="text-[11px] text-slate-600 font-sans">
                  Office of the Executive Magistrate & Tehsildar, Haveli, Pune
                </p>
                <p className="text-[10px] text-slate-400 font-mono mt-0.5">
                  Certificate Ref: {isIncomeDoc ? 'MH-INC-2024-8841' : doc.fileName}
                </p>
              </div>

              <div className="space-y-3 text-slate-800 font-sans text-xs">
                <p>
                  This is to certify that upon due inquiry and local revenue verification, the annual gross income from all sources of the family of candidate <strong>Rahul Jadhav</strong> is recorded as:
                </p>

                {/* Highlighted Bounding Box Area */}
                <div className="relative border-2 border-amber-500 bg-amber-100/30 p-3 rounded-lg my-2">
                  <span className="absolute -top-2.5 left-2 bg-amber-600 text-white text-[9px] font-mono px-1.5 py-0.2 rounded font-bold">
                    OCR Zone: Annual Income & Date
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono font-bold text-slate-900">
                    <div>Gross Income: ₹1,80,000</div>
                    <div className="text-amber-900">
                      Issue Date: {doc.isReplaced ? '14-07-2025' : '12-08-2024'}
                    </div>
                  </div>
                </div>

                <p className="text-[11px] text-slate-600">
                  This certificate is issued for the explicit purpose of securing statutory scholarship benefits under the Ministry of Tribal Affairs, New Delhi.
                </p>
              </div>
            </div>

            {/* Stamp & Authority Seal */}
            <div className="pt-6 border-t border-slate-200 flex items-center justify-between font-sans">
              <div className="border border-slate-300 bg-white p-2 rounded text-[10px] text-center">
                <div className="w-8 h-8 rounded-full border border-dashed border-gov-navy mx-auto flex items-center justify-center font-bold text-gov-navy text-[8px] mb-1">
                  SEAL
                </div>
                <span className="text-[9px] text-slate-500 font-mono">Tehsildar Haveli</span>
              </div>

              <div className="text-right text-[10px] text-slate-600 space-y-0.5">
                <p className="font-bold text-slate-800">Digitally Signed by SDM</p>
                <p className="font-mono text-emerald-700 font-bold">e-Pramaan Token Valid</p>
                <p className="text-[9px] text-slate-400">Timestamp: 2024-08-12T10:14:22 IST</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Pane: Item 3 & 11 Required Specifications */}
        <div className="lg:col-span-6 space-y-4">
          {/* Card 1: Document Details & Extracted Information */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                Document: {doc.title}
              </span>
              <span className="text-xs font-mono font-bold text-blue-900 bg-blue-50 px-2.5 py-0.5 rounded">
                Application: ST26-DEMO001
              </span>
            </div>

            <div>
              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                Extracted Information
              </h3>
              <div className="border border-slate-200 rounded-xl overflow-hidden text-xs">
                <div className="grid grid-cols-2 p-2.5 bg-slate-50 border-b border-slate-200">
                  <span className="text-slate-500 font-medium">Applicant Name</span>
                  <span className="font-bold text-slate-900">Rahul Jadhav</span>
                </div>
                <div className="grid grid-cols-2 p-2.5 bg-white border-b border-slate-100 font-mono">
                  <span className="text-slate-500 font-sans">Certificate No.</span>
                  <span className="font-bold text-slate-800">MH-INC-2024-8841</span>
                </div>
                <div className="grid grid-cols-2 p-2.5 bg-slate-50 border-b border-slate-200 font-mono">
                  <span className="text-slate-500 font-sans">Issue Date</span>
                  <span className={`font-bold ${doc.isReplaced ? 'text-emerald-700' : 'text-amber-700'}`}>
                    {doc.isReplaced ? '14-07-2025' : '12-08-2024'}
                  </span>
                </div>
                <div className="grid grid-cols-2 p-2.5 bg-white border-b border-slate-100 font-mono">
                  <span className="text-slate-500 font-sans">Income</span>
                  <span className="font-bold text-slate-900">₹1,80,000</span>
                </div>
                <div className="grid grid-cols-2 p-2.5 bg-slate-50">
                  <span className="text-slate-500 font-medium">Status</span>
                  <span className={`font-bold ${
                    doc.status === 'verified' 
                      ? 'text-emerald-700' 
                      : 'text-amber-700'
                  }`}>
                    {doc.status === 'verified' ? 'Verified by Officer' : 'Pending Officer Verification'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: AI-Assisted Checks - Exact prompt requirements */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>AI-Assisted Checks</span>
            </h3>

            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900">
                <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="font-semibold">✓ Issue authority recognized (Tehsildar Haveli, Pune District)</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900">
                <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="font-semibold">✓ Digital signature detected (e-Pramaan PKI Token valid)</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900">
                <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="font-semibold">✓ Valid financial year check completed</span>
              </div>
            </div>
          </div>

          {/* Card 3: AI Finding - Exact prompt requirements */}
          <div className="bg-white rounded-2xl border border-amber-300 p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                <span>AI Finding</span>
              </h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300">
                {doc.isReplaced ? 'Revalidation Satisfied' : 'Discrepancy detected'}
              </span>
            </div>

            <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-200 text-xs space-y-1.5">
              <div>
                <span className="font-bold text-amber-950">Evidence: </span>
                <span className="text-amber-900">
                  {doc.isReplaced 
                    ? 'Reissued certificate date (14-07-2025) successfully matches active financial year rule.'
                    : 'Certificate date differs from validity requirement (Date OCR confidence 61%, cutoff 75%).'}
                </span>
              </div>
              <div>
                <span className="font-bold text-amber-950">Recommendation: </span>
                <span className="text-amber-900">
                  Request officer verification
                </span>
              </div>
            </div>

            {/* Action buttons - Exact prompt requirements */}
            <div className="pt-2 flex flex-wrap items-center justify-end gap-3">
              <button
                onClick={() => setShowCorrectionModal(true)}
                className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition flex items-center gap-1.5 border border-slate-300"
              >
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                <span>[Request Correction]</span>
              </button>

              <button
                onClick={handleSendForOfficerReview}
                className="px-5 py-2.5 bg-gov-navy hover:bg-blue-900 text-white font-bold text-xs rounded-xl transition flex items-center gap-2 shadow-xs"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>[Send for Officer Review]</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Correction Notice Modal */}
      {showCorrectionModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                <h3 className="text-sm font-bold text-slate-900">
                  Issue Deficiency Notice: {doc.title}
                </h3>
              </div>
              <button 
                onClick={() => setShowCorrectionModal(false)}
                className="p-1 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2 text-xs">
              <label className="block font-bold text-slate-700">
                Notice Instructions to Applicant (Rahul Jadhav)
              </label>
              <textarea
                rows={3}
                value={correctionNote}
                onChange={(e) => setCorrectionNote(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium focus:ring-2 focus:ring-blue-800"
              />
              <p className="text-[11px] text-slate-500">
                Notice will appear immediately in the applicant's Notification Center & Deficiency Centre.
              </p>
            </div>

            <div className="pt-2 flex justify-end gap-2">
              <button
                onClick={() => setShowCorrectionModal(false)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl"
              >
                Cancel
              </button>
              <button
                onClick={handleRequestCorrection}
                className="px-4 py-2 bg-rose-700 hover:bg-rose-800 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Dispatch Notice</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
