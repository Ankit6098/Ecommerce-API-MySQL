const mysql = require("mysql2");
require("dotenv").config();
const userSchema = require("../model/user");
const categorySchema = require("../model/category");
const productSchema = require("../model/product");
const cartSchema = require("../model/cart");
const orderSchema = require("../model/order");
const reviewSchema = require("../model/review");
const paymentSchema = require("../model/payment");

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

    // Create a user table or schema
    db.query(userSchema.createUserTable, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log("User table created successfully");
        }
    });

    // Create a category table or schema
    db.query(categorySchema.createCategoryTable, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Category table created successfully");
        }
    });

    // Create a product table or schema
    db.query(productSchema.createProductTable, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Product table created successfully");
        }
    });


    // Create a cart table or schema
    db.query(cartSchema.createCartTable, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Cart table created successfully");
        }
    });

    // Create a order table or schema
    db.query(orderSchema.createOrderTable, (err, result) => {
        if (err) {
        console.log(err);
        } else {
        console.log("Order table created successfully");
        }
    });

    // Create a review table or schema
    db.query(reviewSchema.createReviewTable, (err, result) => {
        if (err) {
        console.log(err);
        }
        else {
        console.log("Review table created successfully");
        }
    });

    // Create a payment table or schema
    db.query(paymentSchema.createPaymentTable, (err, result) => {
        if (err) {
        console.log(err);
        } else {
        console.log("Payment table created successfully");
        }
    });
});

module.exports = db;
