const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();

// MySQL Connection Setup
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "delta_app",
    password: "mysql@123", // Replace with your actual MySQL password
});

// Connect to MySQL
connection.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err);
        return;
    }
    console.log("Connected to MySQL database.");
});

// Function to Generate Fake Users
const getRandomUser = () => {
    return [
        faker.string.uuid(), // Updated faker function for UUID
        faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password(),
    ];
};

// Route to Handle Root URL
app.get("/", (req, res) => {
    res.send("Welcome to the Delta App!");
});

// Start Server
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});