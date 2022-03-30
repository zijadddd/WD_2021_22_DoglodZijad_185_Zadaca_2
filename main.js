/*

***********************************************
         ZADACI ZA SAMOSTALNI RAD
***********************************************

1. Write a JavaScript function to clone an array.

2. Write a JavaScript function to remove duplicate items from an array (5 and '5' are considered duplicates).

3. Write a JavaScript function to merge two arrays and removes all duplicates elements.

4. Write a JavaScript function to remove all odd numbers from array.

5. Write a JavaScript function to get a sum of a given array.

6. Create a JavaScript objects array of Balkan countries with basic properties.

7. Create a JavaScript function that returns country with the most population (from task 6).

8. Create a JavaScript function that returns counties that have population more than 5000000.

9. Create a JavaScript function that returns all city names. (from task 6).

10. Create a JavaScript function that returns all city names which begin with letter 'Z'. (from task 6).


*/

console.log("Zadaci za samostalan rad\n---------------------------------------");
console.log("Zadatak 1");

const makeAnArray = () => {

    let array = [];
    console.log("(info) Molimo unesite clanove niza putem prompta (0 za prekid unosa): ");
    
    let counter = 0;
    let user_input;
    
    do {
        user_input = prompt("Unos " + (counter + 1) + ". clana:");
        array.push(user_input);
        counter++;
    
        if(user_input == 0) {
            array.pop();
        }
    } while (user_input != 0);

    return array;
}

let basicArray = makeAnArray();

if (basicArray.length == 0) {
    console.log("Niz je prazan, nije ga moguce klonirati.");
} else {
    let anotherArray = makeAnArray();

    console.log("Kopija niza:");
    for(let i = 0; i < anotherArray.length; i++) {
        console.log(anotherArray[i]);
    }
}

console.log("---------------------------------------");
console.log("Zadatak 2");

// Koristi se funkcija iz prvog zadatka za kreiranje niza
// Da bi se pronašao duplikat koristi se binarno pretrazivanje

let array = makeAnArray();
array.sort();
console.log(array);

const binarnoPretrazivanje = (anArray, kljuc) => {
    let vrh = anArray.length - 1;
    let dno = 0;
    while (vrh >= dno) {
        let srednji = parseInt((dno+vrh)/2);

        if (kljuc === anArray[srednji]) {
            return srednji;
            // Vraca se indeks duplikata u nizu
        } else if (anArray[srednji] < kljuc) {
            dno = srednji + 1;
        } else {
            vrh = srednji - 1;
        }
    }
    return -1;
    // Ukoliko algoritam pretrazivanja nije nista pronasao vraca -1 kako bi znao da nema duplikata
}

let pronasaoDuplikat = false;

for (let i = 0; i < array.length; i++) {

    var cloneArray = [...array];
    cloneArray.splice(i, 1);
    // Klonira se niz bez elementa koji se poredi, kako se element ne bi poredio sam sa sobom

    let index = binarnoPretrazivanje(cloneArray, array[i]);

    if (index != -1) {
        console.log("Duplikat pronađen na poziciji " + (index + 1)); 
        // Razlog zasto index + 1 je taj sto je niz sortiran i odmah iza njega se nalazi duplikat
        // Ako postoji
        array.splice(index, 1);
        pronasaoDuplikat = true;
    }

    if (pronasaoDuplikat == false && i == (array.length - 1)) {
        console.log("Duplikata nije bilo.");
    }
}

if (pronasaoDuplikat) {
    console.log("Niz bez duplikata: " + array);
}

console.log("---------------------------------------");
console.log("Zadatak 3");

