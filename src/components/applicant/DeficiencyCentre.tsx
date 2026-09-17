import React, { useState } from 'react';
import { 
  AlertTriangle, 
  UploadCloud, 
  CheckCircle2, 
  FileText, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  RefreshCw,
  Sparkles,
  Info,
  Check,
  ChevronRight
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const DeficiencyCentre: React.FC = () => {
  const { application, resolveDeficiencyWithAIRecheck, setStudentTab, role } = useApp();

  const openDeficiency = application.deficiencies.find(d => d.status === 'action_required');
  const resolvedDeficiency = application.deficiencies.find(d => d.status === 'resolved');

  const [isUploading, setIsUploading] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const handleSimulatedUpload = () => {
    setIsUploading(true);
    setScanStep(1);

    setTimeout(() => setScanStep(2), 700);
    setTimeout(() => setScanStep(3), 1400);
    setTimeout(() => {
      setScanStep(4);
      resolveDeficiencyWithAIRecheck('Income_Certificate_CompetentAuthority_Reissued_2025.pdf');
      setIsUploading(false);
      setShowSuccessToast(true);
    }, 2200);
  };

  const loopStages = [
    { id: 'detect', label: 'Detect', desc: 'AI OCR scans document for date validity', done: true, current: false },
    { id: 'notify', label: 'Notify', desc: 'Discrepancy notice issued to applicant', done: true, current: !resolvedDeficiency },
    { id: 'resubmit', label: 'Resubmit', desc: 'Applicant uploads corrected certificate', done: !!resolvedDeficiency, current: !resolvedDeficiency && isUploading },
    { id: 'recheck', label: 'Recheck', desc: 'AI revalidates official seal & issue date', done: !!resolvedDeficiency, current: false },
    { id: 'decide', label: 'Decide', desc: 'Officer reviews & approves for selection', done: application.overallStatus === 'Selection Ready', current: !!resolvedDeficiency }
  ];

  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="border-b border-slate-200 pb-4">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-amber-50 text-amber-900 border border-amber-200 text-[10px] font-extrabold uppercase tracking-wider mb-1">
          <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
          <span>Deficiency Resolution Framework</span>
        </div>
        <h1 className="text-2xl font-extrabold text-slate-900">
          Deficiency Centre
        </h1>
        <p className="text-xs text-slate-500 mt-0.5">
          Interactive resolution cycle: <strong>Detect → Notify → Resubmit → Recheck → Decide</strong>. Rectify flagged certificates with zero physical office visits.
        </p>
      </div>

      {/* Closed Loop Visual Progress Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Deficiency Resolution Loop</span>
          <span className="text-[11px] font-mono font-bold text-gov-navy bg-blue-50 px-2 py-0.5 rounded">
            Detect → Notify → Resubmit → Recheck → Decide
          </span>
        </div>
        <div className="grid grid-cols-5 gap-2 text-center">
          {loopStages.map((st, idx) => (
            <div key={st.id} className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mb-1 transition-all ${
                st.done 
                  ? 'bg-emerald-600 text-white shadow-xs' 
                  : st.current 
                  ? 'bg-amber-500 text-white ring-4 ring-amber-100 animate-pulse' 
                  : 'bg-slate-100 text-slate-400 border border-slate-200'
              }`}>
                {st.done ? <Check className="w-4 h-4" /> : idx + 1}
              </div>
              <span className={`text-[11px] font-bold ${st.done ? 'text-emerald-800' : st.current ? 'text-amber-800 font-extrabold' : 'text-slate-400'}`}>
                {st.label}
              </span>
              <span className="text-[9px] text-slate-400 hidden sm:block mt-0.5 leading-tight">{st.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Success Notification if resolved */}
      {showSuccessToast && (
        <div className="bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-5 shadow-md flex items-center justify-between gap-4 animate-in fade-in slide-in-from-top-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-emerald-900">
                AI Recheck: Revalidation Complete ✓
              </h3>
              <p className="text-xs text-emerald-700 mt-0.5">
                Replacement document received and pre-verified (98% confidence). Forwarded to <strong>Officer Review: Ready for verification</strong>.
              </p>
            </div>
          </div>
          {role === 'student' && (
            <button
              onClick={() => setStudentTab('track-status')}
              className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl transition flex items-center gap-1.5 shadow-xs whitespace-nowrap"
            >
              <span>Track Application</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      )}

      {/* Open Deficiency State */}
      {openDeficiency ? (
        <div className="bg-white rounded-3xl border-2 border-amber-300 shadow-gov-lg overflow-hidden">
          {/* Top Alert Bar */}
          <div className="bg-gradient-to-r from-amber-500 via-rose-500 to-amber-600 px-6 py-3 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-white" />
              <span className="text-sm font-extrabold tracking-widest uppercase">
                ACTION REQUIRED: DEFICIENCY FLAGGED
              </span>
            </div>
            <span className="text-xs bg-black/25 px-2.5 py-0.5 rounded-full font-mono">
              Notice ID: DEF-2026-01 • ST26-DEMO001
            </span>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* Step 1: Target Document */}
            <div>
              <div className="inline-flex items-center gap-1 text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded mb-2">
                <span>⚠ Income Certificate</span>
              </div>
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-amber-600" />
                <span>{openDeficiency.docTitle}</span>
              </h2>
            </div>

            {/* Step 2: Issue Detected */}
            <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-5 space-y-2">
              <span className="text-xs font-bold text-amber-900 uppercase tracking-wider block">
                Issue detected
              </span>
              <p className="text-sm text-slate-800 font-medium leading-relaxed">
                The uploaded certificate could not be fully validated because the issue date is unclear / differs from the active financial year validity requirement.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-amber-900/90 font-mono">
                <span>Date OCR Confidence: <strong>61%</strong></span>
                <span>•</span>
                <span>Cutoff Threshold: <strong>75%</strong></span>
                <span>•</span>
                <span>Issuing Authority: SDM / Tehsildar Recognized</span>
              </div>
            </div>

            {/* Step 3: Applicant Action Required */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-600 uppercase tracking-wider block">
                Applicant action:
              </span>
              <p className="text-sm font-semibold text-slate-900">
                Upload Corrected Document
              </p>
              <p className="text-xs text-slate-500">
                Upload a clear copy of the latest income certificate issued for Financial Year 2024-25 / 2025-26 with official seal and registration number.
              </p>
            </div>

            {/* Live Upload & AI Scanning Simulator */}
            {isUploading ? (
              <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-6 text-center space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-gov-navy text-white flex items-center justify-center animate-spin">
                  <RefreshCw className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gov-navy">
                    AI Recheck In Progress...
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    {scanStep === 1 && 'Document received. Extracting certificate text and dates...'}
                    {scanStep === 2 && 'Locating Competent Authority revenue seal & SDM signature...'}
                    {scanStep === 3 && 'Validating date "14/07/2025" against financial year rules...'}
                    {scanStep === 4 && 'Revalidation complete ✓ Forwarding to Officer Review...'}
                  </p>
                </div>
                <div className="w-64 mx-auto bg-slate-200 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-gov-navy h-full transition-all duration-700"
                    style={{ width: `${scanStep * 25}%` }}
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Upload Dropzone */}
                <div 
                  onClick={handleSimulatedUpload}
                  className="border-2 border-dashed border-blue-300 hover:border-gov-navy bg-blue-50/30 hover:bg-blue-50/60 rounded-2xl p-6 text-center cursor-pointer transition group"
                >
                  <div className="w-12 h-12 mx-auto rounded-full bg-blue-100 text-gov-navy flex items-center justify-center group-hover:scale-110 transition">
                    <UploadCloud className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mt-3">
                    Click to Upload Corrected Document
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Supported: PDF, JPG, PNG (Max 5 MB) • DigiLocker e-Signed accepted
                  </p>
                  <p className="text-[11px] text-blue-700 font-semibold mt-2">
                    Click to test instant upload simulation: "Income_Certificate_CompetentAuthority_Reissued_2025.pdf"
                  </p>
                </div>

                {/* Main Action Button */}
                <div className="flex justify-end">
                  <button
                    onClick={handleSimulatedUpload}
                    className="px-6 py-3 bg-[#0f294a] hover:bg-[#1a365d] text-white text-xs font-bold rounded-xl transition flex items-center gap-2 shadow-sm"
                  >
                    <UploadCloud className="w-4 h-4" />
                    <span>[Upload Corrected Document]</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Resolved State showing AI Recheck & Officer Review */
        <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center space-y-6 shadow-xs">
          <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shadow-xs">
            <ShieldCheck className="w-9 h-9" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Deficiency Resolution Completed
            </h3>
            <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
              All flagged items have been resubmitted, rechecked by the AI engine, and queued for official scrutiny.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 space-y-1">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-900 block">
                AI Recheck
              </span>
              <p className="text-xs font-bold text-emerald-800">
                Document received
              </p>
              <p className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                <Check className="w-4 h-4" />
                <span>Revalidation complete ✓</span>
              </p>
              <p className="text-[11px] text-emerald-600 mt-1">
                OCR Confidence: 98% • Validated against Income Ceiling & Active FY.
              </p>
            </div>

            <div className="p-4 bg-blue-50 rounded-2xl border border-blue-200 space-y-1">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-900 block">
                Officer Review
              </span>
              <p className="text-xs font-bold text-blue-950">
                Ready for verification
              </p>
              <p className="text-xs text-blue-700">
                Assigned to MoTA Scrutiny Cell (Desk 04) for final clearance.
              </p>
              <p className="text-[11px] text-slate-500 mt-1">
                Status: In Review (Stage 03/06 Complete)
              </p>
            </div>
          </div>

          {resolvedDeficiency && (
            <div className="p-4 bg-slate-50 rounded-xl max-w-lg mx-auto text-left border border-slate-200 text-xs">
              <div className="flex items-center justify-between font-bold text-slate-800 mb-1">
                <span>Resolved Notice DEF-2026-01</span>
                <span className="text-emerald-700 font-mono font-bold">✓ RESOLVED</span>
              </div>
              <p className="text-slate-600">
                {resolvedDeficiency.docTitle}: Replacement certificate submitted at {resolvedDeficiency.resolvedAt || '14:38:54'}.
              </p>
            </div>
          )}

          {role === 'student' ? (
            <button
              onClick={() => setStudentTab('track-status')}
              className="px-6 py-2.5 bg-gov-navy text-white text-xs font-bold rounded-xl hover:bg-blue-900 transition shadow-xs inline-flex items-center gap-2"
            >
              <span>View Application Progress Tracker</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <p className="text-xs text-slate-500">
              Officer scrutiny active. You can review this dossier in the Scrutiny Workstation.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

