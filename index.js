require('dotenv').config();
const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const path = require("path");
const app = express();

app.use(express.json()); // Middleware to handle JSON requests

// MySQL Connection Setup
const connection = mysql.createConnection({
    host: 'localhost',
    database: 'Delta_app',
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
        faker.string.uuid(), // Updated faker function
        faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password()
    ];
};

// Routes
app.get("/", (req, res) => {
    let q = `SELECT COUNT(*) AS user_count FROM users`; // Ensure correct table name (assuming "users" is correct)
    connection.query(q, (err, result) => {
        if (err) {
            console.error("Database Query Error:", err);
            return res.status(500).json({ error: "Database query failed." });
        }
        console.log(result);
        res.json(result);
    });
});

// Serve Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Start Server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
