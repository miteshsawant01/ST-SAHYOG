import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/common/Header';
import { Sidebar } from './components/common/Sidebar';

// Student Views
import { ApplicantHome } from './components/applicant/ApplicantHome';
import { SchemeExplorer } from './components/applicant/SchemeExplorer';
import { EligibilityChecker } from './components/applicant/EligibilityChecker';
import { StudentDashboard } from './components/applicant/StudentDashboard';
import { DocumentCentre } from './components/applicant/DocumentCentre';
import { NotificationCenter } from './components/applicant/NotificationCenter';
import { ApplicationDashboard } from './components/applicant/ApplicationDashboard';
import { ApplicationWizard } from './components/applicant/ApplicationWizard';
import { DeficiencyCentre } from './components/applicant/DeficiencyCentre';

// Officer Views
import { AdminDashboard } from './components/admin/AdminDashboard';
import { ApplicationQueue } from './components/admin/ApplicationQueue';
import { AIDocumentReview } from './components/admin/AIDocumentReview';
import { ScrutinyWorkstation } from './components/admin/ScrutinyWorkstation';
import { SelectionReview } from './components/admin/SelectionReview';
import { AuditTrailViewer } from './components/admin/AuditTrailViewer';
import { AnalyticsView } from './components/admin/AnalyticsView';

// Admin Views
import { SchemeConfigEngine } from './components/admin/SchemeConfigEngine';
import { AdminUsersView } from './components/admin/AdminUsersView';
import { AdminWorkflowView } from './components/admin/AdminWorkflowView';

// Modals
import { SchemeDetailModal } from './components/common/SchemeDetailModal';
import { HelpSupportModal } from './components/common/HelpSupportModal';

const MainLayout: React.FC = () => {
  const { role, studentTab, officerTab, adminTab } = useApp();

  return (
    <div className="min-h-screen bg-[#f3f6f9] text-slate-800 flex flex-col selection:bg-blue-100 selection:text-gov-navy">
      {/* Sticky Institutional Government Header */}
      <Header />

      {/* Main Body with Sidebar + Content */}
      <div className="flex-1 flex overflow-x-hidden">
        {/* Institutional Left Sidebar */}
        <Sidebar />

        {/* Dynamic Views based on active Role & Tab */}
        <main className="flex-1 overflow-y-auto min-h-[calc(100vh-65px)]">
          {/* STUDENT ROLE */}
          {role === 'student' && (
            <>
              {studentTab === 'home' && <ApplicantHome />}
              {studentTab === 'explore-schemes' && <SchemeExplorer />}
              {studentTab === 'check-eligibility' && <EligibilityChecker />}
              {studentTab === 'my-applications' && <StudentDashboard />}
              {studentTab === 'documents' && <DocumentCentre />}
              {studentTab === 'notifications' && <NotificationCenter />}
              {studentTab === 'track-status' && <ApplicationDashboard />}
            </>
          )}

          {/* OFFICER ROLE */}
          {role === 'officer' && (
            <>
              {officerTab === 'command-center' && <AdminDashboard />}
              {officerTab === 'applications' && <ApplicationQueue />}
              {officerTab === 'ai-doc-review' && <AIDocumentReview />}
              {officerTab === 'eligibility-review' && <ScrutinyWorkstation />}
              {officerTab === 'deficiencies' && <DeficiencyCentre />}
              {officerTab === 'selection-support' && <SelectionReview />}
              {officerTab === 'analytics' && <AnalyticsView />}
              {officerTab === 'audit-trail' && <AuditTrailViewer />}
            </>
          )}

          {/* ADMIN ROLE */}
          {role === 'admin' && (
            <>
              {adminTab === 'scheme-config' && <SchemeConfigEngine />}
              {adminTab === 'users-roles' && <AdminUsersView />}
              {adminTab === 'workflow-config' && <AdminWorkflowView />}
              {adminTab === 'system-analytics' && <AnalyticsView />}
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
