import React, { useState } from 'react';
import { 
  Search, 
  Bell, 
  ChevronDown, 
  User, 
  ShieldCheck, 
  Eye, 
  Type, 
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  FileText
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { AshokaEmblem, STSahyogLogo } from './GovEmblem';

export const Header: React.FC = () => {
  const { 
    role, 
    setRole, 
    language, 
    setLanguage, 
    fontSize, 
    setFontSize, 
    highContrast, 
    setHighContrast,
    searchQuery,
    setSearchQuery,
    setApplicantTab,
    setAdminTab,
    application
  } = useApp();

  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  const toggleRole = () => {
    if (role === 'applicant') {
      setRole('admin');
      setAdminTab('dashboard');
    } else {
      setRole('applicant');
      setApplicantTab('home');
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
      {/* Top National Identity Bar */}
      <div className="bg-gradient-to-r from-[#e8701a] via-white to-[#15803d] h-1 w-full" />
      
      {/* Official Government Metadata Banner */}
      <div className="bg-[#0b1f38] text-slate-200 text-xs py-1 px-4 sm:px-6 flex items-center justify-between border-b border-blue-950/40">
        <div className="flex items-center gap-2">
          <AshokaEmblem className="w-4 h-4 text-amber-400 inline" />
          <span className="font-medium text-slate-100">
            {language === 'hi' 
              ? 'जनजातीय कार्य मंत्रालय, भारत सरकार' 
              : 'Ministry of Tribal Affairs, Government of India'}
          </span>
          <span className="hidden md:inline text-slate-400">|</span>
          <span className="hidden md:inline text-slate-300">
            {language === 'hi' 
              ? 'राष्ट्रीय छात्रवृत्ति एवं अध्येतावृत्ति प्रबंधन प्रणाली' 
              : 'National Tribal Scholarship & Fellowship Portal'}
          </span>
        </div>

        {/* Accessibility & Role Toggle Strip */}
        <div className="flex items-center gap-3">
          {/* Accessibility Font Resizer */}
          <div className="hidden sm:flex items-center gap-1 bg-blue-950/60 rounded px-1.5 py-0.5 border border-blue-800/40">
            <Type className="w-3 h-3 text-slate-400" />
            <button 
              onClick={() => setFontSize('normal')} 
              className={`px-1 rounded text-[11px] font-medium transition ${fontSize === 'normal' ? 'bg-amber-500 text-black font-bold' : 'text-slate-300 hover:text-white'}`}
              title="Standard Text Size"
            >
              A
            </button>
            <button 
              onClick={() => setFontSize('large')} 
              className={`px-1 rounded text-[11px] font-medium transition ${fontSize === 'large' ? 'bg-amber-500 text-black font-bold' : 'text-slate-300 hover:text-white'}`}
              title="Large Text Size"
            >
              A+
            </button>
            <button 
              onClick={() => setFontSize('xlarge')} 
              className={`px-1 rounded text-[11px] font-medium transition ${fontSize === 'xlarge' ? 'bg-amber-500 text-black font-bold' : 'text-slate-300 hover:text-white'}`}
              title="Extra Large Text Size"
            >
              A++
            </button>
          </div>

          {/* High Contrast Toggle */}
          <button 
            onClick={() => setHighContrast(prev => !prev)}
            className={`p-1 rounded text-xs flex items-center gap-1 transition ${highContrast ? 'bg-amber-500 text-black font-bold' : 'text-slate-300 hover:text-white'}`}
            title="Toggle High Contrast for Accessibility"
          >
            <Eye className="w-3.5 h-3.5" />
            <span className="hidden md:inline text-[11px]">{highContrast ? 'Contrast ON' : 'Contrast'}</span>
          </button>

          {/* Quick Role Switcher */}
          <button
            onClick={toggleRole}
            className={`px-2.5 py-0.5 rounded text-[11px] font-semibold flex items-center gap-1.5 transition border ${
              role === 'applicant'
                ? 'bg-amber-500/15 border-amber-400/50 text-amber-300 hover:bg-amber-500/25'
                : 'bg-emerald-500/15 border-emerald-400/50 text-emerald-300 hover:bg-emerald-500/25'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>
              {role === 'applicant' ? 'Switch to MoTA Admin' : 'Switch to Applicant'}
            </span>
          </button>
        </div>
      </div>

      {/* Main Header Row - Matching Reference Image */}
      <div className="px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3">
          <STSahyogLogo />
        </div>

        {/* Center Search Bar */}
        <div className="flex-1 max-w-xl hidden md:block">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search schemes, eligibility, documents..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 hover:bg-slate-100/80 focus:bg-white border border-slate-200 rounded-full text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-800/30 focus:border-gov-navy transition"
            />
          </div>
        </div>

        {/* Right Action Icons: Notification Bell, Language, User Profile */}
        <div className="flex items-center gap-3">
          {/* Notification Bell */}
          <div className="relative">
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 text-slate-600 hover:text-gov-navy hover:bg-slate-100 rounded-full transition"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5" />
              {/* Red dot badge matching reference */}
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-white ring-1 ring-rose-300" />
            </button>

            {/* Notifications Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white border border-slate-200 rounded-xl shadow-xl z-50 p-3 animate-in fade-in zoom-in-95">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <h4 className="text-sm font-bold text-gov-navy flex items-center gap-1.5">
                    <Bell className="w-4 h-4 text-gov-saffron" />
                    Notifications & Alerts
                  </h4>
                  <span className="text-[11px] bg-rose-100 text-rose-700 px-2 py-0.5 rounded-full font-semibold">
                    3 New
                  </span>
                </div>
                <div className="space-y-2 mt-2 max-h-72 overflow-y-auto">
                  <div className="p-2.5 rounded-lg bg-rose-50/60 border border-rose-100 text-xs flex gap-2.5">
                    <span className="w-2 h-2 mt-1 rounded-full bg-rose-500 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-rose-900">Document verification pending</p>
                      <p className="text-slate-600 mt-0.5">Deficiency raised on Income Certificate date validation.</p>
                      <p className="text-[10px] text-slate-400 mt-1">2 days ago • High Priority</p>
                    </div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-blue-50/60 border border-blue-100 text-xs flex gap-2.5">
                    <span className="w-2 h-2 mt-1 rounded-full bg-blue-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-blue-900">New scheme released: NFST 2026</p>
                      <p className="text-slate-600 mt-0.5">Fellowship slots increased to 750 with PVTG preference.</p>
                      <p className="text-[10px] text-slate-400 mt-1">4 days ago</p>
                    </div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-emerald-50/60 border border-emerald-100 text-xs flex gap-2.5">
                    <span className="w-2 h-2 mt-1 rounded-full bg-emerald-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-emerald-900">Your application has been submitted successfully</p>
                      <p className="text-slate-600 mt-0.5">Application ID: ST26-10482 acknowledged by MoTA.</p>
                      <p className="text-[10px] text-slate-400 mt-1">1 week ago</p>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setShowNotifications(false)}
                  className="w-full mt-2 py-1.5 text-xs text-center text-gov-navy font-semibold hover:bg-slate-50 rounded"
                >
                  Close
                </button>
              </div>
            )}
          </div>

          {/* Language Selector matching reference */}
          <div className="relative">
            <button 
              onClick={() => setShowLangDropdown(!showLangDropdown)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100 transition"
            >
              <span>{language === 'en' ? 'English' : 'हिन्दी'}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
            </button>
            {showLangDropdown && (
              <div className="absolute right-0 mt-1 w-32 bg-white border border-slate-200 rounded-lg shadow-lg z-50 py-1">
                <button
                  onClick={() => { setLanguage('en'); setShowLangDropdown(false); }}
                  className={`w-full px-3 py-1.5 text-left text-xs ${language === 'en' ? 'bg-blue-50 text-gov-navy font-semibold' : 'text-slate-700 hover:bg-slate-50'}`}
                >
                  English
                </button>
                <button
                  onClick={() => { setLanguage('hi'); setShowLangDropdown(false); }}
                  className={`w-full px-3 py-1.5 text-left text-xs ${language === 'hi' ? 'bg-blue-50 text-gov-navy font-semibold' : 'text-slate-700 hover:bg-slate-50'}`}
                >
                  हिन्दी (Hindi)
                </button>
              </div>
            )}
          </div>

          {/* Profile Badge matching reference: "Hi, Rahul / ST Student" */}
          <div className="relative">
            <button 
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-2.5 pl-2 pr-3 py-1 rounded-full hover:bg-slate-50 border border-transparent hover:border-slate-200 transition text-left"
            >
              <div className="w-8 h-8 rounded-full bg-gov-navy text-white flex items-center justify-center font-bold text-xs shadow-sm flex-shrink-0">
                {role === 'applicant' ? (
                  <User className="w-4 h-4" />
                ) : (
                  <ShieldCheck className="w-4 h-4 text-amber-300" />
                )}
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-xs font-bold text-slate-800 leading-tight">
                  {role === 'applicant' ? 'Hi, Rahul' : 'Shri Ramesh Sharma'}
                </span>
                <span className="text-[10px] text-slate-500 leading-tight">
                  {role === 'applicant' ? 'ST Student' : 'MoTA Scrutiny Officer'}
                </span>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {/* Profile Dropdown */}
            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-64 bg-white border border-slate-200 rounded-xl shadow-xl z-50 p-3 text-xs">
                <div className="border-b border-slate-100 pb-2 mb-2">
                  <p className="font-bold text-slate-900">
                    {role === 'applicant' ? 'Rahul Jadhav' : 'Shri Ramesh Sharma'}
                  </p>
                  <p className="text-slate-500">
                    {role === 'applicant' ? 'Tribal ID: ST-MH-994821' : 'Officer ID: MoTA-SCR-04'}
                  </p>
                  <span className="mt-1 inline-block px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-100 text-emerald-800">
                    Aadhaar DBT Active
                  </span>
                </div>
                <div className="space-y-1">
                  <button 
                    onClick={() => {
                      if (role === 'applicant') setApplicantTab('track-application');
                      else setAdminTab('dashboard');
                      setShowProfileMenu(false);
                    }}
                    className="w-full text-left px-2 py-1.5 rounded hover:bg-slate-50 text-slate-700"
                  >
                    View Complete Profile
                  </button>
                  <button 
                    onClick={() => {
                      toggleRole();
                      setShowProfileMenu(false);
                    }}
                    className="w-full text-left px-2 py-1.5 rounded hover:bg-slate-50 text-gov-saffron font-medium flex items-center justify-between"
                  >
                    <span>Switch Mode ({role === 'applicant' ? 'MoTA Admin' : 'Applicant'})</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
