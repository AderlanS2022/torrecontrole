import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AdminLayout } from './layouts/AdminLayout';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { CompaniesPage } from './pages/CompaniesPage';
import { CompetencesPage } from './pages/CompetencesPage';
import { CompanyCompetencePage } from './pages/CompanyCompetencePage';
import { AlertsPage } from './pages/AlertsPage';
import { AlertDetailPage } from './pages/AlertDetailPage';
import { ValidationPage } from './pages/ValidationPage';
import { HistoryPage } from './pages/HistoryPage';
import { TimeTrackingPage } from './pages/TimeTrackingPage';
import { TimeRegistrationPage } from './pages/TimeRegistrationPage';
import { DirectorDashboardPage } from './pages/DirectorDashboardPage';
import { EmployeeListPage } from './pages/EmployeeListPage';
import { ProcessesPage } from './pages/ProcessesPage';
import { PendingTasksPage } from './pages/PendingTasksPage';

import { ControlTowerPage } from './pages/ControlTowerPage';
import { HealthPage } from './pages/HealthPage';
import { SLAMonitoringPage } from './pages/SLAMonitoringPage';
import { GlobalPendingPage } from './pages/GlobalPendingPage';
import { AnalystWorkloadPage } from './pages/AnalystWorkloadPage';
import { CompanyPipelinePage } from './pages/CompanyPipelinePage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<LoginPage />} />
        
        {/* Protected Routes (Simulated) */}
        <Route element={<AdminLayout />}>
          <Route path="/torre-controle" element={<ControlTowerPage />} />
          <Route path="/carteira/saude-operacional" element={<HealthPage />} />
          <Route path="/carteira/sla" element={<SLAMonitoringPage />} />
          <Route path="/carteira/pendencias" element={<GlobalPendingPage />} />
          <Route path="/operacao/analistas" element={<AnalystWorkloadPage />} />
          
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/empresas" element={<CompaniesPage />} />
          <Route path="/empresas/:id" element={<CompanyCompetencePage />} />
          <Route path="/empresas/:id/pipeline" element={<CompanyPipelinePage />} />
          
          <Route path="/colaboradores" element={<EmployeeListPage />} />
          <Route path="/competencias" element={<CompetencesPage />} />
          <Route path="/competencias/:id" element={<CompanyCompetencePage />} />
          <Route path="/processos" element={<ProcessesPage />} />
          <Route path="/alertas" element={<AlertsPage />} />
          <Route path="/alertas/:id" element={<AlertDetailPage />} />
          <Route path="/pendencias" element={<PendingTasksPage />} />
          <Route path="/validacoes" element={<ValidationPage />} />
          <Route path="/historico" element={<HistoryPage />} />
          <Route path="/ponto" element={<TimeTrackingPage />} />
          <Route path="/diretoria" element={<DirectorDashboardPage />} />
        </Route>

        {/* Special Routes */}
        <Route path="/ponto/registro" element={<TimeRegistrationPage />} />

        {/* Redirects */}
        <Route path="/" element={<Navigate to="/torre-controle" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
