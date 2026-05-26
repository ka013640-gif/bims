import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card.jsx"
import { Input } from "../components/ui/input.jsx"
import { Button } from "../components/ui/button.jsx"
import { Label } from "../components/ui/label"

export default function RegisterPage() {
  const [account_name, setAccountName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const { register } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      register(account_name, username, password)
      navigate("/dashboard")
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader className="mb-2">
          <CardTitle>Create Account</CardTitle>
          <CardDescription className="mt-1">Register user</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
{error && (
  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded flex items-start space-x-3">
    <div className="h-5 w-5 flex-shrink-0 mt-0 text-red-600 flex items-center justify-center rounded-full bg-red-100">
      !
    </div>
    <p className="text-sm text-red-600">{error}</p>
  </div>
)}
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="account_name">Full Name</Label>
              <Input id="account_name" placeholder="Enter account name" value={account_name} onChange={(e) => setAccountName(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Creating..." : "Register"}
            </Button>
            <p className="text-sm text-center text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 hover:underline">
                Sign in
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}