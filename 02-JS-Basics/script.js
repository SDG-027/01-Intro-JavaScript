// Ausgabe in der Browser-Konsole (F12 oder Strg+Shift+I drücken)
console.log(42 + 13); // Berechnet die Summe und gibt sie in der Konsole aus

document.querySelector('h1').textContent = 'Willkommen zu JavaScript!'; // Sucht das erste <h1>-Element und ändert dessen Text

// Number
console.log(13 + 14); // Addition
console.log(13 - 14); // Subtraktion
console.log(13 / 14); // Division (Teilen)
console.log(13 * 14); // Multiplikation (Malnehmen)
console.log(13 ** 14); // Potenzierung (13 hoch 14)

// Strings (Text)
console.log('Dies ist ein Text'); // Text in einfachen Anführungszeichen
console.log("That's cool"); // Doppelte Anführungszeichen erlauben ein Apostroph im Text

console.log(`Dies ist

  ein Text - ${14 + 12}`); // Backticks erlauben Zeilenumbrüche und Berechnungen (${}) direkt im Text

// Bools (Wahrheitswerte)
console.log(true); // "Wahr"
console.log(false); // "Falsch"

// Variablen
const x = 13; // 'const' ist eine Konstante – ihr Wert kann später nicht mehr geändert werden
let y = 15; // 'let' deklariert eine Variable, die später einen neuen Wert erhalten darf

console.log(x); // Zeigt den Wert von x
console.log(y); // Zeigt den Wert von y

y = 25; // Weist der Variable y einen neuen Wert zu

console.log(y); // Zeigt den neuen Wert von y

// x = 1; // Dies würde eine Fehlermeldung erzeugen, da x eine Konstante (const) ist

console.log(x * 3); // Nutzt den Wert von x für eine Rechnung

const userAge = 31; // Camel Case: Erster Buchstabe klein, jedes neue Wort groß (JS-Standard)
// const user_age = 30; // Snake Case (oft in Python genutzt)
// const UserAge = 30; // Pascal Case (oft für Klassen genutzt)

const minimumAgeForDriversLicence = 18; // Sprechende Namen helfen, den Code ohne Kommentare zu verstehen

// Vergleichsoperatoren (Ergebnis ist immer true oder false)
console.log(20 > 30); // Größer als?
console.log(20 < 20); // Kleiner als?
console.log(20 >= 20); // Größer oder gleich?
console.log(20 <= 30); // Kleiner oder gleich?

console.log(userAge >= minimumAgeForDriversLicence); // Prüft, ob das Alter ausreicht
console.log(userAge === minimumAgeForDriversLicence); // Strenger Vergleich: Ist der Wert und der Datentyp exakt gleich?
// console.log(userAge == minimumAgeForDriversLicence); // Loser Vergleich (sollte man in JS vermeiden - führt Typenkonvertierung unter der Haube durch)

if (userAge >= minimumAgeForDriversLicence) {
  console.log('Du kannst einen Führerschein machen'); // Wird ausgeführt, wenn die Bedingung wahr (true) ist
} else {
  // Wird ausgeführt, wenn die Bedingung falsch (false) ist
  console.log('Du bist noch zu jung');
}

if (userAge === minimumAgeForDriversLicence) {
  console.log('Du bist genau im passenden Alter'); // Erster Check
} else if (userAge < minimumAgeForDriversLicence) {
  console.log('Du bist noch zu jung'); // Zweiter Check, falls der erste nicht zutraf
} else {
  const hello = 'World'; // Variable, die nur innerhalb dieser geschweiften Klammern { } existiert (Scope)
  console.log('Du kannst einen Führerschein machen');

  {
    // Innerer Block
    console.log(hello); // Kann auf die Variable im äußeren Block zugreifen
  }
}

// console.log(hello); // Fehler! 'hello' existiert außerhalb des obigen Blocks nicht

let age = 17;
age = age + 1; // Erhöht den aktuellen Wert um 1

console.log(age);

function incrementAge() {
  // Definiert eine Funktion (einen wiederverwendbaren Codeblock)
  const hello = 'World';
  console.log(hello);
  age = age + 1; // Ändert eine globale Variable (außerhalb der Funktion)
}

console.log(age);

incrementAge(); // Führt die Funktion aus
console.log(age);

// console.log(hello); // Fehler! 'hello' ist lokal in der Funktion gefangen

function saferIncrementAge(currentAge) {
  // Funktion mit einem Parameter (Eingabewert)
  // currentAge = currentAge + 1
  // currentAge += 1
  currentAge++; // Kurzform, um einen Wert um 1 zu erhöhen
  return currentAge; // Gibt das Ergebnis zurück an die Stelle, wo die Funktion aufgerufen wurde
}

console.log(saferIncrementAge(40)); // Nutzt die Zahl 40 als Eingabe und gibt 41 aus

const incrementedAge = saferIncrementAge(45); // Speichert das Rückgabeergebnis (46) in einer neuen Konstante
console.log(incrementedAge);

// Schleifen

while (true) {
  // Läuft theoretisch ewig, solange die Bedingung wahr ist
  console.log('Operation');
  break; // Bricht die Schleife sofort ab, um eine Endlosschleife zu verhindern
}

let counter = 0; // Startwert für den Zähler

while (counter < 10) {
  // Läuft, solange counter kleiner als 10 ist
  console.log('Eine neue Runde!');
  counter++; // Wichtig: Zähler erhöhen, damit die Bedingung irgendwann false wird
}

for (let i = 0; i < 50; i++) {
  // Kompakte Schleife: Startwert; Bedingung; Änderung pro Schritt
  console.log('Grüße aus der for-Schleife!');
}
