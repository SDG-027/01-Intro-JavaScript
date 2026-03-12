// ============================================================
// MATH-OBJEKT & ZUFALLSZAHLEN
// ============================================================

// Die Kreiszahl π (ca. 3.14159) aus dem eingebauten Math-Objekt
console.log(Math.PI);

// Gibt eine zufällige Dezimalzahl zwischen 0 (inkl.) und 1 (exkl.) zurück
console.log(Math.random());

// ============================================================
// ZUFÄLLIGEN ARRAY-INDEX BERECHNEN
// ============================================================

const students = ["Behzad", "Nikolai", "Sascha", "Qian", "Henrique", "Roman"];

// Zufälligen, ganzzahligen Index im Bereich [0, students.length - 1] erzeugen
const studentsIdx = Math.floor(Math.random() * students.length);

// Math.floor() rundet eine Dezimalzahl auf die nächste ganze Zahl ab
console.log(Math.floor(6.34523874623874)); // → 6

// Gibt einen zufälligen Studierenden aus dem Array aus
console.log(students[studentsIdx]);

// ============================================================
// DATE-OBJEKT
// ============================================================

// Erstellt ein Objekt mit dem aktuellen Datum und der aktuellen Uhrzeit
const today = new Date();
console.log(today);

// Monat: 0-basiert (0 = Januar, 11 = Dezember)
console.log(today.getMonth());
// Wochentag: 0-basiert (0 = Sonntag, 6 = Samstag)
console.log(today.getDay());
// Tag des Monats (1–31)
console.log(today.getDate());

// Datum als lokalisierter String im deutschen Format (z. B. "12.3.2026")
console.log(today.toLocaleDateString("de-DE"));

// ============================================================
// HIGHER ORDER ARRAY FUNCTIONS
// ============================================================

const numbers = [1, 2, 3, 4, 5, 6];

// Klassische for-Schleife: verdoppelt jeden Wert direkt im ursprünglichen Array (mutiert!)
for (let i = 0; i < numbers.length; i++) {
  numbers[i] *= 2;
}

// Alternativ mit .map() – erstellt ein NEUES Array, ohne das Original zu verändern:
// const doubled = numbers.map((currentNumber) => {
//   return currentNumber * 2;
// });
// console.log(numbers);
// console.log(doubled);

// ============================================================
// HIGHER ORDER FUNCTIONS – GRUNDPRINZIP
// ============================================================

// Eine Higher Order Function nimmt eine andere Funktion als Argument entgegen
function higherOrderFn(someFunction) {
  console.log("Hallo aus der Higher Order FN");
  someFunction(); // Die übergebene Funktion wird hier aufgerufen
}

function innerFn() {
  console.log("Aus der inneren Funktion");
}

// higherOrderFn(innerFn);

// ============================================================
// CLOSURES & FACTORY FUNCTIONS
// ============================================================

// adderFactory gibt eine neue Funktion zurück, die sich outerNum "merkt" (Closure)
function adderFactory(outerNum) {
  return function (innerNum) {
    console.log("outer num", outerNum);
    console.log("inner num", innerNum);

    return outerNum + innerNum;
  };
}

// Erstellt eine spezialisierte Addierfunktion, die immer 25 hinzurechnet
const addTo25 = adderFactory(25);

// addTo25(15); // → 40
// addTo25(5);  // → 30

// ============================================================
// EIGENE TRANSFORM-FUNKTION (Grundlage für .map())
// ============================================================

// Wendet eine callback-Funktion auf jedes Element eines Arrays an und gibt ein neues Array zurück
function transform(arr, callback) {
  const out = [];

  for (const element of arr) {
    const val = callback(element);
    out.push(val);
  }

  return out;
}

// Callback-Funktion, die eine Zahl verdoppelt
const double = function (singleNumber) {
  return singleNumber * 2;
};

const doubled = transform(numbers, double);

// Namen mit eigener transform()-Funktion in Großbuchstaben umwandeln
const capitalStudents = transform(students, (str) => str.toUpperCase());
console.log(capitalStudents);

// ============================================================
// .map() – ARRAY TRANSFORMIEREN
// ============================================================

// Dasselbe wie transform(), aber als eingebaute Array-Methode
const mappedStudents = students.map((str) => str.toUpperCase());
console.log(mappedStudents);

// Zahlen in einen formatierten String umwandeln, z. B. "-->2<--"
console.log(numbers.map((number) => `-->${number}<--`));

// ============================================================
// .filter() – ARRAY FILTERN
// ============================================================

// Gibt nur die Studierenden zurück, deren Name den Buchstaben "q" enthält
const qStudents = students.filter((singleStudent) => singleStudent.toLowerCase().includes("q"));
console.log(qStudents);

// Gibt nur gerade Zahlen zurück (Rest bei Division durch 2 ist 0)
const evenNums = numbers.filter((num) => num % 2 === 0);
console.log(evenNums);

// ============================================================
// .find(), .some(), .every()
// ============================================================

const numbers2 = [1.4, 0.2, 3, 5.5, 4, 6];

// .find() – gibt das ERSTE Element zurück, das die Bedingung erfüllt (oder undefined)
console.log(numbers2.find((num) => num > 4)); // → 5.5
console.log(students.find((s) => s.startsWith("S"))); // → "Sascha"

// .some() – gibt true zurück, wenn MINDESTENS EIN Element die Bedingung erfüllt
console.log(
  numbers2.some((num) => {
    return num > 5 && num < 6;
  }),
);

// .every() – gibt true zurück, wenn ALLE Elemente die Bedingung erfüllen
console.log(numbers2.every((num) => Number.isFinite(num)));

// ============================================================
// .reduce() – ARRAY AUF EINEN WERT REDUZIEREN
// ============================================================

let startWert = 0;

// Addiert alle Zahlen im Array zu einer Gesamtsumme
const sumOfNums = numbers.reduce((zusammengerechneterWert, aktuelleZahl) => {
  return zusammengerechneterWert + aktuelleZahl;
}, startWert);

console.log(sumOfNums);

// Kurzform: Summe aller geraden Zahlen mit ternärem Operator
console.log(numbers.reduce((acc, val) => (val % 2 === 0 ? acc + val : acc), 0));

// Dasselbe mit ausgeschriebenem if/else
console.log(
  numbers.reduce((acc, val) => {
    if (val % 2 === 0) {
      return acc + val;
    } else {
      return acc;
    }
  }, 0),
);

// ============================================================
// .reduce() – HÄUFIGKEITEN ZÄHLEN (Objekt als Akkumulator)
// ============================================================

const fruits = [
  "apple",
  "banana",
  "mango",
  "pear",
  "apple",
  "apple",
  "pineapple",
  "pineapple",
  "banana",
  "mango",
  "strawberry",
  "apple",
];

// Zählt, wie oft jede Frucht vorkommt – Ergebnis ist ein Objekt { frucht: anzahl }
const fruitCount = fruits.reduce((currCount, fruit) => {
  if (currCount[fruit] === undefined) {
    currCount[fruit] = 1; // Frucht zum ersten Mal gesehen → auf 1 setzen
  } else {
    currCount[fruit] += 1; // Frucht bereits vorhanden → Zähler erhöhen
  }
  return currCount;
}, {}); // Startwert: leeres Objekt

console.log(fruitCount);
