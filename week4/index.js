const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const MONGO_URI = 'mongodb+srv://Abimbola2003:Abimbola2003@kalixy.u0jcskt.mongodb.net/';

const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  gender: String,
  salary: Number,
  // Added City
  city: String
});

const Person = mongoose.model("modelname", PersonSchema, "personCollection");

async function insertOne() {
  const doc1 = new Person({
    name: "NHQ",
    age: 32,
    gender: "Male",
    salary: 1234,
  });

  const savedDoc = await doc1.save();

  console.log("One document inserted");
  console.log(savedDoc);
}

async function insertMany() {
  const manypersons = [
    { name: "SimonNHQ", age: 42, gender: "Male", salary: 3456 },
    { name: "NeeshaNN", age: 53, gender: "Female", salary: 1000 },
    { name: "MaryNHQ", age: 27, gender: "Female", salary: 5402 },
    { name: "MikeNJQ", age: 40, gender: "Male", salary: 4519 },
  ];

  const result = await Person.insertMany(manypersons);

  console.log("Many documents inserted");
  console.log(result);
}

// Find all documents
async function findAll() {
  const docs = await Person.find({})
    .sort({ salary: 1 }) // sort by salary ascending
    .select("name salary age")
    .limit(100);

  console.log("Showing multiple documents");

  docs.forEach((doc) => {
    console.log(doc.age, doc.name, doc.salary);
  });
}
// Find females with age >= 30
async function findFemalesOver30() {
  const givenAge = 30;

  const docs = await Person.find({
    gender: "Female",
    age: { $gte: givenAge },
  })
    .sort({ salary: 1 })
    .select("name salary age")
    .limit(10);

  console.log(`Females aged ${givenAge} or above:`);

  docs.forEach((doc) => {
    console.log(doc.age, doc.name, doc.salary);
  });
}

// Count all documents
async function countDocuments() {
  const count = await Person.countDocuments();
  console.log("Total Documents Count:", count);
}

// Delete all documents where age >= 25
async function deleteManyPersons() {
  const result = await Person.deleteMany({
    age: { $gte: 45 },
  });
  console.log("Deleted documents:", result);
}

// Update all females' salary to 5555
async function updateManyPersons() {
  const result = await Person.updateMany(
    { gender: "Female" },
    { salary: 5555 },
  );
  console.log("Update successful");
  console.log(result);
}

// Insert many records with City
async function insertManyWithCity() {
  const peopleWithCity = [
  { name: "JohnMKL", age: 35, gender: "Male", salary: 4200, city: "London" },
  { name: "SarahNQ", age: 29, gender: "Female", salary: 3800, city: "London" },
  { name: "DavidPR", age: 45, gender: "Male", salary: 5600, city: "London" },
  { name: "EmmaWX", age: 32, gender: "Female", salary: 4900, city: "London" },
  { name: "OliverTY", age: 41, gender: "Male", salary: 6100, city: "Manchester" },
  { name: "SophiaKL", age: 26, gender: "Female", salary: 3200, city: "Manchester" },
  { name: "JamesVD", age: 38, gender: "Male", salary: 4500, city: "Birmingham" },
  { name: "AvaBC", age: 31, gender: "Female", salary: 5200, city: "Liverpool" },
  { name: "NoahFG", age: 50, gender: "Male", salary: 7200, city: "Bristol" },
  { name: "MiaRS", age: 24, gender: "Female", salary: 2900, city: "Leeds" },
  { name: "LucasHJ", age: 36, gender: "Male", salary: 4800, city: "Birmingham" },
  { name: "IslaZE", age: 43, gender: "Female", salary: 6500, city: "Liverpool" }
];

  const result = await Person.insertMany(peopleWithCity);

  console.log("Many documents with city inserted");
  console.log(result);
}

// Function that displays only the people from a specific city (London).
async function findPeopleFromLondon() {
const docs = await Person.find({ city: "London"})
    .sort({ salary: 1 }) // sort by salary ascending
    .select("name age city")
    .limit(100);

  console.log("Showing people from london");

  docs.forEach((doc) => {
    console.log(doc.name, doc.age, doc.city);
  });
}

async function main() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log(`Connected to MongoDB`);

    await insertOne();
    await insertMany();
    await findAll();
    await findFemalesOver30();
    await countDocuments();
    await deleteManyPersons();
    await updateManyPersons();
    await insertManyWithCity();
    await findPeopleFromLondon();
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await mongoose.connection.close();
    console.log("Connection closed");
  }
}

main();
