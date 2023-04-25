const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let password = "";
  const passwordInput = document.querySelector("#password").value;
  const repeatPasswordInput = document.querySelector("#repeat-password").value;
  if (passwordInput === repeatPasswordInput) {
    password = passwordInput;
    const email = document.querySelector("#email").value;
    const firstname = document.querySelector("#firstname").value;
    const surname = document.querySelector("#surname").value;
    const address = document.querySelector("#address").value;
    const postcode = document.querySelector("#postcode").value;
    const city = document.querySelector("#city").value;
    const phone = document.querySelector("#phone").value;
    const isAgreemnet = document.querySelector("#agreement").checked;

    //POST
    fetch("http://localhost:5000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        password,
        email,
        firstname,
        surname,
        address,
        postcode,
        city,
        phone,
        isAgreemnet,
      }),
    })
      .then(() => {
        window.open("index.html", "_blank");
      })
      .catch((error) => console.log(error));
    form.reset();
  } else {
    alert("Nesutampa slaptadzodziai, suveskite is naujo!");
  }
});
