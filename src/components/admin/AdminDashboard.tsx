import React from 'react';
import { 
  Users, 
  Clock, 
  AlertTriangle, 
  FileCheck, 
  CheckCircle2, 
  ArrowRight, 
  TrendingUp, 
  ShieldAlert, 
  Sliders, 
  Layers,
  ChevronRight,
  Filter,
  ScanLine,
  Activity,
  Award
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { AshokaEmblem } from '../common/GovEmblem';

export const AdminDashboard: React.FC = () => {
  const { setOfficerTab, setActiveReviewAppId, queue, schemeConfig } = useApp();

  // Item 5: Exact 4 Top Metrics
  const coreStats = [
    { label: 'TOTAL APPLICATIONS', value: '12,482*', sub: 'Active academic cycle 2026-27', color: 'text-slate-900', bg: 'bg-blue-50 border-blue-200' },
    { label: 'PENDING VERIFICATION', value: '1,284*', sub: 'Awaiting officer scrutiny', color: 'text-amber-800', bg: 'bg-amber-50 border-amber-200' },
    { label: 'DEFICIENCIES', value: '436*', sub: 'Discrepancy notices issued', color: 'text-rose-800', bg: 'bg-rose-50 border-rose-200' },
    { label: 'UNDER REVIEW', value: '782*', sub: 'Officer desk review in-progress', color: 'text-purple-800', bg: 'bg-purple-50 border-purple-200' }
  ];

  // Item 5: Exact Scheme-wise applications
  const schemeWiseStats = [
    { name: 'Post-Matric Scholarship', count: 6420, formatted: '6,420', pct: 51.4, color: 'bg-blue-600' },
    { name: 'Pre-Matric Scholarship', count: 3110, formatted: '3,110', pct: 24.9, color: 'bg-emerald-600' },
    { name: 'Top Class Education', count: 1150, formatted: '1,150', pct: 9.2, color: 'bg-purple-600' },
    { name: 'National Fellowship', count: 1240, formatted: '1,240', pct: 9.9, color: 'bg-amber-600' },
    { name: 'National Overseas', count: 562, formatted: '562', pct: 4.5, color: 'bg-indigo-600' },
  ];

  // Item 5: Exact Application Pipeline
  const pipelineStages = [
    { name: 'Submitted', count: '12,482', desc: 'Registered & digitally sealed', active: false },
    { name: 'AI Review', count: '10,762', desc: 'OCR & validation complete', active: false },
    { name: 'Verification', count: '1,284', desc: 'Active officer scrutiny stage', active: true },
    { name: 'Selection', count: '2,150', desc: 'Merit list compiled for sanction', active: false },
  ];

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto space-y-6">
      {/* Top Welcome & Institutional Banner */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-2xl flex-shrink-0 text-gov-navy">
            <AshokaEmblem className="w-9 h-10" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                MoTA Operational Oversight Cell
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Active Cycle 2026-27 • Desk 04
              </span>
            </div>
            <h1 className="text-2xl font-extrabold text-slate-900 mt-1">
              MoTA APPLICATION COMMAND CENTER
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Unified administrative command interface for the Ministry of Tribal Affairs, Government of India.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start md:self-auto">
          <button
            onClick={() => setOfficerTab('ai-doc-review')}
            className="px-3.5 py-2 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 text-xs font-bold rounded-xl transition flex items-center gap-1.5"
          >
            <ScanLine className="w-4 h-4 text-amber-700" />
            <span>AI Document Review</span>
          </button>
          <button
            onClick={() => setOfficerTab('applications')}
            className="px-4 py-2 bg-gov-navy hover:bg-blue-900 text-white text-xs font-bold rounded-xl transition flex items-center gap-1.5 shadow-xs"
          >
            <Layers className="w-4 h-4" />
            <span>Applications Queue</span>
          </button>
        </div>
      </div>

      {/* Item 5: 4 Top Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {coreStats.map((item, idx) => (
          <div 
            key={idx} 
            className={`bg-white rounded-2xl border p-5 shadow-xs flex flex-col justify-between ${item.bg}`}
          >
            <div>
              <span className="text-[11px] font-extrabold tracking-wider uppercase text-slate-500 block">
                {item.label}
              </span>
              <h2 className={`text-3xl font-extrabold font-mono mt-1 ${item.color}`}>
                {item.value}
              </h2>
            </div>
            <p className="text-[11px] text-slate-500 mt-2 font-medium">
              {item.sub}
            </p>
          </div>
        ))}
      </div>

      {/* Item 5: Application Pipeline: Submitted → AI Review → Verification → Selection */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Application Pipeline Progression
            </h3>
            <p className="text-xs text-slate-500">Live operational lifecycle stages from digital submission to final sanction</p>
          </div>
          <span className="text-xs font-mono font-bold text-gov-navy bg-blue-50 px-2.5 py-1 rounded-lg">
            Pipeline: Submitted → AI Review → Verification → Selection
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {pipelineStages.map((stage, idx) => (
            <div 
              key={idx}
              className={`rounded-2xl p-4 border transition-all ${
                stage.active 
                  ? 'bg-amber-50/70 border-amber-300 ring-2 ring-amber-100' 
                  : 'bg-slate-50/70 border-slate-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-extrabold font-mono px-2 py-0.5 rounded ${
                  stage.active ? 'bg-amber-500 text-white' : 'bg-slate-200 text-slate-700'
                }`}>
                  STAGE 0{idx + 1}
                </span>
                <span className="text-sm font-mono font-extrabold text-slate-800">
                  {stage.count}
                </span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 mt-2 flex items-center gap-1.5">
                <span>{stage.name}</span>
                {stage.active && <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />}
              </h4>
              <p className="text-[11px] text-slate-500 mt-0.5">
                {stage.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 2-Column: Scheme-wise Breakdown & Flagged Triage Priority */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Item 5: Scheme-wise applications */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Scheme-wise Applications Breakdown
              </h3>
              <p className="text-xs text-slate-500">Distribution across central tribal scholarship portfolios</p>
            </div>
            <span className="text-xs font-mono font-bold text-slate-600 bg-slate-100 px-2 py-1 rounded-lg">
              Total: 12,482*
            </span>
          </div>

          <div className="space-y-4 pt-1">
            {schemeWiseStats.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="font-bold text-slate-800">{item.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-slate-900">{item.formatted}</span>
                    <span className="text-[10px] text-slate-400 font-mono">({item.pct}%)</span>
                  </div>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                  <div 
                    className={`${item.color} h-full rounded-full transition-all duration-500`}
                    style={{ width: `${item.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>Synchronized with DBT Bharat Gateway</span>
            <span className="font-mono text-emerald-700 font-bold">● NIC Central Live</span>
          </div>
        </div>

        {/* Urgent Action / Scrutiny Focus Dossier */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
                <h3 className="text-sm font-bold text-slate-900">
                  Flagged Scrutiny Priority
                </h3>
              </div>
              <span className="text-[10px] font-mono font-bold bg-rose-100 text-rose-800 px-2 py-0.5 rounded">
                Action Required
              </span>
            </div>

            {/* Target Application Dossier */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-blue-900 to-gov-navy text-white space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-mono font-bold bg-white/20 px-2 py-0.5 rounded">
                    ST26-DEMO001
                  </span>
                  <h4 className="text-base font-extrabold mt-1">Rahul Jadhav</h4>
                  <p className="text-xs text-blue-200">National Fellowship for ST Students (NFST)</p>
                </div>
                <span className="text-xs font-mono font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded">
                  Income Discrepancy
                </span>
              </div>

              <p className="text-xs text-blue-100 leading-relaxed">
                AI Scrutiny Engine identified a 61% OCR confidence on the Income Certificate issue date. Candidate has uploaded replacement certificate. Ready for desk verification.
              </p>

              <div className="pt-2 flex flex-wrap gap-2">
                <button
                  onClick={() => {
                    setActiveReviewAppId('ST26-DEMO001');
                    setOfficerTab('ai-doc-review');
                  }}
                  className="px-3.5 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl transition flex items-center gap-1.5 shadow-sm"
                >
                  <ScanLine className="w-3.5 h-3.5" />
                  <span>Open AI Document Review</span>
                </button>
                <button
                  onClick={() => {
                    setActiveReviewAppId('ST26-DEMO001');
                    setOfficerTab('selection-support');
                  }}
                  className="px-3.5 py-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl transition flex items-center gap-1.5"
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>Selection Review</span>
                </button>
              </div>
            </div>

            {/* Quick Summary of Queue */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center justify-between text-xs font-bold text-slate-600">
                <span>Recent Submissions in Queue</span>
                <button 
                  onClick={() => setOfficerTab('applications')}
                  className="text-blue-800 hover:underline flex items-center gap-0.5"
                >
                  <span>View All 1,284*</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>

              {queue.slice(0, 3).map((app) => (
                <div
                  key={app.id}
                  onClick={() => {
                    setActiveReviewAppId(app.id);
                    setOfficerTab('eligibility-review');
                  }}
                  className="p-2.5 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition cursor-pointer flex items-center justify-between text-xs"
                >
                  <div>
                    <span className="font-bold text-slate-800">{app.applicantName}</span>
                    <span className="text-[10px] text-slate-400 font-mono ml-2">{app.id}</span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                    {app.overallStatus}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
