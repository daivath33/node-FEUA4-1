fetch("http://localhost:5000/users")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((user) => {
      const tbody = document.querySelector("tbody");
      const trow = document.createElement("tr");
      Object.values(user).forEach((value) => {
        const td = document.createElement("td");
        td.textContent = value;
        trow.append(td);
      });
      tbody.append(trow);
    });
  });
