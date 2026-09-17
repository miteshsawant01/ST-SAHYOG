import React, { useState } from 'react';
import { 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  UploadCloud, 
  ShieldCheck, 
  FileText, 
  CheckCircle2, 
  AlertCircle,
  Building,
  User,
  CreditCard,
  Send
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const ApplicationWizard: React.FC = () => {
  const { schemes, setApplicantTab, addAuditEntry } = useApp();
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Form states
  const [schemeId, setSchemeId] = useState('nfst');
  const [fullName, setFullName] = useState('Rahul Jadhav');
  const [subTribe, setSubTribe] = useState('Gond');
  const [isPVTG, setIsPVTG] = useState(false);
  const [state, setState] = useState('Maharashtra');
  const [district, setDistrict] = useState('Gadchiroli');
  const [institution, setInstitution] = useState('Indian Institute of Technology (IIT) Kharagpur');
  const [course, setCourse] = useState('Ph.D. in Environmental Biotechnology');
  const [pgMarks, setPgMarks] = useState('88.4');
  const [income, setIncome] = useState('180000');
  const [accountNo, setAccountNo] = useState('XXXX-XXXX-4902');
  const [ifsc, setIfsc] = useState('SBIN0000202');
  const [declaration, setDeclaration] = useState(false);

  const steps = [
    { num: 1, title: 'Scheme' },
    { num: 2, title: 'Personal & Tribal' },
    { num: 3, title: 'Academic' },
    { num: 4, title: 'Income & Bank' },
    { num: 5, title: 'Documents & AI Check' },
    { num: 6, title: 'Review & Submit' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    addAuditEntry(
      'Today',
      'Rahul Jadhav',
      'Student',
      'Submitted Fresh Scholarship Application',
      'ST26-10482 / NFST',
      'Electronic application and uploaded self-certified documents submitted for MoTA scrutiny.'
    );
  };

  if (submitted) {
    return (
      <div className="p-6 max-w-2xl mx-auto text-center space-y-5 bg-white rounded-3xl border border-slate-200 shadow-gov-lg my-8">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900">
          Application Submitted Successfully!
        </h2>
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs space-y-2 text-left font-mono">
          <div className="flex justify-between">
            <span className="text-slate-500">Application Reference ID:</span>
            <span className="font-bold text-gov-navy">ST26-10482</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Scheme:</span>
            <span className="font-bold text-slate-900">National Fellowship for ST Students (NFST)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Submission Timestamp:</span>
            <span className="text-slate-800">{new Date().toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Initial AI Pre-Scrutiny:</span>
            <span className="text-emerald-700 font-bold">Passed (4 of 4 Docs Accepted)</span>
          </div>
        </div>
        <p className="text-xs text-slate-600">
          An acknowledgment SMS and DigiLocker receipt have been generated. You can track progress and deficiency requests in real-time.
        </p>
        <div className="flex justify-center gap-3 pt-3">
          <button
            onClick={() => setApplicantTab('track-application')}
            className="px-6 py-2.5 bg-gov-navy text-white text-xs font-bold rounded-xl hover:bg-blue-900 transition shadow-xs"
          >
            Track in Application Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="border-b border-slate-200 pb-3">
        <span className="text-[11px] font-bold text-blue-800 uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
          Application Wizard • Ministry of Tribal Affairs
        </span>
        <h1 className="text-2xl font-extrabold text-slate-900 mt-1">
          New Scholarship / Fellowship Application
        </h1>
        <p className="text-xs text-slate-500">
          Complete the multi-stage institutional application form with real-time AI sanity pre-checks.
        </p>
      </div>

      {/* Stepper Header */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between overflow-x-auto">
        {steps.map((s, idx) => (
          <div key={s.num} className="flex items-center gap-2 flex-shrink-0 px-2">
            <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
              currentStep > s.num 
                ? 'bg-emerald-600 text-white' 
                : currentStep === s.num 
                ? 'bg-gov-navy text-white ring-4 ring-blue-100' 
                : 'bg-slate-100 text-slate-400'
            }`}>
              {currentStep > s.num ? <Check className="w-4 h-4" /> : s.num}
            </div>
            <span className={`text-xs font-bold hidden sm:inline ${currentStep === s.num ? 'text-gov-navy' : 'text-slate-500'}`}>
              {s.title}
            </span>
            {idx < steps.length - 1 && (
              <div className="w-4 sm:w-8 h-0.5 bg-slate-200 ml-2" />
            )}
          </div>
        ))}
      </div>

      {/* Step Contents */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        {currentStep === 1 && (
          <div className="space-y-4">
            <h2 className="text-base font-bold text-slate-900">Step 1: Select Scheme</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {schemes.map(s => (
                <div 
                  key={s.id} 
                  onClick={() => setSchemeId(s.id)}
                  className={`p-4 rounded-2xl border cursor-pointer transition ${
                    schemeId === s.id 
                      ? 'border-gov-navy bg-blue-50/50 ring-2 ring-blue-900/20' 
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <span className="text-[10px] font-bold text-blue-800 bg-blue-100/70 px-2 py-0.5 rounded">
                    {s.category}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 mt-1">{s.name}</h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">{s.shortDesc}</p>
                  <p className="text-xs font-semibold text-emerald-800 mt-2 font-mono">{s.maxBenefit}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-4">
            <h2 className="text-base font-bold text-slate-900">Step 2: Personal & Tribal Profile</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Full Legal Name (as on Aadhaar)</label>
                <input 
                  type="text" 
                  value={fullName} 
                  onChange={e => setFullName(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Scheduled Tribe Sub-Community</label>
                <input 
                  type="text" 
                  value={subTribe} 
                  onChange={e => setSubTribe(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Domicile State</label>
                <input 
                  type="text" 
                  value={state} 
                  onChange={e => setState(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">District</label>
                <input 
                  type="text" 
                  value={district} 
                  onChange={e => setDistrict(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>
              <div className="sm:col-span-2 p-3 bg-amber-50 rounded-xl border border-amber-200 flex items-center gap-3">
                <input 
                  type="checkbox" 
                  id="pvtg"
                  checked={isPVTG} 
                  onChange={e => setIsPVTG(e.target.checked)}
                  className="w-4 h-4 text-gov-navy rounded"
                />
                <label htmlFor="pvtg" className="text-xs font-semibold text-amber-950">
                  Applicant belongs to Particularly Vulnerable Tribal Group (PVTG) – Eligible for 10-point bonus weightage
                </label>
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-4">
            <h2 className="text-base font-bold text-slate-900">Step 3: Academic Qualifications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="sm:col-span-2">
                <label className="block font-bold text-slate-700 mb-1">Admitted Institution</label>
                <input 
                  type="text" 
                  value={institution} 
                  onChange={e => setInstitution(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Enrolled Degree / Course</label>
                <input 
                  type="text" 
                  value={course} 
                  onChange={e => setCourse(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Qualifying Examination Marks (%)</label>
                <input 
                  type="text" 
                  value={pgMarks} 
                  onChange={e => setPgMarks(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="space-y-4">
            <h2 className="text-base font-bold text-slate-900">Step 4: Annual Income & DBT Mandate</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Annual Family Income (INR)</label>
                <input 
                  type="number" 
                  value={income} 
                  onChange={e => setIncome(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-mono"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Aadhaar Linked Bank Account</label>
                <input 
                  type="text" 
                  value={accountNo} 
                  disabled
                  className="w-full p-2.5 bg-slate-100 border border-slate-200 rounded-xl font-mono text-slate-500"
                />
              </div>
            </div>
            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-700 flex-shrink-0" />
              <span>NPCI Aadhaar Payment Bridge (APB) status: Active. PFMS automated disbursal supported.</span>
            </div>
          </div>
        )}

        {currentStep === 5 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold text-slate-900">Step 5: Document Upload & AI Sanity Check</h2>
              <span className="text-xs bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-bold">
                AI Vision Model v2.4 Ready
              </span>
            </div>
            <div className="space-y-2 text-xs">
              {[
                { title: 'ST Caste Certificate', file: 'Rahul_ST_Caste_Certificate_SDM.pdf', conf: '99%' },
                { title: 'Annual Income Certificate', file: 'Income_Certificate_2025_26_Scan.pdf', conf: '61% (Flagged Date)', alert: true },
                { title: 'Academic Marksheet', file: 'MSc_Biotechnology_Consolidated_Marksheet.pdf', conf: '98%' },
                { title: 'Ph.D. Enrolment Bonafide', file: 'IITKGP_PhD_Bonafide_Enrolment.pdf', conf: '97%' },
              ].map((doc, i) => (
                <div key={i} className={`p-3 rounded-xl border flex items-center justify-between ${doc.alert ? 'bg-amber-50/50 border-amber-200' : 'bg-slate-50 border-slate-200'}`}>
                  <div className="flex items-center gap-2.5">
                    <FileText className={`w-4 h-4 ${doc.alert ? 'text-amber-600' : 'text-slate-600'}`} />
                    <div>
                      <p className="font-bold text-slate-800">{doc.title}</p>
                      <p className="text-[10px] text-slate-500 font-mono">{doc.file}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`text-[11px] font-mono font-bold ${doc.alert ? 'text-amber-800' : 'text-emerald-700'}`}>
                      {doc.conf}
                    </span>
                    <p className="text-[10px] text-slate-400">Pre-Scan Verified</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentStep === 6 && (
          <div className="space-y-4">
            <h2 className="text-base font-bold text-slate-900">Step 6: Review & Statutory Declaration</h2>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs space-y-2">
              <p className="font-bold text-slate-800">Summary of Declarations:</p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li>Applicant: <strong>{fullName}</strong> ({subTribe} ST Community)</li>
                <li>Institution: <strong>{institution}</strong></li>
                <li>Target Scheme: <strong>National Fellowship for ST Students (NFST)</strong></li>
                <li>Reported Income: <strong>₹{Number(income).toLocaleString('en-IN')} / year</strong></li>
              </ul>
            </div>

            <div className="p-4 bg-blue-50/50 rounded-2xl border border-blue-200 flex items-start gap-3">
              <input 
                type="checkbox" 
                id="dec" 
                checked={declaration} 
                onChange={e => setDeclaration(e.target.checked)}
                className="w-4 h-4 mt-0.5 text-gov-navy rounded"
              />
              <label htmlFor="dec" className="text-xs text-slate-700 leading-relaxed font-medium">
                I hereby solemnly declare that the particulars provided above are true, complete and authentic. I understand that any false declaration will lead to immediate cancellation and recovery under Public Demands Recovery Act.
              </label>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
          <button
            type="button"
            disabled={currentStep === 1}
            onClick={() => setCurrentStep(prev => prev - 1)}
            className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Previous</span>
          </button>

          {currentStep < 6 ? (
            <button
              type="button"
              onClick={() => setCurrentStep(prev => prev + 1)}
              className="px-5 py-2.5 rounded-xl bg-gov-navy text-white text-xs font-bold hover:bg-blue-900 flex items-center gap-1.5 shadow-xs"
            >
              <span>Next Step</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              type="button"
              disabled={!declaration}
              onClick={handleSubmit}
              className="px-6 py-2.5 rounded-xl bg-emerald-700 text-white text-xs font-bold hover:bg-emerald-800 disabled:opacity-40 disabled:pointer-events-none flex items-center gap-2 shadow-xs"
            >
              <Send className="w-4 h-4" />
              <span>Submit Application with e-Sign</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
