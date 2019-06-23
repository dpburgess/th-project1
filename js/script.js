/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// some constants for creating a color that are not supposed to change
const saturation = '80%';
const lightness = '40%';
const colorMax = 361;

var quotes = [
  {
    quote: 'I know kung fu.',
    source: 'Keanu Reeves',
    citation: 'The Matrix',
    year: 1999,
    tag: 'Sci-fi'
  },
  {
    quote: 'Adrian!!!',
    source: 'Sylvester Stallone',
    citation: 'Rocky',
    year: 1976,
    tag: 'Drama'
  },
  {
    quote: 'Do not go in there!',
    source: 'Jim Carrey',
    citation: 'Ace Ventura: Pet Detective',
    year: 1994,
    tag: 'Comedy'
  },
  {
    quote: 'Cut it out.',
    source: 'Dave Coulier',
    citation: 'Full House',
    tag: 'Family'
  },
  {
    quote: 'Did I do that?',
    source: 'Jaleel White',
    citation: 'Family Matters',
    tag: 'Family'
  },
  {
    quote: 'I love lamp.',
    source: 'Steve Carell',
    citation: 'Anchorman: The Legend of Ron Burgandy',
    year: 2004,
    tag: 'Comedy'
  },
  {
    quote: 'Here\'s looking at you, kid.',
    source: 'Humphrey Bogart',
    citation: 'Casablanca',
    year: 1942,
    tag: 'Drama'
  }
];

// a new quote and color are shown every 22 seconds
var quoteIntervalId = setInterval(printQuote, 22000);
var colorIntervalId = setInterval(changeColor, 22000);

// uses a random number to get a quote from the quotes array
function getRandomQuote() {
  var rand = Math.floor(Math.random() * quotes.length);
  return quotes[rand];
}

// calls getRandomQuote and writes it to the page with some extra html if the quote object has extra properties
function printQuote() {
  var randQuote = getRandomQuote();
  var message = '';
  message += '<p class="quote">' + randQuote.quote + '</p>';
  message += '<p class="source">' + randQuote.source;
  if (randQuote.citation) {
    message += '<span class="citation">' + randQuote.citation + '</span>';
  }
  if (randQuote.year) {
    message += '<span class="year">' + randQuote.year + '</span>';
  }
  if (randQuote.tag) {
    message += '<span class="tag">' + randQuote.tag + '</span>';
  }
  message += '</p>';

  var quoteBox = document.getElementById('quote-box');
  quoteBox.innerHTML = message;
}

// using the css hsl() method to create a random color based on a random number between 0 and 360
function changeColor() {
  var hue = Math.floor(Math.random() * colorMax);
  var body = document.getElementsByTagName('body')[0];
  body.style.background = 'hsl(' + hue + ',' + saturation + ',' + lightness + ')';
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
document.getElementById('loadQuote').addEventListener("click", changeColor, false);