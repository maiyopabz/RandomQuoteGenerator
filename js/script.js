/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

let emptyVariable = ""; //variable that store empty string.
let html = document.getElementById("quote-box"); //   declared a html variable to target and select the qoute-box element

/***
 * `I declared an Arrays of qoutes that holds 5 objects with each properties and values.
 ***/

const quotes = [
   {
      quote: "You should learn how to program.",
      source: "Mark Zuckerberg",
      citation: "Facebook",
      year: "2007",
      category: "Inspiration",
   },
   {
      quote: "Programming isn't about what you know; it's about what you can figure out.",
      source: "Chris Pine",
      citation: "",
      year: "",
      category: "",
   },
   {
      quote: "Coding is the language of the future, and every girl should learn it.",
      source: "Reshma Saujani",
      citation: "founder of Girls Who Code",
      year: "2002",
      category: "",
   },
   {
      quote: "Everybody should learn to program a computer, because it teaches you how to think.",
      source: "Steve Jobs",
      citation: "Apple",
      year: "1994",
      category: "Motivational",
   },
   {
      quote: "When something is important enough, you do it even if the odds are not in your favor.",
      source: "Elon Musk",
      citation: "SpaceX",
      year: "2002",
      category: "Inspiration",
   },
];

/***
 *  I created a `getRandomQuote` function that generate a number from index value of 0 to  length of the qoutes array that has been decclared.
 *  This will also returns a randomize object within the  qoutes array object.
 *
 ***/
function getRandomQuote() {
   let randomNumber = Math.floor(Math.random() * quotes.length);
   return quotes[randomNumber];
}

//I created a random color function when generate new quotes. This will also return a new color evertime. 

function getRandomColr() {
   let randomClr =
      "#" +
      Math.floor(Math.random() * (256 * (256 * 256)).toString(16).padStart(6));
   return randomClr;
}

/***
 * I declared a `printQuote` function that calls the getRandomQuote() function then generates its value to print the html in to the html page.
 ***/

function printQuote() {
   let firstRandomQuote = getRandomQuote();
   let updateHtml = `
  <p class="quote"> ${firstRandomQuote.quote}</p>
  <p class="source"> ${firstRandomQuote.source}
  `;
//  I declared a conditional statement that holds and compare properties values to the empty variable that i declared called "emptyVariable ". 
//  I also used string interpolation, template literals to print and evaluate when the conditon is true or false.
   if (quotes.citation !== emptyVariable) {
      updateHtml += `<span class = "citation"> ${firstRandomQuote.citation}</span>`;
   }

   if (quotes.year !== emptyVariable) {
      updateHtml += `<span class = "year">${firstRandomQuote.year}</span>`;
   }

   if (quotes.category !== emptyVariable) {
      updateHtml += `<span>, ${firstRandomQuote.category}</span>`;
   } else {
      updateHtml += `</p>`;
   }

   html.innerHTML = updateHtml; //  setting up the updateHmtl variable to innerHTML property so whenever it generate a conditon it will print out the statement.

   document.body.style.background = getRandomColr(); //  this calls and generates  the random color function and sets the background color.
}

printQuote();

setInterval(printQuote, 6000);  // setting a setInterval() method that calls a function at a specified interval which I set to 6seconds. This will automatic refresh the page every 6seconds.

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
   .getElementById("load-quote")
   .addEventListener("click", printQuote, false);
