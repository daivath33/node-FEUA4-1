const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const password = document.querySelector("#password").value;
  const email = document.querySelector("#email").value;
  //POST
  fetch("http://localhost:5000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      password,
      email,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      const output = document.querySelector("h2");
      console.log(data.approved);
      if (data.approved === false) {
        output.style.color = "red";
      } else {
        output.style.color = "green";
      }
      output.textContent = data.message;
    })
    .catch((error) => console.log(error));
  form.reset();
});
