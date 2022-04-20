import storage from "./storage.js";
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => {
    storage.set("data", data);
  })
  .catch((error) => console.error(error));

function isValidDateFormat(str) {
  let regexp = /^\d\d\d\d\/\d\d\/\d\d \d\d:\d\d$/;
  return regexp.test(str);
}

console.log(isValidDateFormat("12.02.2022 12:10"));
