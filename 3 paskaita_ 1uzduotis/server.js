const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const users = [];

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/login", (req, res) => {
  let foundedUser = users.find((user) => user.email === req.body.email);
  if (foundedUser !== undefined) {
    let submittedPassword = req.body.password;
    let storedPassword = foundedUser.password;
    if (submittedPassword === storedPassword) {
      res.send({ message: `Sekmingai prisijugete`, approved: true });
    }
  } else {
    res.send({
      message: `Neteisingas slaptazodis arba el. pastas`,
      approved: false,
    });
  }
});

app.post("/register", (req, res) => {
  const user = {
    password: req.body.password,
    email: req.body.email,
    firstname: req.body.firstname,
    surname: req.body.surname,
    address: req.body.address,
    postcode: req.body.postcode,
    city: req.body.city,
    phone: req.body.phone,
    isAgreemnet: req.body.isAgreemnet,
  };
  users.push(user);
  res.send();
});

const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}...`));
