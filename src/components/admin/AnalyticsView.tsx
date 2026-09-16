import React from 'react';
import { 
  PieChart, 
  TrendingUp, 
  IndianRupee, 
  CheckCircle2, 
  CreditCard, 
  Download, 
  ShieldCheck,
  Building,
  Users
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const AnalyticsView: React.FC = () => {
  return (
    <div className="p-4 sm:p-6 max-w-6xl mx-auto space-y-6">
      {/* Top Banner */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-900 border border-emerald-200 text-[10px] font-extrabold uppercase tracking-wider mb-1">
            <CreditCard className="w-3.5 h-3.5 text-emerald-700" />
            Public Financial Management System (PFMS) Mandate
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900">
            DBT Sanction & Financial Analytics
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Direct Benefit Transfer (DBT) disbursement telemetry, central grant fund utilization, and affirmative representation quotas.
          </p>
        </div>

        <button 
          onClick={() => alert('Generating Signed Treasury Disbursal Order PDF for PFMS gateway...')}
          className="px-4 py-2 bg-gov-navy text-white text-xs font-bold rounded-xl hover:bg-blue-900 transition flex items-center gap-2 shadow-xs self-start md:self-auto"
        >
          <Download className="w-4 h-4" />
          <span>Download Treasury Sanction Order</span>
        </button>
      </div>

      {/* Financial KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Disbursed (FY 26)</span>
          <h3 className="text-2xl font-extrabold font-mono text-emerald-700 mt-1">₹42.80 Cr</h3>
          <p className="text-[11px] text-slate-500 mt-1">98.4% success via Aadhaar APBS</p>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Beneficiaries Paid</span>
          <h3 className="text-2xl font-extrabold font-mono text-gov-navy mt-1">34,210</h3>
          <p className="text-[11px] text-slate-500 mt-1">Direct Bank Account Credit</p>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Female Scholar Share</span>
          <h3 className="text-2xl font-extrabold font-mono text-purple-700 mt-1">38.2%</h3>
          <p className="text-[11px] text-emerald-700 font-bold mt-1">Exceeds 33% Statutory Quota</p>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">PVTG Coverage</span>
          <h3 className="text-2xl font-extrabold font-mono text-amber-600 mt-1">3,490</h3>
          <p className="text-[11px] text-slate-500 mt-1">Across 75 Notified Pockets</p>
        </div>
      </div>

      {/* Scheme-wise Breakdown */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
        <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">
          Scheme-wise Budget Allocation vs. Utilization
        </h3>
        <div className="space-y-3 text-xs">
          {[
            { name: 'National Fellowship for ST Students (NFST)', alloc: '₹35.0 Cr', used: '₹31.2 Cr', pct: 89 },
            { name: 'National Overseas Scholarship (NOS)', alloc: '₹22.0 Cr', used: '₹19.4 Cr', pct: 88 },
            { name: 'Top Class Education Scheme for ST Students', alloc: '₹40.0 Cr', used: '₹36.8 Cr', pct: 92 },
            { name: 'Post-Matric Scholarship for ST Students (PMS)', alloc: '₹180.0 Cr', used: '₹162.0 Cr', pct: 90 },
          ].map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex justify-between font-semibold">
                <span className="text-slate-800">{item.name}</span>
                <span className="font-mono text-slate-600">{item.used} of {item.alloc} ({item.pct}%)</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                <div 
                  className="bg-emerald-600 h-full rounded-full transition-all"
                  style={{ width: `${item.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
