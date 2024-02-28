const branch = ["CS", "IT", "EC", "EE", "IC", "IP", "CE", "TT", "BT", "ME"];
const indianNames = [
  "Aadil",
  "Aadi",
  "Aadya",
  "Aaradhana",
  "Aarav",
  "Aarif",
  "Aarna",
  "Aarti",
  "Aaryan",
  "Aashi",
  "Aashish",
  "Aastha",
  "Aatish",
  "Aayush",
  "Aayushi",
  "Abhay",
  "Abhinav",
  "Abhishek",
  "Adarsh",
  "Adhira",
  "Adhiraj",
  "Adhrit",
  "Adhyayan",
  "Adinath",
  "Adishree",
  "Aditi",
  "Advait",
  "Advik",
  "Agastya",
  "Ahaan",
  "Ahana",
  "Aishani",
  "Aishwarya",
  "Ajay",
  "Akanksha",
  "Akhil",
  "Aksh",
  "Akshara",
  "Akshat",
  "Akshay",
  "Akshita",
  "Alankar",
  "Alok",
  "Amaira",
  "Ambar",
  "Ambika",
  "Amit",
  "Amogh",
  "Amol",
  "Amrit",
  "Amrita",
  "Amruta",
  "Amulya",
  "Anagha",
  "Anahita",
  "Anamika",
  "Anand",
  "Ananya",
  "Anay",
  "Aneesha",
  "Angad",
  "Angel",
  "Anika",
  "Anil",
  "Aniruddha",
  "Anisha",
  "Anishka",
  "Anita",
  "Anjali",
  "Anjana",
  "Anjini",
  "Ankita",
  "Ansh",
  "Anshika",
  "Anshul",
  "Anshuman",
  "Antara",
  "Anup",
  "Anupama",
  "Anuradha",
  "Anurag",
  "Anusha",
  "Anushka",
  "Anushree",
  "Anvay",
  "Anvesha",
  "Anvi",
  "Anya",
  "Apurva",
  "Aqil",
  "Aradhya",
  "Aragini",
  "Arav",
  "Aravind",
  "Archie",
  "Arihant",
  "Arjun",
  "Armaan",
  "Arnav",
  "Arya",
  "Aryan",
  "Arzoo",
  "Ashish",
  "Ashlesha",
  "Ashmita",
  "Ashok",
  "Ashutosh",
  "Asmi",
  "Asmita",
  "Asvika",
  "Atul",
  "Avani",
  "Avinash",
  "Avisha",
  "Ayana",
  "Ayesha",
  "Ayush",
  "Ayushmaan",
  "Baalkrishan",
  "Baalkrishna",
  "Bhakti",
  "Bhargav",
  "Bhavya",
  "Bina",
  "Brahma",
  "Chahat",
  "Chaitali",
  "Chaitanya",
  "Chakor",
  "Champak",
  "Chanchal",
  "Chand",
  "Chandan",
  "Chandani",
  "Chandika",
  "Chandni",
  "Charan",
  "Charu",
  "Chetan",
  "Chinmay",
  "Chintan",
  "Chitra",
  "Chitrangada",
  "Chitranshi",
  "Chitrarth",
  "Chitrata",
  "Daivik",
  "Darshan",
  "Deep",
  "Deepak",
  "Deepti",
  "Devesh",
  "Devika",
  "Devmani",
  "Devyani",
  "Dhananjay",
  "Dhanshree",
  "Dhara",
  "Dharmesh",
  "Dhaval",
  "Dhruv",
  "Diksha",
  "Dilip",
  "Divya",
  "Drishti",
  "Drupad",
  "Dushyant",
  "Ekta",
  "Fakir",
  "Firoz",
  "Gagan",
  "Ganapati",
  "Ganesh",
  "Garima",
  "Gaurav",
  "Gayatri",
  "Geet",
  "Geeta",
  "Girija",
  "Girish",
  "Gunjan",
  "Gyan",
  "Harsh",
  "Harsha",
  "Harshad",
  "Harshini",
  "Harshita",
  "Hemant",
  "Himanshu",
  "Hina",
  "Hitesh",
  "Ira",
  "Ishan",
  "Ishani",
  "Ishita",
  "Ishrat",
  "Iti",
  "Jagannath",
  "Jagruti",
  "Jahnavi",
  "Jaidev",
  "Jaiwant",
  "Jalpa",
  "Jamna",
  "Janak",
  "Janki",
  "Janvi",
  "Jay",
  "Jayant",
  "Jeevika",
  "Jigna",
  "Jinal",
  "Jyoti",
  "Kairav",
  "Kajal",
  "Kanika",
  "Kartik",
  "Kartikay",
  "Kashi",
  "Kavya",
  "Ketan",
  "Keshav",
  "Khushi",
  "Kiran",
  "Kirti",
  "Kishan",
  "Komal",
  "Krish",
  "Krishna",
  "Krishnamurthy",
  "Krishnendu",
  "Krithi",
  "Kritika",
  "Kriti",
  "Kunal",
  "Kumari",
  "Kusum",
  "Laksh",
  "Lakshay",
  "Lakshman",
  "Lakshmi",
  "Lalita",
  "Latika",
  "Lavanya",
  "Laxman",
  "Laxmi",
  "Lila",
  "Lokesh",
  "Madan",
  "Madhav",
  "Madhavi",
  "Madhulika",
  "Madhumita",
  "Madhur",
  "Mahadev",
  "Mahak",
  "Mahalakshmi",
  "Mahesh",
  "Mahima",
  "Maithili",
  "Maitri",
  "Mala",
];

function generateRandomGPA() {
  let randomGPA = Math.floor(Math.random() * 36 + 55);
  randomGPA = (randomGPA / 10).toFixed(2);
  randomGPA = parseFloat(randomGPA);
  return randomGPA;
}

function generateRandomNumberInRange(max) {
  return Math.floor(Math.random() * (max + 1));
}

const courseCodes = [
  "CS101",
  "CS103",
  "IT101",
  "EC101",
  "EC102",
  "EC103",
  "IC101",
  "IC102",
  "IC103",
  "EE101",
  "EE102",
  "EE103",
  "IP103",
  "ME101",
  "ME103",
  "BT101",
  "CE101",
  "CE102",
  "CE103",
  "TT101",
  "TT102",
  "TT103",
];

function convertNumberToString(num) {
  let str = num.toString();
  while (str.length < 6) {
    str = "0" + str;
  }
  return str;
}


let globalIndex = 0;

export const generateTestStudents = () => {
const students = [];
  for (let i = 0; i < 1000; i++) {
    const obj = {};
    obj.branch = branch[Math.floor(i / 100)];
    obj.name = indianNames[i % indianNames.length];
    obj.rollNo = convertNumberToString(i + 1);
    obj.isFree = true;
    obj.gpa = generateRandomGPA();
    obj.de = 1;
    obj.oe = 2;

    const dePreference = [],
      oePreference = [];

    let itt = 0;
    while (dePreference.length < obj.de) {
      if (
        courseCodes[globalIndex].includes(obj.branch) &&
        !dePreference.includes(courseCodes[globalIndex])
      ) {
        dePreference.push(courseCodes[globalIndex]);
      }
      itt++;
      if (itt > 50) {
        console.log("Inff DE");
        break;
      }
      globalIndex = (globalIndex + 1) % courseCodes.length;
    }

    for (let j = 0; j < courseCodes.length; j++) {
      if (
        !dePreference.includes(courseCodes[j]) &&
        courseCodes[j].includes(obj.branch)
      ) {
        dePreference.push(courseCodes[j]);
      }
    }

    itt = 0;
    while (oePreference.length < obj.oe) {
      if (
        !courseCodes[globalIndex].includes(obj.branch) &&
        !oePreference.includes(courseCodes[globalIndex])
      ) {
        oePreference.push(courseCodes[globalIndex]);
      }
      itt++;
      if (itt > 50) {
        console.log("Inff OE");
        break;
      }
      globalIndex = (globalIndex + 1) % courseCodes.length;
    }

    for (let j = 0; j < courseCodes.length; j++) {
      if (
        !oePreference.includes(courseCodes[j]) &&
        !courseCodes[j].includes(obj.branch)
      ) {
        oePreference.push(courseCodes[j]);
      }
    }

    students.push({
      ...obj,
      dePreference,
      oePreference,
    });
  }

  return students;
};
