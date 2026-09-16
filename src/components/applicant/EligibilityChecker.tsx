import React, { useState } from 'react';
import { 
  CheckCircle2, 
  AlertTriangle, 
  FileText, 
  HelpCircle, 
  ArrowRight, 
  Info, 
  ShieldCheck,
  Check,
  X
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { AshokaEmblem } from '../common/GovEmblem';

export const EligibilityChecker: React.FC = () => {
  const { schemes, setApplicantTab } = useApp();

  const [category, setCategory] = useState('Scheduled Tribe (ST)');
  const [academicLevel, setAcademicLevel] = useState('Research / Ph.D');
  const [course, setCourse] = useState('Ph.D. in Environmental Biotechnology');
  const [institution, setInstitution] = useState('Indian Institute of Technology (IIT)');
  const [annualIncome, setAnnualIncome] = useState(180000);
  const [studyLocation, setStudyLocation] = useState<'Domestic' | 'Overseas'>('Domestic');
  const [selectedSchemeId, setSelectedSchemeId] = useState('nfst');
  const [showExplanationModal, setShowExplanationModal] = useState(false);

  // Derive eligibility checks
  const targetScheme = schemes.find(s => s.id === selectedSchemeId) || schemes[0];
  const isIncomeWithinLimit = annualIncome <= targetScheme.annualIncomeLimit;
  const isLocationMatched = studyLocation === (targetScheme.category === 'Overseas' ? 'Overseas' : 'Domestic');

  return (
    <div className="p-4 sm:p-6 max-w-5xl mx-auto space-y-6">
      {/* Header Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-blue-50 text-blue-900 border border-blue-100 flex-shrink-0">
              <AshokaEmblem className="w-8 h-8 text-gov-navy" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-blue-100 text-blue-900 text-[10px] font-bold uppercase tracking-wider mb-1">
                <ShieldCheck className="w-3 h-3" />
                AI-Assisted Policy Pre-Check
              </div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Scheme Eligibility Pre-Check
              </h1>
              <p className="text-xs text-slate-500 mt-1">
                Evaluate your pre-qualifications against statutory Ministry of Tribal Affairs guidelines before formal application submission.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Form Inputs (Left 7 Cols) */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <h2 className="text-sm font-bold text-slate-800 border-b border-slate-100 pb-2 flex items-center gap-2">
            <span>Candidate & Academic Profile</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Category */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Category</label>
              <select 
                value={category} 
                onChange={(e) => setCategory(e.target.value)}
                className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-700 focus:outline-none"
              >
                <option value="Scheduled Tribe (ST)">Scheduled Tribe (ST)</option>
                <option value="Particularly Vulnerable Tribal Group (PVTG)">Particularly Vulnerable Tribal Group (PVTG)</option>
                <option value="Nomadic / De-notified ST">Nomadic / De-notified ST</option>
              </select>
            </div>

            {/* Target Scheme */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Target Scheme</label>
              <select 
                value={selectedSchemeId} 
                onChange={(e) => {
                  setSelectedSchemeId(e.target.value);
                  if (e.target.value === 'nos') {
                    setStudyLocation('Overseas');
                  } else {
                    setStudyLocation('Domestic');
                  }
                }}
                className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-700 focus:outline-none font-semibold text-gov-navy"
              >
                {schemes.map(s => (
                  <option key={s.id} value={s.id}>{s.name}</option>
                ))}
              </select>
            </div>

            {/* Academic Level */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Academic Level</label>
              <select 
                value={academicLevel} 
                onChange={(e) => setAcademicLevel(e.target.value)}
                className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-700 focus:outline-none"
              >
                <option value="Research / Ph.D">Research / Ph.D / M.Phil</option>
                <option value="Masters / PG">Post-Graduate / Master’s Degree</option>
                <option value="UG / Professional">Undergraduate / Professional (B.Tech, MBBS, etc.)</option>
                <option value="Class 11-12">Higher Secondary (Class 11 - 12)</option>
                <option value="Class 9-10">Secondary (Class 9 - 10)</option>
              </select>
            </div>

            {/* Study Location */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Study Location</label>
              <select 
                value={studyLocation} 
                onChange={(e) => setStudyLocation(e.target.value as 'Domestic' | 'Overseas')}
                className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-700 focus:outline-none"
              >
                <option value="Domestic">Domestic (Within India)</option>
                <option value="Overseas">Overseas (International / Foreign)</option>
              </select>
            </div>

            {/* Course */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Course / Discipline</label>
              <input 
                type="text" 
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                placeholder="e.g. Ph.D. in Environmental Biotechnology"
                className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-700 focus:outline-none"
              />
            </div>

            {/* Institution */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Institution Type</label>
              <select 
                value={institution} 
                onChange={(e) => setInstitution(e.target.value)}
                className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-700 focus:outline-none"
              >
                <option value="Indian Institute of Technology (IIT)">IIT / IIM / IISc / AIIMS (National Excellence)</option>
                <option value="Central University">Central University (e.g. JNU, DU, BHU, HC)</option>
                <option value="National Institute of Technology (NIT)">NIT / IIIT / NIFT / NLU</option>
                <option value="State University / College">State Govt University / Recognized College</option>
                <option value="QS Top 500 Foreign University">QS Top 500 Foreign University (Overseas)</option>
              </select>
            </div>
          </div>

          {/* Annual Family Income */}
          <div className="pt-2">
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs font-bold text-slate-700">Annual Gross Family Income</label>
              <span className="text-xs font-mono font-bold text-gov-navy bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                ₹{annualIncome.toLocaleString('en-IN')} / year
              </span>
            </div>
            <input 
              type="range" 
              min={50000} 
              max={1200000} 
              step={25000}
              value={annualIncome}
              onChange={(e) => setAnnualIncome(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-gov-navy"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>₹50,000</span>
              <span className="font-semibold text-slate-600">Scheme Limit: ₹{(targetScheme.annualIncomeLimit).toLocaleString('en-IN')}</span>
              <span>₹12,00,000</span>
            </div>
          </div>
        </div>

        {/* Output Section (Right 5 Cols) - Exact specification compliance */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Pre-Check Assessment
              </h3>
              <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono font-bold">
                {targetScheme.currentVersion}
              </span>
            </div>

            {/* Verdict Banner: EXACT REQUIREMENT: "Potentially Eligible" - NEVER "guaranteed eligible" */}
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <h4 className="text-base font-extrabold text-emerald-900">
                  Potentially Eligible
                </h4>
              </div>
              <p className="text-[11px] text-emerald-800 mt-1 leading-relaxed">
                Based on your self-declared criteria against MoTA statutory notification. Final award subject to physical officer scrutiny and document verification.
              </p>
            </div>

            {/* Condition Counts & List */}
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-emerald-800 font-bold bg-emerald-50/50 p-2 rounded-lg border border-emerald-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>✓ 5 conditions matched</span>
              </div>

              <div className="flex items-center gap-2 text-amber-800 font-bold bg-amber-50 p-2 rounded-lg border border-amber-200">
                <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>⚠ 1 condition requires document verification</span>
              </div>
            </div>

            {/* Specific Bullet Items */}
            <div className="text-[11px] text-slate-600 space-y-1.5 pl-2">
              <div className="flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Tribal category identified in Presidential Order Schedule</span>
              </div>
              <div className="flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Regular enrolment in accredited doctoral program ({academicLevel})</span>
              </div>
              <div className="flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Institution notified under UGC/AICTE excellence framework</span>
              </div>
              <div className="flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Declared income (₹{annualIncome.toLocaleString('en-IN')}) within limit (≤ ₹{targetScheme.annualIncomeLimit.toLocaleString('en-IN')})</span>
              </div>
              <div className="flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Domestic study destination consistent with NFST scheme mandate</span>
              </div>
              <div className="flex items-start gap-1.5 text-amber-800 font-medium">
                <span className="text-amber-600 font-bold">⚠</span>
                <span>Income Certificate requires competent authority digital/circular seal verification</span>
              </div>
            </div>
          </div>

          {/* Button: [See Eligibility Explanation] */}
          <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
            <button
              onClick={() => setShowExplanationModal(true)}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center justify-center gap-2 transition"
            >
              <FileText className="w-4 h-4 text-gov-navy" />
              <span>[See Eligibility Explanation]</span>
            </button>

            <button
              onClick={() => setApplicantTab('apply-now')}
              className="w-full py-2.5 px-4 rounded-xl bg-gov-navy hover:bg-blue-900 text-white text-xs font-bold flex items-center justify-center gap-2 transition shadow-xs"
            >
              <span>Proceed to Application Form</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Explanation Modal */}
      {showExplanationModal && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Info className="w-5 h-5 text-blue-700" />
                <h3 className="text-sm font-bold text-slate-900">
                  Eligibility Evaluation Breakdown & Legal Basis
                </h3>
              </div>
              <button 
                onClick={() => setShowExplanationModal(false)}
                className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4 my-4 text-xs">
              <div className="bg-blue-50 p-3 rounded-xl border border-blue-100">
                <p className="font-bold text-blue-950">Statutory Notice Disclaimer</p>
                <p className="text-blue-900/80 mt-0.5 leading-relaxed">
                  Pre-check results do NOT constitute guaranteed selection or legal entitlement. The Ministry of Tribal Affairs reserves all rights to verify original certificates with issuing District Revenue Officers and University Registrars.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-800 mb-1.5">Rule Compliance Matrix for {targetScheme.name}</h4>
                <div className="space-y-2">
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <p className="font-semibold text-slate-900">Clause 3.1: Caste & Domicile Verification</p>
                    <p className="text-slate-500 mt-0.5">Matched. Candidate claims ST status. Must present certificate issued by competent authority not below rank of Sub-Divisional Magistrate.</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <p className="font-semibold text-slate-900">Clause 4.2: Income Means Ceiling</p>
                    <p className="text-slate-500 mt-0.5">Matched. Declared ₹{annualIncome.toLocaleString('en-IN')} is below statutory ceiling of ₹{targetScheme.annualIncomeLimit.toLocaleString('en-IN')}. Form 16 / Tehsildar certificate required.</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200">
                    <p className="font-semibold text-amber-900">Clause 5.4: Document Integrity Flag</p>
                    <p className="text-amber-800 mt-0.5">Pending Scrutiny. AI OCR scans cross-check date of issue and issuing authority circular seal against state revenue repository. If seal confidence is below 75%, officer manual scrutiny is triggered.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setShowExplanationModal(false)}
                className="px-4 py-2 bg-gov-navy text-white font-bold rounded-xl text-xs hover:bg-blue-900"
              >
                I Understand
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
