import React, { useState } from 'react';
import { 
  Bell, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  Filter,
  Check
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const NotificationCenter: React.FC = () => {
  const { setStudentTab, application } = useApp();
  const [filter, setFilter] = useState<'all' | 'action' | 'update'>('all');

  const openDeficiency = application.deficiencies.find(d => d.status === 'action_required');

  const notifications = [
    {
      id: 'notif-1',
      type: 'action_required',
      category: 'Action Required',
      title: 'Action Required: Your income certificate requires correction.',
      message: 'AI document pre-screening flagged an issue with your uploaded Income Certificate for Application ST26-DEMO001. Issue date OCR confidence is below statutory threshold (61%). Please upload a clear reissued copy with official seal.',
      time: '18 Sep 2026, 11:42 AM',
      actionText: '[Resolve Now]',
      actionTab: 'documents',
      unread: !!openDeficiency,
      badgeColor: 'bg-rose-100 text-rose-800 border-rose-200'
    },
    {
      id: 'notif-2',
      type: 'update',
      category: 'Application Update',
      title: 'Application Update: Your application has moved to Officer Verification.',
      message: 'Application ST26-DEMO001 (National Fellowship for ST Students) has successfully completed automated eligibility verification and is assigned to MoTA Scrutiny Cell Desk 04 (Officer Ramesh Sharma).',
      time: '18 Sep 2026, 09:30 AM',
      actionText: '[View Application Progress]',
      actionTab: 'track-status',
      unread: false,
      badgeColor: 'bg-blue-100 text-blue-800 border-blue-200'
    },
    {
      id: 'notif-3',
      type: 'update',
      category: 'System Milestone',
      title: 'Preliminary Eligibility Satisfied: 4/4 Statutory Criteria Verified',
      message: 'All pre-checks for National Fellowship 2026 satisfied (ST Community, M.Tech CGPA 8.4, PVTG Affirmative Priority, Age limit). Eligible to proceed subject to official scrutiny.',
      time: '17 Sep 2026, 03:15 PM',
      actionText: '[Check Criteria Breakdown]',
      actionTab: 'check-eligibility',
      unread: false,
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200'
    },
    {
      id: 'notif-4',
      type: 'update',
      category: 'Receipt Confirmation',
      title: 'Application Successfully Submitted: ST26-DEMO001',
      message: 'Your dossier has been registered with the Ministry of Tribal Affairs digital gateway. Immutable SHA-256 audit record generated.',
      time: '17 Sep 2026, 10:14 AM',
      actionText: '[View Dossier]',
      actionTab: 'my-applications',
      unread: false,
      badgeColor: 'bg-slate-100 text-slate-700 border-slate-200'
    }
  ];

  const filteredNotifs = notifications.filter(n => {
    if (filter === 'action') return n.type === 'action_required';
    if (filter === 'update') return n.type === 'update';
    return true;
  });

  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="border-b border-slate-200 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-900 border border-blue-100 text-[10px] font-extrabold uppercase tracking-wider mb-1">
            <Bell className="w-3.5 h-3.5 text-gov-navy" />
            <span>Real-time Communication Hub</span>
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900">
            NOTIFICATIONS
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Real-time status updates, action requirements, and official scrutiny notices for applicant <strong>Rahul Jadhav</strong>.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
              filter === 'all' 
                ? 'bg-gov-navy text-white shadow-xs' 
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            All ({notifications.length})
          </button>
          <button
            onClick={() => setFilter('action')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
              filter === 'action' 
                ? 'bg-rose-600 text-white shadow-xs' 
                : 'bg-white border border-slate-200 text-rose-700 hover:bg-rose-50'
            }`}
          >
            Action Required ({notifications.filter(n => n.type === 'action_required').length})
          </button>
          <button
            onClick={() => setFilter('update')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
              filter === 'update' 
                ? 'bg-blue-600 text-white shadow-xs' 
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            Updates ({notifications.filter(n => n.type === 'update').length})
          </button>
        </div>
      </div>

      {/* Notifications List - Exact prompt requirements */}
      <div className="space-y-3.5">
        {filteredNotifs.map((notif) => {
          const isAction = notif.type === 'action_required';

          return (
            <div
              key={notif.id}
              className={`bg-white rounded-2xl border transition-all p-5 shadow-xs ${
                isAction 
                  ? 'border-amber-300 ring-2 ring-amber-100/60 bg-gradient-to-r from-amber-50/30 to-white' 
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3.5">
                  <div className={`p-2.5 rounded-xl flex-shrink-0 ${
                    isAction ? 'bg-amber-100 text-amber-800' : 'bg-blue-50 text-blue-800'
                  }`}>
                    {isAction ? <AlertTriangle className="w-5 h-5" /> : <Bell className="w-5 h-5" />}
                  </div>

                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded border uppercase tracking-wider ${notif.badgeColor}`}>
                        {notif.category}
                      </span>
                      <span className="text-[11px] text-slate-400 flex items-center gap-1 font-mono">
                        <Clock className="w-3 h-3" />
                        <span>{notif.time}</span>
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-slate-900 leading-snug pt-0.5">
                      {notif.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed max-w-2xl">
                      {notif.message}
                    </p>
                  </div>
                </div>

                {/* Direct Action Button */}
                <button
                  onClick={() => setStudentTab(notif.actionTab as any)}
                  className={`px-4 py-2 text-xs font-bold rounded-xl transition flex items-center gap-1.5 flex-shrink-0 shadow-xs whitespace-nowrap ${
                    isAction 
                      ? 'bg-amber-600 hover:bg-amber-700 text-white animate-pulse' 
                      : 'bg-gov-navy hover:bg-blue-900 text-white'
                  }`}
                >
                  <span>{notif.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Institutional Assurance */}
      <div className="p-4 bg-slate-100/70 rounded-2xl border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>All official notifications are also dispatched via SMS & registered email under NIC Gov-Push.</span>
        </div>
        <span className="text-[11px] font-mono text-slate-400">Gateway: SMS-NIC-MOTA</span>
      </div>
    </div>
  );
};
