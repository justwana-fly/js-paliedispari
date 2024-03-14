function Palindroma(parola) {
    
    parola = parola.toLowerCase().replace(/\s+/g, '');

    return parola === parola.split('').reverse().join('');
}

let parolaInserita = prompt("Inserisci una parola:");

if (parolaInserita !== null && parolaInserita.trim() !== "") {
    
    if (Palindroma(parolaInserita)) {
        console.log("La parola inserita è palindroma.");
    } else {
        console.log("La parola inserita non è palindroma.");
    }
}
   