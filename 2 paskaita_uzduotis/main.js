const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const cars = ["BMW", "Mercedes"];

app.get("/", (req, res) => {
  res.send("2 paskaita: uzduotis");
});

app.get("/cars", (req, res) => {
  res.send(cars);
});

app.post("/cars", (req, res) => {
  const body = req.body;
  cars.push(body.car);
});

port = 5000;
app.listen(port, () => console.log(`Server started at ${port}...`));
