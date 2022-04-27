'use strict'

const myArray = ["milk", "coffee", "tea", "soda", "water"];

console.log (myArray);

const textArray = JSON.stringify(myArray);

console.log(textArray);

localStorage.setItem("storedArray", textArray);

console.log(localStorage);

let unstoredArray = localStorage.getItem("storedArray");

let newArray = JSON.parse(unstoredArray);

document.write(newArray[3]);