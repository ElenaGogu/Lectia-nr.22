//Exercitiul numar.....1

// Declararea variabilei temperature
let temperature = 15;  // Schimbă valoarea pentru a testa diferite categorii

// Verificarea și afișarea categoriei de temperatură
if (temperature < 0) {
    console.log("Îngheț");
} else if (temperature >= 0 && temperature <= 10) {
    console.log("Frig");
} else if (temperature >= 11 && temperature <= 25) {
    console.log("Moderat");
} else {
    console.log("Cald");
}
//if (temperature < 0): Verifică dacă temperatura este sub 0 grade, caz în care se afișează "Îngheț".
//else if (temperature >= 0 && temperature <= 10): Verifică dacă temperatura este între 0 și 10 grade, caz în care se afișează "Frig".
//else if (temperature >= 11 && temperature <= 25): Verifică dacă temperatura este între 11 și 25 grade, caz în care se afișează "Moderat".
//else: Dacă niciuna dintre condițiile anterioare nu este adevărată, se consideră că temperatura este peste 25 grade, caz în care se afișează "Cald"


//Exercitiul nr.....2

// Declararea variabilei day
let day = 3;  // Schimbă valoarea pentru a testa diferite zile (1 reprezintă Luni, 7 reprezintă Duminică)

// Verificarea și afișarea numelui zilei
if (day === 1) {
    console.log("Luni");
} else if (day === 2) {
    console.log("Marți");
} else if (day === 3) {
    console.log("Miercuri");
} else if (day === 4) {
    console.log("Joi");
} else if (day === 5) {
    console.log("Vineri");
} else if (day === 6) {
    console.log("Sâmbătă");
} else if (day === 7) {
    console.log("Duminică");
} else {
    console.log("Valoarea zilei este invalidă. Introdu un număr între 1 și 7.");
}


//Exerciutiul nr.....3

// Declararea variabilei number
let number = 7;  // Schimbă valoarea pentru a testa diferite numere

// Verificarea dacă numărul este par sau impar
if (number % 2 === 0) {
    console.log("Par");
} else {
    console.log("Impar");
}
//number % 2 === 0: Verifică dacă restul împărțirii lui number la 2 este 0. Dacă da, atunci numărul este par.
//else: Dacă condiția nu este îndeplinită, atunci numărul este impar.


//Exerciutiul nr.....4

// Declararea variabilei number
let number = 8;  // Schimbă valoarea pentru a testa diferite numere

// Verificarea dacă numărul este par sau impar
if (number % 2 === 0) {
    console.log("Par");
} else {
    console.log("Impar");
}
//number % 2 === 0: Acest cod verifică dacă restul împărțirii numărului la 2 este 0. Dacă da, înseamnă că numărul este par și se afișează "Par".
//else: Dacă condiția nu este îndeplinită, atunci numărul este impar și se afișează "Impar".


//Exercitiul nr.4

// Declararea variabilei purchaseAmount
let purchaseAmount = 120;  // Schimbă valoarea pentru a testa diferite scenarii

// Aplicarea reducerii de 10% dacă purchaseAmount este mai mare sau egal cu 100
let discountedAmount = purchaseAmount;

if (purchaseAmount >= 100) {
    discountedAmount = purchaseAmount * 0.90;  // Aplicați o reducere de 10%
}

// Adăugarea impozitului de 5%
let totalAmount = discountedAmount * 1.05;  // Aplicați un impozit de 5%

// Afișarea sumei finale de plătit
console.log("Suma finală de plătit:", totalAmount.toFixed(2));


///Exercitiul nr.....5

// Declararea variabilei password
let password = "SecurePass123";  // Schimbă valoarea pentru a testa diferite parole

// Verificarea complexității parolei
if (password.length >= 12 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password)) {
    console.log("Parolă foarte sigură");
} else if (password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password)) {
    console.log("Parolă sigură");
} else if (password.length >= 6 && /^[a-zA-Z]+$/.test(password)) {
    console.log("Parolă slabă");
} else {
    console.log("Parolă nesigură");
}


//Exercitiul nr......6
// Funcție pentru a verifica dacă un număr este prim
function estePrim(numar) {
    // Verificăm dacă numărul este mai mic sau egal cu 1
    if (numar <= 1) {
        return false;
    }
    
    // Verificăm dacă numărul are alți divizori în afară de 1 și el însuși
    for (let i = 2; i <= Math.sqrt(numar); i++) {
        if (numar % i === 0) {
            return false;
        }
    }
    
    // Dacă nu am găsit niciun divizor, numărul este prim
    return true;
}

// Exemplu de utilizare
let numar = 29;  // Schimbă valoarea pentru a testa diferite numere
if (estePrim(numar)) {
    console.log(numar + " este un număr prim.");
} else {
    console.log(numar + " nu este un număr prim.");
}

//Exercitiul numar.....7
// Funcție pentru a verifica dacă numerele pot forma un triunghi
function poateFormaTriunghi(a, b, c) {
    return (a + b > c) && (a + c > b) && (b + c > a);
}

// Funcție pentru a verifica dacă triunghiul este dreptunghic
function esteTriunghiDreptunghic(a, b, c) {
    // Sortăm laturile pentru a ne asigura că c este cea mai mare latură
    let laturi = [a, b, c].sort((x, y) => x - y);
    // Verificăm teorema lui Pitagora: c^2 = a^2 + b^2
    return Math.pow(laturi[2], 2) === Math.pow(laturi[0], 2) + Math.pow(laturi[1], 2);
}

// Exemplu de utilizare
let a = 3;
let b = 4;
let c = 5;

if (poateFormaTriunghi(a, b, c)) {
    console.log("Numerele pot forma un triunghi.");
    if (esteTriunghiDreptunghic(a, b, c)) {
        console.log("Triunghiul este dreptunghic.");
    } else {
        console.log("Triunghiul nu este dreptunghic.");
    }
} else {
    console.log("Numerele nu pot forma un triunghi.");
}
