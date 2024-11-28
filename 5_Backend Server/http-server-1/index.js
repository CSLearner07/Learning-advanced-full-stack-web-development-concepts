const express = require("express");

const port = 3000;

const app = express();

app.get("/", function (req, res) {
  res.send("hello world");
});

app.get("/learn-route-handler", function (req, res) {
  res.json({
    name: "Pradeep",
    age: 24,
  });
});
//above second app.get code is just for learning routes

app.listen(port);

// For running this code just open browser and search
