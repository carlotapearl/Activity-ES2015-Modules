// YOUR IMPORTS BELOW:
//WARMUP
import warmup from './utils/warmup.js';
//DATEANDTIME
import * as allfunctions from './utils/dateandtime.js'
//MATH

//ARRAYS

//UTILITIES

// YOUR FUNCTION CALLS BELOW:
//WARMUP

warmUp(warmUp);


// DATEANDTIME
// Export ALL date and time functions, inline.
// Import  using the * operator (as = allfunctions).


allfunctions.getCurrentTime();
allfunctions.getCurrentDate();


// MATH
// Export all functions individually.
// Import only square and round, using { }.

function power(x,y){
  return console.log(Math.pow(x,y));
};

power(8,2);

function square(x){
  return console.log(Math.sqrt(x));
};

square(64);

function round(x){
  return console.log(Math.round(x))
};

round(6.234);

// ARRAYS
// Keep variables in the arrays file, no need to export.
// Export each function individually.
// Import each function individually using { }.

var allLanguages = [];
var languages = ["JavaScript", "Ruby", "Phython", "CSS"]
var moreLanguages = {
  html: "HTML",
  php: "php"
}

function mapper(){
  return Object.keys(moreLanguages).map(function(key){
    var items = moreLanguages[key];
    console.log("mapper: ", items);
    return items;
  });
}

function concatArrays(){
 var newArray = languages.concat(mapper())
 console.log(newArray);
}

mapper();
concatArrays();

// UTILITIES
// Export both the function and myObject, inline.
// Import both using the * operator (as = utilities).

function iterator(data){
  data.forEach(function(item){
    console.log("Item:", item)
  })
};

var myObject = {
  array: ["motheboard", "memory", "processor"],
  greeting: function(name){
    return console.log("Hello, my name is " + name + ".");
  }
};

iterator(myObject.array);
myObject.greeting('Matt');
