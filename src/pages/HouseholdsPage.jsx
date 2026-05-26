import { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card.jsx"
import { Input } from "../components/ui/input.jsx"
import { Button } from "../components/ui/button.jsx"
import { Label } from "../components/ui/label"
import { Select } from "../components/ui/select.jsx"
import { toast } from "../components/Toaster"

export default function HouseholdsPage() {
  const { user, households, addHousehold, updateHousehold, deleteHousehold, addResidentToHousehold, residents } = useAuth()
  const [isAdmin] = useState(user?.role === "admin")
  const [showForm, setShowForm] = useState(false)
  const [showEditForm, setShowEditForm] = useState(false)
  const [showAssignResident, setShowAssignResident] = useState(false)
  const [showViewHousehold, setShowViewHousehold] = useState(false)
  const [showViewResident, setShowViewResident] = useState(false)
  const [householdFormData, setHouseholdFormData] = useState({
    name: "",
    zone: ""
  })
  const [editHouseholdData, setEditHouseholdData] = useState({
    id: null,
    name: "",
    zone: ""
  })
  const [selectedHouseholdId, setSelectedHouseholdId] = useState(null)
  const [selectedResidentId, setSelectedResidentId] = useState(null)
  const [selectedResident, setSelectedResident] = useState(null)
  const [viewHousehold, setViewHousehold] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setHouseholdFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleZoneChange = (e) => {
    setHouseholdFormData(prev => ({
      ...prev,
      zone: e.target.value
    }))
  }

  const handleEditInputChange = (e) => {
    const { name, value } = e.target
    setEditHouseholdData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleEditZoneChange = (e) => {
    setEditHouseholdData(prev => ({
      ...prev,
      zone: e.target.value
    }))
  }

  const formatHouseholdName = (name) => {
    const trimmed = name.trim()
    if (trimmed.toLowerCase().includes("household")) {
      return trimmed
    }
    return `${trimmed} Household`
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!householdFormData.name || !householdFormData.zone) {
      toast({
        title: "Error",
        description: "Please fill in all required fields"
      })
      return
    }

    try {
      const formattedName = formatHouseholdName(householdFormData.name)
      addHousehold({
        name: formattedName,
        zone: householdFormData.zone
      })
      toast({
        title: "Success",
        description: "Household created successfully"
      })
      setShowForm(false)
      setHouseholdFormData({ name: "", zone: "" })
    } catch (error) {
      toast({
        title: "Error",
        description: error.message || "Failed to create household"
      })
    }
  }

  const handleUpdateSubmit = (e) => {
    e.preventDefault()
    
    if (!editHouseholdData.name || !editHouseholdData.zone) {
      toast({
        title: "Error",
        description: "Please fill in all required fields"
      })
      return
    }

    try {
      const formattedName = formatHouseholdName(editHouseholdData.name)
      updateHousehold(editHouseholdData.id, {
        name: formattedName,
        zone: editHouseholdData.zone
      })
      toast({
        title: "Success",
        description: "Household updated successfully"
      })
      setShowEditForm(false)
    } catch (error) {
      toast({
        title: "Error",
        description: error.message || "Failed to update household"
      })
    }
  }

  const handleAssignResident = () => {
    if (!selectedHouseholdId || !selectedResidentId) {
      toast({
        title: "Error",
        description: "Please select both a household and a resident"
      })
      return
    }

    try {
      addResidentToHousehold(selectedHouseholdId, selectedResidentId)
      toast({
        title: "Success",
        description: "Resident assigned to household successfully"
      })
      setShowAssignResident(false)
      setSelectedHouseholdId(null)
      setSelectedResidentId(null)
    } catch (error) {
      toast({
        title: "Error",
        description: error.message || "Failed to assign resident to household"
      })
    }
  }

  const handleViewResident = (residentId) => {
    const resident = residents.find(r => r.id === residentId)
    if (resident) {
      setSelectedResident(resident)
      setShowViewResident(true)
    }
  }

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this household? This will remove all residents from this household.")) {
      try {
        deleteHousehold(id)
        toast({
          title: "Success",
          description: "Household deleted successfully"
        })
      } catch (error) {
        toast({
          title: "Error",
          description: error.message || "Failed to delete household"
        })
      }
    }
  }

  const handleEdit = (household) => {
    let displayName = household.name.replace(/ Household$/i, "")
    setEditHouseholdData({
      id: household.id,
      name: displayName,
      zone: household.zone || ""
    })
    setShowEditForm(true)
  }

  const handleAssign = (household) => {
    setSelectedHouseholdId(household.id)
    setShowAssignResident(true)
  }

  const handleView = (household) => {
    setViewHousehold(household)
    setShowViewHousehold(true)
  }

  const closeAllForms = () => {
    setShowForm(false)
    setShowEditForm(false)
    setShowAssignResident(false)
    setShowViewHousehold(false)
    setShowViewResident(false)
    setHouseholdFormData({ name: "", zone: "" })
    setEditHouseholdData({ id: null, name: "", zone: "" })
    setSelectedHouseholdId(null)
    setSelectedResidentId(null)
    setSelectedResident(null)
    setViewHousehold(null)
  }

  const getHouseholdResidents = (household) => {
    if (!household.residents || household.residents.length === 0) return []
    return residents.filter(r => household.residents.includes(r.id))
  }

  const calculateGenderStats = (householdResidents) => {
    const male = householdResidents.filter(r => r.gender === "Male").length
    const female = householdResidents.filter(r => r.gender === "Female").length
    return { male, female, total: householdResidents.length }
  }

  return (
    <div className="p-6 relative min-h-[calc(100vh-4rem)]">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Households Management</h1>
        {isAdmin && (
          <Button 
            variant="outline" 
            onClick={() => setShowForm(true)}
            className="mt-4"
          >
            Add New Household
          </Button>
        )}
{!isAdmin && (
           <p className="mt-2 text-sm text-gray-500">Only administrators can manage households</p>
         )}
       </div>

       {households.length > 0 && (
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
           {households.map(household => (
             <Card key={household.id} className="hover:shadow-lg transition-shadow">
               <CardHeader>
                 <CardTitle>{household.name}</CardTitle>
                 <CardDescription>Zone: {household.zone}</CardDescription>
               </CardHeader>
               <CardContent>
                 <p className="text-sm text-gray-600">
                   Residents: {household.residents?.length || 0}
                 </p>
               </CardContent>
               <CardFooter className="flex justify-between">
                 <Button
                   variant="outline"
                   size="sm"
                   onClick={() => handleView(household)}
                 >
                   View
                 </Button>
                 <div className="flex gap-2">
                   <Button
                     variant="outline"
                     size="sm"
                     onClick={() => handleEdit(household)}
                   >
                     Edit
                   </Button>
                   <Button
                     variant="outline"
                     size="sm"
                     onClick={() => handleAssign(household)}
                   >
                     Assign
                   </Button>
                   <Button
                     variant="destructive"
                     size="sm"
                     onClick={() => handleDelete(household.id)}
                   >
                     Delete
                   </Button>
                 </div>
               </CardFooter>
             </Card>
           ))}
         </div>
       )}

       {households.length === 0 && (
         <p className="mt-6 text-gray-500">No households found. {isAdmin ? 'Click "Add New Household" to create one.' : ''}</p>
       )}

       {(showForm || showEditForm || showAssignResident || showViewHousehold) && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={closeAllForms}
        />
      )}

      {showForm && (
        <Card className="fixed inset-0 m-auto w-full max-w-md z-50 bg-white flex flex-col">
          <CardHeader className="pb-4">
            <CardTitle>Add New Household</CardTitle>
            <CardDescription>Enter household information below. "Household" will be appended automatically.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto px-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="household_name">Household Name (Last Name) *</Label>
                <Input
                  id="household_name"
                  type="text"
                  name="name"
                  value={householdFormData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter household name (e.g., Bautista)"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="household_zone">Zone *</Label>
                <Select
                  id="household_zone"
                  name="zone"
                  value={householdFormData.zone}
                  onChange={handleZoneChange}
                  required
                >
                  <option value="">Select Zone</option>
                  {[...Array(7)].map((_, i) => (
                    <option key={i+1} value={`Zone ${i+1}`}>Zone {i+1}</option>
                  ))}
                </Select>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-end gap-3 pt-4 border-t">
            <Button 
              variant="outline" 
              onClick={() => {
                setShowForm(false)
                setHouseholdFormData({ name: "", zone: "" })
              }}
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              onClick={handleSubmit}
            >
              Create Household
            </Button>
          </CardFooter>
        </Card>
      )}

      {showEditForm && (
        <Card className="fixed inset-0 m-auto w-full max-w-md z-50 bg-white flex flex-col">
          <CardHeader className="pb-4">
            <CardTitle>Edit Household</CardTitle>
            <CardDescription>Update household information below. "Household" will be appended automatically.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto px-6">
            <form onSubmit={handleUpdateSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="edit_household_name">Household Name (Last Name) *</Label>
                <Input
                  id="edit_household_name"
                  type="text"
                  name="name"
                  value={editHouseholdData.name}
                  onChange={handleEditInputChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="edit_household_zone">Zone *</Label>
                <Select
                  id="edit_household_zone"
                  name="zone"
                  value={editHouseholdData.zone}
                  onChange={handleEditZoneChange}
                  required
                >
                  <option value="">Select Zone</option>
                  {[...Array(7)].map((_, i) => (
                    <option key={i+1} value={`Zone ${i+1}`}>Zone {i+1}</option>
                  ))}
                </Select>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-end gap-3 pt-4 border-t">
            <Button 
              variant="outline" 
              onClick={() => setShowEditForm(false)}
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              onClick={handleUpdateSubmit}
            >
              Update Household
            </Button>
          </CardFooter>
        </Card>
      )}

      {showAssignResident && (
        <Card className="fixed inset-0 m-auto w-full max-w-xl z-50 bg-white flex flex-col">
          <CardHeader className="pb-4">
            <CardTitle>Assign Resident to Household</CardTitle>
            <CardDescription>Select a resident to assign to the selected household</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto px-6">
            <div className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="resident_select">Select Resident *</Label>
                <Select
                  id="resident_select"
                  value={selectedResidentId || ""}
                  onChange={(e) => setSelectedResidentId(Number(e.target.value))}
                  className="w-full"
                >
                  <option value="">Select a resident</option>
                  {residents.map(resident => (
                    <option key={resident.id} value={resident.id}>
                      {resident.first_name} {resident.last_name}
                    </option>
                  ))}
                </Select>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end gap-3 pt-4 border-t">
            <Button 
              variant="outline" 
              onClick={() => {
                setShowAssignResident(false)
                setSelectedHouseholdId(null)
                setSelectedResidentId(null)
              }}
            >
              Cancel
            </Button>
            <Button 
              onClick={handleAssignResident}
            >
              Assign Resident
            </Button>
          </CardFooter>
        </Card>
      )}

       {showViewHousehold && viewHousehold && (
  <Card className="fixed inset-0 m-auto w-full max-w-2xl max-h-[90vh] z-50 bg-white flex flex-col">
    <CardHeader className="pb-4">
      <CardTitle>{viewHousehold.name} - Residents</CardTitle>
      <CardDescription>Zone: {viewHousehold.zone} | Total Residents: {getHouseholdResidents(viewHousehold).length}</CardDescription>
    </CardHeader>
    <CardContent className="flex-1 overflow-y-auto px-6">
      <div className="space-y-5">
        {(() => {
          const householdResidents = getHouseholdResidents(viewHousehold)
          const stats = calculateGenderStats(householdResidents)

          return (
            <>
              <div>
                <h3 className="font-semibold mb-3">Gender Distribution</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-16 text-sm">Male</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-6 overflow-hidden">
                      <div 
                        className="bg-blue-500 h-full rounded-full flex items-center justify-center text-white text-xs font-medium"
                        style={{ width: stats.total > 0 ? `${(stats.male / stats.total) * 100}%` : 0 }}
                      >
                        {stats.male}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-16 text-sm">Female</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-6 overflow-hidden">
                      <div 
                        className="bg-pink-500 h-full rounded-full flex items-center justify-center text-white text-xs font-medium"
                        style={{ width: stats.total > 0 ? `${(stats.female / stats.total) * 100}%` : 0 }}
                      >
                        {stats.female}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-semibold mb-3">Residents List</h3>
                {householdResidents.length === 0 ? (
                  <p className="text-gray-500">No residents assigned to this household.</p>
                ) : (
                  <div className="space-y-2">
                    {householdResidents.map(resident => (
                      <div key={resident.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">{resident.first_name} {resident.last_name}</p>
                          <p className="text-sm text-gray-500">{resident.gender} | {resident.occupation}</p>
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleViewResident(resident.id)}
                        >
                          View
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>
          )
        })()}
      </div>
    </CardContent>
    <CardFooter className="flex justify-end gap-3 pt-4 border-t">
      <Button 
        variant="outline" 
        onClick={() => setShowViewHousehold(false)}
      >
        Close
      </Button>
    </CardFooter>
  </Card>
)}
    </div>
  )
}