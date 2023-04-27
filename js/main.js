//Dichiarazioni variabili globali
let age;
let youngDiscount;
let oldDiscount;
let golbalPrice;
let departureCity;
let arrivalCity;
let seat;
let randomSeatNumber = Math.floor(Math.random() * 9);
let randomKm =Math.floor((Math.random() * 1000)+1);
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

golbalPrice = (randomKm*0.21).toFixed(2);

//Setup sconti
if (age < 18){
    youngDiscount = golbalPrice - (golbalPrice*0.20).toFixed(2);
    document.getElementById("total-price").innerHTML =  `${youngDiscount}€`;
    document.getElementById("tipo-passeggero").innerHTML =  "Junior";
    document.getElementById("discount-label").innerHTML =  "Sconto Junior";
    console.log(youngDiscount);
} else if (age > 65){
    oldDiscount = golbalPrice - (golbalPrice*0.40.toFixed(2));
    document.getElementById("total-price").innerHTML =  `${oldDiscount}€`;
    document.getElementById("discount-label").innerHTML =  "Sconto Senior";
    document.getElementById("tipo-passeggero").innerHTML =  "Senior";
    console.log(oldDiscount);
}
else{
    document.getElementById("total-price").innerHTML =  `${golbalPrice}€`;
    document.getElementById("tipo-passeggero").innerHTML =  "Ordinario";
    console.log(globalPrice);
}
// oldDiscount;