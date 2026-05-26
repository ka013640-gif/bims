import { Outlet } from "react-router-dom"
import { Sidebar } from "../components/Sidebar.jsx"
import { Navbar } from "../components/Navbar.jsx"
import { Toaster } from "../components/Toaster.jsx"

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
      <Toaster />
    </div>
  )
}