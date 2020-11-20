const express = require("express");
const app = express();

const port = 4000;
const mongoose = require("mongoose");

const employees = require("./model");
const router = express.Router();

//database connection
var uri = "mongodb://localhost:27017/details";

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully at port 27017");
});

//start router- any link starting with '/' will be captured by the router
app.use("/", router);

app.listen(port, function() {
  console.log("Server is running on Port: " + port);
});

