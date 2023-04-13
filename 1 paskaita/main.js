const casual = require("casual");

let city = casual.city;
//console.log(city, Math.floor(Math.random() * 10) + 1);
//console.log(casual.country);
console.log(casual.integer((from = 10), (to = 100)));
const name = `${casual.name_prefix} ${casual.first_name} ${casual.last_name}`;
console.log(name);
