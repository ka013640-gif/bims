import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext"
import { AppRoutes } from "./routes"
import "./index.css"
import seedDatabase from "./seed"

seedDatabase()

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  </BrowserRouter>
)