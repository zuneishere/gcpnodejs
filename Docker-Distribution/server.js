const express = require("express");
const app = express();

const port = 4000;
const mongoose = require("mongoose");

const employees = require("./model");
const router = express.Router();

const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_PORT
} = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
  autoIndex: false, // Don't build indexes
  poolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4 // Use IPv4, skip trying IPv6
};

//database connection
//var uri = "mongodb://dennis:startup85@localhost:27017/details";
//var uri = "mongodb://dennis:startup85@mongodb-release-headless:27017/details";
var uri = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/details`;
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
mongoose.connect(uri, options);

const connection = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

connection.once("open", function() {
  console.log("MongoDB database connection established successfully at port 27017");
});

//start router- any link starting with '/' will be captured by the router
//
app.use("/", router);
router.route("/").get(function(req, res) {
  res.send('Hello World - Cloud build Run Home Page!')
});
router.route("/test").get(function(req, res) {
    res.send('Hello World - Cloud build Run Test Page!')
  });
router.route("/insertdata").post(function(req, res) {

employees.insertMany(data, function(err, result) {
  if (err) {
    res.send(err);
    
  } else {
    res.send(result);

  }
});
});

router.route("/fetchdata").get(function(req, res) {
  employees.find({}, function(err, result) {
    if (err) {
      res.send(err);
      console.log('Data fetch failure- Dennis')
    } else {
      res.send(result);
      console.log('Data fetch success- Dennis')
    }
  });
});




app.listen(port, function() {
  console.log("Server is running on Port: " + port);
});