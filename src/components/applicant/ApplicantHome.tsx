import React from 'react';
import { 
  GraduationCap, 
  Search, 
  FileEdit, 
  BarChart2, 
  ArrowRight, 
  FileText, 
  Folder, 
  Calendar, 
  PlayCircle, 
  Headphones, 
  User, 
  CheckCircle2,
  AlertCircle,
  Sliders,
  ScanLine,
  ShieldCheck,
  RefreshCw,
  Award,
  ChevronRight,
  Sparkles,
  AlertTriangle
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { AshokaEmblem } from '../common/GovEmblem';

export const ApplicantHome: React.FC = () => {
  const { 
    setStudentTab, 
    schemes, 
    application, 
    setSelectedSchemeForModal,
    setShowHelpModal 
  } = useApp();

  const featuredSchemes = schemes.slice(0, 3);

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 sm:p-6 max-w-7xl mx-auto w-full">
      {/* Main Content Area */}
      <div className="flex-1 space-y-6">
        {/* ITEM 20 & 19: EXACT USP HERO BANNER & ARCHITECTURE PIPELINE */}
        <div className="rounded-3xl bg-gradient-to-br from-[#0b1f38] via-[#0f294a] to-[#173d6b] text-white p-6 sm:p-8 shadow-gov relative overflow-hidden border border-blue-900/50">
          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest border border-amber-400/40">
              <Sparkles className="w-3 h-3" />
              <span>MORE THAN A SCHOLARSHIP PORTAL</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-snug max-w-2xl">
              A Configurable Intelligence & Decision Support Platform for Tribal Education
            </h1>

            <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed max-w-3xl">
              ST-Sahyog is a configurable intelligence and workflow platform that connects scheme configuration, eligibility verification, document intelligence, deficiency resolution and administrative decision support into one transparent application journey.
            </p>

            {/* Architecture Pipeline: CONFIGURE → READ → VALIDATE → RESOLVE → DECIDE */}
            <div className="pt-3">
              <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-amber-300 block mb-2">
                PLATFORM WORKFLOW ARCHITECTURE
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs">
                {/* 1. Configure */}
                <div className="bg-white/10 backdrop-blur-xs rounded-xl p-2.5 border border-white/10 flex flex-col items-center justify-between">
                  <div className="w-7 h-7 rounded-lg bg-purple-500/30 text-purple-200 flex items-center justify-center mb-1">
                    <Sliders className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-extrabold text-[11px] text-white">CONFIGURE</span>
                  <span className="text-[9px] text-blue-200 mt-0.5">Scheme rules</span>
                </div>

                {/* 2. Read */}
                <div className="bg-white/10 backdrop-blur-xs rounded-xl p-2.5 border border-white/10 flex flex-col items-center justify-between">
                  <div className="w-7 h-7 rounded-lg bg-blue-500/30 text-blue-200 flex items-center justify-center mb-1">
                    <ScanLine className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-extrabold text-[11px] text-white">READ</span>
                  <span className="text-[9px] text-blue-200 mt-0.5">OCR intelligence</span>
                </div>

                {/* 3. Validate */}
                <div className="bg-white/10 backdrop-blur-xs rounded-xl p-2.5 border border-white/10 flex flex-col items-center justify-between">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/30 text-emerald-200 flex items-center justify-center mb-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-extrabold text-[11px] text-white">VALIDATE</span>
                  <span className="text-[9px] text-blue-200 mt-0.5">Eligibility criteria</span>
                </div>

                {/* 4. Resolve */}
                <div className="bg-white/10 backdrop-blur-xs rounded-xl p-2.5 border border-white/10 flex flex-col items-center justify-between">
                  <div className="w-7 h-7 rounded-lg bg-amber-500/30 text-amber-200 flex items-center justify-center mb-1">
                    <RefreshCw className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-extrabold text-[11px] text-white">RESOLVE</span>
                  <span className="text-[9px] text-blue-200 mt-0.5">Deficiency loop</span>
                </div>

                {/* 5. Decide */}
                <div className="bg-white/10 backdrop-blur-xs rounded-xl p-2.5 border border-white/10 flex flex-col items-center justify-between col-span-2 sm:col-span-1">
                  <div className="w-7 h-7 rounded-lg bg-rose-500/30 text-rose-200 flex items-center justify-center mb-1">
                    <Award className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-extrabold text-[11px] text-white">DECIDE</span>
                  <span className="text-[9px] text-blue-200 mt-0.5">Official sign-off</span>
                </div>
              </div>
            </div>

            {/* Quick Actions in Banner */}
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => setStudentTab('check-eligibility')}
                className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold rounded-xl transition flex items-center gap-1.5 shadow-sm"
              >
                <span>Check Eligibility (3-Step Pre-Check)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setStudentTab('explore-schemes')}
                className="px-4 py-2.5 bg-white/15 hover:bg-white/25 text-white text-xs font-bold rounded-xl transition border border-white/20"
              >
                <span>Explore All Schemes</span>
              </button>
            </div>
          </div>
        </div>

        {/* 4 Quick Action Cards Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
          <div 
            onClick={() => setStudentTab('explore-schemes')}
            className="cursor-pointer rounded-2xl p-4 bg-[#ebf4fd] border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between min-h-[135px]"
          >
            <div>
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs mb-2.5">
                <GraduationCap className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-slate-900 text-xs">Explore Schemes</h3>
              <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">Find suitable tribal scholarships</p>
            </div>
            <div className="flex justify-end mt-2">
              <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center">
                <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>

          <div 
            onClick={() => setStudentTab('check-eligibility')}
            className="cursor-pointer rounded-2xl p-4 bg-[#eefaf3] border border-emerald-100 hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between min-h-[135px]"
          >
            <div>
              <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs mb-2.5">
                <Search className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-slate-900 text-xs">Check Eligibility</h3>
              <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">Pre-qualify in 3 simple steps</p>
            </div>
            <div className="flex justify-end mt-2">
              <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>

          <div 
            onClick={() => setStudentTab('my-applications')}
            className="cursor-pointer rounded-2xl p-4 bg-[#fef5ec] border border-amber-100 hover:border-amber-300 hover:shadow-md transition-all flex flex-col justify-between min-h-[135px]"
          >
            <div>
              <div className="w-9 h-9 rounded-xl bg-[#e8701a] text-white flex items-center justify-center shadow-xs mb-2.5">
                <FileEdit className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-slate-900 text-xs">My Applications</h3>
              <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">Manage dossiers & deficiencies</p>
            </div>
            <div className="flex justify-end mt-2">
              <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center">
                <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>

          <div 
            onClick={() => setStudentTab('track-status')}
            className="cursor-pointer rounded-2xl p-4 bg-[#f5effd] border border-purple-100 hover:border-purple-300 hover:shadow-md transition-all flex flex-col justify-between min-h-[135px]"
          >
            <div>
              <div className="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow-xs mb-2.5">
                <BarChart2 className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-slate-900 text-xs">Track Status</h3>
              <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">Real-time progress & audit log</p>
            </div>
            <div className="flex justify-end mt-2">
              <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center">
                <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        </div>

        {/* ITEM 15: SCHEME COMPARISON / DISCOVERY TABLE */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <div>
              <h2 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">
                EXPLORE OPPORTUNITIES
              </h2>
              <p className="text-[11px] text-slate-500">
                Centrally funded tribal scholarship & fellowship portfolio for AY 2026-27
              </p>
            </div>
            <button 
              onClick={() => setStudentTab('explore-schemes')}
              className="text-xs font-bold text-blue-900 hover:underline flex items-center gap-1"
            >
              <span>View Directory</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
                  <th className="py-2.5 px-3">Scheme</th>
                  <th className="py-2.5 px-3">For</th>
                  <th className="py-2.5 px-3">Status</th>
                  <th className="py-2.5 px-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {[
                  { id: 'pre-matric', name: 'Pre-Matric Scholarship', forWho: 'ST Students (Class IX & X)', status: 'Open' },
                  { id: 'post-matric', name: 'Post-Matric Scholarship', forWho: 'ST Students (Class XI to Degree)', status: 'Open' },
                  { id: 'top-class', name: 'Top Class Education', forWho: 'ST Students (Premier Institutes - IIT/IIM/AIIMS)', status: 'Open' },
                  { id: 'nfst', name: 'National Fellowship (NFST)', forWho: 'ST Scholars (M.Phil / Ph.D)', status: 'Open' },
                  { id: 'nos', name: 'National Overseas Scholarship (NOS)', forWho: 'ST Students (Top 500 QS Overseas)', status: 'Open' },
                ].map((row) => (
                  <tr key={row.id} className="hover:bg-slate-50 transition">
                    <td className="py-2.5 px-3 font-bold text-slate-900">
                      {row.name}
                    </td>
                    <td className="py-2.5 px-3 text-slate-600 font-medium">
                      {row.forWho}
                    </td>
                    <td className="py-2.5 px-3">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                        ● {row.status}
                      </span>
                    </td>
                    <td className="py-2.5 px-3 text-right space-x-1.5">
                      <button
                        onClick={() => {
                          const target = schemes.find(s => s.id === row.id);
                          if (target) setSelectedSchemeForModal(target);
                        }}
                        className="px-2.5 py-1 rounded-lg border border-slate-200 hover:bg-slate-100 text-[11px] font-bold text-slate-700"
                      >
                        [View Details]
                      </button>
                      <button
                        onClick={() => setStudentTab('check-eligibility')}
                        className="px-2.5 py-1 rounded-lg bg-gov-navy hover:bg-blue-900 text-[11px] font-bold text-white shadow-2xs"
                      >
                        [Check Eligibility]
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Featured Schemes Cards */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-extrabold text-slate-900">Featured Schemes</h2>
            <button 
              onClick={() => setStudentTab('explore-schemes')}
              className="text-xs font-bold text-blue-900 hover:underline flex items-center gap-1"
            >
              <span>View All</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredSchemes.map((scheme) => (
              <div 
                key={scheme.id}
                className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start gap-2.5">
                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 flex-shrink-0">
                      <AshokaEmblem className="w-5 h-6 text-slate-700" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-slate-900 leading-snug line-clamp-2">
                        {scheme.name}
                      </h3>
                      <p className="text-[10px] text-slate-400 mt-0.5">{scheme.ministry}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {scheme.targetAudience.slice(0, 2).map((tag, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-2.5 border-t border-slate-100">
                  <button
                    onClick={() => setSelectedSchemeForModal(scheme)}
                    className="w-full py-1.5 px-3 rounded-xl bg-[#0f294a] hover:bg-[#1a365d] text-white text-xs font-bold flex items-center justify-center gap-1 transition"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Sidebar Area */}
      <div className="w-full lg:w-72 space-y-4 flex-shrink-0">
        {/* User Profile Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-gov-navy text-white flex items-center justify-center shadow-xs">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 leading-tight">Rahul Jadhav</h4>
              <p className="text-xs text-slate-500 mt-0.5">ST Student</p>
            </div>
          </div>
          <button 
            onClick={() => setStudentTab('track-status')}
            className="w-full mt-3 py-2 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-xs font-bold text-slate-700 border border-slate-200 flex items-center justify-center gap-1.5 transition"
          >
            <span>Track Application (ST26-DEMO001)</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* Application Status Widget */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-slate-900">Application Status</h4>
            <button 
              onClick={() => setStudentTab('my-applications')}
              className="text-[11px] font-bold text-[#1a365d] hover:underline flex items-center gap-0.5"
            >
              <span>View All</span>
              <ArrowRight className="w-2.5 h-2.5" />
            </button>
          </div>

          <div className="space-y-2 text-xs">
            <div 
              onClick={() => setStudentTab('track-status')}
              className="p-2.5 rounded-xl hover:bg-slate-50 border border-slate-100 flex items-center justify-between cursor-pointer transition"
            >
              <div>
                <p className="font-semibold text-slate-800 text-xs">NFST — 2026</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  <span className="text-[10px] text-blue-700 font-medium">Under Officer Verification</span>
                </div>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
            </div>

            <div 
              onClick={() => setStudentTab('my-applications')}
              className="p-2.5 rounded-xl hover:bg-slate-50 border border-slate-100 flex items-center justify-between cursor-pointer transition"
            >
              <div>
                <p className="font-semibold text-slate-800 text-xs">Post-Matric Scholarship</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  <span className="text-[10px] text-amber-700 font-medium">Correction Required</span>
                </div>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
            </div>

            <div 
              onClick={() => setStudentTab('my-applications')}
              className="p-2.5 rounded-xl hover:bg-slate-50 border border-slate-100 flex items-center justify-between cursor-pointer transition"
            >
              <div>
                <p className="font-semibold text-slate-800 text-xs">NOS — 2026</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-slate-400" />
                  <span className="text-[10px] text-slate-500 font-medium">Draft</span>
                </div>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
            </div>
          </div>
        </div>

        {/* Notifications Widget */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-slate-900">Notifications</h4>
            <button 
              onClick={() => setStudentTab('notifications')}
              className="text-[11px] font-bold text-blue-900 hover:underline flex items-center gap-0.5"
            >
              <span>View All</span>
              <ArrowRight className="w-2.5 h-2.5" />
            </button>
          </div>

          <div className="space-y-2 text-xs">
            <div 
              onClick={() => setStudentTab('notifications')}
              className="p-2 rounded-xl bg-amber-50/70 border border-amber-200 cursor-pointer"
            >
              <div className="flex items-center gap-1.5 font-bold text-amber-900 text-xs">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                <span>Action Required</span>
              </div>
              <p className="text-[11px] text-slate-700 mt-1">
                Your income certificate requires correction.
              </p>
            </div>

            <div 
              onClick={() => setStudentTab('notifications')}
              className="p-2 rounded-xl bg-blue-50/70 border border-blue-100 cursor-pointer"
            >
              <div className="flex items-center gap-1.5 font-bold text-blue-900 text-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                <span>Application Update</span>
              </div>
              <p className="text-[11px] text-slate-700 mt-1">
                Your application has moved to Officer Verification.
              </p>
            </div>
          </div>
        </div>

        {/* Need Help? Widget */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-slate-50 text-slate-700 flex-shrink-0 border border-slate-100">
              <Headphones className="w-5 h-5 text-gov-navy" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 leading-tight">Need Help?</h4>
              <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                Get assistance with applications, documents or any queries.
              </p>
            </div>
          </div>
          <button 
            onClick={() => setShowHelpModal(true)}
            className="w-full mt-3 py-2 px-3 rounded-xl bg-gov-navy hover:bg-blue-900 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition"
          >
            <span>Contact Support</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
