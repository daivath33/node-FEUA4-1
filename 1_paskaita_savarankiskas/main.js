const express = require("express");
const casual = require("casual");

const app = express();

app.get("/", (req, res) => {
  res.send("Savarankiskas Darbas");
});

//1 routas
app.get("/randomUser", (req, res) => {
  const user = {
    firstName: casual.first_name,
    lastName: casual.last_name,
    country: casual.country,
    city: casual.city,
    address: casual.address,
    zip: casual.zip((digits = {})),
  };
  res.send(user);
});

//2 routas
app.get("/randomColor", (req, res) => {
  const randomColor = casual.color_name;
  res.send(`Random Color: ${randomColor}`);
});

//3 routas
app.get("/randomColors", (req, res) => {
  const colors = [];
  for (i = 0; i < 5; i++) {
    colors.push(casual.color_name);
  }
  res.send(colors);
});
const port = 3000;

//4 routas
app.get("/randomPlaces", (req, res) => {
  let index = casual.integer((from = 1), (to = 5));
  const places = [];
  for (let i = 0; i < index; i++) {
    const placeObj = {
      country: casual.country,
      city: casual.city,
      address: `${casual.street} ${casual.address2}`,
    };
    places.push(placeObj);
  }
  res.send(places);
});

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
