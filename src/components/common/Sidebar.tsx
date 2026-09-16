import React from 'react';
import { 
  Home, 
  Compass, 
  CheckCircle, 
  FileEdit, 
  BarChart2, 
  FileText, 
  AlertCircle, 
  BookOpen, 
  Headphones, 
  LayoutDashboard, 
  Layers, 
  Sliders, 
  Clock, 
  PieChart, 
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { MountainGraphic } from './GovEmblem';
import { ApplicantTab, AdminTab } from '../../types';

export const Sidebar: React.FC = () => {
  const { 
    role, 
    applicantTab, 
    setApplicantTab, 
    adminTab, 
    setAdminTab, 
    application,
    setShowHelpModal 
  } = useApp();

  const openDeficienciesCount = application.deficiencies.filter(d => d.status === 'action_required').length;

  const applicantNavItems: { id: ApplicantTab; label: string; icon: any; badge?: string }[] = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'explore-schemes', label: 'Explore Schemes', icon: Compass },
    { id: 'check-eligibility', label: 'Check Eligibility', icon: CheckCircle },
    { id: 'apply-now', label: 'Apply Now', icon: FileEdit },
    { id: 'track-application', label: 'Track Application', icon: BarChart2 },
    { id: 'document-assistant', label: 'Document Assistant', icon: FileText },
    { 
      id: 'deficiency-centre', 
      label: 'Deficiency Centre', 
      icon: AlertCircle, 
      badge: openDeficienciesCount > 0 ? `${openDeficienciesCount} Action` : undefined 
    },
    { id: 'resources', label: 'Resources', icon: BookOpen },
    { id: 'help-support', label: 'Help & Support', icon: Headphones },
  ];

  const adminNavItems: { id: AdminTab; label: string; icon: any; badge?: string }[] = [
    { id: 'dashboard', label: 'Command Dashboard', icon: LayoutDashboard },
    { id: 'queue', label: 'Scrutiny Queue', icon: Layers, badge: '1,842' },
    { id: 'review', label: '3-Pane Scrutiny', icon: FileText, badge: 'AI Assumed' },
    { id: 'scheme-engine', label: 'Scheme Engine v3.2', icon: Sliders, badge: '⭐ Policy' },
    { id: 'audit-trail', label: 'Audit Trail', icon: Clock, badge: 'Live' },
    { id: 'analytics', label: 'DBT Analytics', icon: PieChart },
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col justify-between min-h-[calc(100vh-65px)] p-3.5 flex-shrink-0 shadow-sm">
      {/* Navigation Links */}
      <div className="space-y-1">
        {/* Portal Role Indicator */}
        <div className="px-3 py-2 mb-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${role === 'applicant' ? 'bg-blue-600 ring-4 ring-blue-100' : 'bg-amber-500 ring-4 ring-amber-100'}`} />
            <span className="text-[11px] font-bold tracking-wider uppercase text-slate-700">
              {role === 'applicant' ? 'Applicant Portal' : 'MoTA Scrutiny Cell'}
            </span>
          </div>
          <span className="text-[10px] font-semibold text-slate-400 bg-white px-1.5 py-0.5 rounded border border-slate-200">
            {role === 'applicant' ? 'ST Student' : 'Officer'}
          </span>
        </div>

        {/* Applicant Navigation Items */}
        {role === 'applicant' && (
          <nav className="space-y-1">
            {applicantNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = applicantTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    if (item.id === 'help-support') {
                      setShowHelpModal(true);
                    } else {
                      setApplicantTab(item.id);
                    }
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-[#0f294a] text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      isActive 
                        ? 'bg-rose-500 text-white' 
                        : 'bg-rose-100 text-rose-700 animate-pulse'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        )}

        {/* Admin Navigation Items */}
        {role === 'admin' && (
          <nav className="space-y-1">
            {adminNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = adminTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setAdminTab(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-[#0f294a] text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                      isActive 
                        ? 'bg-amber-400 text-blue-950 font-bold' 
                        : 'bg-slate-100 text-slate-700'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        )}
      </div>

      {/* Bottom Card - Matching Reference Image */}
      <div className="mt-4 pt-3 border-t border-slate-100">
        {role === 'applicant' ? (
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-emerald-50/70 via-emerald-100/40 to-emerald-200/50 p-4 border border-emerald-200/60 shadow-xs flex flex-col justify-between min-h-[145px]">
            <div>
              <div className="inline-flex items-center gap-1 bg-white/80 backdrop-blur-xs px-2 py-0.5 rounded-md text-[10px] font-bold text-emerald-800 border border-emerald-200/50 mb-2">
                <Sparkles className="w-3 h-3 text-emerald-600" />
                <span>Tribal Empowerment</span>
              </div>
              <p className="text-sm font-serif italic text-slate-800 font-semibold leading-snug">
                “Equal Opportunities<br />Brighter Futures”
              </p>
            </div>
            {/* Soft stylized green mountain hills matching reference design */}
            <div className="mt-2 -mx-4 -mb-4">
              <MountainGraphic className="w-full h-16" />
            </div>
          </div>
        ) : (
          <div className="rounded-xl bg-slate-900 text-slate-100 p-3.5 border border-slate-800 text-xs">
            <div className="flex items-center gap-2 mb-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span className="font-bold text-white text-[11px] uppercase tracking-wider">MoTA Scrutiny Cell</span>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              AI Decision Support Active. Final sanction authority rests strictly with authorized Officers.
            </p>
            <div className="mt-2 pt-2 border-t border-slate-800 flex justify-between items-center text-[10px] text-slate-400">
              <span>Terminal: MoTA-HQ-09</span>
              <span className="text-emerald-400 font-medium">● Secure</span>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};
