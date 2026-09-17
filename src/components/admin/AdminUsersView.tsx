import React, { useState } from 'react';
import { 
  Users, 
  ShieldCheck, 
  UserCheck, 
  Key, 
  Plus, 
  Search, 
  Filter, 
  Lock,
  Building,
  Check,
  Edit2
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const AdminUsersView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('All');

  const users = [
    {
      id: 'USR-MOTA-001',
      name: 'Dr. Virendra Kumar (MoTA-DIR-01)',
      role: 'Director, Tribal Welfare & Scholarship',
      division: 'Scholarship Division, MoTA New Delhi',
      permissions: ['All Schemes', 'Final Sanction', 'Policy Configuration', 'Audit Oversight'],
      status: 'Active',
      lastLogin: 'Today, 09:15 AM'
    },
    {
      id: 'USR-MOTA-004',
      name: 'Ramesh Sharma (MoTA-SCR-04)',
      role: 'Senior Scrutiny Officer',
      division: 'Higher Education Scrutiny Cell (Desk 04)',
      permissions: ['NFST 2026', 'Top Class Education', 'Document Verification', 'Deficiency Triage'],
      status: 'Active',
      lastLogin: 'Today, 10:45 AM'
    },
    {
      id: 'USR-MOTA-009',
      name: 'Sunita Meena (MoTA-SCR-09)',
      role: 'Scrutiny Officer (State Liaison)',
      division: 'Western Regional ST Cell (Maharashtra & Gujarat)',
      permissions: ['Post-Matric', 'Pre-Matric', 'Caste Validity Cross-Check'],
      status: 'Active',
      lastLogin: 'Yesterday, 04:30 PM'
    },
    {
      id: 'USR-STATE-MH-12',
      name: 'Anil Thorat (MAHA-VER-12)',
      role: 'State Verification Officer',
      division: 'Tribal Development Dept, Mantralaya Mumbai',
      permissions: ['State Quota Scrutiny', 'District Revenue Validation'],
      status: 'Active',
      lastLogin: '18 Sep 2026'
    },
    {
      id: 'USR-SYSTEM-AI',
      name: 'ST-Sahyog AI Scrutiny Bot (v2.4)',
      role: 'Automated Extraction Agent',
      division: 'NIC National Cloud Datacenter',
      permissions: ['OCR Extraction', 'Rule-Based Pre-Screening', 'Deficiency Flagging'],
      status: 'Active',
      lastLogin: 'Continuous'
    }
  ];

  const filteredUsers = users.filter(u => {
    const matchSearch = u.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        u.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        u.division.toLowerCase().includes(searchTerm.toLowerCase());
    return matchSearch;
  });

  return (
    <div className="p-4 sm:p-6 max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="border-b border-slate-200 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-purple-50 text-purple-900 border border-purple-200 text-[10px] font-extrabold uppercase tracking-wider mb-1">
            <Users className="w-3.5 h-3.5 text-purple-700" />
            <span>Role-Based Access Control (RBAC)</span>
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900">
            Users & Roles Management
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Manage MoTA administrative officers, state nodal verifiers, scrutiny desks, and cryptographic access privileges.
          </p>
        </div>

        <button className="px-4 py-2 bg-gov-navy hover:bg-blue-900 text-white font-bold text-xs rounded-xl transition flex items-center gap-1.5 shadow-xs self-start sm:self-auto">
          <Plus className="w-4 h-4" />
          <span>Provision New Officer</span>
        </button>
      </div>

      {/* RBAC Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Total Officers</span>
          <h3 className="text-2xl font-mono font-extrabold text-gov-navy mt-1">28</h3>
          <p className="text-[11px] text-slate-500">Across 8 Scrutiny Desks</p>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">State Nodal Verifiers</span>
          <h3 className="text-2xl font-mono font-extrabold text-emerald-800 mt-1">36</h3>
          <p className="text-[11px] text-slate-500">All 28 States & 8 UTs</p>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">2FA Enforced</span>
          <h3 className="text-2xl font-mono font-extrabold text-purple-800 mt-1">100%</h3>
          <p className="text-[11px] text-slate-500">MeriPehchaan / Jan Parichay</p>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Audit Compliance</span>
          <h3 className="text-2xl font-mono font-extrabold text-blue-800 mt-1">ISO 27001</h3>
          <p className="text-[11px] text-slate-500">CERT-In Security Cleared</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search officer by name, ID or desk..."
            className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-800"
          />
        </div>
        <span className="text-xs text-slate-400 font-medium">
          Showing {filteredUsers.length} verified officers
        </span>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
                <th className="py-3.5 px-4">Officer ID & Name</th>
                <th className="py-3.5 px-4">Role & Designation</th>
                <th className="py-3.5 px-4">Assigned Division</th>
                <th className="py-3.5 px-4">Access Privileges</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filteredUsers.map((u) => (
                <tr key={u.id} className="hover:bg-slate-50 transition">
                  <td className="py-3.5 px-4">
                    <p className="font-bold text-slate-900">{u.name}</p>
                    <p className="text-[10px] font-mono text-slate-400">{u.id}</p>
                  </td>
                  <td className="py-3.5 px-4 font-medium text-slate-800">
                    {u.role}
                  </td>
                  <td className="py-3.5 px-4 text-slate-600">
                    {u.division}
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="flex flex-wrap gap-1">
                      {u.permissions.map((p, i) => (
                        <span key={i} className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-medium border border-slate-200">
                          {p}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                      <Check className="w-3 h-3" />
                      {u.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <button className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-gov-navy transition">
                      <Edit2 className="w-3.5 h-3.5" />
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
