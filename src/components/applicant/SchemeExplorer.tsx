import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  GraduationCap, 
  IndianRupee, 
  Calendar, 
  ArrowRight, 
  ShieldCheck, 
  FileText,
  CheckCircle2,
  Users
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { AshokaEmblem } from '../common/GovEmblem';
import { Scheme } from '../../types';

export const SchemeExplorer: React.FC = () => {
  const { schemes, setSelectedSchemeForModal, setApplicantTab } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchFilter, setSearchFilter] = useState<string>('');

  const categories = ['All', 'Higher Education', 'Overseas', 'Excellence', 'Post-Matric', 'Pre-Matric'];

  const filteredSchemes = schemes.filter(scheme => {
    const matchesCategory = selectedCategory === 'All' || scheme.category === selectedCategory;
    const matchesSearch = scheme.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
                          scheme.shortDesc.toLowerCase().includes(searchFilter.toLowerCase()) ||
                          scheme.category.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="p-4 sm:p-6 max-w-6xl mx-auto space-y-6">
      {/* Top Banner */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-900 border border-blue-100 text-[10px] font-extrabold uppercase tracking-wider mb-1">
            <ShieldCheck className="w-3.5 h-3.5 text-gov-navy" />
            Central Sector & Centrally Sponsored Schemes
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900">
            Tribal Scholarship & Fellowship Directory
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Explore 100% centrally assisted scholarship opportunities for Scheduled Tribe students across school, higher, technical, and overseas education.
          </p>
        </div>

        <button
          onClick={() => setApplicantTab('check-eligibility')}
          className="px-4 py-2.5 bg-gov-navy hover:bg-blue-900 text-white text-xs font-bold rounded-xl transition flex items-center gap-2 shadow-xs whitespace-nowrap self-start md:self-auto"
        >
          <span>Run Eligibility Pre-Check</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-slate-200 shadow-xs">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-gov-navy text-white shadow-2xs'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            placeholder="Filter schemes by keyword..."
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800"
          />
        </div>
      </div>

      {/* Scheme Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredSchemes.map((scheme) => (
          <div
            key={scheme.id}
            className="bg-white rounded-2xl border border-slate-200 hover:border-blue-300 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              {/* Header with Emblem */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 flex-shrink-0">
                  <AshokaEmblem className="w-6 h-7 text-slate-700" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-800 bg-blue-50 px-2 py-0.5 rounded">
                    {scheme.category}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 mt-1 leading-snug line-clamp-2">
                    {scheme.name}
                  </h3>
                  <p className="text-[10px] text-slate-400 font-mono mt-0.5">
                    {scheme.code} • {scheme.currentVersion}
                  </p>
                </div>
              </div>

              {/* Short Description */}
              <p className="text-xs text-slate-600 mt-3 leading-relaxed line-clamp-3">
                {scheme.shortDesc}
              </p>

              {/* Key Highlights */}
              <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 text-[11px]">Financial Grant:</span>
                  <span className="font-bold text-emerald-800 text-[11px] text-right max-w-[170px] truncate">
                    {scheme.maxBenefit}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 text-[11px]">Income Limit:</span>
                  <span className="font-mono font-semibold text-slate-800 text-[11px]">
                    ≤ ₹{(scheme.annualIncomeLimit).toLocaleString('en-IN')} / yr
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 text-[11px]">Deadline:</span>
                  <span className="font-semibold text-rose-700 text-[11px] flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {scheme.deadline}
                  </span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-3">
                {scheme.targetAudience.map((aud, i) => (
                  <span key={i} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium">
                    {aud}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
              <button
                onClick={() => setSelectedSchemeForModal(scheme)}
                className="flex-1 py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition text-center"
              >
                Guidelines & Rules
              </button>
              <button
                onClick={() => setApplicantTab('apply-now')}
                className="py-2 px-3 rounded-xl bg-gov-navy hover:bg-blue-900 text-white text-xs font-bold flex items-center gap-1 transition shadow-2xs"
              >
                <span>Apply</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
