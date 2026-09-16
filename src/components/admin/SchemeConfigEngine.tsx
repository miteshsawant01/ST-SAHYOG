import React, { useState } from 'react';
import { 
  Sliders, 
  Save, 
  GitBranch, 
  History, 
  CheckCircle2, 
  FileText, 
  Clock, 
  ShieldCheck, 
  Layers, 
  Bell, 
  Calendar,
  AlertCircle,
  Plus,
  Trash2,
  ChevronRight
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { SCHEME_CONFIG_HISTORY } from '../../data/mockData';

export const SchemeConfigEngine: React.FC = () => {
  const { schemeConfig, saveNewSchemeVersion, addAuditEntry } = useApp();

  const [schemeName, setSchemeName] = useState(schemeConfig.schemeName);
  const [incomeCeiling, setIncomeCeiling] = useState(schemeConfig.annualIncomeCeiling);
  const [minMarks, setMinMarks] = useState(schemeConfig.minGraduationMarks);
  const [pvtgBonus, setPvtgBonus] = useState(schemeConfig.pvtgWeightageBonus);
  const [femaleQuota, setFemaleQuota] = useState(schemeConfig.femaleQuotaPercentage);
  const [ocrCutoff, setOcrCutoff] = useState(schemeConfig.ocrConfidenceCutoff);
  const [allowDigiLocker, setAllowDigiLocker] = useState(schemeConfig.allowDigiLockerBypass);
  const [selectionFormula, setSelectionFormula] = useState(schemeConfig.selectionFormula);
  const [smsTemplate, setSmsTemplate] = useState(schemeConfig.notificationTemplateSMS);
  const [openDate, setOpenDate] = useState(schemeConfig.applicationOpenDate);
  const [closeDate, setCloseDate] = useState(schemeConfig.applicationCloseDate);

  const [newVersionInput, setNewVersionInput] = useState('v3.3');
  const [changeNoteInput, setChangeNoteInput] = useState('Updated OCR confidence cutoff and enhanced PVTG affirmative weighting.');
  const [showDiffModal, setShowDiffModal] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSaveVersion = (e: React.FormEvent) => {
    e.preventDefault();
    saveNewSchemeVersion(
      {
        schemeName,
        annualIncomeCeiling: incomeCeiling,
        minGraduationMarks: minMarks,
        pvtgWeightageBonus: pvtgBonus,
        femaleQuotaPercentage: femaleQuota,
        ocrConfidenceCutoff: ocrCutoff,
        allowDigiLockerBypass: allowDigiLocker,
        selectionFormula,
        notificationTemplateSMS: smsTemplate,
        applicationOpenDate: openDate,
        applicationCloseDate: closeDate
      },
      newVersionInput,
      changeNoteInput
    );
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 5000);
  };

  return (
    <div className="p-4 sm:p-6 max-w-6xl mx-auto space-y-6">
      {/* Top Banner with Version Control Header */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-extrabold uppercase tracking-wider text-purple-900 bg-purple-50 px-2 py-0.5 rounded border border-purple-200 flex items-center gap-1">
              <GitBranch className="w-3 h-3 text-purple-700" />
              Dynamic Rule Engine • Version Controlled
            </span>
            <span className="text-xs font-mono font-bold bg-gov-navy text-white px-2 py-0.5 rounded">
              Current: {schemeConfig.version}
            </span>
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900 mt-1">
            Scheme Configuration & Policy Engine
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Configure statutory eligibility, AI document validation cutoffs, multi-stage workflows, and quota formulas without modifying source code.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowDiffModal(true)}
            className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition flex items-center gap-1.5"
          >
            <History className="w-4 h-4 text-gov-navy" />
            <span>Version Diff (v3.1 vs v3.2)</span>
          </button>
        </div>
      </div>

      {saveSuccess && (
        <div className="bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-4 text-xs font-bold text-emerald-900 flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-5 h-5 text-emerald-700" />
          <span>
            Policy rules successfully compiled and committed as <strong>{schemeConfig.version}</strong>. Synchronized with live scrutiny pipeline.
          </span>
        </div>
      )}

      {/* Main Configuration Form */}
      <form onSubmit={handleSaveVersion} className="space-y-6">
        {/* Section 1: Scheme Identification */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
            <FileText className="w-4 h-4 text-gov-navy" />
            <h2 className="text-sm font-bold text-slate-900">1. Scheme Identification & Ministry Mandate</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Scheme Legal Title</label>
              <input 
                type="text" 
                value={schemeName}
                onChange={e => setSchemeName(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium"
              />
            </div>
            <div>
              <label className="block font-bold text-slate-700 mb-1">Ministry Division</label>
              <input 
                type="text" 
                disabled 
                value="Scholarship Division, Ministry of Tribal Affairs (MoTA), Shastri Bhawan"
                className="w-full p-2.5 bg-slate-100 border border-slate-200 rounded-xl text-slate-500 font-medium"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Eligibility Rules */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
            <Sliders className="w-4 h-4 text-gov-navy" />
            <h2 className="text-sm font-bold text-slate-900">2. Eligibility Rules & Statutory Thresholds</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Annual Gross Family Income Ceiling (INR)</label>
              <input 
                type="number" 
                value={incomeCeiling}
                onChange={e => setIncomeCeiling(Number(e.target.value))}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-mono font-bold text-gov-navy"
              />
              <p className="text-[10px] text-slate-400 mt-1">Previous ceiling: ₹5,00,000</p>
            </div>
            <div>
              <label className="block font-bold text-slate-700 mb-1">Min. PG Qualifying Marks (%)</label>
              <input 
                type="number" 
                value={minMarks}
                onChange={e => setMinMarks(Number(e.target.value))}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-mono font-bold text-gov-navy"
              />
              <p className="text-[10px] text-slate-400 mt-1">UGC norm: 55% for ST candidates</p>
            </div>
            <div>
              <label className="block font-bold text-slate-700 mb-1">PVTG Priority Weightage Bonus (Points)</label>
              <input 
                type="number" 
                value={pvtgBonus}
                onChange={e => setPvtgBonus(Number(e.target.value))}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-mono font-bold text-amber-700"
              />
              <p className="text-[10px] text-slate-400 mt-1">Added to composite score for 75 PVTG tribes</p>
            </div>
          </div>
        </div>

        {/* Section 3: Validation Rules & AI OCR Thresholds */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
            <ShieldCheck className="w-4 h-4 text-gov-navy" />
            <h2 className="text-sm font-bold text-slate-900">3. AI Document Validation Rules & OCR Cutoffs</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1">
                OCR Field Confidence Manual Review Cutoff (%)
              </label>
              <input 
                type="number" 
                value={ocrCutoff}
                onChange={e => setOcrCutoff(Number(e.target.value))}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-mono font-bold text-gov-navy"
              />
              <p className="text-[10px] text-slate-500 mt-1">
                Fields scoring below {ocrCutoff}% automatically generate an Action Required deficiency flag.
              </p>
            </div>

            <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100 flex items-center justify-between">
              <div>
                <p className="font-bold text-blue-950">DigiLocker / e-Sanad Auto-Approval</p>
                <p className="text-[10px] text-blue-800">Bypass manual stamp review if certificate has a valid digital PKI signature</p>
              </div>
              <input 
                type="checkbox" 
                checked={allowDigiLocker}
                onChange={e => setAllowDigiLocker(e.target.checked)}
                className="w-5 h-5 text-gov-navy rounded"
              />
            </div>
          </div>
        </div>

        {/* Section 4: Workflow Stages */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
            <Layers className="w-4 h-4 text-gov-navy" />
            <h2 className="text-sm font-bold text-slate-900">4. Configured Workflow Stages Pipeline</h2>
          </div>
          <div className="space-y-2 text-xs">
            {schemeConfig.workflowStages.map((stage, idx) => (
              <div key={idx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-gov-navy text-white text-[10px] font-bold flex items-center justify-center font-mono">
                    {idx + 1}
                  </span>
                  <span className="font-bold text-slate-800">{stage}</span>
                </div>
                <span className="text-[10px] bg-white px-2 py-0.5 rounded border border-slate-200 font-mono text-slate-500">
                  Stage Code: STAGE_0{idx + 1}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 5: Selection Criteria & Mathematical Formula */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
            <Sliders className="w-4 h-4 text-gov-navy" />
            <h2 className="text-sm font-bold text-slate-900">5. Merit Scoring & Selection Formula</h2>
          </div>
          <div className="space-y-3 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Composite Merit Formula</label>
              <textarea
                rows={2}
                value={selectionFormula}
                onChange={e => setSelectionFormula(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-mono text-xs text-gov-navy font-bold"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Female Candidate Reservation Quota (%)</label>
                <input 
                  type="number" 
                  value={femaleQuota}
                  onChange={e => setFemaleQuota(Number(e.target.value))}
                  className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl font-mono font-bold"
                />
              </div>
              <div className="flex items-center text-slate-500 text-[11px] pt-4">
                Affirmative gender parity clause under Article 15(3) of the Constitution.
              </div>
            </div>
          </div>
        </div>

        {/* Section 6: Notification Templates & Dates */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
            <Bell className="w-4 h-4 text-gov-navy" />
            <h2 className="text-sm font-bold text-slate-900">6. Notification Templates & Application Cycle</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Applicant SMS Alert Template</label>
              <input 
                type="text" 
                value={smsTemplate}
                onChange={e => setSmsTemplate(e.target.value)}
                className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl font-mono text-[11px]"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Cycle Open Date</label>
                <input 
                  type="date" 
                  value={openDate}
                  onChange={e => setOpenDate(e.target.value)}
                  className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl font-mono"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Cycle Close Date</label>
                <input 
                  type="date" 
                  value={closeDate}
                  onChange={e => setCloseDate(e.target.value)}
                  className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl font-mono"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 7: Version Control Save Box - Exact prompt specification */}
        <div className="bg-gradient-to-r from-blue-900 via-gov-navy to-blue-950 rounded-2xl p-6 text-white shadow-gov space-y-4">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-300">
              Government Versioning Engine
            </span>
            <h3 className="text-lg font-extrabold mt-0.5">
              Publish & Commit Versioned Scheme Rules
            </h3>
            <p className="text-xs text-blue-200">
              Every save generates an immutable, digitally signed audit revision that governs all newly scrutinized applications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 text-xs">
            <div className="sm:col-span-3">
              <label className="block font-bold text-blue-200 mb-1">Target Version ID</label>
              <input 
                type="text" 
                value={newVersionInput}
                onChange={e => setNewVersionInput(e.target.value)}
                placeholder="e.g. v3.2 or v3.3"
                className="w-full p-2.5 bg-slate-800 text-amber-300 border border-slate-700 rounded-xl font-mono font-bold"
              />
            </div>
            <div className="sm:col-span-9">
              <label className="block font-bold text-blue-200 mb-1">Revision Summary Memo</label>
              <input 
                type="text" 
                value={changeNoteInput}
                onChange={e => setChangeNoteInput(e.target.value)}
                placeholder="Brief justification for change"
                className="w-full p-2.5 bg-slate-800 text-white border border-slate-700 rounded-xl"
              />
            </div>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-extrabold rounded-xl transition flex items-center gap-2 shadow-sm"
            >
              <Save className="w-4 h-4" />
              <span>Save as Version {newVersionInput}</span>
            </button>
          </div>
        </div>
      </form>

      {/* Version Diff Modal */}
      {showDiffModal && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <GitBranch className="w-5 h-5 text-purple-700" />
                <h3 className="text-sm font-bold text-slate-900">
                  Version Diff: Policy v3.1 vs v3.2 Comparison
                </h3>
              </div>
              <button 
                onClick={() => setShowDiffModal(false)}
                className="p-1 rounded-lg hover:bg-slate-100 text-slate-400"
              >
                ✕
              </button>
            </div>

            <div className="my-4 space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex justify-between font-bold text-slate-800">
                  <span>Parameter</span>
                  <span>Previous (v3.1) → Current (v3.2)</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1">
                <p className="font-bold text-emerald-950">1. Annual Income Ceiling</p>
                <div className="flex justify-between font-mono text-[11px]">
                  <span className="text-slate-500 line-through">₹5,00,000 / year</span>
                  <span className="text-emerald-800 font-bold">₹6,00,000 / year (+20% expansion)</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1">
                <p className="font-bold text-emerald-950">2. Particularly Vulnerable Tribal Group (PVTG) Priority Bonus</p>
                <div className="flex justify-between font-mono text-[11px]">
                  <span className="text-slate-500 line-through">5 Points</span>
                  <span className="text-emerald-800 font-bold">10 Points Bonus (Affirmative Action)</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 space-y-1">
                <p className="font-bold text-blue-950">3. AI OCR Date Cutoff Threshold</p>
                <div className="flex justify-between font-mono text-[11px]">
                  <span className="text-slate-500 line-through">85% Cutoff</span>
                  <span className="text-blue-800 font-bold">75% Cutoff (Optimized for Rural Certificates)</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-purple-50 border border-purple-200 space-y-1">
                <p className="font-bold text-purple-950">4. Female Student Quota Clause</p>
                <div className="flex justify-between font-mono text-[11px]">
                  <span className="text-slate-500 line-through">25% Quota</span>
                  <span className="text-purple-800 font-bold">33% Statutory Reservation Mandate</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setShowDiffModal(false)}
                className="px-4 py-2 bg-gov-navy text-white font-bold rounded-xl text-xs"
              >
                Close Diff
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
