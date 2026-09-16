import React, { useState } from 'react';
import { 
  Clock, 
  Search, 
  Download, 
  ShieldCheck, 
  Filter, 
  ExternalLink, 
  CheckCircle2, 
  AlertTriangle,
  User,
  Cpu,
  FileText,
  Key
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const AuditTrailViewer: React.FC = () => {
  const { auditTrail } = useApp();
  const [filterRole, setFilterRole] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLogs = auditTrail.filter(entry => {
    const matchRole = filterRole === 'All' || entry.actorRole === filterRole;
    const matchSearch = entry.actor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        entry.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        entry.target.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        entry.details.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        entry.timestamp.includes(searchTerm);
    return matchRole && matchSearch;
  });

  const exportCSV = () => {
    const headers = ['Timestamp', 'Actor', 'Role', 'Action', 'Target', 'Details', 'CryptoHash'];
    const rows = filteredLogs.map(l => [
      l.timestamp,
      `"${l.actor}"`,
      `"${l.actorRole}"`,
      `"${l.action}"`,
      `"${l.target}"`,
      `"${l.details}"`,
      `"${l.hash}"`
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `MoTA_Audit_Trail_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-4 sm:p-6 max-w-6xl mx-auto space-y-6">
      {/* Header Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-extrabold uppercase tracking-wider text-emerald-900 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 flex items-center gap-1">
              <Key className="w-3 h-3 text-emerald-700" />
              Tamper-Evident Governance Ledger
            </span>
            <span className="text-xs text-slate-400 font-mono">
              CAG & RTI Compliant
            </span>
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900 mt-1">
            Government Audit Trail & Scrutiny Log
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Immutable, cryptographically chained event log recording every manual officer verification, automated AI flag, and applicant deficiency replacement.
          </p>
        </div>

        <button
          onClick={exportCSV}
          className="px-4 py-2 bg-gov-navy hover:bg-blue-900 text-white text-xs font-bold rounded-xl transition flex items-center gap-2 shadow-xs self-start md:self-auto"
        >
          <Download className="w-4 h-4" />
          <span>Export Audit Log (CSV)</span>
        </button>
      </div>

      {/* Filter and Search */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row gap-3 items-center justify-between">
        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search timestamp, actor, action..."
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800"
            />
          </div>

          <select
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
            className="text-xs p-2 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-700 focus:outline-none"
          >
            <option value="All">All Actor Roles</option>
            <option value="Scrutiny Officer">Scrutiny Officer</option>
            <option value="System AI Engine">System AI Engine</option>
            <option value="Applicant">Applicant</option>
            <option value="Scheme Admin">Scheme Admin</option>
          </select>
        </div>

        <div className="text-xs text-slate-400 font-mono">
          Total Recorded Actions: <strong>{filteredLogs.length}</strong>
        </div>
      </div>

      {/* Prominent Prompt Showcase Card: Exact Timestamps from user request */}
      <div className="bg-gradient-to-br from-slate-900 to-gov-navy rounded-2xl p-5 text-white shadow-md">
        <h3 className="text-xs font-bold text-amber-300 uppercase tracking-widest mb-3 flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>Key Lifecycle Trace: Application #ST26-10482 (Income Certificate Scrutiny)</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
          <div className="p-3 bg-white/10 rounded-xl border border-white/10">
            <p className="font-mono font-bold text-amber-300">14:32:08</p>
            <p className="font-semibold text-white mt-1">Officer A reviewed Income Certificate</p>
            <p className="text-[10px] text-blue-200 mt-0.5">Initial dossier intake</p>
          </div>
          <div className="p-3 bg-white/10 rounded-xl border border-white/10">
            <p className="font-mono font-bold text-rose-300">14:34:12</p>
            <p className="font-semibold text-white mt-1">System generated deficiency flag</p>
            <p className="text-[10px] text-rose-200 mt-0.5">Date confidence 61%</p>
          </div>
          <div className="p-3 bg-white/10 rounded-xl border border-white/10">
            <p className="font-mono font-bold text-blue-300">14:38:54</p>
            <p className="font-semibold text-white mt-1">Applicant uploaded replacement</p>
            <p className="text-[10px] text-blue-200 mt-0.5">Reissued SDM document</p>
          </div>
          <div className="p-3 bg-white/10 rounded-xl border border-white/10">
            <p className="font-mono font-bold text-emerald-300">14:41:03</p>
            <p className="font-semibold text-white mt-1">Officer A verified replacement</p>
            <p className="text-[10px] text-emerald-200 mt-0.5">Status: VERIFIED</p>
          </div>
        </div>
      </div>

      {/* Comprehensive Audit Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
                <th className="py-3 px-4">Time (IST)</th>
                <th className="py-3 px-4">Actor</th>
                <th className="py-3 px-4">Role</th>
                <th className="py-3 px-4">Action</th>
                <th className="py-3 px-4">Target Record</th>
                <th className="py-3 px-4">Log Details</th>
                <th className="py-3 px-4 text-right font-mono">Digital Hash</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filteredLogs.map((log) => (
                <tr key={log.id} className="hover:bg-slate-50 transition">
                  <td className="py-3 px-4 font-mono font-bold text-gov-navy whitespace-nowrap">
                    {log.timestamp}
                  </td>
                  <td className="py-3 px-4 font-bold text-slate-900 whitespace-nowrap">
                    {log.actor}
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap">
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold ${
                      log.actorRole === 'Scrutiny Officer' 
                        ? 'bg-blue-100 text-blue-900' 
                        : log.actorRole === 'System AI Engine'
                        ? 'bg-purple-100 text-purple-900'
                        : log.actorRole === 'Applicant'
                        ? 'bg-amber-100 text-amber-900'
                        : 'bg-slate-100 text-slate-900'
                    }`}>
                      {log.actorRole}
                    </span>
                  </td>
                  <td className="py-3 px-4 font-semibold text-slate-800 whitespace-nowrap">
                    {log.action}
                  </td>
                  <td className="py-3 px-4 font-mono text-[11px] text-slate-600 max-w-[150px] truncate">
                    {log.target}
                  </td>
                  <td className="py-3 px-4 text-slate-500 max-w-xs leading-relaxed">
                    {log.details}
                  </td>
                  <td className="py-3 px-4 text-right font-mono text-[10px] text-slate-400">
                    {log.hash}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
