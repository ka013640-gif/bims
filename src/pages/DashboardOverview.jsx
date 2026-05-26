import { useMemo } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card.jsx"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LabelList
} from "recharts"

const AGE_BRACKETS = [
  { name: "Children", label: "Children (0-12)", min: 0, max: 12 },
  { name: "Teenagers", label: "Teenagers (13-17)", min: 13, max: 17 },
  { name: "Young Adults", label: "Young Adults (18-35)", min: 18, max: 35 },
  { name: "Adults", label: "Adults (36-59)", min: 36, max: 59 },
  { name: "Senior Citizens", label: "Senior Citizens (60+)", min: 60, max: 150 }
]

const COLORS = {
  Children: "#8884d8",
  Teenagers: "#83a6ed",
  "Young Adults": "#8dd1e1",
  Adults: "#82ca9d",
  "Senior Citizens": "#a4de6c",
  Male: "#8884d8",
  Female: "#ff7aa2"
}

export default function DashboardOverview() {
  const { residents, households } = useAuth()

  const totalResidents = residents.length
  const totalHouseholds = households.length

  const normalizeZone = (zone) => {
    if (!zone) return null
    if (zone.startsWith("Zone ")) return zone
    return `Zone ${zone}`
  }

  const zoneResidents = useMemo(() => {
    const zones = {}
    for (let i = 1; i <= 7; i++) {
      zones[`Zone ${i}`] = 0
    }
    residents.forEach(r => {
      const normalizedZone = normalizeZone(r.zone)
      if (normalizedZone && Object.prototype.hasOwnProperty.call(zones, normalizedZone)) {
        zones[normalizedZone]++
      }
    })
    return zones
  }, [residents])

  const zoneHouseholds = useMemo(() => {
    const zones = {}
    for (let i = 1; i <= 7; i++) {
      zones[`Zone ${i}`] = 0
    }
    households.forEach(h => {
      const normalizedZone = normalizeZone(h.zone)
      if (normalizedZone && Object.prototype.hasOwnProperty.call(zones, normalizedZone)) {
        zones[normalizedZone]++
      }
    })
    return zones
  }, [households])

  const ageDemographics = useMemo(() => {
    const currentYear = new Date().getFullYear()
    const ageCounts = AGE_BRACKETS.map(bracket => ({
      name: bracket.name,
      label: bracket.label,
      count: 0
    }))

    residents.forEach(resident => {
      if (resident.birthday) {
        const birthYear = new Date(resident.birthday).getFullYear()
        const age = currentYear - birthYear
        
        const bracket = AGE_BRACKETS.find(b => age >= b.min && age <= b.max)
        if (bracket) {
          const index = ageCounts.findIndex(a => a.name === bracket.name)
          if (index >= 0) {
            ageCounts[index].count++
          }
        }
      }
    })

    return ageCounts
  }, [residents])

  const genderDemographics = useMemo(() => {
    const male = residents.filter(r => r.gender === "Male").length
    const female = residents.filter(r => r.gender === "Female").length
    return [
      { name: "Male", count: male },
      { name: "Female", count: female }
    ]
  }, [residents])

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Residents</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{totalResidents}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Households</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{totalHouseholds}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Residents (All Zones)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{totalResidents}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Households (All Zones)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{totalHouseholds}</p>
          </CardContent>
        </Card>
      </div>

      {/* Zone Statistics */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Residents by Zone</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(zoneResidents).map(([zone, count]) => (
            <Card key={zone}>
              <CardHeader>
                <CardTitle className="text-base">{zone} Residents</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{count}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Households by Zone</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(zoneHouseholds).map(([zone, count]) => (
            <Card key={zone}>
              <CardHeader>
                <CardTitle className="text-base">{zone} Households</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{count}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Age Demographics */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Age Demographics</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Age Distribution (Bar Graph)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={ageDemographics} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="label" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#8884d8">
                      {ageDemographics.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
                      ))}
                      <LabelList dataKey="count" position="top" />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Age Distribution (Pie Graph)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={ageDemographics}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      label={({ label, count }) => `${label}: ${count}`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="count"
                    >
                      {ageDemographics.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Age Demographics Count */}
        <Card className="mt-4">
          <CardHeader>
            <CardTitle>Age Demographics Count</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {ageDemographics.map((item) => (
                <div key={item.name} className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm font-medium text-gray-600">{item.label}</p>
                  <p className="text-2xl font-bold">{item.count}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Gender Demographics */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Gender Demographics</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Gender Distribution (Bar Graph)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={genderDemographics} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#8884d8">
                      {genderDemographics.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
                      ))}
                      <LabelList dataKey="count" position="top" />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Gender Distribution (Pie Graph)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={genderDemographics}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      label={({ name, count }) => `${name}: ${count}`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="count"
                    >
                      {genderDemographics.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Gender Demographics Count */}
        <Card className="mt-4">
          <CardHeader>
            <CardTitle>Gender Demographics Count</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {genderDemographics.map((item) => (
                <div key={item.name} className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm font-medium text-gray-600">{item.name}</p>
                  <p className="text-3xl font-bold">{item.count}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}