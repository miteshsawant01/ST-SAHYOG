import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/common/Header';
import { Sidebar } from './components/common/Sidebar';
import { ApplicantHome } from './components/applicant/ApplicantHome';
import { SchemeExplorer } from './components/applicant/SchemeExplorer';
import { EligibilityChecker } from './components/applicant/EligibilityChecker';
import { ApplicationDashboard } from './components/applicant/ApplicationDashboard';
import { DocumentCentre } from './components/applicant/DocumentCentre';
import { DeficiencyCentre } from './components/applicant/DeficiencyCentre';
import { ApplicationWizard } from './components/applicant/ApplicationWizard';
import { ResourcesView } from './components/applicant/ResourcesView';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { ApplicationQueue } from './components/admin/ApplicationQueue';
import { ScrutinyWorkstation } from './components/admin/ScrutinyWorkstation';
import { SchemeConfigEngine } from './components/admin/SchemeConfigEngine';
import { AuditTrailViewer } from './components/admin/AuditTrailViewer';
import { AnalyticsView } from './components/admin/AnalyticsView';
import { SchemeDetailModal } from './components/common/SchemeDetailModal';
import { HelpSupportModal } from './components/common/HelpSupportModal';

const MainLayout: React.FC = () => {
  const { role, applicantTab, adminTab } = useApp();

  return (
    <div className="min-h-screen bg-[#f3f6f9] text-slate-800 flex flex-col selection:bg-blue-100 selection:text-gov-navy">
      {/* Sticky Institutional Government Header */}
      <Header />

      {/* Main Body with Sidebar + Content */}
      <div className="flex-1 flex overflow-x-hidden">
        {/* Institutional Left Sidebar */}
        <Sidebar />

        {/* Dynamic Views */}
        <main className="flex-1 overflow-y-auto min-h-[calc(100vh-65px)]">
          {role === 'applicant' ? (
            <>
              {applicantTab === 'home' && <ApplicantHome />}
              {applicantTab === 'explore-schemes' && <SchemeExplorer />}
              {applicantTab === 'check-eligibility' && <EligibilityChecker />}
              {applicantTab === 'apply-now' && <ApplicationWizard />}
              {applicantTab === 'track-application' && <ApplicationDashboard />}
              {applicantTab === 'document-assistant' && <DocumentCentre />}
              {applicantTab === 'deficiency-centre' && <DeficiencyCentre />}
              {applicantTab === 'resources' && <ResourcesView />}
            </>
          ) : (
            <>
              {adminTab === 'dashboard' && <AdminDashboard />}
              {adminTab === 'queue' && <ApplicationQueue />}
              {adminTab === 'review' && <ScrutinyWorkstation />}
              {adminTab === 'scheme-engine' && <SchemeConfigEngine />}
              {adminTab === 'audit-trail' && <AuditTrailViewer />}
              {adminTab === 'analytics' && <AnalyticsView />}
            </>
          )}
        </main>
      </div>

      {/* Global Modals */}
      <SchemeDetailModal />
      <HelpSupportModal />
    </div>
  );
};

export function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}

export default App;
