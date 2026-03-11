// PRIMITIVES

const mySymbol = Symbol("das ist einzigartig"); // Erstellt einen einzigartigen Wert, selbst wenn die Argumente gleich sind

const myString = "Hallo, Welt!";

const myNumber = 42; // number (Integer)
const myFloat = 12.234; // number (Floating Point Number)

const myBigInt = 1234567891234456n; // Für extrem große Zahlen, die über das normale Limit hinausgehen (erkennbar am 'n')

const myBool = false;

const myNull = null; // Bewusstes Setzen auf "leer" oder "nichts"
const myUndef = undefined; // Der Standardwert für Variablen, die noch keinen Wert zugewiesen bekommen haben

// OBJEKTE (Sammlungen von Daten in Schlüssel-Wert-Paaren)

const myObj = {
  welt: "world", // 'welt' ist der Schlüssel, "world" der Wert
  erde: "earth",
};

console.log(myObj); // Zeigt das ganze Objekt an

console.log(myObj["erde"]); // Zugriff über den Schlüsselnamen in eckigen Klammern (Bracket Notation)
console.log(myObj.welt); // Zugriff über den Punkt (Dot Notation) - die gängigste Methode

const sheep = {
  name: "Alba",
  color: "#fff",
  age: 12,
  geschoren: false,
  1: "Hello", // Schlüssel können auch Zahlen oder Symbole sein
  "lieblings-futter": ["Heu", "Hafer", "Pellets"], // Ein Array (Liste) innerhalb eines Objekts
  location: {
    // Ein verschachteltes Objekt (Objekt im Objekt)
    lat: 52.12345,
    lng: 13.234,
  },

  greet() {
    // Eine Funktion innerhalb eines Objekts nennt man 'Methode'
    return "Määh";
  },
};

// OBJEKTZUGRIFF
console.log(sheep.color); // Klassischer Zugriff per Punkt
console.log(sheep["color"]); // Zugriff per String-Schlüssel

const key = "age";
console.log(sheep[key]); // Dynamischer Zugriff: Nutzt den Wert der Variable 'key' als Schlüssel

console.log(sheep["lieblings-futter"][1]); // Greift erst auf das Array zu und dann auf das zweite Element (Index 1)

console.log(sheep.location.lat); // "navigieren" durch verschachtelte Objekte

// OBJEKTMANIPULATION
sheep.race = "Ouessant"; // Fügt dem Objekt eine neue Eigenschaft 'race' hinzu

sheep.geschoren = true; // Überschreibt den alten Wert (false) mit einem neuen

console.log(sheep.notThere); // Wenn ein Schlüssel nicht existiert, gibt JavaScript 'undefined' zurück

delete sheep.age; // Löscht die Eigenschaft 'age' komplett aus dem Objekt

// OBJEKTMETHODEN

console.log(sheep.greet()); // Führt die Methode aus (wichtig: die Klammern () am Ende)

// DESTRUCTURING

const { color, name } = sheep; // Erstellt neue Variablen 'color' und 'name' direkt aus den gleichnamigen Objekt-Eigenschaften

console.log(name); // Nutzt jetzt die neue, eigenständige Variable
console.log(color);
