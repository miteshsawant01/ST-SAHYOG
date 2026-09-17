import React from 'react';
import { 
  FileText, 
  Search, 
  UploadCloud, 
  BarChart2, 
  AlertTriangle, 
  ArrowRight, 
  Clock, 
  CheckCircle2, 
  Layers,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { STUDENT_APPLICATIONS_LIST } from '../../data/mockData';

export const StudentDashboard: React.FC = () => {
  const { setStudentTab, application } = useApp();

  return (
    <div className="p-4 sm:p-6 max-w-5xl mx-auto space-y-6">
      {/* Header Banner - Item 8: WELCOME, STUDENT */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-100">
            Student Application Portal
          </span>
          <h1 className="text-2xl font-extrabold text-slate-900 mt-1">
            WELCOME, STUDENT (Rahul Jadhav)
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Applicant ID: ST-MH-994821 • Indian Institute of Technology (IIT) Kharagpur
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setStudentTab('track-status')}
            className="px-4 py-2 bg-gov-navy hover:bg-blue-900 text-white text-xs font-bold rounded-xl transition flex items-center gap-1.5 shadow-xs"
          >
            <BarChart2 className="w-4 h-4" />
            <span>Track Application (ST26-DEMO001)</span>
          </button>
        </div>
      </div>

      {/* Item 8: Your Applications List */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h2 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-2">
            <Layers className="w-4 h-4 text-gov-navy" />
            <span>Your Applications</span>
          </h2>
          <span className="text-xs text-slate-400 font-mono">Academic Cycle 2026</span>
        </div>

        <div className="space-y-3">
          {STUDENT_APPLICATIONS_LIST.map((app) => (
            <div 
              key={app.id}
              className="p-4 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xs transition bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-mono font-bold text-xs text-gov-navy">{app.id}</span>
                  <span className="text-xs font-bold text-slate-900">{app.schemeName} — {app.cycle}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${app.badgeColor}`}>
                    {app.status}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">Progress: {app.progress}%</span>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-auto">
                {app.status === 'Document Correction Required' ? (
                  <button
                    onClick={() => setStudentTab('documents')}
                    className="px-3.5 py-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold transition flex items-center gap-1 shadow-2xs"
                  >
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Resolve Deficiency</span>
                  </button>
                ) : (
                  <button
                    onClick={() => setStudentTab('track-status')}
                    className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition flex items-center gap-1"
                  >
                    <span>{app.action}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Item 8: QUICK ACTIONS */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-4">
        <h2 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">
          QUICK ACTIONS
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-bold">
          {/* Action 1 */}
          <div
            onClick={() => setStudentTab('check-eligibility')}
            className="cursor-pointer p-4 rounded-2xl bg-blue-50/60 border border-blue-100 hover:border-blue-300 hover:shadow-xs transition text-center space-y-2 group"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center mx-auto group-hover:scale-105 transition">
              <Search className="w-5 h-5" />
            </div>
            <p className="text-slate-900">Check Eligibility</p>
            <span className="text-[10px] text-slate-500 block font-normal">Pre-screen criteria</span>
          </div>

          {/* Action 2 */}
          <div
            onClick={() => setStudentTab('explore-schemes')}
            className="cursor-pointer p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 hover:border-emerald-300 hover:shadow-xs transition text-center space-y-2 group"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center mx-auto group-hover:scale-105 transition">
              <FileText className="w-5 h-5" />
            </div>
            <p className="text-slate-900">Apply for Scheme</p>
            <span className="text-[10px] text-slate-500 block font-normal">Fresh application</span>
          </div>

          {/* Action 3 */}
          <div
            onClick={() => setStudentTab('documents')}
            className="cursor-pointer p-4 rounded-2xl bg-amber-50/60 border border-amber-100 hover:border-amber-300 hover:shadow-xs transition text-center space-y-2 group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#e8701a] text-white flex items-center justify-center mx-auto group-hover:scale-105 transition">
              <UploadCloud className="w-5 h-5" />
            </div>
            <p className="text-slate-900">Upload Documents</p>
            <span className="text-[10px] text-slate-500 block font-normal">DigiLocker / Manual</span>
          </div>

          {/* Action 4 */}
          <div
            onClick={() => setStudentTab('track-status')}
            className="cursor-pointer p-4 rounded-2xl bg-purple-50/60 border border-purple-100 hover:border-purple-300 hover:shadow-xs transition text-center space-y-2 group"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center mx-auto group-hover:scale-105 transition">
              <BarChart2 className="w-5 h-5" />
            </div>
            <p className="text-slate-900">Track Application</p>
            <span className="text-[10px] text-slate-500 block font-normal">Real-time status</span>
          </div>
        </div>
      </div>
    </div>
  );
};
