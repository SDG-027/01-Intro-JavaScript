// Object Literals
// ==============

// **Objective:**

// Learn how to initialize an object using object literals in JavaScript and understand how to define properties and methods within an object.

// **Instructions:**

// 1. Create an object called book using object literal syntax.
// 2. The book object should have the following properties:
//        title: a string representing the title of the book.
//        author: a string representing the author of the book.
//        pages: a number representing the total pages in the book.
//        isRead: a boolean indicating if the book has been read or not.

const book = {
  title: "LOTR",
  author: "Tolkien",
  pages: 786,
  isRead: true,
  summary() {
    return `
Title: ${this.title}, 
Author: ${this.author}, 
Pages: ${this.pages},
isRead: ${this.isRead ? "Yes" : "No"}`;
  },

  toString() {
    return this.summary();
  },
};

console.log(book.summary());

// 3. Add a method named summary to the book object.
//    This method should return a string summarizing the book details
//    in the format:
//        "Title: [title], Author: [author], Pages: [pages], Read: [Yes/No]"

// TERNARY

false ? console.log("Es ist wahr") : console.log("Es ist falsch");

const isLongBook = book.pages > 800 ? "long book" : "a short read";

console.log(isLongBook);

console.log(`${book}`); // Objekt wird in string umgewandelt
