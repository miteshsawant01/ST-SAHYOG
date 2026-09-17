import React from 'react';
import { 
  Home, 
  Compass, 
  CheckCircle, 
  FileText, 
  Bell, 
  BarChart2, 
  LayoutDashboard, 
  Layers, 
  ScanLine, 
  ShieldCheck, 
  AlertTriangle, 
  Award, 
  PieChart, 
  Clock, 
  Sliders, 
  Users, 
  Workflow, 
  Activity,
  Sparkles
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { MountainGraphic } from './GovEmblem';
import { StudentTab, OfficerTab, AdminTab } from '../../types';

export const Sidebar: React.FC = () => {
  const { 
    role, 
    studentTab, 
    setStudentTab, 
    officerTab, 
    setOfficerTab, 
    adminTab, 
    setAdminTab,
    application 
  } = useApp();

  const openDeficiencyCount = application.deficiencies.filter(d => d.status === 'action_required').length;

  // Item 18: Exact Student Navigation
  const studentNavItems: { id: StudentTab; label: string; icon: any; badge?: string }[] = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'explore-schemes', label: 'Explore Schemes', icon: Compass },
    { id: 'check-eligibility', label: 'Check Eligibility', icon: CheckCircle },
    { id: 'my-applications', label: 'My Applications', icon: Layers, badge: '3' },
    { id: 'documents', label: 'Documents', icon: FileText },
    { id: 'notifications', label: 'Notifications', icon: Bell, badge: '2' },
    { id: 'track-status', label: 'Track Status', icon: BarChart2 },
  ];

  // Item 18: Exact Officer Navigation
  const officerNavItems: { id: OfficerTab; label: string; icon: any; badge?: string }[] = [
    { id: 'command-center', label: 'Command Center', icon: LayoutDashboard },
    { id: 'applications', label: 'Applications', icon: Layers, badge: '1,284*' },
    { id: 'ai-doc-review', label: 'AI Document Review', icon: ScanLine, badge: 'Flagged' },
    { id: 'eligibility-review', label: 'Eligibility Review', icon: ShieldCheck },
    { id: 'deficiencies', label: 'Deficiencies', icon: AlertTriangle, badge: `${openDeficiencyCount > 0 ? openDeficiencyCount : '436*'}` },
    { id: 'selection-support', label: 'Selection Support', icon: Award },
    { id: 'analytics', label: 'Analytics', icon: PieChart },
    { id: 'audit-trail', label: 'Audit Trail', icon: Clock, badge: 'Live' },
  ];

  // Item 18: Exact Admin Navigation
  const adminNavItems: { id: AdminTab; label: string; icon: any; badge?: string }[] = [
    { id: 'scheme-config', label: 'Scheme Configuration', icon: Sliders, badge: 'v3.2' },
    { id: 'users-roles', label: 'Users & Roles', icon: Users },
    { id: 'workflow-config', label: 'Workflow Configuration', icon: Workflow },
    { id: 'system-analytics', label: 'System Analytics', icon: Activity },
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col justify-between min-h-[calc(100vh-65px)] p-3.5 flex-shrink-0 shadow-xs">
      <div className="space-y-1">
        {/* Role Portal Indicator */}
        <div className="px-3 py-2 mb-2 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={`w-2.5 h-2.5 rounded-full ${
              role === 'student' ? 'bg-blue-600 ring-4 ring-blue-100' :
              role === 'officer' ? 'bg-amber-500 ring-4 ring-amber-100' :
              'bg-purple-600 ring-4 ring-purple-100'
            }`} />
            <span className="text-[11px] font-extrabold tracking-wider uppercase text-slate-800">
              {role === 'student' ? 'Student Portal' : role === 'officer' ? 'Officer Scrutiny' : 'Policy Admin'}
            </span>
          </div>
          <span className="text-[10px] font-mono font-bold text-slate-500 bg-white px-1.5 py-0.5 rounded border border-slate-200">
            {role.toUpperCase()}
          </span>
        </div>

        {/* STUDENT NAVIGATION */}
        {role === 'student' && (
          <nav className="space-y-1">
            {studentNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = studentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setStudentTab(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-gov-navy text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      isActive 
                        ? 'bg-amber-400 text-slate-950' 
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        )}

        {/* OFFICER NAVIGATION */}
        {role === 'officer' && (
          <nav className="space-y-1">
            {officerNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = officerTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setOfficerTab(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-gov-navy text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded-full ${
                      isActive 
                        ? 'bg-amber-400 text-slate-950' 
                        : item.badge.includes('Flagged')
                        ? 'bg-rose-100 text-rose-700 animate-pulse'
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        )}

        {/* ADMIN NAVIGATION */}
        {role === 'admin' && (
          <nav className="space-y-1">
            {adminNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = adminTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setAdminTab(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-gov-navy text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      isActive ? 'bg-purple-300 text-purple-950' : 'bg-slate-100 text-slate-600'
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

      {/* Bottom Motif / Institutional Assurance */}
      <div className="mt-4 pt-3 border-t border-slate-100">
        {role === 'student' ? (
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-emerald-50/70 via-emerald-100/40 to-emerald-200/50 p-3.5 border border-emerald-200/60 shadow-xs flex flex-col justify-between min-h-[135px]">
            <div>
              <div className="inline-flex items-center gap-1 bg-white/80 backdrop-blur-xs px-2 py-0.5 rounded-md text-[10px] font-bold text-emerald-800 border border-emerald-200/50 mb-1.5">
                <Sparkles className="w-3 h-3 text-emerald-600" />
                <span>Tribal Empowerment</span>
              </div>
              <p className="text-xs font-serif italic text-slate-800 font-semibold leading-snug">
                “Equal Opportunities<br />Brighter Futures”
              </p>
            </div>
            <div className="mt-2 -mx-3.5 -mb-3.5">
              <MountainGraphic className="w-full h-14" />
            </div>
          </div>
        ) : (
          <div className="rounded-xl bg-slate-900 text-slate-100 p-3 border border-slate-800 text-xs">
            <div className="flex items-center gap-1.5 mb-1 text-amber-400 font-bold text-[10px] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Human-In-The-Loop</span>
            </div>
            <p className="text-[11px] text-slate-300 leading-snug">
              AI assists verification and screening; authorized officials retain final decision authority.
            </p>
            <div className="mt-2 pt-1.5 border-t border-slate-800 flex justify-between text-[10px] text-slate-400 font-mono">
              <span>MoTA Scrutiny Cell</span>
              <span className="text-emerald-400">Active</span>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};
