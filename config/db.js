const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: 'root',
  password: 'root',
  //   database: "ECOMMERCE_API",
});

db.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + db.threadId);
});

module.exports = db;
