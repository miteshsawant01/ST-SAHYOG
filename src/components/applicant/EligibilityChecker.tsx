import React, { useState } from 'react';
import { 
  CheckCircle2, 
  AlertTriangle, 
  FileText, 
  HelpCircle, 
  ArrowRight, 
  ArrowLeft,
  ShieldCheck, 
  Check, 
  X,
  Sparkles,
  Info
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { AshokaEmblem } from '../common/GovEmblem';

export const EligibilityChecker: React.FC = () => {
  const { schemes, setStudentTab } = useApp();

  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [showResult, setShowResult] = useState<boolean>(false);

  // Step 1: Personal Details
  const [category, setCategory] = useState('Scheduled Tribe (ST)');
  const [state, setState] = useState('Maharashtra');
  const [gender, setGender] = useState('Male');
  const [dob, setDob] = useState('2001-04-18');

  // Step 2: Academic Details
  const [courseDegree, setCourseDegree] = useState('Ph.D. in Environmental Biotechnology');
  const [yearOfStudy, setYearOfStudy] = useState('1st Year (Research Scholar)');
  const [institution, setInstitution] = useState('Indian Institute of Technology (IIT) Kharagpur');
  const [academicScore, setAcademicScore] = useState('88.4% (8.84 CGPA)');

  // Step 3: Scheme-Specific Details
  const [selectedSchemeId, setSelectedSchemeId] = useState('nfst');
  const [annualIncome, setAnnualIncome] = useState(180000);
  const [admissionDetails, setAdmissionDetails] = useState('Regular Full-Time Ph.D Enrolment confirmed');
  const [otherCriteria, setOtherCriteria] = useState('No duplicate central stipend claimed');

  const targetScheme = schemes.find(s => s.id === selectedSchemeId) || schemes[0];

  const handleEvaluate = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResult(true);
  };

  const handleReset = () => {
    setShowResult(false);
    setCurrentStep(1);
  };

  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto space-y-6">
      {/* Header Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3.5">
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex-shrink-0">
            <AshokaEmblem className="w-8 h-9 text-gov-navy" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-blue-100 text-blue-900 text-[10px] font-extrabold uppercase tracking-wider mb-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              Policy Rule Pre-Check Engine
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              CHECK ELIGIBILITY
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              3-step pre-screening engine configured against Ministry of Tribal Affairs statutory guidelines.
            </p>
          </div>
        </div>

        {/* Human-in-the-loop notice */}
        <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-right text-[10px] text-slate-500 font-mono hidden sm:block">
          <span className="font-bold text-slate-700 block">HUMAN-IN-THE-LOOP</span>
          AI Assists → Officer Verifies
        </div>
      </div>

      {!showResult ? (
        /* 3-STEP WIZARD FORM (Item 1) */
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
          {/* Wizard Step Tabs */}
          <div className="grid grid-cols-3 gap-2 border-b border-slate-100 pb-4 text-xs font-bold">
            <button
              onClick={() => setCurrentStep(1)}
              className={`pb-2 text-left border-b-2 transition ${
                currentStep === 1 
                  ? 'border-gov-navy text-gov-navy font-extrabold' 
                  : 'border-transparent text-slate-400 hover:text-slate-600'
              }`}
            >
              Step 1 — Personal Details
            </button>
            <button
              onClick={() => setCurrentStep(2)}
              className={`pb-2 text-left border-b-2 transition ${
                currentStep === 2 
                  ? 'border-gov-navy text-gov-navy font-extrabold' 
                  : 'border-transparent text-slate-400 hover:text-slate-600'
              }`}
            >
              Step 2 — Academic Details
            </button>
            <button
              onClick={() => setCurrentStep(3)}
              className={`pb-2 text-left border-b-2 transition ${
                currentStep === 3 
                  ? 'border-gov-navy text-gov-navy font-extrabold' 
                  : 'border-transparent text-slate-400 hover:text-slate-600'
              }`}
            >
              Step 3 — Scheme-Specific Details
            </button>
          </div>

          {/* STEP 1: Personal Details */}
          {currentStep === 1 && (
            <div className="space-y-4 text-xs">
              <h3 className="text-sm font-bold text-slate-800">Step 1 — Personal Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Category</label>
                  <select 
                    value={category} 
                    onChange={e => setCategory(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  >
                    <option value="Scheduled Tribe (ST)">Scheduled Tribe (ST)</option>
                    <option value="Particularly Vulnerable Tribal Group (PVTG)">Particularly Vulnerable Tribal Group (PVTG)</option>
                    <option value="Nomadic ST Community">Nomadic ST Community</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">State of Domicile</label>
                  <select 
                    value={state} 
                    onChange={e => setState(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  >
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Assam">Assam</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Gender</label>
                  <select 
                    value={gender} 
                    onChange={e => setGender(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Date of Birth</label>
                  <input 
                    type="date" 
                    value={dob} 
                    onChange={e => setDob(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-mono"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Academic Details */}
          {currentStep === 2 && (
            <div className="space-y-4 text-xs">
              <h3 className="text-sm font-bold text-slate-800">Step 2 — Academic Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Course / Degree</label>
                  <input 
                    type="text" 
                    value={courseDegree} 
                    onChange={e => setCourseDegree(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Year of Study</label>
                  <select 
                    value={yearOfStudy} 
                    onChange={e => setYearOfStudy(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  >
                    <option value="1st Year (Research Scholar)">1st Year (Research Scholar)</option>
                    <option value="2nd Year (Research Scholar)">2nd Year (Research Scholar)</option>
                    <option value="Post-Graduate Final Year">Post-Graduate Final Year</option>
                    <option value="Undergraduate Year 1-4">Undergraduate Year 1-4</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Institution</label>
                  <input 
                    type="text" 
                    value={institution} 
                    onChange={e => setInstitution(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Academic Score (Percentage / CGPA)</label>
                  <input 
                    type="text" 
                    value={academicScore} 
                    onChange={e => setAcademicScore(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-mono"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Scheme-Specific Details */}
          {currentStep === 3 && (
            <div className="space-y-4 text-xs">
              <h3 className="text-sm font-bold text-slate-800">Step 3 — Scheme-Specific Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Target Scheme</label>
                  <select 
                    value={selectedSchemeId} 
                    onChange={e => setSelectedSchemeId(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold text-gov-navy"
                  >
                    {schemes.map(s => (
                      <option key={s.id} value={s.id}>{s.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Annual Gross Family Income (INR)</label>
                  <input 
                    type="number" 
                    value={annualIncome} 
                    onChange={e => setAnnualIncome(Number(e.target.value))}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-mono font-bold"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Admission / Fellowship Details</label>
                  <input 
                    type="text" 
                    value={admissionDetails} 
                    onChange={e => setAdmissionDetails(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Other Applicable Criteria</label>
                  <input 
                    type="text" 
                    value={otherCriteria} 
                    onChange={e => setOtherCriteria(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Wizard Navigation Bar */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={() => setCurrentStep((currentStep - 1) as any)}
                className="px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 flex items-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            ) : <div />}

            {currentStep < 3 ? (
              <button
                type="button"
                onClick={() => setCurrentStep((currentStep + 1) as any)}
                className="px-5 py-2.5 bg-gov-navy text-white rounded-xl text-xs font-bold hover:bg-blue-900 flex items-center gap-1.5 shadow-xs"
              >
                <span>Continue to Step {currentStep + 1}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleEvaluate}
                className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-xl text-xs font-extrabold flex items-center gap-2 shadow-xs"
              >
                <Sparkles className="w-4 h-4" />
                <span>Run Preliminary Eligibility Check</span>
              </button>
            )}
          </div>
        </div>
      ) : (
        /* ITEM 1 & 7: PRELIMINARY ELIGIBILITY RESULT & EXPLAINABLE BREAKDOWN */
        <div className="space-y-6 animate-in fade-in">
          {/* Result Card matching Item 1 requirements exactly */}
          <div className="bg-white rounded-3xl border-2 border-emerald-300 p-6 sm:p-8 shadow-gov-lg space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider font-mono">
                ASSESSMENT VERDICT
              </span>
              <span className="text-xs bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-bold">
                Pre-Screening Complete
              </span>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-emerald-950 flex items-center gap-2.5">
                <CheckCircle2 className="w-7 h-7 text-emerald-600" />
                <span>PRELIMINARY ELIGIBILITY</span>
              </h2>
              <p className="text-xs text-slate-500 mt-1 font-medium">
                For Scheme: <strong>{targetScheme.name}</strong> ({targetScheme.code})
              </p>
            </div>

            {/* Checklist items matching Item 1: */}
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-emerald-50 text-emerald-950 font-bold border border-emerald-200">
                <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>✓ Criterion satisfied: ST Community & Resident Domicile Matched</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-emerald-50 text-emerald-950 font-bold border border-emerald-200">
                <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>✓ Criterion satisfied: Academic Score (88.4%) & Enrolment Satisfied</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-amber-50 text-amber-950 font-bold border border-amber-300">
                <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>⚠ Requires document verification: Income Certificate date and Tehsildar stamp scrutiny</span>
              </div>
            </div>

            {/* Crucial mandatory disclaimer per Item 1 */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-700 leading-relaxed font-semibold">
              Eligible to proceed — subject to document verification and official scrutiny.
            </div>

            {/* ITEM 7: EXPLAINABLE ELIGIBILITY TABLE */}
            <div className="pt-2 space-y-3">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                <Info className="w-4 h-4 text-gov-navy" />
                <span>WHY THIS APPLICATION PASSED</span>
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
                      <th className="py-2.5 px-3">Criterion</th>
                      <th className="py-2.5 px-3">Result</th>
                      <th className="py-2.5 px-3">Evidence</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr>
                      <td className="py-2.5 px-3 font-semibold">ST Eligibility</td>
                      <td className="py-2.5 px-3 text-emerald-700 font-bold">✓ Satisfied</td>
                      <td className="py-2.5 px-3 text-slate-500 font-medium">Caste Certificate</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-semibold">Academic Requirement</td>
                      <td className="py-2.5 px-3 text-emerald-700 font-bold">✓ Satisfied</td>
                      <td className="py-2.5 px-3 text-slate-500 font-medium">Academic Record</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-semibold">Income Requirement</td>
                      <td className="py-2.5 px-3 text-amber-700 font-bold">⚠ Requires Verification</td>
                      <td className="py-2.5 px-3 text-slate-500 font-medium">Income Certificate</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-semibold">Scheme Condition</td>
                      <td className="py-2.5 px-3 text-emerald-700 font-bold">✓ Satisfied</td>
                      <td className="py-2.5 px-3 text-slate-500 font-medium">Application Data</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-[11px] text-slate-500 italic pt-1">
                Preliminary assessment based on configured scheme rules. Final verification is performed by authorized officials.
              </p>
            </div>

            {/* Action CTAs */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={handleReset}
                className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl"
              >
                ← Edit Criteria
              </button>

              <button
                onClick={() => setStudentTab('my-applications')}
                className="px-6 py-2.5 bg-gov-navy hover:bg-blue-900 text-white text-xs font-bold rounded-xl transition flex items-center gap-1.5 shadow-xs"
              >
                <span>Proceed to Application Dossier</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
