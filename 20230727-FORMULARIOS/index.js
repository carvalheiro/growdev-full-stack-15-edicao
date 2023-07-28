const input = document.querySelectorAll("input")[0];
console.log(input);
input.addEventListener("input", function (event) {
  event.preventDefault();
  console.log(event);
  console.log(input);
  console.log(input.value);
  console.log(event.data);
  console.log(event.target);
  console.log("input");
});

input.addEventListener("change", function (event) {
  console.log("change");
});

const button = document.querySelector("button");

button.addEventListener("click", function (event) {
  input.value = "Hola";
  input.focus();
});

input.addEventListener("focus", function (event) {
  console.log("focus");
});

input.addEventListener("blur", function (event) {
  console.log("blur");
});

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(event);
  console.log("submit");
  for (const element of form.elements) {
    console.log(element);
    console.log(element.value);
  }
});
