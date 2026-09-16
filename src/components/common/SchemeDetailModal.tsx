import React from 'react';
import { 
  X, 
  Download, 
  ArrowRight, 
  CheckCircle2, 
  Calendar, 
  FileText, 
  ShieldCheck, 
  IndianRupee,
  Building
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { AshokaEmblem } from './GovEmblem';

export const SchemeDetailModal: React.FC = () => {
  const { selectedSchemeForModal, setSelectedSchemeForModal, setApplicantTab } = useApp();

  if (!selectedSchemeForModal) return null;
  const scheme = selectedSchemeForModal;

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 max-h-[90vh] overflow-y-auto space-y-5">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-100 pb-4">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex-shrink-0">
              <AshokaEmblem className="w-8 h-9 text-slate-800" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-800 bg-blue-50 px-2 py-0.5 rounded">
                {scheme.category} • Policy {scheme.currentVersion}
              </span>
              <h2 className="text-lg font-extrabold text-slate-900 mt-1 leading-snug">
                {scheme.name}
              </h2>
              <p className="text-xs text-slate-500">{scheme.ministry}</p>
            </div>
          </div>
          <button
            onClick={() => setSelectedSchemeForModal(null)}
            className="p-1.5 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Long Description */}
        <p className="text-xs text-slate-600 leading-relaxed">
          {scheme.longDesc}
        </p>

        {/* Benefits Card */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50 via-slate-50 to-emerald-50 border border-blue-100 text-xs space-y-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-gov-navy">Financial Grant & Emoluments</span>
          <p className="text-sm font-mono font-extrabold text-emerald-800">
            {scheme.maxBenefit}
          </p>
          <p className="text-[11px] text-slate-500">
            Family income ceiling: ≤ ₹{(scheme.annualIncomeLimit).toLocaleString('en-IN')} / year • Total Annual Slots: {scheme.totalSlots.toLocaleString()}
          </p>
        </div>

        {/* Eligibility Conditions */}
        <div className="space-y-2 text-xs">
          <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
            Eligibility Conditions & Rules
          </h4>
          <div className="space-y-1.5">
            {scheme.eligibilityConditions.map((cond, idx) => (
              <div key={idx} className="flex items-start gap-2 text-slate-700 bg-slate-50 p-2 rounded-xl">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span>{cond}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Required Documents */}
        <div className="space-y-2 text-xs">
          <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
            Mandatory Documents for Scrutiny
          </h4>
          <div className="space-y-1.5">
            {scheme.requiredDocs.map((doc, idx) => (
              <div key={idx} className="flex items-start gap-2 text-slate-600 bg-slate-50 p-2 rounded-xl">
                <FileText className="w-3.5 h-3.5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>{doc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions Footer */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => alert(`Downloading Official Gazette Guidelines for ${scheme.name}`)}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-1.5 transition"
          >
            <Download className="w-4 h-4" />
            <span>Download Gazette Rules (PDF)</span>
          </button>

          <button
            onClick={() => {
              setSelectedSchemeForModal(null);
              setApplicantTab('apply-now');
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gov-navy hover:bg-blue-900 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition shadow-xs"
          >
            <span>Apply for this Scheme</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
