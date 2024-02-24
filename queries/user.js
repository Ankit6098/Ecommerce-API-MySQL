const db = require("../config/db");

// create user
function createUser(username, email, password, callback) {
  db.query(
    `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`,
    [username, email, password],
    (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result);
      }
    }
  );
}

// get user by email
function getUserByEmail(email, callback) {
    db.query(
        `SELECT * FROM users WHERE email = ?`,
        [email],
        (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result);
        }
        }
    );
}

// get user by username
function getUserByUsername(username, callback) {
    db.query(
        `SELECT * FROM users WHERE username = ?`,
        [username],
        (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result);
        }
        }
    );
}

module.exports = {
    createUser,
    getUserByEmail,
    getUserByUsername
};
