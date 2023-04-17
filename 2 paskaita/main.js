const express = require("express");
const cors = require("cors");
const casual = require("casual");

console.log("Frontend + Backend");

const app = express();
app.use(cors());
app.use(express.json());
//create - post
//read - ged
//update - put
//delete - delete

const names = ["Daiva BACKEND", "Rokas Mokytojas"];

app.get("/", (req, res) => {
  res.send(names);
});

app.post("/", (req, res) => {
  const body = req.body;
  names.push(body.name);
  res.send(body.name);
});

const port = 3000;
app.listen(port, () => console.log(`Server started on port ${port}...`));
