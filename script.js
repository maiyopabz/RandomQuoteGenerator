/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/



// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

  let emptyVariable =""; //variable that store empty string.
  let html = document.getElementById('quote-box');

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "You should learn how to program.",
    source: "Mark Zuckerberg",
    citation: "Facebook",
    year: "2006",
    category: "Inspiration"
  },
  {
    quote: "Programming isn't about what you know; it's about what you can figure out.",
    source: "Chris Pine",
    citation: "Learn to program",
    year: "2002",
    category: "Inspiration"
  },
  {
    quote: "Coding is the language of the future, and every girl should learn it.",
    source: "Reshma Saujani",
    citation: "founder of Girls Who Code",
    year: "2017",
    category: "Inspiration"
  },
  {
    quote: "Everybody should learn to program a computer, because it teaches you how to think.",
    source: "Steve Jobs",
    citation: "Apple",
    category: "Inspiration"
    
  },
  {
    quote: "When something is important enough, you do it even if the odds are not in your favor.",
    source: "Elon Musk",
    citation: "SpaceX",
    year: "2002",
    category: "Inspiration"
  }


];



/***
 * `getRandomQuote` function
***/
function getRandomQuote() {

  let randomNumber = Math.floor(Math.random() * quotes.length );
  return quotes[randomNumber];
 
}


//random color function when generate new quotes. 

function getRandomColr() {
  let randomClr = "#" + Math.floor(Math.random() * (256* (256 * 256)).toString(16).padStart(6)); 
  return randomClr;
}

/***
 * `printQuote` function
***/

function printQuote() {

  let firstRandomQuote = getRandomQuote();
  let updateHtml = `
  <p class="qoute"> ${firstRandomQuote.quote}</p>
  <p class="source"> ${firstRandomQuote.source}
  `;

  if(quotes.citation !== emptyVariable) {
    updateHtml += `<span class = "citation"> ${firstRandomQuote.citation}</span>`;
  }

  if (quotes.year !== emptyVariable) {
    updateHtml += `<span class = "year">${firstRandomQuote.year}</span>`;
   } 

   if (quotes.category !== emptyVariable) {
    updateHtml += `<span>, ${firstRandomQuote.category}</span>`;
   } 

   updateHtml += `</p>`;

   html.innerHTML = updateHtml; 

   document.body.style.background = getRandomColr();
}

printQuote(); 


  


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);