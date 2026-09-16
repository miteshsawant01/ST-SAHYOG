import React from 'react';
import { 
  Users, 
  Clock, 
  AlertTriangle, 
  FileCheck, 
  CheckCircle2, 
  IndianRupee, 
  ArrowRight, 
  TrendingUp, 
  ShieldAlert, 
  Sliders, 
  Layers,
  ChevronRight,
  Filter
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { AshokaEmblem } from '../common/GovEmblem';

export const AdminDashboard: React.FC = () => {
  const { setAdminTab, setActiveReviewAppId, queue, schemeConfig } = useApp();

  const kpis = [
    { label: 'Total Applications', value: '48,290', icon: Users, change: '+12% from last cycle', color: 'text-blue-900', bg: 'bg-blue-50' },
    { label: 'Pending Scrutiny', value: '1,842', icon: Clock, change: '14 officers assigned', color: 'text-amber-800', bg: 'bg-amber-50' },
    { label: 'AI Flagged', value: '324', icon: AlertTriangle, change: 'OCR confidence < 75%', color: 'text-rose-700', bg: 'bg-rose-50' },
    { label: 'Deficient', value: '415', icon: AlertTriangle, change: 'Notices dispatched', color: 'text-purple-800', bg: 'bg-purple-50' },
    { label: 'Verification Pending', value: '890', icon: FileCheck, change: 'Desk review stage', color: 'text-sky-800', bg: 'bg-sky-50' },
    { label: 'Selection-Ready', value: '2,150', icon: CheckCircle2, change: 'Composite score computed', color: 'text-emerald-800', bg: 'bg-emerald-50' },
  ];

  const tribalStates = [
    { state: 'Odisha', count: '9,410', pct: 28, pvtg: '13 Groups' },
    { state: 'Madhya Pradesh', count: '8,820', pct: 24, pvtg: '3 Groups' },
    { state: 'Jharkhand', count: '7,430', pct: 20, pvtg: '9 Groups' },
    { state: 'Maharashtra', count: '6,120', pct: 16, pvtg: '3 Groups' },
    { state: 'North-East States', count: '5,940', pct: 12, pvtg: 'Multiple' },
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
                Live Scrutiny Cell • MoTA Desk 04
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Active Policy: {schemeConfig.version}
              </span>
            </div>
            <h1 className="text-2xl font-extrabold text-slate-900 mt-1">
              Command Dashboard & Scrutiny Queue
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Welcome, Shri Ramesh Sharma (MoTA-SCR-04). Unified AI-supported decision workstation for Tribal Scholarship disbursement.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start md:self-auto">
          <button
            onClick={() => setAdminTab('scheme-engine')}
            className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition flex items-center gap-1.5"
          >
            <Sliders className="w-4 h-4 text-gov-navy" />
            <span>Scheme Engine ({schemeConfig.version})</span>
          </button>
          <button
            onClick={() => setAdminTab('queue')}
            className="px-4 py-2 bg-gov-navy hover:bg-blue-900 text-white text-xs font-bold rounded-xl transition flex items-center gap-1.5 shadow-xs"
          >
            <Layers className="w-4 h-4" />
            <span>Open Scrutiny Queue</span>
          </button>
        </div>
      </div>

      {/* 6 Core KPIs Grid - Exact Prompt Specification */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
        {kpis.map((kpi, idx) => {
          const Icon = kpi.icon;
          return (
            <div 
              key={idx} 
              className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className={`w-8 h-8 rounded-xl ${kpi.bg} ${kpi.color} flex items-center justify-center mb-2`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block leading-tight">
                  {kpi.label}
                </span>
                <h3 className={`text-xl font-extrabold font-mono mt-1 ${kpi.color}`}>
                  {kpi.value}
                </h3>
              </div>
              <span className="text-[10px] text-slate-400 mt-2 font-medium">
                {kpi.change}
              </span>
            </div>
          );
        })}
      </div>

      {/* Urgent Scrutiny Priority & 3-Pane Launch Callout */}
      <div className="bg-gradient-to-r from-blue-900 to-gov-navy rounded-3xl p-6 text-white shadow-gov flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 bg-amber-400 text-slate-950 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider">
            <AlertTriangle className="w-3 h-3" />
            AI Discrepancy Flag Triage Priority
          </div>
          <h2 className="text-xl font-extrabold tracking-tight">
            Flagged Application #ST26-10482 (Gauri Agrawal)
          </h2>
          <p className="text-xs text-blue-100 leading-relaxed">
            AI Scrutiny Engine identified a 61% OCR confidence on the Income Certificate issue date. Candidate has uploaded a replacement certificate. Immediate officer review required to clear DBT sanction block.
          </p>
        </div>

        <button
          onClick={() => {
            setActiveReviewAppId('ST26-10482');
            setAdminTab('review');
          }}
          className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs rounded-xl transition flex items-center gap-2 shadow-sm whitespace-nowrap self-start lg:self-auto"
        >
          <span>Launch 3-Pane AI Review Workstation</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* 2-Column Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* State-wise ST Distribution */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                State-wise ST Application Distribution
              </h3>
              <p className="text-xs text-slate-500">Tracking saturation in 75 notified PVTG pockets</p>
            </div>
            <span className="text-xs font-bold text-gov-navy bg-blue-50 px-2.5 py-1 rounded-lg">
              Total ST: 48,290
            </span>
          </div>

          <div className="space-y-3">
            {tribalStates.map((st, i) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="font-bold text-slate-800">{st.state} <span className="text-[10px] text-slate-400 font-normal">({st.pvtg})</span></span>
                  <span className="font-mono font-semibold text-slate-700">{st.count} ({st.pct}%)</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-gov-navy h-full rounded-full"
                    style={{ width: `${st.pct * 3.5}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Queue Quick View */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-sm font-bold text-slate-900">
                Recent Queue Dossiers
              </h3>
              <button 
                onClick={() => setAdminTab('queue')}
                className="text-xs font-bold text-gov-navy hover:underline flex items-center gap-1"
              >
                <span>Full Queue</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>

            <div className="space-y-2.5">
              {queue.slice(0, 4).map((app) => (
                <div
                  key={app.id}
                  onClick={() => {
                    setActiveReviewAppId(app.id);
                    setAdminTab('review');
                  }}
                  className="p-3 rounded-xl border border-slate-100 hover:border-slate-300 hover:bg-slate-50/70 transition cursor-pointer flex items-center justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs text-slate-900">{app.applicantName}</span>
                      <span className="text-[10px] font-mono bg-slate-100 px-1.5 py-0.5 rounded text-slate-600">{app.id}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">{app.schemeName.slice(0, 32)}...</p>
                  </div>

                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    app.overallStatus === 'Deficiency Raised'
                      ? 'bg-rose-100 text-rose-800'
                      : app.overallStatus === 'Selection Ready'
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {app.overallStatus}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 text-center">
            <span className="text-[11px] text-slate-400">
              Scrutiny Queue synchronized with NIC central gateway.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
