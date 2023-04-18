fetch("http://localhost:5000/users")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((user) => {
      const tbody = document.querySelector("tbody");
      const userHTML = `
      <tr>
      <td id="password">${user.password}</td>
      <td id="email">${user.email}</td>
      <td id="firstname">${user.firstname}</td>
      <td id="surname">${user.surname}</td>
      <td id="address">${user.address}</td>
      <td id="postcode">${user.postcode}</td>
      <td id="city">${user.city}</td>
      <td id="phone">${user.phone}</td>
      <td id="agreemnet">${user.isAgreemnet}</td>
    </tr>`;
      tbody.insertAdjacentHTML("afterend", userHTML);
    });
  });
