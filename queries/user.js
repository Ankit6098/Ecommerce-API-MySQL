const db = require("../config/db");
const bycrypt = require("bcrypt");

// get all users
function getAllUsers(callback) {
  db.query(`SELECT * FROM users`, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
}

// create user
function createUser(name, username, email, password, callback) {
  const salt = bycrypt.genSaltSync(10);
  const hash = bycrypt.hashSync(password, salt);
  password = hash;
  db.query(
    `INSERT INTO users (name, username, email, password) VALUES (?, ?, ?, ?)`,
    [name, username, email, password],
    (err, result) => {
      // check if there is an error
      if (err) {
        // check if email already exists using query
        db.query(
          `SELECT * FROM users WHERE email = ?`,
          [email],
          (err, result) => {
            if (err) {
              callback(err, null);
            } else {
              if (result.length > 0) {
                callback("Email already exists", null);
              } else {
                // check if username already exists using query
                db.query(
                  `SELECT * FROM users WHERE username = ?`,
                  [username],
                  (err, result) => {
                    if (err) {
                      callback(err, null);
                    } else {
                      if (result.length > 0) {
                        callback("Username already exists", null);
                      }
                    }
                  }
                );
              }
            }
          }
        );
      } else {
        callback(null, result);
      }
    }
  );
}

// get user by email
function getUserByEmail(email, callback) {
  db.query(`SELECT * FROM users WHERE email = ?`, [email], (err, result) => {
    if (err) {
      if (result.length === 0) {
        callback("Email not found", null);
      } else {
        callback(err, null);
      }
    } else {
      callback(null, result);
    }
  });
}

// get user by username
function getUserByUsername(username, callback) {
  db.query(
    `SELECT * FROM users WHERE username = ?`,
    [username],
    (err, result) => {
      if (err) {
        if (result.length === 0) {
          callback("Username not found", null);
        } else {
          callback(err, null);
        }
      } else {
        callback(null, result);
      }
    }
  );
}

// login user
// function login(email, password, callback) {
//   db.query(
//     `SELECT * FROM users WHERE email = ? AND password = ?`,
//     [email, password],
//     (err, result) => {
//       if (err) {
//         // check if email not exists
//         db.query(
//           `SELECT * FROM users WHERE email = ?`,
//           [email],
//           (err, result) => {
//             if (err) {
//               callback(err, null);
//             } else {
//               if (result.length === 0) {
//                 callback("Email not found", null);
//               } else {
//                 // check if password is incorrect
//                 db.query(
//                   `SELECT * FROM users WHERE email = ? AND password != ?`,
//                   [email, password],
//                   (err, result) => {
//                     if (err) {
//                       callback(err, null);
//                     } else {
//                       if (result.length > 0) {
//                         callback("Password is incorrect", null);
//                       }
//                     }
//                   }
//                 );
//               }
//             }
//           }
//         )
//       } else {
//         callback(null, result);
//       }
//     }
//   );
// }

// login user using bcrypt
function login(email, password, callback) {
  db.query(
    `SELECT * FROM users WHERE email = ?`,
    [email],
    (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        if (result.length === 0) {
          callback("Email not found", null);
        } else {
          const hash = result[0].password;
          if (bycrypt.compareSync(password, hash)) {
            callback(null, result);
          } else {
            callback("Password is incorrect", null);
          }
        }
      }
    }
  );
}

module.exports = {
  createUser,
  getUserByEmail,
  getUserByUsername,
  getAllUsers,
  login,
};
