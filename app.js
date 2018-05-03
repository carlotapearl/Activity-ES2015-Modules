// YOUR IMPORTS BELOW:
//WARMUP
import warmup from './utils/warmup.js';
//DATEANDTIME
import * as allfunctions from './utils/dateandtime.js'
//MATH
import {square, round} from './utils/math.js';
//ARRAYS
import { mapper } from './utils/arrays.js';
import { concatArrays } from './utils/arrays.js';
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
