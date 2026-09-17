import React from 'react';
import { 
  CheckCircle2, 
  AlertTriangle, 
  FileText, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Building2, 
  CreditCard,
  Download,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const ApplicationDashboard: React.FC = () => {
  const { application, setStudentTab } = useApp();

  const openDeficiency = application.deficiencies.find(d => d.status === 'action_required');

  // Item 2: EXACT STAGES LIST
  const trackerStages = [
    { num: '01', title: 'Application Submitted', state: 'done' },
    { num: '02', title: 'Document Review', state: 'done' },
    { num: '03', title: 'Eligibility Verification', state: 'current' }, // ● active
    { num: '04', title: 'Officer Verification', state: 'pending' },    // ○
    { num: '05', title: 'Selection', state: 'pending' },               // ○
    { num: '06', title: 'Final Status', state: 'pending' },            // ○
  ];

  return (
    <div className="p-4 sm:p-6 max-w-5xl mx-auto space-y-6">
      {/* Top Banner with Application ID */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
              Central Sector Scheme
            </span>
            <span className="text-xs font-mono font-bold text-slate-500">
              Cycle: AY 2026-27
            </span>
          </div>
          {/* ITEM 2: APPLICATION: ST26-DEMO001 */}
          <h1 className="text-2xl font-mono font-extrabold text-slate-900 mt-1">
            APPLICATION: {application.id}
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Applicant: <strong>{application.applicantName}</strong> • {application.schemeName}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setStudentTab('documents')}
            className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition flex items-center gap-1.5"
          >
            <FileText className="w-4 h-4" />
            <span>Document Centre</span>
          </button>
          <button
            onClick={() => window.print()}
            className="px-3.5 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold rounded-xl transition flex items-center gap-1.5 shadow-2xs"
          >
            <Download className="w-4 h-4" />
            <span>Print Dossier</span>
          </button>
        </div>
      </div>

      {/* Human in the Loop Banner - Item 12 */}
      <div className="p-3 bg-gradient-to-r from-blue-950 to-[#0f294a] text-amber-300 rounded-2xl flex items-center justify-between px-5 text-xs font-bold border border-blue-900 shadow-xs">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>AI ASSISTS → OFFICER REVIEWS → OFFICIAL DECIDES</span>
        </div>
        <span className="text-[10px] text-blue-200 hidden sm:inline font-normal">
          Authorized MoTA officers retain final selection authority
        </span>
      </div>

      {/* Deficiency Banner if open */}
      {openDeficiency && (
        <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-amber-500 text-white rounded-xl flex-shrink-0">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-extrabold bg-amber-600 text-white px-2 py-0.5 rounded uppercase tracking-wider">
                  ACTION REQUIRED
                </span>
                <span className="text-xs font-bold text-amber-950">{openDeficiency.docTitle}</span>
              </div>
              <p className="text-xs text-amber-900 mt-1 font-medium">
                {openDeficiency.issue}
              </p>
            </div>
          </div>
          <button
            onClick={() => setStudentTab('documents')}
            className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-xl transition flex items-center gap-1.5 shadow-xs whitespace-nowrap"
          >
            <span>Resolve Deficiency</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* ITEM 2: APPLICATION PROGRESS TRACKER */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div>
            <h2 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">
              Application Progress Tracker
            </h2>
            <p className="text-xs text-slate-500">
              End-to-end statutory verification workflow under Ministry of Tribal Affairs
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-extrabold text-gov-navy font-mono">
              Application Progress: 50%
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden border border-slate-200">
          <div 
            className="bg-gov-navy h-full rounded-full transition-all duration-700" 
            style={{ width: '50%' }}
          />
        </div>

        {/* 6 Stages Grid matching Item 2: */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 pt-2">
          {trackerStages.map((stage) => (
            <div 
              key={stage.num}
              className={`p-3 rounded-2xl border text-center flex flex-col items-center justify-between min-h-[110px] transition ${
                stage.state === 'current'
                  ? 'bg-amber-50/70 border-amber-300 ring-2 ring-amber-100'
                  : stage.state === 'done'
                  ? 'bg-emerald-50/50 border-emerald-200'
                  : 'bg-slate-50 border-slate-100 text-slate-400'
              }`}
            >
              <span className="text-[10px] font-mono font-bold text-slate-400">
                {stage.num}
              </span>

              <div className="my-1">
                {stage.state === 'done' ? (
                  <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shadow-xs mx-auto">
                    ✓
                  </div>
                ) : stage.state === 'current' ? (
                  <div className="w-7 h-7 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-xs shadow-xs mx-auto animate-pulse">
                    ●
                  </div>
                ) : (
                  <div className="w-7 h-7 rounded-full bg-slate-200 text-slate-400 flex items-center justify-center font-bold text-xs mx-auto">
                    ○
                  </div>
                )}
              </div>

              <span className={`text-[11px] font-bold leading-tight ${
                stage.state === 'current' ? 'text-amber-950 font-extrabold' :
                stage.state === 'done' ? 'text-slate-900' : 'text-slate-400'
              }`}>
                {stage.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ITEM 10: APPLICATION TIMELINE */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div>
            <h2 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <Clock className="w-4 h-4 text-gov-navy" />
              <span>APPLICATION TIMELINE</span>
            </h2>
            <p className="text-xs text-slate-500">
              Audit-verified timeline of submissions, AI-checks, deficiency alerts, and officer reviews
            </p>
          </div>
          <span className="text-[10px] font-mono font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
            Traceable & Auditable
          </span>
        </div>

        {/* Timeline Events matching Item 10 */}
        <div className="space-y-3 relative pl-4 border-l-2 border-slate-200 ml-3">
          {application.timeline.map((event, idx) => (
            <div key={idx} className="relative space-y-1">
              {/* Timeline marker icon */}
              <div className={`absolute -left-[23px] top-0.5 w-3.5 h-3.5 rounded-full border-2 border-white ${
                event.status === 'completed' ? 'bg-emerald-600' :
                event.status === 'warning' ? 'bg-amber-500 animate-pulse' :
                'bg-blue-600'
              }`} />

              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-gov-navy bg-blue-50 px-2 py-0.2 rounded">
                  {event.date}
                </span>
                <h4 className="text-xs font-bold text-slate-900">
                  {event.title} {event.status === 'completed' && '✓'} {event.status === 'warning' && '⚠'}
                </h4>
              </div>
              <p className="text-xs text-slate-600 pl-1 leading-relaxed">
                {event.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Academic & Bank DBT Mandate Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs text-xs space-y-2">
          <h4 className="font-bold text-slate-900 border-b border-slate-100 pb-1.5 flex items-center gap-1.5">
            <Building2 className="w-4 h-4 text-gov-navy" />
            <span>Academic Enrolment</span>
          </h4>
          <p className="font-semibold text-slate-800">{application.institution}</p>
          <p className="text-slate-500">{application.course}</p>
          <p className="text-[11px] text-slate-500">Merit: {application.cgpaPercentage}</p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs text-xs space-y-2">
          <h4 className="font-bold text-slate-900 border-b border-slate-100 pb-1.5 flex items-center gap-1.5">
            <CreditCard className="w-4 h-4 text-emerald-700" />
            <span>Direct Benefit Transfer (DBT) Mandate</span>
          </h4>
          <p className="font-semibold text-emerald-700 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Aadhaar APBS Link Active
          </p>
          <p className="text-slate-600">{application.dbtBankName}</p>
          <p className="text-[11px] text-slate-400">Zero physical visit disbursement</p>
        </div>
      </div>
    </div>
  );
};
