console.log("Zadaci za samostalan rad\n---------------------------------------");
console.log("Zadatak 1: Write a JavaScript function to clone an array.");

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
console.log("Zadatak 2: Write a JavaScript function to remove duplicate items from an array (5 and '5' are considered duplicates).");

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
console.log("Zadatak 3: Write a JavaScript function to merge two arrays and removes all duplicates elements.");

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
console.log("Zadatak 4: Write a JavaScript function to remove all odd numbers from array.");

console.log("Unesite niz: ");
let numArray = makeAnArray();

if (numArray.length != 0) {
    const arrayWithoutOddNumbers = numArray.filter(number => {
        if (number % 2 == 0) {
            return true;
        }
    
        return false;
    });
    
    console.log("Niz bez neparnih brojeva: " + arrayWithoutOddNumbers);
} else {
    console.log("Niz je prazan");
}


console.log("---------------------------------------");
console.log("Zadatak 5: Write a JavaScript function to get a sum of a given array.");

console.log("Unesite niz: ");
let arrayForSum = makeAnArray();

if (arrayForSum.length != 0) {
    const sumOfAnArray = (anArray, n) => {
        if (n == 0) {
            return anArray[0];
        } else {
            return anArray[n] + sumOfAnArray(anArray, n-1);
        }
    }
    
    const sum = sumOfAnArray(arrayForSum, (arrayForSum.length - 1));
    console.log("Suma niza " + arrayForSum + ": " + sum);
} else {
    console.log("Niz je prazan.");
}

console.log("---------------------------------------");
console.log("Zadatak 6: Create a JavaScript objects array of Balkan countries with basic properties.");

const balkanCountries = [
    bih = {
        name: 'Bosnia and Herzegovina',
        capital: 'Sarajevo',
        population: 3824782,
        cities: [
            'Banja Luka',
            'Bijeljina',
            'Bihać',
            'Bosanska Krupa',
            'Cazin',
            'Čapljina',
            'Derventa',
            'Doboj',
            'Goražde',
            'Gračanica',
            'Gradačac',
            'Gradiška',
            'Istočno Sarajevo',
            'Konjic',
            'Livno',
            'Lukavac',
            'Ljubuški',
            'Mostar',
            'Orašje',
            'Prijedor',
            'Sarajevo',
            'Srebrenik',
            'Stolac',
            'Široki Brijeg',
            'Trebinje',
            'Tuzla',
            'Visoko',
            'Zavidovići',
            'Zenica',
            'Zvornik',
            'Živinice'
        ]
    },
    croatia = {
        name: 'Croatia',
        capital: 'Zagreb',
        population: 388529,
        cities: [
            'Zagreb',
            'Split',
            'Rijeka',
            'Osijek',
            'Zadar',
            'Slavonski brod',
            'Karlovac',
            'Pula'
        ]
    },
    serbia = {
        name: 'Serbia',
        capital: 'Beograd',
        population: 6871547,
        cities: [
            'Beograd',
            'Čačak',
            'Jagodina',
            'Kruševac',
            'Novi Pazar',
            'Zaječar'
        ]
    },
    albania = {
        name: 'Albania',
        capital: 'Tirana',
        population: 2845955,
        cities: [
            'Tirana',
            'Burrel',
            'Ballsh',
            'Berat',
            'Fier',
            'Rubik'
        ]
    },
    bulgaria = {
        name: 'Bulgaria',
        capital: 'Sofia',
        population: 6863422,
        cities: [
            'Sofia',
            'Plovdiv',
            'Varna',
            'Ruse',
            'Stara Zagora',
            'Pleven',
            'Zlatograd'
        ]
    },
    kosovo = {
        name: 'Kosovo',
        capital: 'Priština',
        population: 1935259,
        cities: [
            'Priština',
            'Klina',
            'Mališevo',
            'Peja',
            'Gjilan',
            'Vitia'
        ]
    },
    montenegro = {
        name: 'Montenegro',
        capital: 'Podgorica',
        population: 620739,
        cities: [
            'Podgorica',
            'Nikšić',
            'Herceg Novi',
            'Bijelo Polje',
            'Cetinje',
            'Kotor',
            'Tivat'
        ]
    },
    macedonia = {
        name: 'North Macedonia',
        capital: 'Skopje',
        population: 1863713,
        cities: [
            'Skopje',
            'Bitola',
            'Kumanovo',
            'Prilep',
            'Tetovo',
            'Valandovo'
        ]
    },
    greece = {
        name: 'Hellenic Republic',
        capital: 'Athens',
        population: 10678632,
        cities: [
            'Athens',
            'Patras',
            'Volos',
            'Serres',
            'Xanthi',
            'Katerini'
        ]
    },
    slovenia = {
        name: 'Slovenia',
        capital: 'Ljubljana',
        population: 2108708,
        cities: [
            'Ljubljana',
            'Maribor',
            'Kranj',
            'Celje',
            'Koper',
            'Velenje'
        ]
    },
    romania = {
        name: 'Romania',
        capital: 'Bucharest',
        population: 19186201,
        cities: [
            'Bucharest',
            'Cluj',
            'Timis',
            'Bihor',
            'Arad'
        ]
    },
    turkey = {
        name: 'Turkiye',
        capital: 'Ankara',
        population: 84680273,
        cities: [
            'Ankara',
            'Istanbul',
            'Izmir',
            'Bursa',
            'Adana',
            'Konya',
            'Zonguldak'
        ]
    }
]

console.log(balkanCountries);

console.log("---------------------------------------");
console.log("Zadatak 7: Create a JavaScript function that returns country with the most population (from task 6).");

const countryWithMostPopulation = (countries) => {
    let temp = 0;

    for (let i = 0; i < countries.length; i++) {
        if (countries[i].population > countries[temp].population) {
            temp = i;
        }
    }
    return countries[temp];
} 

console.log("Zemlja sa najvecim brojem stanovnika je: " + countryWithMostPopulation(balkanCountries).name);

console.log("---------------------------------------");
console.log("Zadatak 8: Create a JavaScript function that returns counties that have population more than 5000000.");

const returnCountries = (countries) => {
    let temp = [];

    for (let i = 0; i < countries.length; i++) {
        if (countries[i].population > 5000000) {
            temp.push(countries[i]);
        }
    }
    return temp;
}

const countriesWithALotOfPopulation = returnCountries(balkanCountries);
console.log("Drzave sa populacijom preko 5000000: ");

for (let i = 0; i < countriesWithALotOfPopulation.length; i++) {
    console.log(countriesWithALotOfPopulation[i].name);
}

console.log("---------------------------------------");
console.log("Zadatak 9: Create a JavaScript function that returns all city names. (from task 6).");

const returnCityNames = (countries) => {
    let temp = [];

    for (let i = 0; i < countries.length; i++) {
        temp.push(countries[i].cities);
    }
    return temp;
}

let cityNames = returnCityNames(balkanCountries);
console.log("Gradovi: " + cityNames);

console.log("---------------------------------------");
console.log("Zadatak 10: Create a JavaScript function that returns all city names which begin with letter 'Z'. (from task 6).");

// Koristit cu variablu citiNames iz prethodnog zadatka

const cityNamesWithZ = (cities) => {
    let temp = [];

    for (let i = 0; i < cities.length; i++) {
        for (let j = 0; j < cities[i].length; j++) {
            if (cities[i][j][0] == 'Z') {
                temp.push(cities[i][j]);
            }
        }
    }
    return temp;
}

console.log("Gradovi cija imena pocinju sa slovom Z: " + cityNamesWithZ(cityNames));