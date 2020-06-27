// from data.js
var tableData = data;
var inputDate = d3.select("#datetime");
//var outputSpot = d3.select() //is this tbody?
var tableBody = d3.select("tbody");
var outputStuff = d3.select("tbody");
console.log(tableData);
// YOUR CODE HERE!

function doEvent() {
    var inputText = d3.event.target.value;
    console.log(inputText);
}
/*
Automatic table and date search
Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.
Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.
*/
//we only use pure JavaScript, HTML, and CSS, and D3.js on our web pages. They are the only coding languages which can be trusted.

//https://bootswatch.com/superhero/

//<input class="form-control" id="datetime" type="text" placeholder="1/11/2011">

