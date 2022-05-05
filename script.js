"use strict";

console.log("Pirma užduotis");
console.log("");

var price = prompt("Kokia yra prekės kainą?");
price = Number(price);
while (isNaN(price)) {
  price = prompt("Gal galite pakartotinai įvesti prekės kainą?");
  price = Number(price);
}
var pvm = 0.21 * price;
var sum = price + pvm;
console.log("Prekės kaina su PVM: " + sum.toFixed(2) + " €");
console.log("PVM: " + pvm.toFixed(2) + " €");
console.log("Prekės kaina be PVM: " + price.toFixed(2) + " €");

console.log("");
console.log("Antra užduotis");
console.log("");

var names = [
  "Jon Snow",
  "Cersei Lannister",
  "Daenerys Targaryen",
  "Theon Greyjoy",
  "Tyrion Lannister",
  "Arya Stark",
];
console.log(
  "Pirmasis elementas: " +
    names[0] +
    ". Paskutinysis elementas: " +
    names[names.length - 1]
);
var input = prompt("Įveskite skaičių nuo 1 iki 6");
var inputNum = Number(input);
while (isNaN(inputNum)) {
  input = prompt("Gal galite pakartotinai įvesti skaičių?");
  inputNum = Number(input);
}
inputNum--;
console.log("Pagal įvestą skaičių personažas yra: " + names[inputNum]);
