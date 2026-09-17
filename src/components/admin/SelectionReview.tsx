import React, { useState } from 'react';
import { 
  Award, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  Clock, 
  ShieldCheck, 
  FileText, 
  Send, 
  ArrowRight, 
  Check, 
  User, 
  Building,
  GraduationCap
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const SelectionReview: React.FC = () => {
  const { 
    application, 
    recordSelectionAction, 
    setOfficerTab, 
    auditTrail 
  } = useApp();

  const [selectedAction, setSelectedAction] = useState<'Approve for Selection' | 'Request Clarification' | 'Reject'>('Approve for Selection');
  const [reasonInput, setReasonInput] = useState<string>(
    'All 4/4 statutory eligibility criteria and 5/5 statutory documents verified. Candidate recommended for National Fellowship sanction.'
  );
  const [submittedFeedback, setSubmittedFeedback] = useState<string | null>(null);

  const officerId = 'MoTA-OFFICER-04 (Ramesh Sharma)';
  const currentDate = '19 Sep 2026';

  const handleExecuteDecision = (e: React.FormEvent) => {
    e.preventDefault();
    recordSelectionAction(application.id, selectedAction, reasonInput);
    setSubmittedFeedback(`Action "${selectedAction}" executed and permanently committed to Audit Trail.`);
    setTimeout(() => setSubmittedFeedback(null), 5000);
  };

  return (
    <div className="p-4 sm:p-6 max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="border-b border-slate-200 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-purple-50 text-purple-900 border border-purple-200 text-[10px] font-extrabold uppercase tracking-wider mb-1">
            <Award className="w-3.5 h-3.5 text-purple-700" />
            <span>Selection & Sanction Committee Workstation</span>
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900">
            APPLICATION REVIEW
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Final statutory scrutiny prior to provisional fellowship award and DBT disbursement sanction.
          </p>
        </div>

        <button
          onClick={() => setOfficerTab('audit-trail')}
          className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition flex items-center gap-1.5 self-start sm:self-auto"
        >
          <Clock className="w-3.5 h-3.5 text-gov-navy" />
          <span>View Audit Trail</span>
        </button>
      </div>

      {/* Success Notification */}
      {submittedFeedback && (
        <div className="bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-4 text-xs font-bold text-emerald-900 flex items-center justify-between shadow-xs animate-in fade-in">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-700" />
            <span>{submittedFeedback}</span>
          </div>
          <button
            onClick={() => setOfficerTab('audit-trail')}
            className="text-xs font-bold text-emerald-800 hover:underline flex items-center gap-1"
          >
            <span>Inspect Audit Entry</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Top Applicant Banner - Item 13 Exact Specs */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 text-gov-navy flex items-center justify-center font-bold text-lg">
              RJ
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-extrabold text-slate-900">
                  Applicant: Rahul Jadhav
                </h2>
                <span className="text-[11px] font-mono bg-slate-100 px-2 py-0.5 rounded text-slate-700 font-bold">
                  Application ID: ST26-DEMO001
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                National Fellowship for Higher Education of ST Students (NFST) • Ph.D in Computer Science & Engineering
              </p>
            </div>
          </div>

          <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 self-start sm:self-auto">
            {application.overallStatus}
          </span>
        </div>

        {/* 3 Core Verification Blocks - Item 13 Exact Specs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-1">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-900 block">
              Eligibility Status
            </span>
            <h3 className="text-base font-extrabold text-emerald-900 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>Eligibility: 4/4 checks satisfied</span>
            </h3>
            <p className="text-[11px] text-emerald-700 font-medium">
              ST Community, PG Merit, Income & Age verified.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 space-y-1">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-900 block">
              Document Dossier
            </span>
            <h3 className="text-base font-extrabold text-blue-950 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-700" />
              <span>Documents: 5/5 reviewed</span>
            </h3>
            <p className="text-[11px] text-blue-700 font-medium">
              All certificates verified & PKI authenticated.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-200 space-y-1">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple-900 block">
              AI Scrutiny Analysis
            </span>
            <h3 className="text-base font-extrabold text-purple-950 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-purple-700" />
              <span>AI Findings: No unresolved flags</span>
            </h3>
            <p className="text-[11px] text-purple-700 font-medium">
              Deficiency resolved & verified by officer.
            </p>
          </div>
        </div>
      </div>

      {/* Detailed Checklists Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: 4/4 Eligibility Checklist */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center justify-between border-b border-slate-100 pb-2">
            <span>Statutory Eligibility Checks</span>
            <span className="text-emerald-700 font-mono text-[11px]">4 / 4 PASS</span>
          </h3>

          <div className="space-y-2 text-xs">
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start justify-between gap-2">
              <div>
                <p className="font-bold text-slate-800">1. ST Community & Caste Validity</p>
                <p className="text-[11px] text-slate-500">Gond Community, Maharashtra • PVTG Priority Affirmative</p>
              </div>
              <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Satisfied ✓</span>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start justify-between gap-2">
              <div>
                <p className="font-bold text-slate-800">2. Academic Eligibility & Qualification</p>
                <p className="text-[11px] text-slate-500">M.Tech Computer Science (8.4 CGPA &gt;= 55% ST Cutoff)</p>
              </div>
              <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Satisfied ✓</span>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start justify-between gap-2">
              <div>
                <p className="font-bold text-slate-800">3. Annual Family Income Ceiling</p>
                <p className="text-[11px] text-slate-500">Certified Income: ₹1,80,000 &lt;= Limit ₹6,00,000</p>
              </div>
              <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Satisfied ✓</span>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start justify-between gap-2">
              <div>
                <p className="font-bold text-slate-800">4. Age & Admission Enrollment Criteria</p>
                <p className="text-[11px] text-slate-500">Age: 25 Years • Registered Full-Time Ph.D Scholar</p>
              </div>
              <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Satisfied ✓</span>
            </div>
          </div>
        </div>

        {/* Right: 5/5 Documents Checklist */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center justify-between border-b border-slate-100 pb-2">
            <span>Documents Verification Status</span>
            <span className="text-emerald-700 font-mono text-[11px]">5 / 5 VERIFIED</span>
          </h3>

          <div className="space-y-2 text-xs">
            {application.documents.map((doc, idx) => (
              <div key={doc.id} className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="w-3.5 h-3.5 text-gov-navy" />
                  <div>
                    <p className="font-bold text-slate-800">{doc.title}</p>
                    <p className="text-[10px] text-slate-400 font-mono">{doc.fileName}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-bold text-emerald-700 text-[11px]">Reviewed ✓</span>
                  <p className="text-[10px] text-slate-400 font-mono">{doc.confidenceScore}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Item 13: Officer Actions & Audit Trail Logger */}
      <form onSubmit={handleExecuteDecision} className="bg-white rounded-2xl border-2 border-slate-200 p-6 shadow-xs space-y-5">
        <div className="border-b border-slate-100 pb-3">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
            Decision Workstation
          </span>
          <h3 className="text-lg font-extrabold text-slate-900 mt-0.5">
            Officer Actions & Official Determination
          </h3>
          <p className="text-xs text-slate-500">
            Every decision recorded below is cryptographically logged with Officer ID, Timestamp, Action type, and Official Reason.
          </p>
        </div>

        {/* 3 Action Buttons / Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <button
            type="button"
            onClick={() => setSelectedAction('Approve for Selection')}
            className={`p-4 rounded-xl border-2 text-left transition flex flex-col justify-between ${
              selectedAction === 'Approve for Selection'
                ? 'border-emerald-600 bg-emerald-50/70 ring-2 ring-emerald-100'
                : 'border-slate-200 hover:border-slate-300 bg-white'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider">
                [Approve for Selection]
              </span>
              <CheckCircle2 className={`w-4 h-4 ${selectedAction === 'Approve for Selection' ? 'text-emerald-700' : 'text-slate-300'}`} />
            </div>
            <p className="text-[11px] text-slate-600">
              Clear application for provisional selection and scholarship award sanction.
            </p>
          </button>

          <button
            type="button"
            onClick={() => setSelectedAction('Request Clarification')}
            className={`p-4 rounded-xl border-2 text-left transition flex flex-col justify-between ${
              selectedAction === 'Request Clarification'
                ? 'border-amber-500 bg-amber-50/70 ring-2 ring-amber-100'
                : 'border-slate-200 hover:border-slate-300 bg-white'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-amber-900 uppercase tracking-wider">
                [Request Clarification]
              </span>
              <AlertTriangle className={`w-4 h-4 ${selectedAction === 'Request Clarification' ? 'text-amber-700' : 'text-slate-300'}`} />
            </div>
            <p className="text-[11px] text-slate-600">
              Request supplementary clarification or institutional verification from university.
            </p>
          </button>

          <button
            type="button"
            onClick={() => setSelectedAction('Reject')}
            className={`p-4 rounded-xl border-2 text-left transition flex flex-col justify-between ${
              selectedAction === 'Reject'
                ? 'border-rose-600 bg-rose-50/70 ring-2 ring-rose-100'
                : 'border-slate-200 hover:border-slate-300 bg-white'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-rose-900 uppercase tracking-wider">
                [Reject — Record Reason]
              </span>
              <XCircle className={`w-4 h-4 ${selectedAction === 'Reject' ? 'text-rose-700' : 'text-slate-300'}`} />
            </div>
            <p className="text-[11px] text-slate-600">
              Disqualify application under statutory rules with mandatory official rationale.
            </p>
          </button>
        </div>

        {/* Reason / Official Memo Input */}
        <div className="space-y-1.5 text-xs">
          <label className="block font-bold text-slate-700">
            Official Reason & Decision Memo (Mandatory for Audit Trail)
          </label>
          <textarea
            rows={3}
            value={reasonInput}
            onChange={(e) => setReasonInput(e.target.value)}
            required
            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-medium focus:ring-2 focus:ring-blue-800"
            placeholder="State specific justification and rule clause under which this decision is made..."
          />
        </div>

        {/* Mandatory Recorded Metadata Preview */}
        <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div>
            <span className="text-[10px] text-slate-400 uppercase font-bold block">Officer ID</span>
            <span className="font-mono font-bold text-slate-800">{officerId}</span>
          </div>
          <div>
            <span className="text-[10px] text-slate-400 uppercase font-bold block">Date</span>
            <span className="font-mono font-bold text-slate-800">{currentDate}</span>
          </div>
          <div>
            <span className="text-[10px] text-slate-400 uppercase font-bold block">Action</span>
            <span className="font-bold text-gov-navy">{selectedAction}</span>
          </div>
          <div>
            <span className="text-[10px] text-slate-400 uppercase font-bold block">Target</span>
            <span className="font-mono font-bold text-slate-800">{application.id}</span>
          </div>
        </div>

        {/* Execution Submit Button */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Recorded immutably into central MoTA Audit Trail</span>
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-gov-navy hover:bg-blue-900 text-white font-extrabold text-xs rounded-xl transition flex items-center gap-2 shadow-xs"
          >
            <Send className="w-4 h-4" />
            <span>Confirm & Record into Audit Trail</span>
          </button>
        </div>
      </form>
    </div>
  );
};
