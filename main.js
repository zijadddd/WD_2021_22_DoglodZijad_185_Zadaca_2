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
        user_input = parseInt(prompt("Unos " + (counter + 1) + ". clana:"));
        array.push(user_input);
        counter++;
    
        if(user_input == 0) {
            array.pop();
        }
    } while (user_input != 0);

    return array;
}

const klonirajNiz = () => {
    let basicArray = makeAnArray();

    if (basicArray.length == 0) {
        console.log("Niz je prazan, nije ga moguce klonirati.");
        return "empty";
    } else {
        let anotherArray = [...basicArray];
        return anotherArray;
    }
}

let kloniraniNiz = klonirajNiz();
console.log("Klonirani niz: " + kloniraniNiz);

console.log("---------------------------------------");
console.log("Zadatak 2");

const sekvencijalnoPretrazivanje = (anArray, trenutniIndex, kljuc) => {
    // Varijabla trenutniIndex sluzi kao pomocna varijabla da se element ne bi poredio sam sa sobom
    let i = 0; 

    while (i < anArray.length) {
        if (trenutniIndex != i) {
            if (anArray[i] == kljuc) {
                return i;
            } else {
                i++;
            }
        } else {
            i++;
        }
    }

    return -1;
    // Ukoliko algoritam pretrazivanja nije nista pronasao vraca -1 kako bi znao da nema duplikata
}

const pronadjiDuplikat = (anArray) => {
    let pronasaoDuplikat = false;

    for (let i = 0; i < anArray.length; i++) {
        let index = sekvencijalnoPretrazivanje(anArray, i, anArray[i]);
    
        if (index != -1) {
            console.log("Duplikat pronađen na poziciji " + index);
            anArray.splice(index, 1); 
            console.log("Novi niz: " + anArray);
            pronasaoDuplikat = true;
        }
    
        if (pronasaoDuplikat == false && i == (anArray.length - 1)) {
            console.log("Duplikata nije bilo.");
        }
    }

    if (!pronasaoDuplikat) {
        console.log("Niz bez duplikata: " + anArray);
    }
}

let arrayWithString = [5, 6, 7, '5', 10, 11, '7'];
let arrayWithoutString = [1, 2, 3, 6, 2, 9, 3];
let arrayWithoutDuplicates = [1, 4, 7, 9, 10, 11];

console.log(arrayWithString);
pronadjiDuplikat(arrayWithString);

console.log(arrayWithoutString);
pronadjiDuplikat(arrayWithoutString);

console.log(arrayWithoutDuplicates);
pronadjiDuplikat(arrayWithoutDuplicates);

console.log("---------------------------------------");
console.log("Zadatak 3");

