import React, { useState } from 'react';
import { 
  X, 
  Headphones, 
  Phone, 
  Mail, 
  Send, 
  CheckCircle2, 
  MapPin,
  Clock,
  HelpCircle,
  Building
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const HelpSupportModal: React.FC = () => {
  const { showHelpModal, setShowHelpModal, application, addAuditEntry } = useApp();
  const [ticketCategory, setTicketCategory] = useState('Income Certificate Deficiency Clarification');
  const [ticketMessage, setTicketMessage] = useState('Requesting guidance on Tehsildar issue date verification.');
  const [ticketSubmitted, setTicketSubmitted] = useState(false);

  if (!showHelpModal) return null;

  const handleCreateTicket = (e: React.FormEvent) => {
    e.preventDefault();
    setTicketSubmitted(true);
    addAuditEntry(
      'Rahul Jadhav',
      'Applicant',
      'Filed Support Grievance Ticket',
      'MoTA Grievance Cell',
      `Category: ${ticketCategory}`
    );
    setTimeout(() => {
      setTicketSubmitted(false);
      setShowHelpModal(false);
    }, 2500);
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 max-h-[90vh] overflow-y-auto space-y-5">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-50 text-gov-navy border border-blue-100">
              <Headphones className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-slate-900">
                MoTA 24x7 Tribal Helpline & Grievance Cell
              </h3>
              <p className="text-xs text-slate-500">
                Ministry of Tribal Affairs, Government of India
              </p>
            </div>
          </div>
          <button 
            onClick={() => setShowHelpModal(false)}
            className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Toll Free Callout */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-900 to-gov-navy text-white text-xs space-y-2 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300">National Toll-Free Helpline</span>
            <span className="text-[10px] text-blue-200">9:00 AM - 6:00 PM (Mon-Sat)</span>
          </div>
          <div className="flex items-center gap-2 text-lg font-bold font-mono">
            <Phone className="w-5 h-5 text-amber-400" />
            <span>1800-11-9876 (Toll Free)</span>
          </div>
          <p className="text-[11px] text-blue-200">
            Dedicated multi-lingual helpline in Hindi, English, Santhali, Gondi, Bodo, and other tribal languages.
          </p>
        </div>

        {/* Nodal Officer Contact */}
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-[10px] font-bold text-slate-400 uppercase">National Nodal Officer</span>
            <p className="font-bold text-slate-800 mt-0.5">Shri Deepak Kumar (Dir)</p>
            <p className="text-slate-500 text-[11px] mt-0.5 flex items-center gap-1">
              <Mail className="w-3 h-3" />
              fellowship-mota@gov.in
            </p>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Technical IT Helpdesk</span>
            <p className="font-bold text-slate-800 mt-0.5">NIC Support Desk</p>
            <p className="text-slate-500 text-[11px] mt-0.5 flex items-center gap-1">
              <Mail className="w-3 h-3" />
              support.sahyog@nic.in
            </p>
          </div>
        </div>

        {/* Fast Ticket Generation Form */}
        {ticketSubmitted ? (
          <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2 animate-in fade-in">
            <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
            <h4 className="text-sm font-bold text-emerald-900">Grievance Ticket Generated!</h4>
            <p className="text-xs text-emerald-800">
              Ticket ID: <strong>GRV-ST26-{Math.floor(1000 + Math.random() * 9000)}</strong>. Nodal officer will respond within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleCreateTicket} className="space-y-3 text-xs">
            <h4 className="font-bold text-slate-800 text-[11px] uppercase tracking-wider">
              File An Institutional Grievance / Query
            </h4>
            <div>
              <label className="block font-bold text-slate-700 mb-1">Query Subject</label>
              <input
                type="text"
                value={ticketCategory}
                onChange={e => setTicketCategory(e.target.value)}
                className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl"
              />
            </div>
            <div>
              <label className="block font-bold text-slate-700 mb-1">Details of Query / Deficiency Issue</label>
              <textarea
                rows={3}
                value={ticketMessage}
                onChange={e => setTicketMessage(e.target.value)}
                className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl"
              />
            </div>
            <div className="pt-2 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowHelpModal(false)}
                className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 font-bold"
              >
                Close
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl bg-gov-navy hover:bg-blue-900 text-white font-bold flex items-center gap-1.5 shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Grievance</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
