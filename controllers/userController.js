const db = require("../config/db");
const queries = require("../queries/user");
const jwt = require("jsonwebtoken");

// get all users
module.exports.getAllUsers = (req, res) => {
  queries.getAllUsers((err, result) => {
    if (err) {
      res.status(400).json({ error: err });
    } else {
      if (result.length === 0) {
        res.status(404).json({ message: "There is no user" });
      } else {
        res.status(200).json(result);
      }
    }
  });
};

// create user
module.exports.createUser = (req, res) => {
  const { name, username, email, password } = req.body;
  queries.createUser(name, username, email, password, (err, result) => {
    if (err) {
      res.status(400).json({ error: err });
    } else {
      res.status(201).json({
        message: "User created successfully",
        name,
        username,
        email,
        password,
      });
    }
  });
};

// get user by email
module.exports.getUserByEmail = (req, res) => {
  const { email } = req.params;
  queries.getUserByEmail(email, (err, result) => {
    if (err) {
      res.status(400).json({ error: err });
    } else {
      res.status(200).json(result);
    }
  });
};

// get user by username
module.exports.getUserByUsername = (req, res) => {
  const { username } = req.params;
  queries.getUserByUsername(username, (err, result) => {
    if (err) {
      res.status(400).json({ error: err });
    } else {
      res.status(200).json(result);
    }
  });
};

// login user
module.exports.login = (req, res) => {
  const { email, password } = req.body;
  queries.login(email, password, (err, result) => {
    if (err) {
      res.status(400).json({ error: err });
    } else {
        if (result.length === 0) {
            res.status(404).json({ message: "User not found" });
        } else {
            const user = result[0];
            const token = jwt.sign({ user }, process.env.JWT_SECRET, {
            expiresIn: "7d",
            });
            res.status(200).json({ token });
        }
    }
  });
};
