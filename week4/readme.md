Portfolio Activity: Extending and Querying a MongoDB Collection

Module: CN5006
Author: Dr. Nadeem Qazi
Topic: MongoDB, Mongoose, CRUD Operations, and City-Based Queries

1. Project Overview

This project demonstrates how to use MongoDB and Mongoose with Node.js to manage a collection of person records.

The exercise extends an existing Person schema by adding a new field called city. It also demonstrates how to insert documents, retrieve records, filter results, sort data, count documents, update salaries, and delete records using Mongoose.

The project uses the MongoDB collection personCollection to store information about people, including their names, ages, genders, salaries, and cities.

Objectives
Extend the existing Mongoose schema by adding a city field.
Insert a single document and multiple documents into MongoDB.
Insert records containing city information.
Retrieve all documents and filter records using specific conditions.
Display only people who live in London.
Sort query results by salary.
Count, update, and delete documents.
Demonstrate successful database operations using terminal output and MongoDB Compass or MongoDB Atlas screenshots. 2. Technologies Used
Node.js: Executes the JavaScript application.
MongoDB: Stores the person records.
Mongoose: Defines schemas and interacts with MongoDB.
dotenv: Loads environment variables from a .env file.
MongoDB Compass / MongoDB Atlas: Allows database records to be inspected visually. 3. Project Structure
mongodb-city-query/
├── index.js
├── .env
├── .gitignore
├── package.json
└── README.md

index.js contains the Mongoose schema and database operations.
.env stores the MongoDB connection string.
.gitignore prevents sensitive configuration and dependencies from being committed.
package.json defines the project dependencies and scripts.
README.md documents the project and its implementation. 4. Installation and Setup
Prerequisites

Install Node.js and ensure that you have access to a MongoDB database, either locally or through MongoDB Atlas.

Step 1: Install dependencies

Open a terminal in the project directory and run:

npm init -y
npm install mongoose dotenv

Step 2: Configure the database connection

Create a .env file in the root
