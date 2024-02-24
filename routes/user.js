const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.get("/", userController.getAllUsers);
router.post("/create", userController.createUser);
router.get("/email/:email", userController.getUserByEmail);
router.get("/username/:username", userController.getUserByUsername);
router.post("/login", userController.login);

module.exports = router;