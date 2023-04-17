const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const products = [];

app.get("/products", (req, res) => {
  res.send(products);
});

app.post("/products", (req, res) => {
  const body = req.body;
  res.send(body);
  products.push(body);
});
const port = 3000;
app.listen(port, () => console.log(`Server started on port ${port}...`));
