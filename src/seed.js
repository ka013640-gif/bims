// Seed script to populate the database with mock resident data
const generateUsername = (firstName, lastName) => {
  return `${firstName.toLowerCase()}.${lastName.toLowerCase()}`;
};

const generatePassword = (birthday) => {
  const parts = birthday.split('/');
  return `${parts[0]}${parts[1]}${parts[2]}`;
};

const mockData = [
  {
    firstName: "Carlos",
    lastName: "Bautista",
    birthday: "05/14/1976",
    gender: "Male",
    contactNumber: "09171234561",
    email: "carlos.bautista@email.com",
    occupation: "Driver",
    civilStatus: "Married",
    zone: "1"
  },
  {
    firstName: "Maria",
    lastName: "Bautista",
    birthday: "08/21/1979",
    gender: "Female",
    contactNumber: "09171234562",
    email: "maria.bautista@email.com",
    occupation: "Vendor",
    civilStatus: "Married",
    zone: "1"
  },
  {
    firstName: "Joshua",
    lastName: "Bautista",
    birthday: "02/17/2003",
    gender: "Male",
    contactNumber: "09171234563",
    email: "joshua.bautista@email.com",
    occupation: "Student",
    civilStatus: "Single",
    zone: "1"
  },
  {
    firstName: "Angela",
    lastName: "Bautista",
    birthday: "03/11/2007",
    gender: "Female",
    contactNumber: "09171234564",
    email: "angela.bautista@email.com",
    occupation: "Student",
    civilStatus: "Single",
    zone: "1"
  },
  {
    firstName: "Lola Elena",
    lastName: "Bautista",
    birthday: "09/09/1952",
    gender: "Female",
    contactNumber: "09171234565",
    email: "elena.bautista@email.com",
    occupation: "Retired",
    civilStatus: "Widowed",
    zone: "1"
  },
  {
    firstName: "Roberto",
    lastName: "Dela Cruz",
    birthday: "03/15/1975",
    gender: "Male",
    contactNumber: "09171234566",
    email: "roberto.delacruz@email.com",
    occupation: "Engineer",
    civilStatus: "Married",
    zone: "2"
  },
  {
    firstName: "Elena",
    lastName: "Dela Cruz",
    birthday: "07/18/1978",
    gender: "Female",
    contactNumber: "09171234567",
    email: "elena.delacruz@email.com",
    occupation: "Teacher",
    civilStatus: "Married",
    zone: "2"
  },
  {
    firstName: "Karen",
    lastName: "Dela Cruz",
    birthday: "12/11/2005",
    gender: "Female",
    contactNumber: "09171234568",
    email: "karen.delacruz@email.com",
    occupation: "Student",
    civilStatus: "Single",
    zone: "2"
  },
  {
    firstName: "Paolo",
    lastName: "Dela Cruz",
    birthday: "03/05/2008",
    gender: "Male",
    contactNumber: "09171234569",
    email: "paolo.delacruz@email.com",
    occupation: "Student",
    civilStatus: "Single",
    zone: "2"
  },
  {
    firstName: "Daniella",
    lastName: "Dela Cruz",
    birthday: "08/13/2014",
    gender: "Female",
    contactNumber: "09171234570",
    email: "daniella.delacruz@email.com",
    occupation: "Student",
    civilStatus: "Single",
    zone: "2"
  },
  
  {
    firstName: "Antonio",
    lastName: "Reyes",
    birthday: "08/01/1970",
    gender: "Male",
    contactNumber: "09171234571",
    email: "antonio.reyes@email.com",
    occupation: "Doctor",
    civilStatus: "Married",
    zone: "3"
  },
  {
    firstName: "Susan",
    lastName: "Reyes",
    birthday: "06/22/1972",
    gender: "Female",
    contactNumber: "09171234572",
    email: "susan.reyes@email.com",
    occupation: "Nurse",
    civilStatus: "Married",
    zone: "3"
  },
  {
    firstName: "Mark",
    lastName: "Reyes",
    birthday: "09/14/2000",
    gender: "Male",
    contactNumber: "09171234573",
    email: "mark.reyes@email.com",
    occupation: "Student",
    civilStatus: "Single",
    zone: "3"
  },
  {
    firstName: "Nina",
    lastName: "Reyes",
    birthday: "02/28/2003",
    gender: "Female",
    contactNumber: "09171234574",
    email: "nina.reyes@email.com",
    occupation: "Student",
    civilStatus: "Single",
    zone: "3"
  },
  {
    firstName: "Denise",
    lastName: "Reyes",
    birthday: "07/12/2006",
    gender: "Female",
    contactNumber: "09171234575",
    email: "denise.reyes@email.com",
    occupation: "Student",
    civilStatus: "Single",
    zone: "3"
  },
  {
    firstName: "Gabriel",
    lastName: "Reyes",
    birthday: "04/19/2010",
    gender: "Male",
    contactNumber: "09171234576",
    email: "gabriel.reyes@email.com",
    occupation: "Student",
    civilStatus: "Single",
    zone: "3"
  },
  {
    firstName: "Ramon",
    lastName: "Santos",
    birthday: "08/25/1973",
    gender: "Male",
    contactNumber: "09171234577",
    email: "ramon.santos@email.com",
    occupation: "Manager",
    civilStatus: "Married",
    zone: "4"
  },
  {
    firstName: "Liza",
    lastName: "Santos",
    birthday: "11/04/1975",
    gender: "Female",
    contactNumber: "09171234578",
    email: "liza.santos@email.com",
    occupation: "Accountant",
    civilStatus: "Married",
    zone: "4"
  },
  {
    firstName: "Kevin",
    lastName: "Santos",
    birthday: "03/03/2001",
    gender: "Male",
    contactNumber: "09171234579",
    email: "kevin.santos@email.com",
    occupation: "Student",
    civilStatus: "Single",
    zone: "4"
  },
  {
    firstName: "Princess",
    lastName: "Santos",
    birthday: "07/17/2004",
    gender: "Female",
    contactNumber: "09171234580",
    email: "princess.santos@email.com",
    occupation: "Student",
    civilStatus: "Single",
    zone: "4"
  },
  {
    firstName: "Baby",
    lastName: "Santos",
    birthday: "09/11/2020",
    gender: "Female",
    contactNumber: "09171234581",
    email: "baby.santos@email.com",
    occupation: "N/A",
    civilStatus: "Single",
    zone: "4"
  },
  {
    firstName: "Ernesto",
    lastName: "Villanueva",
    birthday: "01/30/1969",
    gender: "Male",
    contactNumber: "09171234582",
    email: "ernesto.villanueva@email.com",
    occupation: "Lawyer",
    civilStatus: "Married",
    zone: "5"
  },
  {
    firstName: "Grace",
    lastName: "Villanueva",
    birthday: "05/19/1971",
    gender: "Female",
    contactNumber: "09171234583",
    email: "grace.villanueva@email.com",
    occupation: "Doctor",
    civilStatus: "Married",
    zone: "5"
  },
  {
    firstName: "John",
    lastName: "Villanueva",
    birthday: "08/22/2002",
    gender: "Male",
    contactNumber: "09171234584",
    email: "john.villanueva@email.com",
    occupation: "Student",
    civilStatus: "Single",
    zone: "5"
  },
  {
    firstName: "Bea",
    lastName: "Villanueva",
    birthday: "05/02/2005",
    gender: "Female",
    contactNumber: "09171234585",
    email: "bea.villanueva@email.com",
    occupation: "Student",
    civilStatus: "Single",
    zone: "5"
  },
  {
    firstName: "Victor",
    lastName: "Mendoza",
    birthday: "07/14/1972",
    gender: "Male",
    contactNumber: "09171234586",
    email: "victor.mendoza@email.com",
    occupation: "Architect",
    civilStatus: "Married",
    zone: "6"
  },
  {
    firstName: "Sheila",
    lastName: "Mendoza",
    birthday: "08/03/1974",
    gender: "Female",
    contactNumber: "09171234587",
    email: "sheila.mendoza@email.com",
    occupation: "Interior Designer",
    civilStatus: "Married",
    zone: "6"
  },
  {
    firstName: "Vince",
    lastName: "Mendoza",
    birthday: "11/16/2000",
    gender: "Male",
    contactNumber: "09171234588",
    email: "vince.mendoza@email.com",
    occupation: "Student",
    civilStatus: "Single",
    zone: "6"
  },
  {
    firstName: "Carla",
    lastName: "Mendoza",
    birthday: "09/24/2003",
    gender: "Female",
    contactNumber: "09171234589",
    email: "carla.mendoza@email.com",
    occupation: "Student",
    civilStatus: "Single",
    zone: "6"
  },
  {
    firstName: "Marco",
    lastName: "Mendoza",
    birthday: "12/02/2007",
    gender: "Male",
    contactNumber: "09171234590",
    email: "marco.mendoza@email.com",
    occupation: "Student",
    civilStatus: "Single",
    zone: "6"
  },
  {
    firstName: "Pedro",
    lastName: "Garcia",
    birthday: "03/03/1968",
    gender: "Male",
    contactNumber: "09171234591",
    email: "pedro.garcia@email.com",
    occupation: "Mechanic",
    civilStatus: "Married",
    zone: "7"
  },
  {
    firstName: "Ana",
    lastName: "Garcia",
    birthday: "07/17/1970",
    gender: "Female",
    contactNumber: "09171234592",
    email: "ana.garcia@email.com",
    occupation: "Cashier",
    civilStatus: "Married",
    zone: "7"
  },
  {
    firstName: "Sofia",
    lastName: "Garcia",
    birthday: "09/05/2004",
    gender: "Female",
    contactNumber: "09171234593",
    email: "sofia.garcia@email.com",
    occupation: "Student",
    civilStatus: "Single",
    zone: "7"
  },
  {
    firstName: "Miguel",
    lastName: "Garcia",
    birthday: "08/21/2006",
    gender: "Male",
    contactNumber: "09171234594",
    email: "miguel.garcia@email.com",
    occupation: "Student",
    civilStatus: "Single",
    zone: "7"
  },
  {
    firstName: "Daniel",
    lastName: "Flores",
    birthday: "11/01/1975",
    gender: "Male",
    contactNumber: "09171234595",
    email: "daniel.flores@email.com",
    occupation: "Driver",
    civilStatus: "Married",
    zone: "2"
  },
  {
    firstName: "Teresa",
    lastName: "Flores",
    birthday: "09/19/1977",
    gender: "Female",
    contactNumber: "09171234596",
    email: "teresa.flores@email.com",
    occupation: "Vendor",
    civilStatus: "Married",
    zone: "2"
  },
  {
    firstName: "Jessa",
    lastName: "Flores",
    birthday: "03/07/2002",
    gender: "Female",
    contactNumber: "09171234597",
    email: "jessa.flores@email.com",
    occupation: "Student",
    civilStatus: "Single",
    zone: "2"
  },
  {
    firstName: "Carlo",
    lastName: "Flores",
    birthday: "12/15/2005",
    gender: "Male",
    contactNumber: "09171234598",
    email: "carlo.flores@email.com",
    occupation: "Student",
    civilStatus: "Single",
    zone: "2"
  },
  {
    firstName: "Ben",
    lastName: "Flores",
    birthday: "02/28/2008",
    gender: "Male",
    contactNumber: "09171234599",
    email: "ben.flores@email.com",
    occupation: "Student",
    civilStatus: "Single",
    zone: "2"
  },
  {
    firstName: "Angelo",
    lastName: "Flores",
    birthday: "07/28/2010",
    gender: "Male",
    contactNumber: "09171234600",
    email: "angelo.flores@email.com",
    occupation: "Student",
    civilStatus: "Single",
    zone: "2"
  }
];

const seedDatabase = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const existingResidents = JSON.parse(localStorage.getItem('residents') || '[]');
    const existingHouseholds = JSON.parse(localStorage.getItem('households') || '[]');
    
    if (existingResidents.length > 0 && existingHouseholds.length > 0) {
      const bautistaExists = existingResidents.some(r => 
        r.last_name === "Bautista" && r.first_name === "Carlos"
      );
      
      if (bautistaExists) {
        console.log('Database already seeded, skipping...');
        return;
      }
    }
    
    if (existingResidents.length > 0 && existingHouseholds.length === 0) {
      console.log('Residents exist but households are missing, reseeding households...');
      seedHouseholds(existingResidents);
      return;
    }
    
    console.log('Starting to seed database with', mockData.length, 'residents...');
    
    let newResidents = [...existingResidents];
    
    mockData.forEach((residentData, index) => {
      const username = generateUsername(residentData.firstName, residentData.lastName);
      const password = generatePassword(residentData.birthday);
      
      const newResident = {
        id: Date.now() + index,
        first_name: residentData.firstName,
        last_name: residentData.lastName,
        birthday: residentData.birthday,
        gender: residentData.gender,
        contact_number: residentData.contactNumber,
        email: residentData.email,
        occupation: residentData.occupation,
        civil_status: residentData.civilStatus,
        zone: residentData.zone,
        username: username,
        password: password,
        account_name: `${residentData.firstName} ${residentData.lastName}`,
        account_id: Date.now() + index,
        role: "user",
        createdAt: new Date().toISOString()
      };
      
      newResidents.push(newResident);
      console.log(`Added resident: ${newResident.first_name} ${newResident.last_name} (${newResident.username})`);
    });
    
    localStorage.setItem('residents', JSON.stringify(newResidents));
    console.log('Database seeded successfully! Total residents:', newResidents.length);
    
    seedHouseholds(newResidents);
  } else {
    console.error('Cannot seed database: not in a browser environment or localStorage not available');
  }
};

const seedHouseholds = (residents) => {
  console.log('Creating households and assigning residents...');
  
  const groupedResidents = {};
  
  residents.forEach(resident => {
    const key = `${resident.last_name}_${resident.zone}`;
    if (!groupedResidents[key]) {
      groupedResidents[key] = [];
    }
    groupedResidents[key].push(resident);
  });
  
  const newHouseholds = [];
  
  Object.keys(groupedResidents).forEach((key, index) => {
    const [lastName, zone] = key.split('_');
    const residentsInGroup = groupedResidents[key];
    
    const householdName = `${lastName} Household`;
    
    const residentIds = residentsInGroup.map(r => r.id);
    
    const newHousehold = {
      id: Date.now() + index + 10000,
      name: householdName,
      zone: zone,
      residents: residentIds,
      createdAt: new Date().toISOString()
    };
    
    newHouseholds.push(newHousehold);
    console.log(`Created household: ${newHousehold.name} (Zone ${newHousehold.zone}) with ${residentIds.length} residents`);
  });
  
  localStorage.setItem('households', JSON.stringify(newHouseholds));
  console.log('Households seeded successfully! Total households:', newHouseholds.length);
};

seedDatabase();

export default seedDatabase;