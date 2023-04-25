const express = require("express");
const cors = require("cors");
const data = require("./data.js");
console.log(data);
const port = 3000;
const app = express();
app.use(express.json());
app.use(cors());

//1 Visos prekes
app.get("/", (req, res) => {
  res.send(data);
});

//2 Prekes pagal kategorija
app.get("/products/:category", (req, res) => {
  const category = req.params.category;
  const productsByCategory = data.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );
  res.send(productsByCategory);
});

//3 Prekes pagal id
app.get("/product/:id", (req, res) => {
  const id = req.params.id;
  const productById = data.find((product) => product.id === Number(id));
  res.send(productById);
});

//4 Prekiu pavadinimai
app.get("/productsNames", (req, res) => {
  const productsNames = data.map((product) => product.name);
  res.send(productsNames);
});

//5 prekes kuriu kiekis yra mazesnis uz nurodyta
app.get("/prodInStock", (req, res) => {
  const quantity = 10;
  const prodByQuantInStock = data.filter((product) => product.stock < quantity);
  const prodNamesQuant = prodByQuantInStock.map(({ name, stock }) => ({
    name,
    stock,
  }));
  res.send(prodNamesQuant);
});

app.get("/products/byPrice/:minPrice/:maxPrice", (req, res) => {
  const minPrice = req.params.minPrice;
  const maxPrice = req.params.maxPrice;
  const prodByPrice = data.filter(
    (product) =>
      product.price >= Number(minPrice) && product.price <= Number(maxPrice)
  );
  res.send(prodByPrice);
  console.log(typeof minPrice);
});

app.post("/addProduct", (req, res) => {
  const product = {
    id: data.lenght + 1,
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
    stock: req.body.stock,
  };
  data.push(product);
  res.send(data);
});

app.listen(port, () => console.log(`Server is listening on port ${port}...`));
