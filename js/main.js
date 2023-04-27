//Dichiarazioni variabili globali
let age;
let youngDiscount;
let oldDiscount;
let golbalPrice;
let departureCity;
let arrivalCity;
let seat;
let randomSeatNumber = Math.floor(Math.random() * 9);
let randomKm =Math.floor(Math.random() * 1000);
let totalPrice;


//mettere città di partenza
departureCity = prompt("inserisci la città di partenza");
console.log(departureCity);
document.getElementById("departure").innerHTML = departureCity;

//Città di arrivo
arrivalCity = prompt("inserisci la città di arrivo");
console.log(arrivalCity);
document.getElementById("arrival").innerHTML = arrivalCity;

//Chilometraggio random
document.getElementById("distance").innerHTML = `${randomKm} Km`;

//Orario dinamico
const now = new Date();
const departureHour = now.getHours() + ':' + now.getMinutes();
console.log(departureHour);
document.getElementById("departure-time").innerHTML = departureHour;

//posto a sedere random
document.getElementById("seggiolino").innerHTML =  `${randomSeatNumber}A`;

//Età passeggero
age = prompt("Quanti anni hai?");
console.log(age);

golbalPrice = `${randomKm}*0.21`;
//Setup sconti
// youngDiscount = golbalPrice - (golbalPrice*0.20);
// oldDiscount;