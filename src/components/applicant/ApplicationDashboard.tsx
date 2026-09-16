import React from 'react';
import { 
  CheckCircle, 
  Clock, 
  Circle, 
  AlertTriangle, 
  FileText, 
  ArrowRight, 
  ExternalLink,
  ShieldCheck,
  Building2,
  Calendar,
  CreditCard,
  Download
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const ApplicationDashboard: React.FC = () => {
  const { application, setApplicantTab } = useApp();

  const openDeficiency = application.deficiencies.find(d => d.status === 'action_required');

  // Stages matching exact prompt specification
  const stages = [
    { key: 'SUBMITTED', label: 'Submitted', done: true, current: false, date: '02 Sep 2026' },
    { key: 'INITIAL_CHECK', label: 'Initial Check', done: true, current: false, date: '03 Sep 2026' },
    { key: 'AI_REVIEW', label: 'AI Document Review', done: true, current: false, date: '04 Sep 2026' },
    { 
      key: 'DOCUMENT_VERIFICATION', 
      label: 'Officer Verification', 
      done: application.overallStatus === 'Verified' || application.overallStatus === 'Selection Ready', 
      current: application.overallStatus !== 'Verified' && application.overallStatus !== 'Selection Ready',
      date: 'In Progress' 
    },
    { key: 'SELECTION', label: 'Selection', done: false, current: false, date: 'Pending' },
    { key: 'FINAL_COMMUNICATION', label: 'Final Communication', done: false, current: false, date: 'Pending' },
  ];

  return (
    <div className="p-4 sm:p-6 max-w-5xl mx-auto space-y-6">
      {/* Welcome Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-4">
        <div>
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Applicant Dashboard
          </span>
          <h1 className="text-2xl font-extrabold text-slate-900 mt-0.5">
            Welcome, {application.applicantName}
          </h1>
          <p className="text-xs text-slate-500">
            Enrolled in {application.course} at {application.institution}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={() => setApplicantTab('document-assistant')}
            className="px-3.5 py-2 text-xs font-bold text-gov-navy bg-white border border-slate-200 hover:bg-slate-50 rounded-xl transition flex items-center gap-1.5 shadow-2xs"
          >
            <FileText className="w-4 h-4" />
            <span>Document Centre</span>
          </button>
          <button 
            onClick={() => window.print()}
            className="px-3.5 py-2 text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-xl transition flex items-center gap-1.5 shadow-2xs"
          >
            <Download className="w-4 h-4" />
            <span>Download Dossier</span>
          </button>
        </div>
      </div>

      {/* Deficiency Action Required Callout if Open */}
      {openDeficiency && (
        <div className="bg-rose-50 border-2 border-rose-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm animate-pulse">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-rose-500 text-white rounded-xl">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-extrabold bg-rose-600 text-white px-2 py-0.5 rounded uppercase tracking-wider">
                  ACTION REQUIRED
                </span>
                <span className="text-xs font-bold text-rose-900">{openDeficiency.docTitle}</span>
              </div>
              <p className="text-xs text-rose-800 mt-1 font-medium">
                {openDeficiency.issue}
              </p>
            </div>
          </div>
          <button
            onClick={() => setApplicantTab('deficiency-centre')}
            className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-xl transition flex items-center gap-1.5 shadow-sm whitespace-nowrap"
          >
            <span>Resolve in Deficiency Centre</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* 3 KPI Status Cards matching exact prompt specification */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card 1: Application ID */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Application ID
          </span>
          <div className="my-2">
            <h2 className="text-2xl font-mono font-extrabold text-gov-navy tracking-tight">
              {application.id}
            </h2>
            <p className="text-xs text-slate-500 mt-0.5 font-medium">
              {application.schemeName}
            </p>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-emerald-700 font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>DigiLocker Verified</span>
          </div>
        </div>

        {/* Card 2: Current Stage */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Current Stage
          </span>
          <div className="my-2">
            <h2 className="text-xl font-extrabold text-amber-600 tracking-tight flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping" />
              {application.currentStage.replace(/_/g, ' ')}
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Assigned to MoTA Scrutiny Cell (Desk 4)
            </p>
          </div>
          <div className="text-[11px] text-slate-400">
            Last updated today at 14:41 IST
          </div>
        </div>

        {/* Card 3: Completion Progress Bar */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Completion
            </span>
            <span className="text-sm font-extrabold text-gov-navy font-mono">
              {application.completionPercentage}%
            </span>
          </div>
          <div className="my-2">
            {/* Visual Progress Bar representation */}
            <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden border border-slate-200">
              <div 
                className="bg-gov-navy h-full rounded-full transition-all duration-500" 
                style={{ width: `${application.completionPercentage}%` }}
              />
            </div>
            <p className="text-xs text-slate-500 mt-2 font-mono">
              ████████████░ {application.completionPercentage}%
            </p>
          </div>
          <div className="text-[11px] text-slate-400">
            Estimated decision time: 3-5 working days
          </div>
        </div>
      </div>

      {/* Timeline Card matching exact prompt specification */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h3 className="text-sm font-bold text-slate-900">
            Application Verification Timeline
          </h3>
          <span className="text-xs text-slate-500">
            Reference No: MoTA-ACK-2026-9812
          </span>
        </div>

        {/* Horizontal / Vertical Stepper */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-3 relative">
          {stages.map((stage, idx) => (
            <div key={stage.key} className="flex flex-col items-center text-center p-2 rounded-xl bg-slate-50 border border-slate-100 relative">
              {/* Connector line for desktop */}
              {idx < stages.length - 1 && (
                <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-slate-200 -z-0" />
              )}
              
              <div className="z-10 mb-2">
                {stage.done ? (
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                    ✓
                  </div>
                ) : stage.current ? (
                  <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-xs shadow-xs animate-pulse">
                    ●
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-400 flex items-center justify-center font-bold text-xs">
                    ○
                  </div>
                )}
              </div>

              <span className={`text-xs font-bold leading-tight ${stage.current ? 'text-amber-700' : stage.done ? 'text-slate-900' : 'text-slate-400'}`}>
                {stage.label}
              </span>
              <span className="text-[10px] text-slate-400 mt-1">
                {stage.date}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Institutional Beneficiary & DBT Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Academic Details */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs text-xs space-y-3">
          <h4 className="font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
            <Building2 className="w-4 h-4 text-gov-navy" />
            <span>Academic & Institutional Profile</span>
          </h4>
          <div className="grid grid-cols-2 gap-2 text-slate-600">
            <div>
              <p className="text-slate-400 text-[11px]">Institution</p>
              <p className="font-semibold text-slate-800">{application.institution}</p>
            </div>
            <div>
              <p className="text-slate-400 text-[11px]">Course</p>
              <p className="font-semibold text-slate-800">{application.course}</p>
            </div>
            <div>
              <p className="text-slate-400 text-[11px]">Academic Merit</p>
              <p className="font-semibold text-slate-800">{application.cgpaPercentage}</p>
            </div>
            <div>
              <p className="text-slate-400 text-[11px]">Tribal Sub-Caste</p>
              <p className="font-semibold text-slate-800">{application.stSubTribe}</p>
            </div>
          </div>
        </div>

        {/* DBT & Bank Status */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs text-xs space-y-3">
          <h4 className="font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-emerald-700" />
            <span>Direct Benefit Transfer (DBT) Mandate</span>
          </h4>
          <div className="grid grid-cols-2 gap-2 text-slate-600">
            <div>
              <p className="text-slate-400 text-[11px]">Aadhaar Seeding</p>
              <p className="font-semibold text-emerald-700 flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5" />
                Active (NPCI Linked)
              </p>
            </div>
            <div>
              <p className="text-slate-400 text-[11px]">Bank Account</p>
              <p className="font-semibold text-slate-800">{application.dbtBankName}</p>
            </div>
            <div>
              <p className="text-slate-400 text-[11px]">PFMS Registration</p>
              <p className="font-semibold text-slate-800">PFMS-ST-2026-VAL</p>
            </div>
            <div>
              <p className="text-slate-400 text-[11px]">Disbursement Mode</p>
              <p className="font-semibold text-slate-800">Direct Account Credit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
