/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/



// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat


/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "All of my friends who have younger siblings who are going to college or high school - my number one piece of advice is: You should learn how to program.",
    source: "Mark Zuckerberg",
    citation: "Facebook",
    year: "2006",
  },
  {
    quote: "Programming isn't about what you know; it's about what you can figure out.",
    source: "Chris Pine",
    category: "Learn to program",
    year: "2002",
  },
  {
    quote: "Coding is the language of the future, and every girl should learn it. As I've learned from watching girls grow and learn in our classrooms, coding is fun, collaborative and creative.",
    source: "Reshma Saujani",
    citation: "founder of Girls Who Code",
    year: "2017",
  },
  {
    quote: "Everybody should learn to program a computer, because it teaches you how to think.",
    source: "Steve Jobs",
    citation: "Apple",
    
  },
  {
    quote: "When something is important enough, you do it even if the odds are not in your favor.",
    source: "Elon Musk",
    citation: "SpaceX",
    year: "2002",
  }


];



/***
 * `getRandomQuote` function
***/
function getRandomQuote(arr1) {

  let randomNumber = Math.floor(Math.random() * arr1.length );
  let randomQuote = arr1[randomNumber];
  return getRandomQuote;
 
}




/***
 * `printQuote` function
***/

function printQuote() {

  let new_RandomQuote = randomQuote(quotes);
  let 
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);