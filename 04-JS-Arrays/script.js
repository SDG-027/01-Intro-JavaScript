const wizard = 'wizard'; // Speichert einen Text in einer Konstante
const cleric = 'cleric';
const fighter = 'fighter';
const paladin = 'paladin';

console.log(wizard, cleric, fighter, paladin); // Gibt alle vier einzelnen Variablen in der Konsole aus

// ARRAYS initialisieren
const dndClasses = ['wizard', 'cleric', 'fighter', 'paladin']; // Erstellt ein Array (eine Liste), das alle Klassen enthält

console.log(dndClasses); // Gibt die gesamte Liste aus

// Zugriff per Index
console.log(dndClasses[0]); // Greift auf das erste Element zu (Zählung beginnt bei 0)
console.log(dndClasses[1]); // Greift auf das zweite Element zu
console.log(dndClasses[2]);
console.log(dndClasses[3]);

console.log(dndClasses.length); // Zeigt an, wie viele Elemente in der Liste sind (hier 4)

console.log(dndClasses[3000]); // Versucht auf ein Element zuzugreifen, das nicht existiert -> ergibt 'undefined'

// Zuweisungen

// dndClasses = false; // Fehler: Eine 'const' Variable kann nicht komplett neu zugewiesen werden
// dndClasses = ['sorcerer']; // Gleicher Fehler: 'const' schützt die Bindung der Variable

dndClasses[0] = 'bard'; // Erlaubt: Den Inhalt eines Arrays darf man ändern, auch bei 'const'

console.log(dndClasses);

for (let i = 0; i < dndClasses.length; i++) {
  console.log(dndClasses[i]); // Klassische Schleife: Geht die Liste von Index 0 bis zum Ende durch
}

for (const element of dndClasses) {
  console.log(element); // Modernere Schleife: "Für jedes Element in der Liste..."
}

const myDesk = [2, false, 'Hello', [2, 3, 4, true]]; // Arrays können verschiedene Datentypen und sogar andere Arrays enthalten

console.log(dndClasses.at(-1)); // .at(-1) ist ein Trick, um bequem das letzte Element zu bekommen
console.log(dndClasses[-1]); // Ergibt 'undefined', da JavaScript negative Indizes in eckigen Klammern nicht wie andere Sprachen liest

// Gängige Arraymethoden
// push, pop
dndClasses.push('warlock'); // Fügt 'warlock' am Ende der Liste hinzu
dndClasses.push([123, 654, [true]]); // Fügt ein komplettes Array als neues Element am Ende hinzu

console.log(dndClasses);

const lastElement = dndClasses.pop(); // Entfernt das letzte Element und speichert es in 'lastElement'

console.log(dndClasses);
console.log(lastElement); // Zeigt, was gerade gelöscht wurde

// unshift, shift
dndClasses.unshift('monk'); // Fügt 'monk' ganz am Anfang der Liste ein
console.log(dndClasses);
const firstElement = dndClasses.shift(); // Entfernt das erste Element und gibt es zurück
console.log(dndClasses);

// Mutable vs. Immutable - verändernde vs. nicht-verändernde Methoden
dndClasses.reverse(); // Dreht die Reihenfolge der Liste direkt um (verändert das Original -> mutable)
const revClasses = dndClasses.toReversed(); // Erstellt eine umgedrehte Kopie, ohne das Original zu ändern (immutable)

console.log(dndClasses);
console.log(revClasses);

// join, split - Array zu String, String zu Array
const classesStr = dndClasses.join(' and '); // Verbindet alle Listenelemente zu einem Text, getrennt durch ' and '
console.log(classesStr);

console.log('hallo, welt'.split(', ')); // Zerlegt einen Text an der Stelle ', ' in ein Array

console.log(classesStr.split(' and ')); // Wandelt den zusammengesetzten String wieder zurück in ein Array
