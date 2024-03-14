// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
let pariDispari = prompt("PARI o DISPARI ?");
pariDispari = pariDispari.toLowerCase();

let numero = parseInt(prompt("Scegli un numero da 1 a 5"));
const numeriValidi = [1, 2, 3, 4, 5];

if (numeriValidi.includes(numero)) {
    console.log(numero); // Mostra il numero scelto dall'utente
} else {
    console.log("devi inserire solo numeri tra 1 e 5");
}

if (pariDispari === "pari" || pariDispari === "dispari") {
    console.log(pariDispari); // Mostra se l'utente ha scelto pari o dispari
} else {
    console.log("non hai scelto tra pari o dispari o hai cliccato annulla");
}

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function pcRandomNumber() {
    let numeroRandom = Math.floor(Math.random() * 5) + 1;
    console.log("pc number" + " " + numeroRandom); // Mostra il numero casuale generato dal computer
    return numeroRandom;
}

// Sommiamo i due numeri
let somma = numero + pcRandomNumber();
console.log("La somma tra i due numeri e: " + somma);

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function funzioneSomma(somma) {
    if (somma % 2 === 0) {
        return "pari";
    } else {
        return "dispari";
    }
}

let risultatoSomma = funzioneSomma(somma);
console.log("La somma dei 2 numeri è: " + risultatoSomma);

// Dichiariamo chi ha vinto
if ((risultatoSomma === "pari" && pariDispari === "pari") || (risultatoSomma === "dispari" && pariDispari === "dispari")) {
    console.log("Complimenti! Hai vinto!");
} else {
    console.log("Mi dispiace, hai perso.");
}
