"use strict";

fetch("http://localhost:5000/cars")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((car) => {
      const carsList = document.querySelector(".output");
      const li = document.createElement("li");
      li.textContent = car;
      carsList.append(li);
    });
  });

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const carValue = document.querySelector(".car-input").value;
  console.log(carValue);
  fetch("http://localhost:5000/cars", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ car: carValue }),
  }).then(() => {
    location.reload();
  });

  form.reset();
});
