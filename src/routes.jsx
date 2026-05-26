import { Routes, Route, Navigate } from "react-router-dom"
import { useAuth } from "./contexts/AuthContext"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import DashboardPage from "./pages/DashboardPage"
import ResidentsPage from "./pages/ResidentsPage"
import HouseholdsPage from "./pages/HouseholdsPage"
import DashboardOverview from "./pages/DashboardOverview"

function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth()

  if (loading) return <div className="flex items-center justify-center min-h-screen">Loading...</div>

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return children
}

function PublicRoute({ children }) {
  const { isAuthenticated, loading } = useAuth()

  if (loading) return <div className="flex items-center justify-center min-h-screen">Loading...</div>

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />
  }

  return children
}

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
      <Route path="/register" element={<PublicRoute><RegisterPage /></PublicRoute>} />
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>}>
        <Route index element={<DashboardOverview />} />
        <Route path="residents" element={<ResidentsPage />} />
        <Route path="households" element={<HouseholdsPage />} />
      </Route>
    </Routes>
  )
}