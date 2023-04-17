const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const prodInput = document.querySelector("#prod").value;
  const priceInput = document.querySelector("#price").value;
  console.log(prodInput);
  fetch("http://localhost:3000/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ product: prodInput, price: priceInput }),
  }).then(() => {
    location.reload();
  });
  form.reset();
});

fetch("http://localhost:3000/products")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((el) => {
      const products = document.querySelector("ul");
      const li = document.createElement("li");
      li.textContent = `${el.product} ${el.price} Eur`;
      products.append(li);
    });
  });
