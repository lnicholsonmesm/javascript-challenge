// from data.js
//var tableData = data;
/*
var data = [{
    datetime: "1/1/2010",
    city: "benton",
    state: "ar",
    country: "us",
    shape: "circle",
    durationMinutes: "5 mins.",
    comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."
  },
  */
//lettersArray.push("e");
// You can also define an anonymous function inline
//students.forEach(function (name) {
//  console.log(name);
//});
//theStagesOfJS.forEach(function (each, index) {
// The original array is mutated with forEach
//  theStagesOfJS[index] = `Stage ${index + 1}: ${each}`;
//});

//var scores = students.map(function (student) {
//   return student.score;
//});

// log the name of each princess, follow by a colon, followed by their age
// forEach: executes a provided function once for each array element
princesses.forEach(princess => console.log(`${princess.name}: ${princess.age}`));

// create an array of just the names from the princesses array
// map: creates a new array with the results of calling a provided function on every element in the calling array
var names = princesses.map(princess => princess.name);
console.log("names: ", names);

// .pop() = remove from end
// .shift() = remove from beginning
// .push() = add to end
// .slice() = cut it off
// .slice(1) cut it off (removes the zeroth element)
// .slice(0,3) first thru third
// .slice(1,3) second thru third
// .join()
// .split(" ") --split all of the things on a space, turns into array
// console.log()
// var varname = 
// an array ~ indexing it--remember, words aren't separated!
// i++ = i+= = ; i = i + 1
//forEach -- might or might not(?) get an array back
//map = gets an array back -- if you pass in 2 arguments, arg 2 is the index # of array (Starting with 0!)

function filterMovieRatings(movie) {
    return movie.imdbRating > 8.9;
}

// 2. Use filter() to pass the function as its argument
var filteredMovies = topMovies.filter(filterMovieRatings);


var tableStuff = d3.select("#table"){

}

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

// // Step 1: Loop Through `data` and console.log each weather report object
// data.forEach(function(weatherReport) {
//   console.log(weatherReport);
// });

// // Step 2:  Use d3 to append one table row `tr` for each weather report object
// // Don't worry about adding cells or text yet, just try appending the `tr` elements.
// data.forEach(function(weatherReport) {
//   console.log(weatherReport);
//   var row = tbody.append("tr");
// });

// // Step 3:  Use `Object.entries` to console.log each weather report value
// data.forEach(function(weatherReport) {
//   console.log(weatherReport);
//   var row = tbody.append("tr");

//   Object.entries(weatherReport).forEach(function([key, value]) {
//     console.log(key, value);
//   });
// });

// // Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
// data.forEach(function(weatherReport) {
//   console.log(weatherReport);
//   var row = tbody.append("tr");

//   Object.entries(weatherReport).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the weather report object
//     var cell = row.append("td");
//   });
// });

// // Step 5: Use d3 to update each cell's text with
// // weather report values (weekday, date, high, low)
// data.forEach(function(weatherReport) {
//   console.log(weatherReport);
//   var row = tbody.append("tr");
//   Object.entries(weatherReport).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the weather report object
//     var cell = row.append("td");
//     cell.text(value);
//   });
// });

// BONUS: Refactor to use Arrow Functions!
data.forEach((weatherReport) => {
    var row = tbody.append("tr");
    Object.entries(weatherReport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});


// The new student and grade to add to the table
var newGrade = ["Wash", 79];

// Use D3 to select the table
var table = d3.select("table");

// Use d3 to create a bootstrap striped table
// http://getbootstrap.com/docs/3.3/css/#tables-striped
table.attr("class", "table table-striped");

// Use D3 to select the table body
var tbody = d3.select("tbody");

// Append one table row `tr` to the table body
var row = tbody.append("tr");

// Append one cell for the student name
row.append("td").text(newGrade[0]);

// Append one cell for the student grade
row.append("td").text(newGrade[1]);

// Getting a reference to the button on the page with the id property set to `click-me`
var button = d3.select("#click-me");

// Getting a reference to the input element on the page with the id property set to 'input-field'
var inputField = d3.select("#input-field");

// This function is triggered when the button is clicked
function handleClick() {
    console.log("A button was clicked!");

    // We can use d3 to see the object that dispatched the event
    console.log(d3.event.target);
}

// We can use the `on` function in d3 to attach an event to the handler function
button.on("click", handleClick);

// You can also define the click handler inline
button.on("click", function () {
    console.log("Hi, a button was clicked!");
    console.log(d3.event.target);
});

// Event handlers are just normal functions that can do anything you want
button.on("click", function () {
    d3.select(".giphy-me").html("<img src='https://gph.to/2Krfn0w' alt='giphy'>");
});

// Input fields can trigger a change event when new text is entered.
inputField.on("change", function () {
    var newText = d3.event.target.value;
    console.log(newText);
});

// Randomly select an episode number for Star Wars
var text = d3.select(".star-wars")
    .text(Math.floor(Math.random() * 9) + 1);

// Select the upvote and downvote buttons
var upvote = d3.select(".upvote");
var downvote = d3.select(".downvote");

// Select the counter h1 element
var counter = d3.select(".counter");

// Use D3 `.on` to attach a click handler for the upvote
upvote.on("click", function () {
    // Select the current count
    var currentCount = parseInt(counter.text());

    // Upvotes should increment the counter
    currentCount += 1;

    // Set the counter h1 text to the new count
    counter.text(currentCount);
});

// Use d3 `.on` to attach a click handler for the downvote
downvote.on("click", function () {
    // Select the current count
    var currentCount = parseInt(counter.text());

    // Downvotes should decrement the counter
    currentCount -= 1;

    // Set the counter h1 text to the new count
    counter.text(currentCount);
});


d3.selectAll("button").on("click", function () {
    // What will be logged out? What is `this` in this case?
    console.log(this);
    // Answer: It will console log the `button` element.
});

d3.selectAll("li").on("click", function () {
    // you can select the element just like any other selection
    var listItem = d3.select(this);
    listItem.style("color", "blue");

    var listItemText = listItem.text();
    console.log(listItemText);
});

// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("#form");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit", runEnter);

// Create the function to run for both events
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#example-form-input");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // Print the value to the console
    console.log(inputValue);

    // Set the span tag in the h1 element to the text
    // that was entered in the form
    d3.select("h1>span").text(inputValue);
}


// Assign the data from `data.js` to a descriptive variable
var people = data;

// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#patient-form-input");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(people);

    var filteredData = people.filter(person => person.bloodType === inputValue);

    console.log(filteredData);

    // BONUS: Calculate summary statistics for the age field of the filtered data

    // First, create an array with just the age values
    var ages = filteredData.map(person => person.age);

    // Next, use math.js to calculate the mean, median, mode, var, and std of the ages
    var mean = math.mean(ages);
    var median = math.median(ages);
    var mode = math.mode(ages);
    var variance = math.var(ages);
    var standardDeviation = math.std(ages);

    // Then, select the unordered list element by class name
    var list = d3.select(".summary");

    // remove any children from the list to
    list.html("");

    // append stats to the list
    list.append("li").text(`Mean: ${mean}`);
    list.append("li").text(`Median: ${median}`);
    list.append("li").text(`Mode: ${mode}`);
    list.append("li").text(`Variance: ${variance}`);
    list.append("li").text(`Standard Deviation: ${standardDeviation}`);
};
