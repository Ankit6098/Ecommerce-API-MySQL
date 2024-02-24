const express = require("express");
const app = express();
const port = 8000;

require("dotenv").config();
const db = require("./config/db");

// app.get("/", (req, res) => {
//   res.send("Welcome to Ecommerce API!");
// });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", require("./routes"));

app.listen(port, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }
  console.log(`server is listening on ${port}`);
});
