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
