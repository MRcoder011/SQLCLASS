require('dotenv').config();
const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();

app.use(express.json()); // Middleware to handle JSON requests

// MySQL Connection Setup
const connection = mysql.createConnection({
    host: 'localhost',
    database: 'delta_app',
    user: 'root',
    password: process.env.DB_PASSWORD // Use environment variables for security
});

// Connect to MySQL
connection.connect(err => {
    if (err) {
        console.error("Database connection failed:", err);
        return;
    }
    console.log("Connected to MySQL database.");
});

// Function to Generate Fake Users
const getRandomUser = () => {
    return [
        faker.datatype.uuid(), // Corrected faker function
        faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password()
    ];
};

// Routes
app.get("/", (req, res) => {
    let q = `SELECT COUNT(*) AS user_count FROM user`; // Ensure correct table name
    connection.query(q, (err, result) => {
        if (err) {
            console.error("Database Query Error:", err);
            return res.status(500).send("Database query failed.");
        }
        console.log(result);
        res.json(result);
    });
});

// Start Server
app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});
