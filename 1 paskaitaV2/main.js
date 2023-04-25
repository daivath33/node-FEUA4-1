const express = require("express"); //importavimas Express modulio

const app = express(); //aplikacijos sukurimas
const port = 3000; //porto (kanalo) skaicius

//routas (kelias) route/path
//get = grazink duomenis
//http://localhost:3000/
app.get("/", (req, res) => {
  //req - request, tai kas ateina is isores
  //res - response, tai kas ateina is vidaus
  //send metodas issiuncia duomenis
  res.send("Hello NODE_JS!!");
});

app.get("/today", (req, res) => {
  res.send(new Date().toDateString());
});

app.get("/user", (req, res) => {
  const user = {
    name: "Daiva",
    surname: "Thumat",
    age: 45,
  };
  res.send(user);
});
//Serverio paleidimas
app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
