const express = require("express");
const fs = require("fs");
const app = express();
const dotenv = require("dotenv");

const mongoose = require("mongoose");
const {
  insertOne,
  findAll,
  countDocuments,
  findFemalesOver30,
  deleteManyPersons,
  updateManyPersons,
  insertMany,
} = require("./Week4Lab");

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// Built-in middleware for parsing form data and JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Home route
app.get("/", (req, res) => {
  res.send("Hello! This is my first Express application.");
});

app.get("/about", function (req, res) {
  res.send("This is a basic Express application");
});
app.get("/users/:userId/books/:bookId", function (req, res) {
  res.send(req.params);
});

app.get("/GetStudents", (req, res) => {
  fs.readFile("./Students.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({
        status: false,
        statusCode: 500,
        message: "Error reading Students.json",
      });
    }
    res.status(200).json({
      status: true,
      statusCode: 200,
      requestedAt: new Date().toISOString(),
      requestUrl: req.originalUrl,
      requestMethod: req.method,
      studentData: JSON.parse(data),
    });
  });
});

app.get("/GetStudent/:id", (req, res) => {
  console.log("GetStudent called");
  fs.readFile(__dirname + "/Students.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({
        status: false,
        statusCode: 500,
        message: "Error reading Students.json",
      });
    }
    const students = JSON.parse(data);
    const student = students["Student" + req.params.id];
    console.log(student);
    if (student) {
      res.status(200).json(student);
    } else {
      res.status(404).json({
        status: false,
        statusCode: 404,
        message: "Student Not Found",
        requestedAt: new Date().toISOString(),
        requestUrl: req.originalUrl,
        requestMethod: req.method,
      });
    }
  });
});

app.get("/studentinfo", (req, res) => {
  res.sendFile("StudentInfo.html", { root: __dirname });
});

app.post("/submit-data", (req, res) => {
  const name = req.body.firstName + " " + req.body.lastName;
  const age = req.body.myAge;
  const Gender = " Gender: " + req;
  const qual = "Qualification: " + req.body.Qual;
  console.log(req.body.Qual);
  res.send({
    status: true,
    message: "Form Details",
    data: {
      name: name,
      age: age,
      gender: Gender,
      qualification: qual,
    },
  });
});

app.post("/insertOne", async (req, res) => {
  try {
    const result = await insertOne(
      req.body.name,
      req.body.age,
      req.body.gender,
      req.body.salary,
    );
    res.status(201).json({
      status: true,
      message: "Person inserted successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      message: err.message,
    });
  }
});
app.get("/Showform", (req, res) => {
  res.sendFile("Personform.html", {
    root: __dirname,
  });
});

// Find female employees aged 30+
app.get("/Showfemaleover30", async (req, res) => {
  try {
    const result = await findFemalesOver30();
    res.status(200).json({
      status: true,
      message: "Successful",
      count: result.length,
      data: result,
    });
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
});

// Count employees
app.get("/Countemployee", async (req, res) => {
  try {
    const result = await countDocuments();

    res.status(200).json({
      status: true,
      message: "Successful",
      count: result,
    });
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
});

app.put("/updateMany", async (req, res) => {
  try {
    const result = await updateManyPersons();

    res.status(200).json({
      status: true,
      message: "Employees updated successfully",
      matchedCount: result.matchedCount,
      modifiedCount: result.modifiedCount,
    });
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
});

app.post("/Insertmany", async (req, res) => {
  try {
    const result = await insertMany();

    res.status(201).json({
      status: true,
      message: "Employees inserted successfully",
      count: result.length,
      data: result,
    });
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
});

// Delete employees aged 45+
app.delete("/deleteMany", async (req, res) => {
  try {
    const result = await deleteManyPersons();

    res.status(200).json({
      status: true,
      message: "Employees deleted successfully",
      deletedCount: result.deletedCount,
    });
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
});

app.get("/Updateform", (req, res) => {
  res.sendFile("UpdateEmployee.html", { root: __dirname });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
