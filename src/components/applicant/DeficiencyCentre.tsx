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
  Info
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const DeficiencyCentre: React.FC = () => {
  const { application, resolveDeficiency, setApplicantTab } = useApp();

  const openDeficiency = application.deficiencies.find(d => d.status === 'action_required');
  const resolvedDeficiency = application.deficiencies.find(d => d.status === 'resolved');

  const [isUploading, setIsUploading] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const handleSimulatedUpload = () => {
    setIsUploading(true);
    setScanStep(1);

    setTimeout(() => setScanStep(2), 1000);
    setTimeout(() => setScanStep(3), 2000);
    setTimeout(() => {
      setScanStep(4);
      resolveDeficiency('Income_Certificate_CompetentAuthority_Reissued.pdf');
      setIsUploading(false);
      setShowSuccessToast(true);
    }, 3000);
  };

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
          Review issues flagged during AI pre-screening and officer scrutiny, and submit corrective documents with zero physical visits.
        </p>
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
                Replacement Certificate Successfully Submitted & Pre-Verified!
              </h3>
              <p className="text-xs text-emerald-700 mt-0.5">
                AI extraction completed with 98% confidence. Status updated to <strong>PENDING OFFICER RE-VERIFICATION</strong>.
              </p>
            </div>
          </div>
          <button
            onClick={() => setApplicantTab('track-application')}
            className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl transition flex items-center gap-1.5 shadow-xs whitespace-nowrap"
          >
            <span>Track Application</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* If Open Deficiency exists: Exact Prompt Specification Layout */}
      {openDeficiency ? (
        <div className="bg-white rounded-3xl border-2 border-amber-300 shadow-gov-lg overflow-hidden">
          {/* Top Red/Amber Alert Bar */}
          <div className="bg-gradient-to-r from-amber-500 via-rose-500 to-amber-600 px-6 py-3 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-white" />
              <span className="text-sm font-extrabold tracking-widest uppercase">
                ACTION REQUIRED
              </span>
            </div>
            <span className="text-xs bg-black/25 px-2.5 py-0.5 rounded-full font-mono">
              Notice ID: DEF-2026-01
            </span>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* Target Document */}
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Document In Question
              </span>
              <h2 className="text-xl font-bold text-slate-900 mt-1 flex items-center gap-2">
                <FileText className="w-5 h-5 text-amber-600" />
                <span>{openDeficiency.docTitle}</span>
              </h2>
            </div>

            {/* Issue Description - Exact prompt wording */}
            <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-5 space-y-2">
              <span className="text-xs font-bold text-amber-900 uppercase tracking-wider block">
                Issue:
              </span>
              <p className="text-sm text-slate-800 font-medium leading-relaxed">
                The uploaded certificate could not be fully validated because the issue date is unclear.
              </p>
              <div className="pt-2 flex items-center gap-3 text-xs text-amber-900/80 font-mono">
                <span>Date OCR Confidence: <strong>61%</strong></span>
                <span>•</span>
                <span>Cutoff Required: <strong>75%</strong></span>
              </div>
            </div>

            {/* Required action - Exact prompt wording */}
            <div className="space-y-1.5">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Required action:
              </span>
              <p className="text-sm font-semibold text-slate-800">
                Upload a clearer certificate.
              </p>
              <p className="text-xs text-slate-500">
                Ensure the issuing Tehsildar or SDM stamp, issue date, and official registration number are clearly legible without glare or motion blur.
              </p>
            </div>

            {/* Live Upload & AI Scanning Simulator */}
            {isUploading ? (
              <div className="bg-blue-50/70 border border-blue-200 rounded-2xl p-6 text-center space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-gov-navy text-white flex items-center justify-center animate-spin">
                  <RefreshCw className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gov-navy">
                    AI Scrutiny Engine Processing Replacement...
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    {scanStep === 1 && 'Enhancing image contrast and running multi-modal OCR...'}
                    {scanStep === 2 && 'Locating official circular seal and issuing date stamp...'}
                    {scanStep === 3 && 'Validating date "14/07/2025" (Confidence: 98%)...'}
                    {scanStep === 4 && 'Complete! Updating verification log...'}
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
                    Drag & drop replacement document, or browse file
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Supported formats: PDF, JPG, PNG (Max 5 MB) • DigiLocker e-Signed accepted
                  </p>
                  <p className="text-[11px] text-blue-700 font-semibold mt-2">
                    Click to test instant upload simulation: "Income_Certificate_CompetentAuthority_Reissued.pdf"
                  </p>
                </div>

                {/* Main Action Button - Exact prompt specification */}
                <div className="flex justify-end">
                  <button
                    onClick={handleSimulatedUpload}
                    className="px-6 py-3 bg-[#0f294a] hover:bg-[#1a365d] text-white text-xs font-bold rounded-xl transition flex items-center gap-2 shadow-sm"
                  >
                    <UploadCloud className="w-4 h-4" />
                    <span>[Upload Replacement]</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Zero Pending Deficiencies State */
        <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center space-y-4 shadow-xs">
          <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shadow-xs">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              No Pending Deficiencies
            </h3>
            <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
              All statutory documents have been successfully validated by the AI Scrutiny Engine or accepted by your Scrutiny Officer.
            </p>
          </div>

          {resolvedDeficiency && (
            <div className="p-4 bg-slate-50 rounded-xl max-w-lg mx-auto text-left border border-slate-200 text-xs">
              <div className="flex items-center justify-between font-bold text-slate-800 mb-1">
                <span>Previous Resolved Notice</span>
                <span className="text-emerald-700 font-mono font-bold">✓ RESOLVED</span>
              </div>
              <p className="text-slate-600">
                {resolvedDeficiency.docTitle}: Replacement certificate submitted at {resolvedDeficiency.resolvedAt || '14:38:54'}.
              </p>
            </div>
          )}

          <button
            onClick={() => setApplicantTab('track-application')}
            className="px-5 py-2.5 bg-gov-navy text-white text-xs font-bold rounded-xl hover:bg-blue-900 transition"
          >
            Back to Application Tracking
          </button>
        </div>
      )}
    </div>
  );
};
