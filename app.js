'use strict'

// const myArray = ["milk", "coffee", "tea", "soda", "water"];

// console.log (myArray);

// const textArray = JSON.stringify(myArray);

// console.log(textArray);

// localStorage.setItem("storedArray", textArray);

// console.log(localStorage);

// let unstoredArray = localStorage.getItem("storedArray");

// let newArray = JSON.parse(unstoredArray);

// document.write(newArray[3]);

//---------------Local Storage Assignemnt-------------

// number 4 Create and Object and put it in local storage

const car = {
  make:"Dodge",
  model: "Ram",
  year: "2020",
  color: "black",
}
console.log(car);

let carString = JSON.stringify(car);

console.log(carString);

localStorage.setItem("storedCar", carString);

//Number 5 get the object from local storage and console log a part of the object or use the dom to put it in the HTML. 

let unstoredCar = localStorage.getItem("storedCar");

let myCar = JSON.parse(unstoredCar);

console.log(myCar);

const myNewCar = "My new Car is " + myCar.year + " " + myCar.make + " " + myCar.model + "!";

const section = document.getElementById("mainSection");
const h2elm = document.createElement('h2');
h2elm.textContent = myNewCar;
section.appendChild(h2elm);

// Number 6 Create an array. Place the array into local storage, get it out of local storage and console log or use the dom to place a part of the array on the HTML. 

const drinks = ["soda", "water", "tea", "coffee", "Juice", "milk", "chocolate milk"];

let drinksString = JSON.stringify(drinks);

localStorage.setItem("myArray", drinksString);

let unstoredArray = localStorage.getItem("myArray");

let newDrinks = JSON.parse(unstoredArray);

const h3elm = document.createElement('h3');
h3elm.textContent = "My favorite Drink is: " + newDrinks[6];
section.appendChild(h3elm);