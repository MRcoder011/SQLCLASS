const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();

// MySQL Connection Setup
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "Delta_app",
    password: "Rahmani@30", // Replace with your actual MySQL password
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
// show route to get all users
app.get("/users", (req, res) => {
let q = `select * from users`;
try{
    connection.query(q, (err, results) => {
        if (err) throw err;{
            console.log(results);
            res.send(results);
        }
        
    });
}
catch(err){
    console.error(err);
   res.send("some err in db");
}
});
// Start Server
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
}); 