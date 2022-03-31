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

    return false;
    // Ukoliko algoritam pretrazivanja nije nista pronasao vraca -1 kako bi znao da nema duplikata
}

const izbrisiDuplikate = (anArray) => {
    let pronasaoDuplikat = false;

    for (let i = 0; i < anArray.length; i++) {
        let index = sekvencijalnoPretrazivanje(anArray, i, anArray[i]);
    
        if (index != false) {
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
izbrisiDuplikate(arrayWithString);

console.log(arrayWithoutString);
izbrisiDuplikate(arrayWithoutString);

console.log(arrayWithoutDuplicates);
izbrisiDuplikate(arrayWithoutDuplicates);

console.log("---------------------------------------");
console.log("Zadatak 3");

const mergeTwoArrays = (firstArray, secondArray) => {
    let pronasaoDuplikat = false;
    let mergedArray = [...firstArray, ...secondArray];
    console.log("Spojeni niz: " + mergedArray);

    for (let i = 0; i < mergedArray.length; i++) {
        let index = sekvencijalnoPretrazivanje(mergedArray, i, mergedArray[i]);
    
        if (index != false) {
            console.log("Duplikat pronađen na poziciji " + index + " te je izbacen iz niza.");
            mergedArray.splice(index, 1); 
            console.log(mergedArray);
            pronasaoDuplikat = true;
        }
    
        if (pronasaoDuplikat == false && i == (mergedArray.length - 1)) {
            console.log("Duplikata nije bilo.");
        }
    }

    return mergedArray;
}

console.log("Unesite prvi niz: ");
let firstArray = makeAnArray();
console.log("Prvi niz: " + firstArray);

console.log("Unesite drugi niz: ");
let secondArray = makeAnArray();
console.log("Drugi niz: " + secondArray);

let mergedArray = mergeTwoArrays(firstArray, secondArray);
console.log("Spojena dva niza bez duplikata su: " + mergedArray);

console.log("---------------------------------------");
console.log("Zadatak 4");

console.log("Unesite niz: ");
let numArray = makeAnArray();

const arrayWithoutOddNumbers = numArray.filter(number => {
    if (number % 2 == 0) {
        return true;
    }

    return false;
});

console.log("Niz bez neparnih brojeva: " + arrayWithoutOddNumbers);

console.log("---------------------------------------");
console.log("Zadatak 5");

console.log("Unesite niz: ");
let arrayForSum = makeAnArray();

const sumOfAnArray = (anArray, n) => {
    if (n == 0) {
        return anArray[0];
    } else {
        return anArray[n] + sumOfAnArray(anArray, n-1);
    }
}

const sum = sumOfAnArray(arrayForSum, (arrayForSum.length - 1));
console.log("Suma niza " + arrayForSum + ": " + sum);

console.log("---------------------------------------");
console.log("Zadatak 6");

