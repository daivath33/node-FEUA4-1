"use strict";

fetch("http://localhost:3000/")
  .then((response) => response.json())
  .then((data) => {
    const namesList = document.querySelector(".output");
    data.forEach((name) => {
      const li = document.createElement("li");
      li.textContent = name;
      namesList.append(li);
    });
  })
  .catch((error) => console.log(error));

const names = [];
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameValue = document.querySelector(".name-input").value;
  //document.querySelector(".output").textContent = names;
  console.log(nameValue);

  fetch("http://localhost:3000/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: nameValue }),
  }).then(() => {
    location.reload();
  });

  form.reset();
});

//HTTP response status codes
//https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
