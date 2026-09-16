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
  AlertCircle
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { AshokaEmblem } from '../common/GovEmblem';

export const ApplicantHome: React.FC = () => {
  const { 
    setApplicantTab, 
    schemes, 
    application, 
    setSelectedSchemeForModal,
    setShowHelpModal 
  } = useApp();

  const featuredSchemes = schemes.slice(0, 3);

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 sm:p-6 max-w-7xl mx-auto w-full">
      {/* Main Content Area (Left / Center) */}
      <div className="flex-1 space-y-6">
        {/* Hero Banner matching Reference Image */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#eef4fb] via-[#e2ecf9] to-[#d6e5f8] border border-blue-100 shadow-sm min-h-[260px] sm:min-h-[280px] flex items-center">
          {/* Subtle decorative background graphic */}
          <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
          
          <div className="relative z-10 p-6 sm:p-10 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1a365d] bg-white/70 px-2.5 py-1 rounded-md border border-blue-200/50 inline-block mb-3">
              ST-SAHYOG
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0f294a] tracking-tight leading-tight">
              Your Education.<br />
              <span className="text-[#1a365d]">Our Support.</span>
            </h1>
            <p className="mt-2 text-sm text-slate-600 font-medium leading-relaxed max-w-md">
              A unified platform for Tribal Scholarships & Fellowships under the Ministry of Tribal Affairs.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <button
                onClick={() => setApplicantTab('explore-schemes')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0f294a] text-white text-xs font-bold hover:bg-[#1a365d] transition shadow-sm group"
              >
                <span>Explore Schemes</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={() => setApplicantTab('check-eligibility')}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/90 text-[#0f294a] text-xs font-bold hover:bg-white transition border border-slate-200 shadow-2xs"
              >
                <span>Check Eligibility</span>
              </button>
            </div>
          </div>

          {/* Right Side of Hero Banner: Tribal Students Silhouette & Scenic Graphic matching Reference */}
          <div className="hidden sm:block absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden pointer-events-none">
            {/* Visual scenic illustration matching photo composition in reference */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#eef4fb]/90 z-10" />
            <div className="absolute top-6 right-6 z-20 text-right">
              <p className="text-sm font-serif italic text-[#1a365d] font-bold leading-tight drop-shadow-xs">
                Stronger<br />Students<br />Stronger<br />Communities
              </p>
            </div>
            {/* Mountain backdrop & Student representation */}
            <svg viewBox="0 0 400 300" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice">
              {/* Sky and sun */}
              <defs>
                <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.4"/>
                  <stop offset="100%" stopColor="#bfdbfe" stopOpacity="0.8"/>
                </linearGradient>
                <linearGradient id="mountain1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#475569" stopOpacity="0.5"/>
                  <stop offset="100%" stopColor="#334155" stopOpacity="0.8"/>
                </linearGradient>
                <linearGradient id="mountain2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#15803d" stopOpacity="0.6"/>
                  <stop offset="100%" stopColor="#166534" stopOpacity="0.9"/>
                </linearGradient>
              </defs>
              <rect width="400" height="300" fill="url(#skyGrad)"/>
              {/* Sun */}
              <circle cx="330" cy="80" r="28" fill="#fef08a" fillOpacity="0.6"/>
              {/* Distant Hills */}
              <path d="M120 300 L180 180 L250 240 L340 140 L400 200 L400 300 Z" fill="url(#mountain1)"/>
              <path d="M160 300 L220 200 L290 260 L380 180 L400 220 L400 300 Z" fill="url(#mountain2)"/>
              {/* Stylized backs of two tribal youth in traditional pattern */}
              <g transform="translate(190, 100)">
                {/* Girl left */}
                <ellipse cx="60" cy="110" rx="24" ry="42" fill="#0f172a" />
                <circle cx="60" cy="65" r="16" fill="#78350f" />
                <path d="M52 65 Q60 130 56 160" stroke="#0f172a" strokeWidth="8" strokeLinecap="round" />
                {/* Boy right in traditional woven shawl with red/black tribal weave pattern */}
                <ellipse cx="110" cy="100" rx="32" ry="50" fill="#7f1d1d" />
                <rect x="85" y="80" width="50" height="8" fill="#f59e0b" />
                <rect x="85" y="95" width="50" height="6" fill="#ffffff" />
                <rect x="85" y="108" width="50" height="6" fill="#15803d" />
                <circle cx="110" cy="50" r="18" fill="#78350f" />
                {/* Traditional headband */}
                <path d="M94 48 Q110 44 126 48" stroke="#f59e0b" strokeWidth="4" />
              </g>
            </svg>
          </div>
        </div>

        {/* 4 Quick Action Cards Row matching Reference Image */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4">
          {/* Card 1: Explore Schemes */}
          <div 
            onClick={() => setApplicantTab('explore-schemes')}
            className="group cursor-pointer rounded-2xl p-4 sm:p-5 bg-[#ebf4fd] border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between min-h-[145px]"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs mb-3 group-hover:scale-105 transition-transform">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm leading-tight">Explore Schemes</h3>
              <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                Find suitable scholarships and fellowships
              </p>
            </div>
            <div className="mt-3 flex justify-end">
              <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition">
                <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>

          {/* Card 2: Check Eligibility */}
          <div 
            onClick={() => setApplicantTab('check-eligibility')}
            className="group cursor-pointer rounded-2xl p-4 sm:p-5 bg-[#eefaf3] border border-emerald-100 hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between min-h-[145px]"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs mb-3 group-hover:scale-105 transition-transform">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm leading-tight">Check Eligibility</h3>
              <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                Know if you qualify in seconds
              </p>
            </div>
            <div className="mt-3 flex justify-end">
              <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition">
                <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>

          {/* Card 3: Apply with Guidance */}
          <div 
            onClick={() => setApplicantTab('apply-now')}
            className="group cursor-pointer rounded-2xl p-4 sm:p-5 bg-[#fef5ec] border border-amber-100 hover:border-amber-300 hover:shadow-md transition-all flex flex-col justify-between min-h-[145px]"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#e8701a] text-white flex items-center justify-center shadow-xs mb-3 group-hover:scale-105 transition-transform">
                <FileEdit className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm leading-tight">Apply with Guidance</h3>
              <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                Step-by-step application support
              </p>
            </div>
            <div className="mt-3 flex justify-end">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center group-hover:bg-[#e8701a] group-hover:text-white transition">
                <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>

          {/* Card 4: Track Application */}
          <div 
            onClick={() => setApplicantTab('track-application')}
            className="group cursor-pointer rounded-2xl p-4 sm:p-5 bg-[#f5effd] border border-purple-100 hover:border-purple-300 hover:shadow-md transition-all flex flex-col justify-between min-h-[145px]"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow-xs mb-3 group-hover:scale-105 transition-transform">
                <BarChart2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm leading-tight">Track Application</h3>
              <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                Get real-time updates on your status
              </p>
            </div>
            <div className="mt-3 flex justify-end">
              <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition">
                <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        </div>

        {/* Featured Schemes Section matching Reference Image */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">Featured Schemes</h2>
            <button 
              onClick={() => setApplicantTab('explore-schemes')}
              className="text-xs font-bold text-[#1a365d] hover:text-[#0f294a] flex items-center gap-1 hover:underline"
            >
              <span>View All</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* 3 Featured Scheme Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredSchemes.map((scheme) => (
              <div 
                key={scheme.id}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Emblem and Scheme Title */}
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 flex-shrink-0 text-slate-700">
                      <AshokaEmblem className="w-6 h-7 text-slate-700" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-slate-900 leading-snug line-clamp-2">
                        {scheme.name}
                      </h3>
                      <p className="text-[10px] text-slate-500 mt-0.5 font-medium">
                        {scheme.ministry}
                      </p>
                    </div>
                  </div>

                  {/* Badges matching reference */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {scheme.targetAudience.slice(0, 2).map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedSchemeForModal(scheme)}
                    className="w-full py-2 px-3 rounded-xl bg-[#0f294a] hover:bg-[#1a365d] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Useful Resources Section matching Reference Image */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-1">
          {/* Left 5 Resource Icons */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-4 shadow-xs">
            <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
              Useful Resources
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center">
              <button 
                onClick={() => setApplicantTab('resources')}
                className="p-2.5 rounded-xl hover:bg-slate-50 border border-slate-100 flex flex-col items-center gap-1.5 transition group"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center group-hover:scale-105 transition">
                  <FileText className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-semibold text-slate-700 leading-tight">
                  Guidelines & FAQs
                </span>
              </button>

              <button 
                onClick={() => setApplicantTab('resources')}
                className="p-2.5 rounded-xl hover:bg-slate-50 border border-slate-100 flex flex-col items-center gap-1.5 transition group"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center group-hover:scale-105 transition">
                  <Folder className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-semibold text-slate-700 leading-tight">
                  Required Documents
                </span>
              </button>

              <button 
                onClick={() => setApplicantTab('resources')}
                className="p-2.5 rounded-xl hover:bg-slate-50 border border-slate-100 flex flex-col items-center gap-1.5 transition group"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:scale-105 transition">
                  <Calendar className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-semibold text-slate-700 leading-tight">
                  Important Dates
                </span>
              </button>

              <button 
                onClick={() => setApplicantTab('resources')}
                className="p-2.5 rounded-xl hover:bg-slate-50 border border-slate-100 flex flex-col items-center gap-1.5 transition group"
              >
                <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center group-hover:scale-105 transition">
                  <PlayCircle className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-semibold text-slate-700 leading-tight">
                  Video Tutorials
                </span>
              </button>

              <button 
                onClick={() => setShowHelpModal(true)}
                className="p-2.5 rounded-xl hover:bg-slate-50 border border-slate-100 flex flex-col items-center gap-1.5 transition group col-span-2 sm:col-span-1"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-700 flex items-center justify-center group-hover:scale-105 transition">
                  <Headphones className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-semibold text-slate-700 leading-tight">
                  Helpline & Support
                </span>
              </button>
            </div>
          </div>

          {/* Right Quote Card matching Reference Image */}
          <div className="bg-gradient-to-br from-[#eef4fb] to-white rounded-2xl border border-blue-100 p-5 flex flex-col justify-center text-center shadow-xs">
            <p className="text-xs font-serif italic text-slate-700 font-semibold leading-relaxed">
              “Education empowers tribal youth to build a brighter tomorrow.”
            </p>
            <div className="w-10 h-0.5 bg-[#0f294a] mx-auto mt-3 rounded-full" />
          </div>
        </div>
      </div>

      {/* Right Sidebar Area (Matching Reference Layout exactly) */}
      <div className="w-full lg:w-72 space-y-4 flex-shrink-0">
        {/* User Profile Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#0f294a] text-white flex items-center justify-center shadow-xs">
              <User className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 leading-tight">Gauri Agrawal</h4>
              <p className="text-xs text-slate-500 mt-0.5">ST Student</p>
            </div>
          </div>
          <button 
            onClick={() => setApplicantTab('track-application')}
            className="w-full mt-3 py-2 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-xs font-bold text-slate-700 border border-slate-200 flex items-center justify-center gap-1.5 transition"
          >
            <span>View Profile</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* Application Status Widget matching Reference */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-slate-900">Application Status</h4>
            <button 
              onClick={() => setApplicantTab('track-application')}
              className="text-[11px] font-bold text-[#1a365d] hover:underline flex items-center gap-0.5"
            >
              <span>View All</span>
              <ArrowRight className="w-2.5 h-2.5" />
            </button>
          </div>

          <div className="space-y-2 text-xs">
            {/* Post-Matric */}
            <div 
              onClick={() => setApplicantTab('track-application')}
              className="p-2.5 rounded-xl hover:bg-slate-50 border border-slate-100 flex items-center justify-between cursor-pointer transition"
            >
              <div>
                <p className="font-semibold text-slate-800 text-xs">Post-Matric Scholarship</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-[10px] text-emerald-700 font-medium">Under Review</span>
                </div>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
            </div>

            {/* NFST 2025 / 2026 */}
            <div 
              onClick={() => setApplicantTab('track-application')}
              className="p-2.5 rounded-xl hover:bg-slate-50 border border-slate-100 flex items-center justify-between cursor-pointer transition"
            >
              <div>
                <p className="font-semibold text-slate-800 text-xs">NFST 2025</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  <span className="text-[10px] text-blue-700 font-medium">
                    {application.overallStatus === 'Deficiency Raised' ? 'Deficiency Raised' : 'Submitted / In Review'}
                  </span>
                </div>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
            </div>

            {/* Top Class Education */}
            <div 
              onClick={() => setApplicantTab('explore-schemes')}
              className="p-2.5 rounded-xl hover:bg-slate-50 border border-slate-100 flex items-center justify-between cursor-pointer transition"
            >
              <div>
                <p className="font-semibold text-slate-800 text-xs">Top Class Education</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-slate-400" />
                  <span className="text-[10px] text-slate-500 font-medium">Not Applied</span>
                </div>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
            </div>
          </div>
        </div>

        {/* Notifications Widget matching Reference */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-slate-900">Notifications</h4>
            <button 
              onClick={() => setApplicantTab('deficiency-centre')}
              className="text-[11px] font-bold text-[#1a365d] hover:underline flex items-center gap-0.5"
            >
              <span>View All</span>
              <ArrowRight className="w-2.5 h-2.5" />
            </button>
          </div>

          <div className="space-y-2.5 text-xs">
            {/* Notification 1 */}
            <div 
              onClick={() => setApplicantTab('deficiency-centre')}
              className="flex items-start gap-2 p-2 rounded-lg hover:bg-rose-50/50 cursor-pointer transition"
            >
              <span className="w-2 h-2 mt-1 rounded-full bg-rose-500 flex-shrink-0" />
              <div>
                <p className="font-semibold text-slate-800 text-xs leading-snug">
                  Document verification pending
                </p>
                <p className="text-[10px] text-slate-400 mt-0.5">2 days ago</p>
              </div>
            </div>

            {/* Notification 2 */}
            <div 
              onClick={() => setApplicantTab('explore-schemes')}
              className="flex items-start gap-2 p-2 rounded-lg hover:bg-blue-50/50 cursor-pointer transition"
            >
              <span className="w-2 h-2 mt-1 rounded-full bg-blue-600 flex-shrink-0" />
              <div>
                <p className="font-semibold text-slate-800 text-xs leading-snug">
                  New scheme released: NFST 2026
                </p>
                <p className="text-[10px] text-slate-400 mt-0.5">4 days ago</p>
              </div>
            </div>

            {/* Notification 3 */}
            <div 
              onClick={() => setApplicantTab('track-application')}
              className="flex items-start gap-2 p-2 rounded-lg hover:bg-emerald-50/50 cursor-pointer transition"
            >
              <span className="w-2 h-2 mt-1 rounded-full bg-emerald-600 flex-shrink-0" />
              <div>
                <p className="font-semibold text-slate-800 text-xs leading-snug">
                  Your application has been submitted successfully
                </p>
                <p className="text-[10px] text-slate-400 mt-0.5">1 week ago</p>
              </div>
            </div>
          </div>
        </div>

        {/* Need Help? Widget matching Reference */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-slate-50 text-slate-700 flex-shrink-0 border border-slate-100">
              <Headphones className="w-5 h-5 text-[#0f294a]" />
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
            className="w-full mt-3 py-2 px-3 rounded-xl bg-[#0f294a] hover:bg-[#1a365d] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition"
          >
            <span>Contact Support</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
