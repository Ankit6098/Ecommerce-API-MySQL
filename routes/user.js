const express = require("express");
const routes = express.Router();

const userController = require("../controllers/userController");
const cartController = require("../controllers/cartController");

routes.get("/", userController.getAllUsers);
routes.post("/register", userController.createUser);
routes.get("/email/:email", userController.getUserByEmail);
routes.get("/username/:username", userController.getUserByUsername);
routes.post("/login", userController.login);
routes.use('/cart', require('./cart'));

module.exports = routes;