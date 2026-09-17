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
  Sparkles,
  Sliders,
  CheckCircle2,
  AlertTriangle,
  FileText
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { AshokaEmblem, STSahyogLogo } from './GovEmblem';
import { UserRole } from '../../types';

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
    setStudentTab,
    setOfficerTab,
    setAdminTab,
    application
  } = useApp();

  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  const handleSwitchRole = (newRole: UserRole) => {
    setRole(newRole);
    if (newRole === 'student') setStudentTab('home');
    if (newRole === 'officer') setOfficerTab('command-center');
    if (newRole === 'admin') setAdminTab('scheme-config');
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs">
      {/* Top National Identity Bar */}
      <div className="bg-gradient-to-r from-[#e8701a] via-white to-[#15803d] h-1 w-full" />
      
      {/* Official Government Metadata & Demo Switcher Banner */}
      <div className="bg-[#0b1f38] text-slate-200 text-xs py-1.5 px-4 sm:px-6 flex flex-wrap items-center justify-between gap-2 border-b border-blue-950/40">
        <div className="flex items-center gap-2">
          <AshokaEmblem className="w-4 h-4 text-amber-400 inline" />
          <span className="font-semibold text-slate-100">
            {language === 'mr' ? 'आदिवासी कार्य मंत्रालय, भारत सरकार' : language === 'hi' ? 'जनजातीय कार्य मंत्रालय, भारत सरकार' : 'Ministry of Tribal Affairs, Government of India'}
          </span>
          <span className="hidden md:inline text-slate-500">|</span>
          <span className="hidden md:inline text-slate-300">
            ST-SAHYOG Unified Tribal Scholarship Platform
          </span>
        </div>

        {/* DEMO MODE SWITCHER (Item 17) & Human-in-the-Loop Badge (Item 12) */}
        <div className="flex items-center flex-wrap gap-2">
          {/* Human-in-the-Loop Flag */}
          <div className="hidden lg:flex items-center gap-1.5 bg-blue-950/80 px-2.5 py-0.5 rounded-full border border-blue-800/50 text-[10px] font-bold text-amber-300 tracking-wider">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>AI ASSISTS → OFFICER REVIEWS → OFFICIAL DECIDES</span>
          </div>

          {/* Demo Mode Badge & Switcher */}
          <div className="flex items-center gap-1 bg-slate-900/90 rounded-lg p-0.5 border border-slate-700">
            <span className="text-[10px] uppercase font-mono font-bold text-slate-400 px-1.5 hidden sm:inline">
              DEMO MODE
            </span>
            <button
              onClick={() => handleSwitchRole('student')}
              className={`px-2 py-0.5 rounded text-[11px] font-bold transition ${
                role === 'student' 
                  ? 'bg-blue-600 text-white shadow-xs' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              Student Demo
            </button>
            <button
              onClick={() => handleSwitchRole('officer')}
              className={`px-2 py-0.5 rounded text-[11px] font-bold transition ${
                role === 'officer' 
                  ? 'bg-amber-500 text-black shadow-xs' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              Officer Demo
            </button>
            <button
              onClick={() => handleSwitchRole('admin')}
              className={`px-2 py-0.5 rounded text-[11px] font-bold transition ${
                role === 'admin' 
                  ? 'bg-purple-600 text-white shadow-xs' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              Admin Demo
            </button>
          </div>

          {/* Accessibility Font Resizer */}
          <div className="hidden sm:flex items-center gap-1 bg-blue-950/60 rounded px-1.5 py-0.5 border border-blue-800/40">
            <button 
              onClick={() => setFontSize('normal')} 
              className={`px-1 rounded text-[11px] font-medium transition ${fontSize === 'normal' ? 'bg-amber-500 text-black font-bold' : 'text-slate-300 hover:text-white'}`}
              title="Standard Text"
            >
              A
            </button>
            <button 
              onClick={() => setFontSize('large')} 
              className={`px-1 rounded text-[11px] font-medium transition ${fontSize === 'large' ? 'bg-amber-500 text-black font-bold' : 'text-slate-300 hover:text-white'}`}
              title="Large Text"
            >
              A+
            </button>
            <button 
              onClick={() => setFontSize('xlarge')} 
              className={`px-1 rounded text-[11px] font-medium transition ${fontSize === 'xlarge' ? 'bg-amber-500 text-black font-bold' : 'text-slate-300 hover:text-white'}`}
              title="Extra Large Text"
            >
              A++
            </button>
          </div>

          {/* High Contrast Toggle */}
          <button 
            onClick={() => setHighContrast(prev => !prev)}
            className={`p-1 rounded text-xs flex items-center gap-1 transition ${highContrast ? 'bg-amber-500 text-black font-bold' : 'text-slate-300 hover:text-white'}`}
            title="Toggle High Contrast"
          >
            <Eye className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Header Row */}
      <div className="px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3">
          <STSahyogLogo />
        </div>

        {/* Center Search Bar */}
        <div className="flex-1 max-w-lg hidden md:block">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search schemes, eligibility rules, applications, documents..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 hover:bg-slate-100/80 focus:bg-white border border-slate-200 rounded-full text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-800/30 transition"
            />
          </div>
        </div>

        {/* Right Action Icons */}
        <div className="flex items-center gap-3">
          {/* Notification Bell (Item 9) */}
          <div className="relative">
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 text-slate-600 hover:text-gov-navy hover:bg-slate-100 rounded-full transition"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-white ring-1 ring-rose-300 animate-pulse" />
            </button>

            {/* Notification Center Popover */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white border border-slate-200 rounded-2xl shadow-2xl z-50 p-4 animate-in fade-in zoom-in-95">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                    <Bell className="w-4 h-4 text-gov-saffron" />
                    🔔 NOTIFICATIONS
                  </h4>
                  <span className="text-[10px] bg-rose-100 text-rose-700 px-2 py-0.5 rounded-full font-bold">
                    Action Required
                  </span>
                </div>
                <div className="space-y-2 mt-3 max-h-72 overflow-y-auto">
                  {/* Action Required Notification */}
                  <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs space-y-1">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                      <p className="font-bold text-amber-950">Action Required</p>
                    </div>
                    <p className="text-slate-700 text-[11px]">
                      Your income certificate requires correction.
                    </p>
                    <div className="pt-1 flex justify-end">
                      <button
                        onClick={() => {
                          setRole('student');
                          setStudentTab('my-applications');
                          setShowNotifications(false);
                        }}
                        className="px-2.5 py-1 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg text-[10px] transition"
                      >
                        [Resolve Now]
                      </button>
                    </div>
                  </div>

                  {/* Application Update Notification */}
                  <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 text-xs space-y-1">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <p className="font-bold text-blue-950">Application Update</p>
                    </div>
                    <p className="text-slate-700 text-[11px]">
                      Your application has moved to Officer Verification.
                    </p>
                    <p className="text-[9px] text-slate-400 font-mono">19 Sep 2026</p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowNotifications(false)}
                  className="w-full mt-3 py-1.5 text-xs text-center text-slate-600 hover:bg-slate-50 font-bold rounded-lg"
                >
                  Close
                </button>
              </div>
            )}
          </div>

          {/* Multilingual Selector (Item 16: English | हिंदी | मराठी) */}
          <div className="relative">
            <button 
              onClick={() => setShowLangDropdown(!showLangDropdown)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl hover:bg-slate-100 transition"
              title="Multilingual interface — planned/expandable"
            >
              <span>{language === 'en' ? 'English' : language === 'hi' ? 'हिंदी' : 'मराठी'}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>
            {showLangDropdown && (
              <div className="absolute right-0 mt-1 w-44 bg-white border border-slate-200 rounded-xl shadow-xl z-50 py-1 text-xs">
                <div className="px-3 py-1 text-[10px] text-slate-400 border-b border-slate-100">
                  Multilingual — Expandable
                </div>
                <button
                  onClick={() => { setLanguage('en'); setShowLangDropdown(false); }}
                  className={`w-full px-3 py-1.5 text-left ${language === 'en' ? 'bg-blue-50 text-gov-navy font-bold' : 'text-slate-700 hover:bg-slate-50'}`}
                >
                  English
                </button>
                <button
                  onClick={() => { setLanguage('hi'); setShowLangDropdown(false); }}
                  className={`w-full px-3 py-1.5 text-left ${language === 'hi' ? 'bg-blue-50 text-gov-navy font-bold' : 'text-slate-700 hover:bg-slate-50'}`}
                >
                  हिंदी (Hindi)
                </button>
                <button
                  onClick={() => { setLanguage('mr'); setShowLangDropdown(false); }}
                  className={`w-full px-3 py-1.5 text-left ${language === 'mr' ? 'bg-blue-50 text-gov-navy font-bold' : 'text-slate-700 hover:bg-slate-50'}`}
                >
                  मराठी (Marathi)
                </button>
              </div>
            )}
          </div>

          {/* User Profile Badge */}
          <div className="relative">
            <button 
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-2 pl-2 pr-3 py-1 rounded-full hover:bg-slate-50 border border-transparent hover:border-slate-200 transition text-left"
            >
              <div className="w-8 h-8 rounded-full bg-gov-navy text-white flex items-center justify-center font-bold text-xs shadow-xs flex-shrink-0">
                {role === 'student' ? (
                  <User className="w-4 h-4" />
                ) : role === 'officer' ? (
                  <ShieldCheck className="w-4 h-4 text-amber-300" />
                ) : (
                  <Sliders className="w-4 h-4 text-purple-300" />
                )}
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-xs font-bold text-slate-800 leading-tight">
                  {role === 'student' ? 'Rahul Jadhav' : role === 'officer' ? 'Shri Ramesh Sharma' : 'MoTA Policy Admin'}
                </span>
                <span className="text-[10px] text-slate-500 leading-tight">
                  {role === 'student' ? 'ST Student' : role === 'officer' ? 'Verification Officer' : 'System Admin'}
                </span>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {/* Profile Dropdown */}
            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-64 bg-white border border-slate-200 rounded-2xl shadow-xl z-50 p-3.5 text-xs">
                <div className="border-b border-slate-100 pb-2 mb-2">
                  <p className="font-bold text-slate-900">
                    {role === 'student' ? 'Rahul Jadhav' : role === 'officer' ? 'Shri Ramesh Sharma' : 'MoTA Policy Admin'}
                  </p>
                  <p className="text-slate-500 font-mono text-[11px]">
                    {role === 'student' ? 'Tribal ID: ST-MH-994821' : role === 'officer' ? 'Officer ID: MoTA-SCR-04' : 'Admin ID: MoTA-SYS-01'}
                  </p>
                  <span className="mt-1 inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                    Aadhaar e-KYC Verified
                  </span>
                </div>
                <div className="space-y-1">
                  <button 
                    onClick={() => { handleSwitchRole('student'); setShowProfileMenu(false); }}
                    className="w-full text-left px-2 py-1.5 rounded hover:bg-slate-50 text-slate-700 flex justify-between items-center"
                  >
                    <span>Switch to Student Demo</span>
                    {role === 'student' && <span className="text-blue-600 font-bold">✓</span>}
                  </button>
                  <button 
                    onClick={() => { handleSwitchRole('officer'); setShowProfileMenu(false); }}
                    className="w-full text-left px-2 py-1.5 rounded hover:bg-slate-50 text-slate-700 flex justify-between items-center"
                  >
                    <span>Switch to Officer Demo</span>
                    {role === 'officer' && <span className="text-amber-600 font-bold">✓</span>}
                  </button>
                  <button 
                    onClick={() => { handleSwitchRole('admin'); setShowProfileMenu(false); }}
                    className="w-full text-left px-2 py-1.5 rounded hover:bg-slate-50 text-slate-700 flex justify-between items-center"
                  >
                    <span>Switch to Admin Demo</span>
                    {role === 'admin' && <span className="text-purple-600 font-bold">✓</span>}
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
