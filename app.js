// YOUR IMPORTS BELOW:
//WARMUP
import warmup from './utils/warmup.js';
//DATEANDTIME
import * as allfunctions from './utils/dateandtime.js'
//MATH
import {square, round} from './utils/math.js';
//ARRAYS

//UTILITIES

// YOUR FUNCTION CALLS BELOW:
//WARMUP

warmUp(warmUp);

// DATEANDTIME

allfunctions.getCurrentTime();
allfunctions.getCurrentDate();

// MATH

square(64);
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
