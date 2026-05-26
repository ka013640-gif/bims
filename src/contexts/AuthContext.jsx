import { createContext, useContext, useState, useEffect } from "react"

const AuthContext = createContext()

const MOCK_ADMIN = {
  account_id: 1,
  account_name: "System Administrator",
  username: "admin",
  role: "admin"
}

const MOCK_USER = {
  account_id: 2,
  account_name: "Default Resident",
  username: "resident",
  role: "user"
}

export function useAuth() {
   return useContext(AuthContext)
 }

 export function AuthProvider({ children }) {
   const [user, setUser] = useState(null)
   const [loading, setLoading] = useState(true)
   const [residents, setResidents] = useState(() => {
     const stored = localStorage.getItem("residents")
     return stored ? JSON.parse(stored) : []
   })
   const [households, setHouseholds] = useState(() => {
     const stored = localStorage.getItem("households")
     return stored ? JSON.parse(stored) : []
   })

   useEffect(() => {
     const storedUser = localStorage.getItem("user")
     if (storedUser) {
       setUser(JSON.parse(storedUser))
     }
     setLoading(false)
   }, [])

   const login = (username, password) => {
     if (username === MOCK_ADMIN.username && password === "admin123") {
       setUser(MOCK_ADMIN)
       localStorage.setItem("user", JSON.stringify(MOCK_ADMIN))
       return
     }

     if (username === MOCK_USER.username && password === "12345678") {
       setUser(MOCK_USER)
       localStorage.setItem("user", JSON.stringify(MOCK_USER))
       return
     }

     const foundUser = residents.find(u => u.username === username && u.password === password)
     if (foundUser) {
       const { password: _, ...userWithoutPassword } = foundUser
       setUser(userWithoutPassword)
       localStorage.setItem("user", JSON.stringify(userWithoutPassword))
       return
     }

     throw new Error("Invalid credentials")
   }

   const register = (account_name, username, password) => {
     const exists = 
       [MOCK_ADMIN, MOCK_USER].some(u => u.username === username) ||
       residents.some(u => u.username === username)
     if (exists) {
       throw new Error("Username already exists")
     }
     const newUser = {
       account_id: Date.now(),
       account_name,
       username,
       password,
       role: "user"
     }
     setResidents(prev => {
       const updated = [...prev, newUser]
       localStorage.setItem("residents", JSON.stringify(updated))
       return updated
     })

     const { password: _, ...userWithoutPassword } = newUser
     setUser(userWithoutPassword)
     localStorage.setItem("user", JSON.stringify(userWithoutPassword))
   }

   const logout = () => {
     setUser(null)
     localStorage.removeItem("user")
   }

   const addResident = (residentData) => {
     const newResident = {
       id: Date.now(),
       ...residentData,
       createdAt: new Date().toISOString()
     }
     setResidents(prev => {
       const updated = [...prev, newResident]
       localStorage.setItem("residents", JSON.stringify(updated))
       return updated
     })
     return newResident
   }

   const updateResident = (id, updatedData) => {
     setResidents(prev => {
       const updated = prev.map(resident => 
         resident.id === id ? { ...resident, ...updatedData } : resident
       )
       localStorage.setItem("residents", JSON.stringify(updated))
       return updated
     })
   }

   const deleteResident = (id) => {
     setResidents(prev => {
       const updated = prev.filter(resident => resident.id !== id)
       localStorage.setItem("residents", JSON.stringify(updated))
       return updated
     })
   }

   const addHousehold = (householdData) => {
     const newHousehold = {
       id: Date.now(),
       ...householdData,
       createdAt: new Date().toISOString(),
       residents: []
     }
     setHouseholds(prev => {
       const updated = [...prev, newHousehold]
       localStorage.setItem("households", JSON.stringify(updated))
       return updated
     })
     return newHousehold
   }

   const updateHousehold = (id, updatedData) => {
     setHouseholds(prev => {
       const updated = prev.map(household => 
         household.id === id ? { ...household, ...updatedData } : household
       )
       localStorage.setItem("households", JSON.stringify(updated))
       return updated
     })
   }

   const deleteHousehold = (id) => {
     setHouseholds(prev => {
       const updated = prev.filter(household => household.id !== id)
       localStorage.setItem("households", JSON.stringify(updated))
       return updated
     })
   }

   const addResidentToHousehold = (householdId, residentId) => {
     setHouseholds(prev => {
       const updated = prev.map(household => {
         if (household.id === householdId) {
           if (!household.residents.includes(residentId)) {
             return {
               ...household,
               residents: [...household.residents, residentId]
             }
           }
         }
         return household
       })
       localStorage.setItem("households", JSON.stringify(updated))
       return updated
     })
   }

   const removeResidentFromHousehold = (householdId, residentId) => {
     setHouseholds(prev => {
       const updated = prev.map(household => {
         if (household.id === householdId) {
           return {
             ...household,
             residents: household.residents.filter(id => id !== residentId)
           }
         }
         return household
       })
       localStorage.setItem("households", JSON.stringify(updated))
       return updated
     })
   }

   const value = {
     user,
     login,
     register,
     logout,
     loading,
     isAuthenticated: !!user,

     residents,
     setResidents,
     addResident,
     updateResident,
     deleteResident,

     households,
     setHouseholds,
     addHousehold,
     updateHousehold,
     deleteHousehold,
     addResidentToHousehold,
     removeResidentFromHousehold
   }

   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
 }