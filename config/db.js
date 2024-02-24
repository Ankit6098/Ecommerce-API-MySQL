const mysql = require("mysql2");
require("dotenv").config();
const userSchema = require("../model/user");

// Create a connection to the database
const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  //   database: "ECOMMERCE_API",
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + db.threadId);

    // Create a database if it doesn't exist
    db.query("CREATE DATABASE IF NOT EXISTS ECOMMERCE_API", (err, result) => {
        if (err) {
        console.log(err);
        } else {
        console.log("Database created successfully");
        }
    });

    // Use the database
    db.query("USE ECOMMERCE_API", (err, result) => {
        if (err) {
        console.log(err);
        } else {
        console.log("Database selected successfully");
        }
    });

    // Create a user table
    db.query(userSchema.createUserTable, (err, result) => {
        if (err) {
        console.log(err);
        } else {
        console.log("User table created successfully");
        }
    });


});

module.exports = db;
