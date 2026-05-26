import { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card.jsx"
import { Input } from "../components/ui/input.jsx"
import { Button } from "../components/ui/button.jsx"
import { Label } from "../components/ui/label"
import { Select } from "../components/ui/select.jsx"
import { toast } from "../components/Toaster"
import { formatBirthday, formatContactNumber } from "../lib/utils"

export default function ResidentsPage() {
  const { user, addResident, residents, updateResident, deleteResident, households, addHousehold, addResidentToHousehold } = useAuth()
  const [isAdmin] = useState(user?.role === "admin")
  const [showForm, setShowForm] = useState(false)
  const [showHouseholdSelection, setShowHouseholdSelection] = useState(false)
  const [showViewResident, setShowViewResident] = useState(false)
  const [showEditResident, setShowEditResident] = useState(false)
  const [newResident, setNewResident] = useState({
    first_name: "",
    last_name: "",
    birthday: "",
    gender: "",
    address: "Calabanga, Camarines Sur",
    zone: "",
    contact_number: "",
    email: "",
    occupation: "",
    civil_status: ""
  })
  const [selectedHouseholdId, setSelectedHouseholdId] = useState(null)
  const [newHouseholdName, setNewHouseholdName] = useState("")
  const [newHouseholdZone, setNewHouseholdZone] = useState("")
  const [selectedResident, setSelectedResident] = useState(null)
  const [editResidentData, setEditResidentData] = useState({
    first_name: "",
    last_name: "",
    birthday: "",
    gender: "",
    zone: "",
    contact_number: "",
    email: "",
    occupation: "",
    civil_status: ""
  })

  const formatHouseholdName = (name) => {
    const trimmed = name.trim()
    if (trimmed.toLowerCase().includes("household")) {
      return trimmed
    }
    return `${trimmed} Household`
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewResident(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleZoneChange = (e) => {
    setNewResident(prev => ({
      ...prev,
      zone: e.target.value
    }))
  }

  const handleGenderChange = (e) => {
    setNewResident(prev => ({
      ...prev,
      gender: e.target.value
    }))
  }

  const handleCivilStatusChange = (e) => {
    setNewResident(prev => ({
      ...prev,
      civil_status: e.target.value
    }))
  }

  const handleEditInputChange = (e) => {
    const { name, value } = e.target
    setEditResidentData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleEditGenderChange = (e) => {
    setEditResidentData(prev => ({
      ...prev,
      gender: e.target.value
    }))
  }

  const handleEditCivilStatusChange = (e) => {
    setEditResidentData(prev => ({
      ...prev,
      civil_status: e.target.value
    }))
  }

  const handleEditZoneChange = (e) => {
    setEditResidentData(prev => ({
      ...prev,
      zone: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!newResident.first_name || !newResident.last_name || !newResident.birthday || 
        !newResident.gender || !newResident.zone || !newResident.contact_number || 
        !newResident.email || !newResident.occupation || !newResident.civil_status) {
      toast({
        title: "Error",
        description: "Please fill in all required fields"
      })
      return
    }

    try {
      addResident(newResident)
      setShowHouseholdSelection(true)
      setShowForm(false)
      
      setNewResident({
        first_name: "",
        last_name: "",
        birthday: "",
        gender: "",
        address: "Calabanga, Camarines Sur",
        zone: "",
        contact_number: "",
        email: "",
        occupation: "",
        civil_status: ""
      })
    } catch (error) {
      toast({
        title: "Error",
        description: error.message || "Failed to add resident"
      })
    }
  }

  const handleHouseholdSelect = () => {
    if (!selectedHouseholdId) {
      toast({
        title: "Error",
        description: "Please select a household or create a new one"
      })
      return
    }

    const storedResidents = JSON.parse(localStorage.getItem("residents") || "[]")
    const recentResident = storedResidents[storedResidents.length - 1]
    
    if (recentResident) {
      addResidentToHousehold(selectedHouseholdId, recentResident.id)
      toast({
        title: "Success",
        description: "Resident added and assigned to household"
      })
      setShowHouseholdSelection(false)
      setSelectedHouseholdId(null)
    }
  }

  const handleCreateHousehold = () => {
    if (!newHouseholdName || !newHouseholdZone) {
      toast({
        title: "Error",
        description: "Please provide household name and zone"
      })
      return
    }

    try {
      const formattedName = formatHouseholdName(newHouseholdName)
      const household = addHousehold({
        name: formattedName,
        zone: newHouseholdZone
      })
      
      const storedResidents = JSON.parse(localStorage.getItem("residents") || "[]")
      const recentResident = storedResidents[storedResidents.length - 1]
      
      if (recentResident) {
        addResidentToHousehold(household.id, recentResident.id)
        toast({
          title: "Success",
          description: "Resident added and assigned to new household"
        })
        setShowHouseholdSelection(false)
        setSelectedHouseholdId(null)
        setNewHouseholdName("")
        setNewHouseholdZone("")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error.message || "Failed to create household"
      })
    }
  }

  const handleViewResident = (resident) => {
    setSelectedResident(resident)
    setShowViewResident(true)
  }

  const handleEditResident = (resident) => {
    setSelectedResident(resident)
    setEditResidentData({
      first_name: resident.first_name,
      last_name: resident.last_name,
      birthday: resident.birthday,
      gender: resident.gender,
      zone: resident.zone,
      contact_number: resident.contact_number,
      email: resident.email,
      occupation: resident.occupation,
      civil_status: resident.civil_status
    })
    setShowEditResident(true)
  }

  const handleUpdateResident = (e) => {
    e.preventDefault()
    
    if (!editResidentData.first_name || !editResidentData.last_name || 
        !editResidentData.birthday || !editResidentData.gender || !editResidentData.zone ||
        !editResidentData.contact_number || !editResidentData.email ||
        !editResidentData.occupation || !editResidentData.civil_status) {
      toast({
        title: "Error",
        description: "Please fill in all required fields"
      })
      return
    }

    try {
      updateResident(selectedResident.id, editResidentData)
      toast({
        title: "Success",
        description: "Resident updated successfully"
      })
      setShowEditResident(false)
    } catch (error) {
      toast({
        title: "Error",
        description: error.message || "Failed to update resident"
      })
    }
  }

  const handleDeleteResident = (id) => {
    if (window.confirm("Are you sure you want to delete this resident?")) {
      try {
        deleteResident(id)
        toast({
          title: "Success",
          description: "Resident deleted successfully"
        })
      } catch (error) {
        toast({
          title: "Error",
          description: error.message || "Failed to delete resident"
        })
      }
    }
  }

  const handleCancel = () => {
    setShowForm(false)
    setShowHouseholdSelection(false)
    setShowViewResident(false)
    setShowEditResident(false)
    setNewResident({
      first_name: "",
      last_name: "",
      birthday: "",
      gender: "",
      address: "Calabanga, Camarines Sur",
      zone: "",
      contact_number: "",
      email: "",
      occupation: "",
      civil_status: ""
    })
    setSelectedHouseholdId(null)
    setNewHouseholdName("")
    setNewHouseholdZone("")
    setSelectedResident(null)
  }

  return (
    <div className="p-6 relative min-h-[calc(100vh-4rem)]">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Residents Management</h1>
        {isAdmin && (
          <Button 
            variant="outline" 
            onClick={() => setShowForm(true)}
            className="mt-4"
          >
            Add New Resident
          </Button>
        )}
        {!isAdmin && (
          <p className="mt-2 text-sm text-gray-500">Only administrators can manage residents</p>
        )}
      </div>

      {(showForm || showHouseholdSelection || showViewResident || showEditResident) && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={handleCancel}
        />
      )}

      {showForm && (
        <Card className="fixed inset-0 m-auto w-full max-w-2xl max-h-[90vh] z-50 bg-white flex flex-col">
          <CardHeader className="pb-4">
            <CardTitle>Add New Resident</CardTitle>
            <CardDescription>Enter resident information below</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto px-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="first_name">First Name *</Label>
                  <Input
                    id="first_name"
                    type="text"
                    name="first_name"
                    value={newResident.first_name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter first name"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="last_name">Last Name *</Label>
                  <Input
                    id="last_name"
                    type="text"
                    name="last_name"
                    value={newResident.last_name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter last name"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="birthday">Birthday *</Label>
                  <Input
                    id="birthday"
                    type="date"
                    name="birthday"
                    value={newResident.birthday}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender *</Label>
                  <Select
                    id="gender"
                    name="gender"
                    value={newResident.gender}
                    onChange={handleGenderChange}
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="zone">Zone *</Label>
                  <Select
                    id="zone"
                    name="zone"
                    value={newResident.zone}
                    onChange={handleZoneChange}
                    required
                  >
                    <option value="">Select Zone</option>
                    {[...Array(7)].map((_, i) => (
                      <option key={i+1} value={`Zone ${i+1}`}>Zone {i+1}</option>
                    ))}
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="contact_number">Contact Number *</Label>
                  <Input
                    id="contact_number"
                    type="tel"
                    name="contact_number"
                    value={newResident.contact_number}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter contact number"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    value={newResident.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter email address"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="occupation">Occupation *</Label>
                  <Input
                    id="occupation"
                    type="text"
                    name="occupation"
                    value={newResident.occupation}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter occupation"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="civil_status">Civil Status *</Label>
                  <Select
                    id="civil_status"
                    name="civil_status"
                    value={newResident.civil_status}
                    onChange={handleCivilStatusChange}
                    required
                  >
                    <option value="">Select Civil Status</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Widowed">Widowed</option>
                    <option value="Separated">Separated</option>
                    <option value="Divorced">Divorced</option>
                  </Select>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-end gap-3 pt-4 border-t">
            <Button 
              variant="outline" 
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              onClick={handleSubmit}
            >
              Add Resident
            </Button>
          </CardFooter>
        </Card>
      )}

      {showViewResident && selectedResident && (
        <Card className="fixed inset-0 m-auto w-full max-w-md z-50 bg-white flex flex-col">
          <CardHeader className="pb-4">
            <CardTitle>View Resident</CardTitle>
            <CardDescription>Resident information details</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto px-6 space-y-3">
            <div><span className="font-medium">Name:</span> {selectedResident.first_name} {selectedResident.last_name}</div>
            <div><span className="font-medium">Birthday:</span> {formatBirthday(selectedResident.birthday)}</div>
            <div><span className="font-medium">Gender:</span> {selectedResident.gender}</div>
            <div><span className="font-medium">Zone:</span> {selectedResident.zone}</div>
            <div><span className="font-medium">Contact:</span> {formatContactNumber(selectedResident.contact_number)}</div>
            <div><span className="font-medium">Email:</span> {selectedResident.email}</div>
            <div><span className="font-medium">Occupation:</span> {selectedResident.occupation}</div>
            <div><span className="font-medium">Civil Status:</span> {selectedResident.civil_status}</div>
            <div><span className="font-medium">Household:</span> {households.find(h => h.residents && h.residents.includes(selectedResident.id))?.name || "Not Assigned"}</div>
          </CardContent>
          <CardFooter className="flex justify-end pt-4 border-t">
            <Button 
              variant="outline" 
              onClick={() => setShowViewResident(false)}
            >
              Close
            </Button>
          </CardFooter>
        </Card>
      )}

      {showEditResident && selectedResident && (
        <Card className="fixed inset-0 m-auto w-full max-w-2xl max-h-[90vh] z-50 bg-white flex flex-col">
          <CardHeader className="pb-4">
            <CardTitle>Edit Resident</CardTitle>
            <CardDescription>Update resident information below</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto px-6">
            <form onSubmit={handleUpdateResident} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="edit_first_name">First Name *</Label>
                  <Input
                    id="edit_first_name"
                    type="text"
                    name="first_name"
                    value={editResidentData.first_name}
                    onChange={handleEditInputChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="edit_last_name">Last Name *</Label>
                  <Input
                    id="edit_last_name"
                    type="text"
                    name="last_name"
                    value={editResidentData.last_name}
                    onChange={handleEditInputChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="edit_birthday">Birthday *</Label>
                  <Input
                    id="edit_birthday"
                    type="date"
                    name="birthday"
                    value={editResidentData.birthday}
                    onChange={handleEditInputChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="edit_gender">Gender *</Label>
                  <Select
                    id="edit_gender"
                    value={editResidentData.gender}
                    onChange={handleEditGenderChange}
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="edit_zone">Zone *</Label>
                  <Select
                    id="edit_zone"
                    value={editResidentData.zone}
                    onChange={handleEditZoneChange}
                    required
                  >
                    <option value="">Select Zone</option>
                    {[...Array(7)].map((_, i) => (
                      <option key={i+1} value={`Zone ${i+1}`}>Zone {i+1}</option>
                    ))}
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="edit_contact_number">Contact Number *</Label>
                  <Input
                    id="edit_contact_number"
                    type="tel"
                    name="contact_number"
                    value={editResidentData.contact_number}
                    onChange={handleEditInputChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="edit_email">Email *</Label>
                  <Input
                    id="edit_email"
                    type="email"
                    name="email"
                    value={editResidentData.email}
                    onChange={handleEditInputChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="edit_occupation">Occupation *</Label>
                  <Input
                    id="edit_occupation"
                    type="text"
                    name="occupation"
                    value={editResidentData.occupation}
                    onChange={handleEditInputChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="edit_civil_status">Civil Status *</Label>
                  <Select
                    id="edit_civil_status"
                    value={editResidentData.civil_status}
                    onChange={handleEditCivilStatusChange}
                    required
                  >
                    <option value="">Select Civil Status</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Widowed">Widowed</option>
                    <option value="Separated">Separated</option>
                    <option value="Divorced">Divorced</option>
                  </Select>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-end gap-3 pt-4 border-t">
            <Button 
              variant="outline" 
              onClick={() => setShowEditResident(false)}
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              onClick={handleUpdateResident}
            >
              Update Resident
            </Button>
          </CardFooter>
        </Card>
      )}

      {showHouseholdSelection && (
        <Card className="fixed inset-0 m-auto w-full max-w-xl z-50 bg-white flex flex-col">
          <CardHeader className="pb-4">
            <CardTitle>Assign Resident to Household</CardTitle>
            <CardDescription>Select an existing household or create a new one for the resident. "Household" will be appended automatically.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto px-6">
            <div className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="household_select">Select Household</Label>
                <Select
                  id="household_select"
                  value={selectedHouseholdId || ""}
                  onChange={(e) => setSelectedHouseholdId(Number(e.target.value))}
                  className="w-full"
                >
                  <option value="">Select a household</option>
                  {households.map(household => (
                    <option key={household.id} value={household.id}>
                      {household.name} - {household.zone}
                    </option>
                  ))}
                </Select>
              </div>
              
              <div className="border-t pt-5">
                <h3 className="font-semibold mb-3">Or Create New Household</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="new_household_name">Household Name (Last Name) *</Label>
                    <Input
                      id="new_household_name"
                      type="text"
                      value={newHouseholdName}
                      onChange={(e) => setNewHouseholdName(e.target.value)}
                      placeholder="Enter household name (usually family last name)"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new_household_zone">Zone *</Label>
                    <Select
                      id="new_household_zone"
                      value={newHouseholdZone}
                      onChange={(e) => setNewHouseholdZone(e.target.value)}
                      className="w-full"
                    >
                      <option value="">Select Zone</option>
                      {[...Array(7)].map((_, i) => (
                        <option key={i+1} value={`Zone ${i+1}`}>Zone {i+1}</option>
                      ))}
                    </Select>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end gap-3 pt-4 border-t">
            <Button 
              variant="outline" 
              onClick={() => setShowHouseholdSelection(false)}
            >
              Back
            </Button>
            <Button 
              variant="outline"
              onClick={() => {
                setNewHouseholdName("")
                setNewHouseholdZone("")
              }}
            >
              Clear
            </Button>
            <Button 
              onClick={handleCreateHousehold}
            >
              Create Household & Assign
            </Button>
            <Button 
              onClick={handleHouseholdSelect}
            >
              Assign to Household
            </Button>
          </CardFooter>
        </Card>
      )}

      <Card className="w-full">
        <CardHeader>
          <CardTitle>Resident Records</CardTitle>
          <CardDescription>
            Total residents: {residents.length}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Name</th>
                  <th className="text-left p-2">Birthday</th>
                  <th className="text-left p-2">Gender</th>
                  <th className="text-left p-2">Zone</th>
                  <th className="text-left p-2">Contact</th>
                  <th className="text-left p-2">Household</th>
                  {isAdmin && (
                    <th className="text-left p-2">Actions</th>
                  )}
                </tr>
              </thead>
              <tbody>
                {residents.map((resident) => {
                  const householdName = households.find(h => 
                    h.residents && h.residents.includes(resident.id)
                  )?.name || "Not Assigned"
                  
                  return (
                    <tr key={resident.id} className="border-b">
                      <td className="p-2">
                        {resident.first_name} {resident.last_name}
                      </td>
                      <td className="p-2">
                        {formatBirthday(resident.birthday)}
                      </td>
                      <td className="p-2">{resident.gender}</td>
                      <td className="p-2">{resident.zone}</td>
                      <td className="p-2">{formatContactNumber(resident.contact_number)}</td>
                      <td className="p-2">{householdName}</td>
                      {isAdmin && (
                        <td className="p-2 flex space-x-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleViewResident(resident)}
                          >
                            View
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleEditResident(resident)}
                          >
                            Edit
                          </Button>
                          <Button 
                            variant="destructive"
                            size="sm"
                            onClick={() => handleDeleteResident(resident.id)}
                          >
                            Delete
                          </Button>
                        </td>
                      )}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}