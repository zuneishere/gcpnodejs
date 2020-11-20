const express = require("express");
const app = express();

const port = 4000;
const mongoose = require("mongoose");

const employees = require("./model");
const router = express.Router();

//database connection
var uri = "mongodb://192.168.1.6:27017/details";

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully at port 27017");
});

//start router- any link starting with '/' will be captured by the router
//
app.use("/", router);
router.route("/insertdata").post(function(req, res) {
var data = [
  {
    name: "John",
    age: 21,
    location: "New York"
  },
  {
    name: "Smith",
    age: 27,
    location: "Texas"
  },
  {
    name: "Lisa",
    age: 23,
    location: "Chicago"
  }
];
employees.insertMany(data, function(err, result) {
  if (err) {
    res.send(err);
<<<<<<< HEAD
    } else {
    res.send(result);

  }
});
router.route("/fetchdata").get(function(req, res) {
  employees.find({}, function(err, result) {
    if (err) {
      res.send(err);
      console.log('Data fetch failure- Dennis')
    } else {
      res.send(result);
    }
  });
});
router.route("/test").get(function(req, res) {
  res.send('Hello World!')
});
});


app.listen(port, function() {
  console.log("Server is running on Port: " + port);
});

