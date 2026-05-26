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
  },
  {
    firstName: "Catherine",
    lastName: "Lim",
    birthday: "03/15/1985",
    gender: "Female",
    contactNumber: "09172000001",
    email: "catherine.lim@email.com",
    occupation: "Engineer",
    civilStatus: "Married",
    zone: "3"
  },
  {
    firstName: "David",
    lastName: "Lim",
    birthday: "07/22/1983",
    gender: "Male",
    contactNumber: "09172000002",
    email: "david.lim@email.com",
    occupation: "Doctor",
    civilStatus: "Married",
    zone: "3"
  },
  {
    firstName: "Elizabeth",
    lastName: "Lim",
    birthday: "01/10/2012",
    gender: "Female",
    contactNumber: "09172000003",
    email: "elizabeth.lim@email.com",
    occupation: "Student",
    civilStatus: "Single",
    zone: "3"
  },
  {
    firstName: "Francisco",
    lastName: "Lim",
    birthday: "05/18/2015",
    gender: "Male",
    contactNumber: "09172000004",
    email: "francisco.lim@email.com",
    occupation: "Student",
    civilStatus: "Single",
    zone: "3"
  },
  {
    firstName: "Grace",
    lastName: "Tan",
    birthday: "12/05/1990",
    gender: "Female",
    contactNumber: "09172000005",
    email: "grace.tan@email.com",
    occupation: "Lawyer",
    civilStatus: "Married",
    zone: "4"
  },
  {
    firstName: "Henry",
    lastName: "Tan",
    birthday: "09/30/1988",
    gender: "Male",
    contactNumber: "09172000006",
    email: "henry.tan@email.com",
    occupation: "Businessman",
    civilStatus: "Married",
    zone: "4"
  },
  {
    firstName: "Isabella",
    lastName: "Tan",
    birthday: "04/21/2013",
    gender: "Female",
    contactNumber: "09172000007",
    email: "isabella.tan@email.com",
    occupation: "Student",
    civilStatus: "Single",
    zone: "4"
  },
  {
    firstName: "Jacob",
    lastName: "Reyes",
    birthday: "11/12/2009",
    gender: "Male",
    contactNumber: "09172000008",
    email: "jacob.reyes@email.com",
    occupation: "Student",
    civilStatus: "Single",
    zone: "3"
  },
  {
    firstName: "Karen",
    lastName: "Cruz",
    birthday: "06/30/1982",
    gender: "Female",
    contactNumber: "09172000009",
    email: "karen.cruz@email.com",
    occupation: "Teacher",
    civilStatus: "Married",
    zone: "5"
  },
  {
    firstName: "Leo",
    lastName: "Cruz",
    birthday: "02/14/1979",
    gender: "Male",
    contactNumber: "09172000010",
    email: "leo.cruz@email.com",
    occupation: "Nurse",
    civilStatus: "Married",
    zone: "5"
  },
  {
    firstName: "Mia",
    lastName: "Cruz",
    birthday: "08/05/2001",
    gender: "Female",
    contactNumber: "09172000011",
    email: "mia.cruz@email.com",
    occupation: "Student",
    civilStatus: "Single",
    zone: "5"
  },
  {
    firstName: "Nathan",
    lastName: "Cruz",
    birthday: "03/22/2004",
    gender: "Male",
    contactNumber: "09172000012",
    email: "nathan.cruz@email.com",
    occupation: "Student",
    civilStatus: "Single",
    zone: "5"
  },
  {
    firstName: "Olivia",
    lastName: "Cruz",
    birthday: "10/09/2007",
    gender: "Female",
    contactNumber: "09172000013",
    email: "olivia.cruz@email.com",
    occupation: "Student",
    civilStatus: "Single",
    zone: "5"
  },
  {
    firstName: "Peter",
    lastName: "Gonzales",
    birthday: "01/25/1977",
    gender: "Male",
    contactNumber: "09172000014",
    email: "peter.gonzales@email.com",
    occupation: "Police Officer",
    civilStatus: "Married",
    zone: "6"
  },
  {
    firstName: "Queenie",
    lastName: "Gonzales",
    birthday: "04/18/1978",
    gender: "Female",
    contactNumber: "09172000015",
    email: "queenie.gonzales@email.com",
    occupation: "Chef",
    civilStatus: "Married",
    zone: "6"
  },
  {
    firstName: "Ryan",
    lastName: "Gonzales",
    birthday: "07/04/2000",
    gender: "Male",
    contactNumber: "09172000016",
    email: "ryan.gonzales@email.com",
    occupation: "IT Specialist",
    civilStatus: "Single",
    zone: "6"
  },
  {
    firstName: "Sophia",
    lastName: "Gonzales",
    birthday: "09/15/2005",
    gender: "Female",
    contactNumber: "09172000017",
    email: "sophia.gonzales@email.com",
    occupation: "Student",
    civilStatus: "Single",
    zone: "6"
  },
  {
    firstName: "Timothy",
    lastName: "Gonzales",
    birthday: "12/20/2008",
    gender: "Male",
    contactNumber: "09172000018",
    email: "timothy.gonzales@email.com",
    occupation: "Student",
    civilStatus: "Single",
    zone: "6"
  },
  {
    firstName: "Ursula",
    lastName: "Gonzales",
    birthday: "05/03/2012",
    gender: "Female",
    contactNumber: "09172000019",
    email: "ursula.gonzales@email.com",
    occupation: "Student",
    civilStatus: "Single",
    zone: "6"
  },
  {
    firstName: "Vincent",
    lastName: "Gonzales",
    birthday: "02/28/2016",
    gender: "Male",
    contactNumber: "09172000020",
    email: "vincent.gonzales@email.com",
    occupation: "Student",
    civilStatus: "Single",
    zone: "6"
  },
  {
    firstName: "Wendy",
    lastName: "Perez",
    birthday: "08/12/1986",
    gender: "Female",
    contactNumber: "09172000021",
    email: "wendy.perez@email.com",
    occupation: "Accountant",
    civilStatus: "Married",
    zone: "7"
  },
  {
    firstName: "Xander",
    lastName: "Perez",
    birthday: "01/05/1984",
    gender: "Male",
    contactNumber: "09172000022",
    email: "xander.perez@email.com",
    occupation: "Engineer",
    civilStatus: "Married",
    zone: "7"
  },
  {
    firstName: "Yasmine",
    lastName: "Perez",
    birthday: "06/25/2011",
    gender: "Female",
    contactNumber: "09172000023",
    email: "yasmine.perez@email.com",
    occupation: "Student",
    civilStatus: "Single",
    zone: "7"
  },
  {
    firstName: "Zachary",
    lastName: "Perez",
    birthday: "10/30/2014",
    gender: "Male",
    contactNumber: "09172000024",
    email: "zachary.perez@email.com",
    occupation: "Student",
    civilStatus: "Single",
    zone: "7"
  },
  {
    firstName: "Alice",
    lastName: "Wong",
    birthday: "04/15/1992",
    gender: "Female",
    contactNumber: "09172000025",
    email: "alice.wong@email.com",
    occupation: "Designer",
    civilStatus: "Single",
    zone: "1"
  },
  {
    firstName: "Brian",
    lastName: "Wong",
    birthday: "11/08/1990",
    gender: "Male",
    contactNumber: "09172000026",
    email: "brian.wong@email.com",
    occupation: "Developer",
    civilStatus: "Single",
    zone: "1"
  },
  {
    firstName: "Celine",
    lastName: "Chen",
    birthday: "02/03/1987",
    gender: "Female",
    contactNumber: "09172000027",
    email: "celine.chen@email.com",
    occupation: "Manager",
    civilStatus: "Married",
    zone: "2"
  },
  {
    firstName: "Derek",
    lastName: "Chen",
    birthday: "09/19/1985",
    gender: "Male",
    contactNumber: "09172000028",
    email: "derek.chen@email.com",
    occupation: "Consultant",
    civilStatus: "Married",
    zone: "2"
  },
  {
    firstName: "Emma",
    lastName: "Chen",
    birthday: "05/12/2018",
    gender: "Female",
    contactNumber: "09172000029",
    email: "emma.chen@email.com",
    occupation: "Student",
    civilStatus: "Single",
    zone: "2"
  },
  {
    firstName: "Frank",
    lastName: "Lee",
    birthday: "07/07/1995",
    gender: "Male",
    contactNumber: "09172000030",
    email: "frank.lee@email.com",
    occupation: "Sales Rep",
    civilStatus: "Single",
    zone: "3"
  },
  {
    firstName: "Gina",
    lastName: "Lee",
    birthday: "03/28/1993",
    gender: "Female",
    contactNumber: "09172000031",
    email: "gina.lee@email.com",
    occupation: "Marketing",
    civilStatus: "Single",
    zone: "3"
  },
  {
    firstName: "Harold",
    lastName: "Santiago",
    birthday: "01/10/1974",
    gender: "Male",
    contactNumber: "09172000032",
    email: "harold.santiago@email.com",
    occupation: "Mechanic",
    civilStatus: "Married",
    zone: "4"
  },
  {
    firstName: "Iris",
    lastName: "Santiago",
    birthday: "08/26/1972",
    gender: "Female",
    contactNumber: "09172000033",
    email: "iris.santiago@email.com",
    occupation: "Teacher",
    civilStatus: "Married",
    zone: "4"
  },
  {
    firstName: "James",
    lastName: "Santiago",
    birthday: "04/14/2000",
    gender: "Male",
    contactNumber: "09172000034",
    email: "james.santiago@email.com",
    occupation: "Student",
    civilStatus: "Single",
    zone: "4"
  },
  {
    firstName: "Kelly",
    lastName: "Santiago",
    birthday: "11/02/2003",
    gender: "Female",
    contactNumber: "09172000035",
    email: "kelly.santiago@email.com",
    occupation: "Student",
    civilStatus: "Single",
    zone: "4"
  },
  {
    firstName: "Kyle",
    lastName: "Santiago",
    birthday: "06/18/2006",
    gender: "Male",
    contactNumber: "09172000036",
    email: "kyle.santiago@email.com",
    occupation: "Student",
    civilStatus: "Single",
    zone: "4"
  },
  {
    firstName: "Linda",
    lastName: "Santiago",
    birthday: "09/09/2009",
    gender: "Female",
    contactNumber: "09172000037",
    email: "linda.santiago@email.com",
    occupation: "Student",
    civilStatus: "Single",
    zone: "4"
  },
  {
    firstName: "Marcus",
    lastName: "Santiago",
    birthday: "02/22/2015",
    gender: "Male",
    contactNumber: "09172000038",
    email: "marcus.santiago@email.com",
    occupation: "Student",
    civilStatus: "Single",
    zone: "4"
  },
  {
    firstName: "Nancy",
    lastName: "Santiago",
    birthday: "12/30/2018",
    gender: "Female",
    contactNumber: "09172000039",
    email: "nancy.santiago@email.com",
    occupation: "Student",
    civilStatus: "Single",
    zone: "4"
  },
  {
    firstName: "Oscar",
    lastName: "Santiago",
    birthday: "05/16/2021",
    gender: "Male",
    contactNumber: "09172000040",
    email: "oscar.santiago@email.com",
    occupation: "N/A",
    civilStatus: "Single",
    zone: "4"
  },
  { firstName: "Aaron", lastName: "Lee", birthday: "01/25/1995", gender: "Male", contactNumber: "09173000001", email: "aaron.lee@email.com", occupation: "Driver", civilStatus: "Married", zone: "1" },
  { firstName: "Betty", lastName: "Lee", birthday: "06/30/1993", gender: "Female", contactNumber: "09173000002", email: "betty.lee@email.com", occupation: "Teacher", civilStatus: "Married", zone: "1" },
  { firstName: "Calvin", lastName: "Lee", birthday: "03/18/2018", gender: "Male", contactNumber: "09173000003", email: "calvin.lee@email.com", occupation: "Student", civilStatus: "Single", zone: "1" },
  { firstName: "Diana", lastName: "Lee", birthday: "09/22/2021", gender: "Female", contactNumber: "09173000004", email: "diana.lee@email.com", occupation: "N/A", civilStatus: "Single", zone: "1" },
  { firstName: "Edward", lastName: "Wong", birthday: "11/05/1988", gender: "Male", contactNumber: "09173000005", email: "edward.wong@email.com", occupation: "Engineer", civilStatus: "Married", zone: "2" },
  { firstName: "Flora", lastName: "Wong", birthday: "02/14/1986", gender: "Female", contactNumber: "09173000006", email: "flora.wong@email.com", occupation: "Doctor", civilStatus: "Married", zone: "2" },
  { firstName: "George", lastName: "Wong", birthday: "08/09/2010", gender: "Male", contactNumber: "09173000007", email: "george.wong@email.com", occupation: "Student", civilStatus: "Single", zone: "2" },
  { firstName: "Hannah", lastName: "Wong", birthday: "04/01/2013", gender: "Female", contactNumber: "09173000008", email: "hannah.wong@email.com", occupation: "Student", civilStatus: "Single", zone: "2" },
  { firstName: "Ivan", lastName: "Wong", birthday: "12/11/2016", gender: "Male", contactNumber: "09173000009", email: "ivan.wong@email.com", occupation: "Student", civilStatus: "Single", zone: "2" },
  { firstName: "Julia", lastName: "Wong", birthday: "07/28/2020", gender: "Female", contactNumber: "09173000010", email: "julia.wong@email.com", occupation: "Student", civilStatus: "Single", zone: "2" },
  { firstName: "Kevin", lastName: "Chen", birthday: "05/20/1980", gender: "Male", contactNumber: "09173000011", email: "kevin.chen@email.com", occupation: "Manager", civilStatus: "Married", zone: "3" },
  { firstName: "Lily", lastName: "Chen", birthday: "09/08/1982", gender: "Female", contactNumber: "09173000012", email: "lily.chen@email.com", occupation: "Accountant", civilStatus: "Married", zone: "3" },
  { firstName: "Marcus", lastName: "Chen", birthday: "01/15/2005", gender: "Male", contactNumber: "09173000013", email: "marcus.chen@email.com", occupation: "Student", civilStatus: "Single", zone: "3" },
  { firstName: "Nina", lastName: "Chen", birthday: "11/28/2008", gender: "Female", contactNumber: "09173000014", email: "nina.chen@email.com", occupation: "Student", civilStatus: "Single", zone: "3" },
  { firstName: "Owen", lastName: "Chen", birthday: "06/05/2012", gender: "Male", contactNumber: "09173000015", email: "owen.chen@email.com", occupation: "Student", civilStatus: "Single", zone: "3" },
  { firstName: "Penny", lastName: "Chen", birthday: "03/23/2015", gender: "Female", contactNumber: "09173000016", email: "penny.chen@email.com", occupation: "Student", civilStatus: "Single", zone: "3" },
  { firstName: "Quentin", lastName: "Chen", birthday: "10/12/2018", gender: "Male", contactNumber: "09173000017", email: "quentin.chen@email.com", occupation: "N/A", civilStatus: "Single", zone: "3" },
  { firstName: "Rachel", lastName: "Garcia", birthday: "04/01/1991", gender: "Female", contactNumber: "09173000018", email: "rachel.garcia@email.com", occupation: "Lawyer", civilStatus: "Single", zone: "4" },
  { firstName: "Samuel", lastName: "Garcia", birthday: "08/19/1989", gender: "Male", contactNumber: "09173000019", email: "samuel.garcia@email.com", occupation: "Chef", civilStatus: "Married", zone: "4" },
  { firstName: "Theresa", lastName: "Garcia", birthday: "12/03/2011", gender: "Female", contactNumber: "09173000020", email: "theresa.garcia@email.com", occupation: "Student", civilStatus: "Single", zone: "4" },
  { firstName: "Victor", lastName: "Garcia", birthday: "07/25/2014", gender: "Male", contactNumber: "09173000021", email: "victor.garcia@email.com", occupation: "Student", civilStatus: "Single", zone: "4" },
  { firstName: "Wendy", lastName: "Garcia", birthday: "02/08/2017", gender: "Female", contactNumber: "09173000022", email: "wendy.garcia@email.com", occupation: "Student", civilStatus: "Single", zone: "4" },
  { firstName: "Xavier", lastName: "Garcia", birthday: "09/14/2020", gender: "Male", contactNumber: "09173000023", email: "xavier.garcia@email.com", occupation: "Student", civilStatus: "Single", zone: "4" },
  { firstName: "Yuki", lastName: "Garcia", birthday: "05/01/2023", gender: "Female", contactNumber: "09173000024", email: "yuki.garcia@email.com", occupation: "N/A", civilStatus: "Single", zone: "4" },
  { firstName: "Zack", lastName: "Perez", birthday: "01/30/1985", gender: "Male", contactNumber: "09173000025", email: "zack.perez@email.com", occupation: "Police", civilStatus: "Married", zone: "5" },
  { firstName: "Amy", lastName: "Perez", birthday: "07/20/1983", gender: "Female", contactNumber: "09173000026", email: "amy.perez@email.com", occupation: "Nurse", civilStatus: "Married", zone: "5" },
  { firstName: "Bruce", lastName: "Perez", birthday: "04/12/2006", gender: "Male", contactNumber: "09173000027", email: "bruce.perez@email.com", occupation: "Student", civilStatus: "Single", zone: "5" },
  { firstName: "Cindy", lastName: "Perez", birthday: "11/25/2009", gender: "Female", contactNumber: "09173000028", email: "cindy.perez@email.com", occupation: "Student", civilStatus: "Single", zone: "5" },
  { firstName: "Derek", lastName: "Perez", birthday: "08/08/2012", gender: "Male", contactNumber: "09173000029", email: "derek.perez@email.com", occupation: "Student", civilStatus: "Single", zone: "5" },
  { firstName: "Emily", lastName: "Perez", birthday: "03/16/2015", gender: "Female", contactNumber: "09173000030", email: "emily.perez@email.com", occupation: "Student", civilStatus: "Single", zone: "5" },
  { firstName: "Felix", lastName: "Perez", birthday: "06/28/2019", gender: "Male", contactNumber: "09173000031", email: "felix.perez@email.com", occupation: "N/A", civilStatus: "Single", zone: "5" },
  { firstName: "Gloria", lastName: "Perez", birthday: "10/02/2022", gender: "Female", contactNumber: "09173000032", email: "gloria.perez@email.com", occupation: "N/A", civilStatus: "Single", zone: "5" },
  { firstName: "Hugo", lastName: "Torres", birthday: "02/14/1978", gender: "Male", contactNumber: "09173000033", email: "hugo.torres@email.com", occupation: "Mechanic", civilStatus: "Married", zone: "6" },
  { firstName: "Iris", lastName: "Torres", birthday: "09/05/1976", gender: "Female", contactNumber: "09173000034", email: "iris.torres@email.com", occupation: "Teacher", civilStatus: "Married", zone: "6" },
  { firstName: "Jack", lastName: "Torres", birthday: "05/19/2000", gender: "Male", contactNumber: "09173000035", email: "jack.torres@email.com", occupation: "Engineer", civilStatus: "Single", zone: "6" },
  { firstName: "Karen", lastName: "Torres", birthday: "12/01/2003", gender: "Female", contactNumber: "09173000036", email: "karen.torres@email.com", occupation: "Student", civilStatus: "Single", zone: "6" },
  { firstName: "Leo", lastName: "Torres", birthday: "08/22/2006", gender: "Male", contactNumber: "09173000037", email: "leo.torres@email.com", occupation: "Student", civilStatus: "Single", zone: "6" },
  { firstName: "Mina", lastName: "Torres", birthday: "03/10/2009", gender: "Female", contactNumber: "09173000038", email: "mina.torres@email.com", occupation: "Student", civilStatus: "Single", zone: "6" },
  { firstName: "Nick", lastName: "Torres", birthday: "01/18/2013", gender: "Male", contactNumber: "09173000039", email: "nick.torres@email.com", occupation: "Student", civilStatus: "Single", zone: "6" },
  { firstName: "Ophelia", lastName: "Torres", birthday: "06/05/2016", gender: "Female", contactNumber: "09173000040", email: "ophelia.torres@email.com", occupation: "Student", civilStatus: "Single", zone: "6" },
  { firstName: "Perry", lastName: "Torres", birthday: "11/25/2019", gender: "Male", contactNumber: "09173000041", email: "perry.torres@email.com", occupation: "N/A", civilStatus: "Single", zone: "6" },
  { firstName: "Quincy", lastName: "Torres", birthday: "04/12/2023", gender: "Male", contactNumber: "09173000042", email: "quincy.torres@email.com", occupation: "N/A", civilStatus: "Single", zone: "6" }
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
    
const convertBirthdayToISO = (birthday) => {
    const parts = birthday.split('/')
    return `${parts[2]}-${parts[0].padStart(2, '0')}-${parts[1].padStart(2, '0')}`
  }

  mockData.forEach((residentData, index) => {
    const username = generateUsername(residentData.firstName, residentData.lastName);
    const password = generatePassword(residentData.birthday);
    
    const newResident = {
      id: Date.now() + index,
      first_name: residentData.firstName,
      last_name: residentData.lastName,
      birthday: convertBirthdayToISO(residentData.birthday),
      gender: residentData.gender,
      contact_number: residentData.contactNumber,
      email: residentData.email,
      occupation: residentData.occupation,
      civil_status: residentData.civilStatus,
      zone: `Zone ${residentData.zone}`,
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
    const key = `${resident.last_name}__${resident.zone}`;
    if (!groupedResidents[key]) {
      groupedResidents[key] = [];
    }
    groupedResidents[key].push(resident);
  });
  
  const newHouseholds = [];
  
  Object.keys(groupedResidents).forEach((key, index) => {
    const parts = key.split('__');
    const lastName = parts[0];
    const zone = parts[1] || parts[2];
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