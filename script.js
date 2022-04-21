import storage from "./storage.js";

const userData = storage.get("data");

if (userData !== null) {
  console.log(userData);
} else {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => storage.set("data", data))
    .catch((error) => console.error(error));
}

function isValidDateFormat(str) {
  let regexp = /^\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}$/;
  return regexp.test(str);
}

console.log(isValidDateFormat("2012/09/18 12:10"));
