//============ Exercise #1 ============//
/*
Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" 
Expected output
Given arr: ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
Output arr: ["even index","Baseball","even index","Goku","even index","Rodger"]
*/

const testArr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    //I want to loop through first to find the each name in the string
    for (let i = 0; i < testArr.length; i++) 
    process(testArr[i]);
    //splice the string 
  console.log('.splice() method')
  console.log(testArr);
  let newSentence = testArr.splice(0, 2, 'even index');
  console.log(testArr)
  }


//============ Exercise #2 ============//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

const person = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Taco Bell",
    burgers:"Shake Shack",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Shamrock Shake",
        cupids_candies:"Chocolate Malt"
    }]
}

// person.pizza +"," +person.tacos + "," + person.burgers + "," + person.ice_cream + "." + person.shakes;
console.log(Object.values(person));