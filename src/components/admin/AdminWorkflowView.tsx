import React, { useState } from 'react';
import { 
  Workflow, 
  GitBranch, 
  Clock, 
  CheckCircle2, 
  Sliders, 
  Save, 
  ArrowRight, 
  Layers, 
  ShieldCheck, 
  AlertCircle
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const AdminWorkflowView: React.FC = () => {
  const { schemeConfig, saveNewSchemeVersion } = useApp();

  const [stages, setStages] = useState([
    { id: 'stg-1', code: 'STAGE_01', name: 'Submitted', actor: 'Applicant & DigiLocker Gateway', sla: 'Instantaneous (Auto-Ack)', status: 'Active', required: true },
    { id: 'stg-2', code: 'STAGE_02', name: 'AI Review', actor: 'AI Scrutiny & OCR Engine', sla: 'Within 2 Hours', status: 'Active', required: true },
    { id: 'stg-3', code: 'STAGE_03', name: 'Verification', actor: 'MoTA Scrutiny Officer (Desk Level)', sla: '3 Working Days', status: 'Active', required: true },
    { id: 'stg-4', code: 'STAGE_04', name: 'Selection', actor: 'Selection & Sanction Committee', sla: '5 Working Days', status: 'Active', required: true },
    { id: 'stg-5', code: 'STAGE_05', name: 'DBT Sanction', actor: 'PFMS & Central Treasury Gateway', sla: 'Weekly Batch', status: 'Active', required: true }
  ]);

  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 4000);
  };

  return (
    <div className="p-4 sm:p-6 max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="border-b border-slate-200 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-purple-50 text-purple-900 border border-purple-200 text-[10px] font-extrabold uppercase tracking-wider mb-1">
            <Workflow className="w-3.5 h-3.5 text-purple-700" />
            <span>Process Orchestration Engine</span>
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900">
            Workflow Configuration
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Configure lifecycle pipelines: <strong>Submitted → AI Review → Verification → Selection → DBT Sanction</strong> and SLA deadlines.
          </p>
        </div>

        <button
          onClick={handleSave}
          className="px-4 py-2 bg-gov-navy hover:bg-blue-900 text-white font-bold text-xs rounded-xl transition flex items-center gap-1.5 shadow-xs self-start sm:self-auto"
        >
          <Save className="w-4 h-4" />
          <span>Save Workflow Rules</span>
        </button>
      </div>

      {savedSuccess && (
        <div className="bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-4 text-xs font-bold text-emerald-900 flex items-center gap-2 shadow-xs animate-in fade-in">
          <CheckCircle2 className="w-5 h-5 text-emerald-700" />
          <span>Workflow execution pipeline successfully compiled and synchronized across all regional scrutiny nodes.</span>
        </div>
      )}

      {/* Visual Pipeline Banner */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Active Scrutiny Pipeline Sequence
          </span>
          <span className="text-[11px] font-mono font-bold text-gov-navy bg-blue-50 px-2 py-0.5 rounded">
            Submitted → AI Review → Verification → Selection
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 pt-2">
          {stages.map((stage, idx) => (
            <div key={stage.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-mono font-bold text-gov-navy bg-white border border-slate-200 px-1.5 py-0.2 rounded">
                    {stage.code}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
                <h4 className="text-sm font-extrabold text-slate-900">{stage.name}</h4>
                <p className="text-[11px] text-slate-500 mt-1 leading-snug">{stage.actor}</p>
              </div>

              <div className="pt-2 border-t border-slate-200 text-[10px] text-slate-600 font-medium">
                <span className="text-slate-400">Target SLA:</span> {stage.sla}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Workflow Rule Parameters Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
            Automated Transition Thresholds
          </h3>

          <div className="space-y-3 text-xs">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-800">Auto-Escalation on OCR Discrepancy</p>
                <p className="text-[11px] text-slate-500">Route documents with OCR confidence &lt; 75% directly to Scrutiny Desk</p>
              </div>
              <input type="checkbox" defaultChecked className="w-4 h-4 text-gov-navy rounded" />
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-800">DigiLocker Trust Bypass</p>
                <p className="text-[11px] text-slate-500">Auto-approve Stage 02 for certificates with cryptographic e-Pramaan stamp</p>
              </div>
              <input type="checkbox" defaultChecked className="w-4 h-4 text-gov-navy rounded" />
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-800">Deficiency Cure Window</p>
                <p className="text-[11px] text-slate-500">Applicant turnaround window before re-triggering reminder SMS</p>
              </div>
              <span className="font-mono font-bold text-slate-900 bg-white px-2 py-1 rounded border border-slate-200">
                7 Days
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
            Human-in-the-Loop Governance Guardrails
          </h3>

          <div className="p-4 bg-purple-50/70 border border-purple-200 rounded-xl space-y-2 text-xs">
            <div className="flex items-center gap-2 text-purple-950 font-bold">
              <ShieldCheck className="w-4 h-4 text-purple-700" />
              <span>Institutional Rule Mandate</span>
            </div>
            <p className="text-slate-700 leading-relaxed text-[11px]">
              Under MoTA administrative doctrine, <strong>no rejection or sanction decision may be executed autonomously by artificial intelligence</strong>. AI operates exclusively as an advisory extraction and discrepancy-detection assistant. Authorized designated officers bear personal statutory responsibility.
            </p>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5 text-xs">
            <span className="font-bold text-slate-800">Active Policy Hash</span>
            <p className="font-mono text-[10px] text-slate-500 break-all">
              SHA-256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
