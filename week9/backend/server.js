const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;
const MONGO_URI =
  "mongodb+srv://Abimbola2003:Abimbola2003@kalixy.u0jcskt.mongodb.net/";

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Schema
const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  age: Number,
  gender: String,
  salary: Number,
});

// Model
const Person = mongoose.model("modelname", PersonSchema, "personCollection");

/////////////////////////////////////////////////////
// INSERT ONE
/////////////////////////////////////////////////////

app.post("/api/persons", async (req, res) => {
  try {
    const person = new Person({
      name: req.body.name,
      age: req.body.age,
      gender: req.body.gender,
      salary: req.body.salary,
    });

    const savedPerson = await person.save();

    res.status(201).json(savedPerson);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

/////////////////////////////////////////////////////
// FIND ALL
/////////////////////////////////////////////////////

app.get("/api/persons", async (req, res) => {
  try {
    const persons = await Person.find({})
      .sort({ salary: 1 })
      .select("name age salary gender");

    res.status(200).json(persons);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

/////////////////////////////////////////////////////
// COUNT DOCUMENTS
/////////////////////////////////////////////////////

app.get("/api/persons/count", async (req, res) => {
  try {
    const count = await Person.countDocuments();

    res.status(200).json({
      totalDocuments: count,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

/////////////////////////////////////////////////////
// UPDATE ALL FEMALES
/////////////////////////////////////////////////////

app.put("/api/persons/update-salary", async (req, res) => {
  try {
    const result = await Person.updateMany(
      {
        gender: req.body.gender,
      },

      {
        salary: req.body.salary,
      },
    );

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
/////////////////////////////////////////////////////

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
