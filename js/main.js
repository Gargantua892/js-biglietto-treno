//Dichiarazioni variabili globali
let age;
let youngDiscount;
let oldDiscount;
let globalPrice;
let departureCity;
let arrivalCity;
let seat;
let randomSeatNumber = Math.floor(Math.random() * 9);
let randomKm =Math.floor((Math.random() * 1000)+1);
let totalPrice;

//Data odierna
const date = new Date();

let day = date.getDate() + 3;
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day}-${month}-${year}`;
document.getElementById("current-date").innerHTML = currentDate;



//Inserimento città di partenza
departureCity = prompt("inserisci la città di partenza");
console.log(departureCity);
document.getElementById("departure").innerHTML = departureCity;

console.log(randomKm);

//Inserimento Città di arrivo
arrivalCity = prompt("inserisci la città di arrivo");
console.log(arrivalCity);
document.getElementById("arrival").innerHTML = arrivalCity;

//Chilometraggio random
document.getElementById("distance").innerHTML = `${randomKm} Km`;

//Orario dinamico
const now = new Date();
const departureHour = now.getHours() + ':' + now.getMinutes();
console.log(departureHour);
document.getElementById("departure-time").innerHTML = `${departureHour}`;

//posto a sedere random
document.getElementById("seggiolino").innerHTML =  `${randomSeatNumber}A`;

//Età passeggero
age = prompt("Quanti anni hai?");
console.log(age);

globalPrice = (randomKm*0.21).toFixed(2);
console.log(globalPrice);


//Setup sconti
if (age < 18){//Sconto young
    youngDiscount = (globalPrice - (globalPrice*0.20)).toFixed(2);
    document.getElementById("total-price").innerHTML =  `${youngDiscount}€`;
    document.getElementById("discount-label").innerHTML =  "Sconto Junior 20%";
    document.getElementById("tipo-passeggero").innerHTML =  "Junior";
    console.log(youngDiscount);
} else if (age > 65){//Sconto senior
    oldDiscount = (globalPrice - (globalPrice*0.40)).toFixed(2);
    document.getElementById("total-price").innerHTML =  `${oldDiscount}€`;
    document.getElementById("discount-label").innerHTML =  "Sconto Senior 40%";
    document.getElementById("tipo-passeggero").innerHTML =  "Senior";
    console.log(oldDiscount);
}
else{//prezzo regolare
    document.getElementById("total-price").innerHTML =  `${globalPrice}€`;
    document.getElementById("tipo-passeggero").innerHTML =  "Ordinario";
    console.log(globalPrice);
}
