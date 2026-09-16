import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  ArrowRight, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  FileText,
  Building,
  User,
  ExternalLink
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const ApplicationQueue: React.FC = () => {
  const { queue, setActiveReviewAppId, setAdminTab } = useApp();
  const [filterScheme, setFilterScheme] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = queue.filter(app => {
    const matchScheme = filterScheme === 'All' || app.schemeId === filterScheme;
    const matchStatus = filterStatus === 'All' || app.overallStatus === filterStatus;
    const matchSearch = app.applicantName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        app.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        app.institution.toLowerCase().includes(searchTerm.toLowerCase());
    return matchScheme && matchStatus && matchSearch;
  });

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-900 border border-blue-100 text-[10px] font-extrabold uppercase tracking-wider mb-1">
            <ShieldCheck className="w-3.5 h-3.5 text-gov-navy" />
            Active Scrutiny Roster • 1,842 Pending
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900">
            Application Scrutiny Queue
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Prioritized officer scrutiny queue. Applications flagged with low OCR confidence or pending deficiency re-verification appear at the top.
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row gap-3 items-center justify-between">
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search Name, App ID, College..."
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800"
            />
          </div>

          {/* Scheme Filter */}
          <select
            value={filterScheme}
            onChange={(e) => setFilterScheme(e.target.value)}
            className="text-xs p-2 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-700 focus:outline-none"
          >
            <option value="All">All Schemes</option>
            <option value="nfst">National Fellowship (NFST)</option>
            <option value="top-class">Top Class Education</option>
            <option value="nos">National Overseas (NOS)</option>
            <option value="post-matric">Post-Matric (PMS)</option>
          </select>

          {/* Status Filter */}
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="text-xs p-2 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-700 focus:outline-none"
          >
            <option value="All">All Statuses</option>
            <option value="Deficiency Raised">Deficiency Raised / AI Flagged</option>
            <option value="In Review">In Review</option>
            <option value="Selection Ready">Selection Ready</option>
          </select>
        </div>

        <div className="text-xs text-slate-400 font-medium">
          Showing <strong>{filtered.length}</strong> applications
        </div>
      </div>

      {/* Queue Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
                <th className="py-3 px-4">Application ID</th>
                <th className="py-3 px-4">Applicant & Community</th>
                <th className="py-3 px-4">Scheme</th>
                <th className="py-3 px-4">Institution</th>
                <th className="py-3 px-4">Annual Income</th>
                <th className="py-3 px-4">Status & AI Flag</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filtered.map((app) => (
                <tr 
                  key={app.id} 
                  className="hover:bg-blue-50/40 transition cursor-pointer"
                  onClick={() => {
                    setActiveReviewAppId(app.id);
                    setAdminTab('review');
                  }}
                >
                  <td className="py-3 px-4 font-mono font-bold text-gov-navy">
                    {app.id}
                  </td>
                  <td className="py-3 px-4">
                    <p className="font-bold text-slate-900">{app.applicantName}</p>
                    <p className="text-[10px] text-slate-500 font-medium">
                      {app.stSubTribe} {app.isPVTG && <span className="bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded font-bold">PVTG</span>}
                    </p>
                  </td>
                  <td className="py-3 px-4 font-medium max-w-[200px] truncate">
                    {app.schemeName}
                  </td>
                  <td className="py-3 px-4 text-slate-600 max-w-[180px] truncate">
                    {app.institution}
                  </td>
                  <td className="py-3 px-4 font-mono">
                    ₹{app.annualIncome.toLocaleString('en-IN')}
                  </td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                      app.overallStatus === 'Deficiency Raised'
                        ? 'bg-rose-100 text-rose-800'
                        : app.overallStatus === 'Selection Ready'
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {app.overallStatus === 'Deficiency Raised' && <AlertTriangle className="w-3 h-3" />}
                      {app.overallStatus === 'Selection Ready' && <CheckCircle2 className="w-3 h-3" />}
                      {app.overallStatus}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveReviewAppId(app.id);
                        setAdminTab('review');
                      }}
                      className="px-3 py-1.5 bg-gov-navy hover:bg-blue-900 text-white font-bold rounded-lg text-[11px] inline-flex items-center gap-1 shadow-2xs"
                    >
                      <span>Scrutinize</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
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
