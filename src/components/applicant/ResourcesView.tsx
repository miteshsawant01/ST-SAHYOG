import React, { useState } from 'react';
import { 
  FileText, 
  HelpCircle, 
  Calendar, 
  PlayCircle, 
  Download, 
  ExternalLink,
  ChevronDown,
  Headphones,
  CheckCircle2
} from 'lucide-react';

export const ResourcesView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'guidelines' | 'faq' | 'dates' | 'videos'>('guidelines');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Can I apply for multiple tribal scholarship schemes concurrently?',
      a: 'A student can apply for multiple schemes, but can draw financial benefit from only ONE central government scholarship/fellowship at a given time as per DBT one-student-one-benefit mandate.'
    },
    {
      q: 'How does the AI document scrutiny engine evaluate my certificates?',
      a: 'The AI scrutiny engine performs optical character recognition (OCR), layout classification, and extracts crucial fields such as Candidate Name, Certificate Number, Annual Income, and Issue Date. It compares these against your Aadhaar and Central ST Gazette data. Authorized officers make the final binding determination.'
    },
    {
      q: 'What should I do if my Income Certificate has an unclear issue date?',
      a: 'Navigate to the Deficiency Centre on your dashboard. You will see the specific issue flagged by the AI engine. Upload a high-resolution, unblurred certificate or reissued certificate from your Tehsildar / SDM office to resolve the flag without delay.'
    },
    {
      q: 'What priority weightage is granted to PVTG (Particularly Vulnerable Tribal Groups)?',
      a: 'Under Scheme Version 3.2, candidates belonging to notified 75 PVTG communities receive a 10-point bonus in composite merit score to ensure equitable representation.'
    }
  ];

  return (
    <div className="p-4 sm:p-6 max-w-5xl mx-auto space-y-6">
      {/* Top Banner */}
      <div className="border-b border-slate-200 pb-3">
        <h1 className="text-2xl font-extrabold text-slate-900">
          Knowledge & Guidelines Repository
        </h1>
        <p className="text-xs text-slate-500 mt-0.5">
          Official statutory rules, operational guidelines, FAQs, and video walkthroughs for applicants.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto">
        {[
          { id: 'guidelines', label: 'Scheme Guidelines & Rules', icon: FileText },
          { id: 'faq', label: 'Frequently Asked Questions', icon: HelpCircle },
          { id: 'dates', label: 'Important Calendar Dates', icon: Calendar },
          { id: 'videos', label: 'Video Tutorials', icon: PlayCircle },
        ].map(t => {
          const Icon = t.icon;
          return (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id as any)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                activeTab === t.id 
                  ? 'bg-gov-navy text-white shadow-2xs' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{t.label}</span>
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        {activeTab === 'guidelines' && (
          <div className="space-y-3">
            {[
              { title: 'National Fellowship for ST Students (NFST) - Operational Guidelines v3.2', size: '2.4 MB PDF', date: 'August 2026' },
              { title: 'National Overseas Scholarship (NOS) - Regulations & Terms of Award 2026-27', size: '3.1 MB PDF', date: 'July 2026' },
              { title: 'Top Class Education Scheme - List of Notified Institutions of Excellence', size: '1.8 MB PDF', date: 'June 2026' },
              { title: 'Post-Matric Scholarship for ST Students - Revised Centrally Sponsored Framework', size: '4.2 MB PDF', date: 'May 2026' }
            ].map((g, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-100 text-blue-900">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{g.title}</h4>
                    <p className="text-[10px] text-slate-400 mt-0.5">{g.size} • Published: {g.date}</p>
                  </div>
                </div>
                <button 
                  onClick={() => alert(`Downloading official Gazette guideline: ${g.title}`)}
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-xs font-bold text-gov-navy flex items-center gap-1.5 shadow-2xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'faq' && (
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full text-left p-4 bg-slate-50 hover:bg-slate-100/80 flex items-center justify-between text-xs font-bold text-slate-800 transition"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${expandedFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {expandedFaq === idx && (
                  <div className="p-4 bg-white text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'dates' && (
          <div className="space-y-3 text-xs">
            <div className="p-3 bg-blue-50 text-blue-900 rounded-xl border border-blue-100 font-bold">
              Academic Cycle 2026-27 Statutory Deadlines
            </div>
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 font-bold text-left">
                  <th className="py-2">Scheme Name</th>
                  <th className="py-2">Portal Closes</th>
                  <th className="py-2">Scrutiny Deadline</th>
                  <th className="py-2">Selection List</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="py-2.5 font-bold">National Fellowship (NFST)</td>
                  <td className="py-2.5 text-rose-700 font-semibold">31 Oct 2026</td>
                  <td className="py-2.5">15 Nov 2026</td>
                  <td className="py-2.5 text-emerald-700 font-semibold">30 Nov 2026</td>
                </tr>
                <tr>
                  <td className="py-2.5 font-bold">National Overseas (NOS)</td>
                  <td className="py-2.5 text-rose-700 font-semibold">15 Nov 2026</td>
                  <td className="py-2.5">30 Nov 2026</td>
                  <td className="py-2.5 text-emerald-700 font-semibold">15 Dec 2026</td>
                </tr>
                <tr>
                  <td className="py-2.5 font-bold">Top Class Education</td>
                  <td className="py-2.5 text-rose-700 font-semibold">30 Nov 2026</td>
                  <td className="py-2.5">15 Dec 2026</td>
                  <td className="py-2.5 text-emerald-700 font-semibold">31 Dec 2026</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'videos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {[
              { title: 'How to Resolve Document Deficiencies Online', duration: '4:12 mins' },
              { title: 'Step-by-Step NFST Fellowship Application Guide', duration: '6:45 mins' },
              { title: 'Aadhaar DBT Bank Account Seeding Walkthrough', duration: '3:20 mins' },
              { title: 'DigiLocker Integration and e-Sanad Verification', duration: '5:10 mins' }
            ].map((v, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center flex-shrink-0">
                  <PlayCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{v.title}</h4>
                  <p className="text-[10px] text-slate-500 mt-0.5">{v.duration} • Official MoTA Guide</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
