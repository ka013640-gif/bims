import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card.jsx"

export default function DashboardOverview() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Residents</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">1,248</p>
            <p className="text-sm text-gray-600">+12 this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Active Households</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">312</p>
            <p className="text-sm text-gray-600">+3 this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Certificates Issued</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">42</p>
            <p className="text-sm text-gray-600">This month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Pending Cases</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">3</p>
            <p className="text-sm text-gray-600">Requires attention</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}