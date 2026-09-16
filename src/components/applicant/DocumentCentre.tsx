import React, { useState } from 'react';
import { 
  CheckCircle2, 
  AlertTriangle, 
  FileText, 
  Eye, 
  Download, 
  ArrowRight, 
  Check, 
  ShieldCheck, 
  X,
  Sparkles,
  Info
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ApplicationDocument } from '../../types';

export const DocumentCentre: React.FC = () => {
  const { application, setApplicantTab } = useApp();
  const [selectedDoc, setSelectedDoc] = useState<ApplicationDocument | null>(null);

  return (
    <div className="p-4 sm:p-6 max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <div className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 mb-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            e-Sanad & DigiLocker Integrated
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900">
            Document Centre
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Cryptographically signed repository of uploaded academic & statutory certificates for Application #{application.id}.
          </p>
        </div>

        <button
          onClick={() => setApplicantTab('deficiency-centre')}
          className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs rounded-xl shadow-xs flex items-center gap-2 transition"
        >
          <AlertTriangle className="w-4 h-4" />
          <span>Go to Deficiency Centre</span>
        </button>
      </div>

      {/* 4 Cards Grid - Exact prompt specification */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {application.documents.map((doc) => {
          const isVerified = doc.status === 'verified';
          const isReviewRequired = doc.status === 'review_required' || doc.status === 'deficient';

          return (
            <div 
              key={doc.id}
              className={`bg-white rounded-2xl border p-5 shadow-xs transition-all flex flex-col justify-between ${
                isReviewRequired 
                  ? 'border-amber-300 ring-2 ring-amber-100 bg-amber-50/20' 
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div>
                {/* Header row with Status Badge */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-start gap-3">
                    <div className={`p-2.5 rounded-xl flex-shrink-0 ${
                      isVerified 
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' 
                        : 'bg-amber-100 text-amber-800 border border-amber-200'
                    }`}>
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 leading-tight">
                        {doc.title}
                      </h3>
                      <p className="text-[11px] text-slate-500 font-mono mt-0.5">
                        {doc.fileName}
                      </p>
                    </div>
                  </div>

                  {/* Status Badge matching exact prompt requirement */}
                  {isVerified ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                      <Check className="w-3.5 h-3.5" />
                      ✓ Verified
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold border border-amber-300 animate-pulse">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      ⚠ Review Required
                    </span>
                  )}
                </div>

                {/* AI Scrutiny Metadata */}
                <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 text-[11px]">AI Extraction Confidence</span>
                    <span className={`font-mono font-bold ${isVerified ? 'text-emerald-700' : 'text-amber-700'}`}>
                      {doc.confidenceScore}%
                    </span>
                  </div>

                  {/* Summary of Extracted fields */}
                  <div className="pt-1.5 border-t border-slate-200/60 flex flex-wrap gap-1.5">
                    {doc.extractedFields.slice(0, 3).map((f, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200 text-[10px] font-medium">
                        {f.label}: <strong className="text-slate-900">{f.value}</strong>
                      </span>
                    ))}
                  </div>

                  {doc.aiIssue && (
                    <p className="text-[11px] text-amber-800 font-semibold pt-1 flex items-start gap-1">
                      <span>⚠</span>
                      <span>{doc.aiIssue}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedDoc(doc)}
                  className="py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center gap-1.5 transition"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Document</span>
                </button>

                {isReviewRequired && (
                  <button
                    onClick={() => setApplicantTab('deficiency-centre')}
                    className="py-2 px-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold flex items-center gap-1.5 transition shadow-2xs"
                  >
                    <span>Upload Replacement</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Document Inspector Modal */}
      {selectedDoc && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-gov-navy" />
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{selectedDoc.title}</h3>
                  <p className="text-[11px] text-slate-500 font-mono">{selectedDoc.fileName}</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedDoc(null)}
                className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Document Canvas & Extracted Fields Preview */}
            <div className="my-4 grid grid-cols-1 md:grid-cols-12 gap-4">
              {/* Simulated Document Paper */}
              <div className="md:col-span-7 bg-slate-50 border-2 border-slate-200 rounded-xl p-4 relative font-serif text-[11px] leading-relaxed shadow-inner min-h-[300px]">
                <div className="text-center border-b border-slate-300 pb-2 mb-3">
                  <p className="font-bold text-slate-900 uppercase">Government of Maharashtra</p>
                  <p className="text-[10px] text-slate-600">Office of the Sub-Divisional Magistrate / Tehsildar</p>
                  <p className="text-[9px] text-slate-400 font-mono">Doc Ref: {selectedDoc.fileName}</p>
                </div>

                <div className="space-y-2 text-slate-800">
                  <p>This is to certify that candidate <strong>Gauri Agrawal</strong> has been duly verified under statutory rules.</p>
                  <div className="bg-white p-2.5 rounded border border-slate-200 my-2 space-y-1">
                    {selectedDoc.extractedFields.map((field, idx) => (
                      <div key={idx} className="flex justify-between items-center text-[10px] font-sans">
                        <span className="text-slate-500">{field.label}:</span>
                        <span className={`font-bold ${field.status === 'warning' ? 'text-amber-700 bg-amber-50 px-1 rounded' : 'text-slate-900'}`}>
                          {field.value}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[10px] text-slate-500 italic">Issued under the Seal and Signature of the Competent Revenue Authority.</p>
                </div>

                {/* Digital Stamp Simulation */}
                <div className="absolute bottom-4 right-4 p-2 rounded-lg border border-slate-300 bg-white/90 text-[9px] font-sans text-center shadow-xs">
                  <div className="w-8 h-8 mx-auto rounded-full border-2 border-dashed border-gov-navy flex items-center justify-center font-bold text-gov-navy mb-1">
                    SEAL
                  </div>
                  <p className="font-bold text-gov-navy">NIC e-Pramaan</p>
                  <p className="text-[8px] text-slate-400">Digitally Verified</p>
                </div>
              </div>

              {/* AI Scrutiny Checklist (Right) */}
              <div className="md:col-span-5 space-y-3 text-xs font-sans">
                <div className="p-3 bg-blue-50/80 rounded-xl border border-blue-100">
                  <h4 className="font-bold text-blue-950 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                    AI Scrutiny Analysis
                  </h4>
                  <p className="text-[11px] text-blue-900/80 mt-1">
                    {selectedDoc.aiRecommendation || 'Fields successfully mapped with 0 discrepancies.'}
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-3 bg-white space-y-2">
                  <h4 className="font-bold text-slate-800 text-[11px] uppercase tracking-wider">Field Checks</h4>
                  {selectedDoc.extractedFields.map((f, i) => (
                    <div key={i} className="flex items-center justify-between text-[11px] border-b border-slate-100 pb-1">
                      <span className="text-slate-600">{f.label}</span>
                      <span className={`font-mono font-semibold ${f.confidence > 75 ? 'text-emerald-700' : 'text-amber-700'}`}>
                        {f.confidence}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedDoc(null)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
