//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

// create a function to print person3's foods
// write a "for loop", to loop through keys
// since shakes are in an array, write if statement for if key === shakes, otherwise we get [object object] for values
// write a nested "for loop" 
  
function favoriteFoods(person3){
    for (let key in person3){
        if (key === 'shakes') {
            console.log(`My preference in ` + key + " depends on where I order!");
            // loops through each object in the 'shakes' array
            for (let shake of person3[key]){
                // makes key === store and value === flavor
                // Object.entries returns the key-value pairs from [store, values]
                for (let [store, flavor] of Object.entries(shake)) {
                    console.log(`If ordering a shake at ${store}: ${flavor}`);
                }
            }
        } else {
            console.log(key + ": " + person3[key]);
        }
    }
}

favoriteFoods(person3)


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
// Use an arrow to create the printInfo method
// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

function Person(name, age){
    this.name = name;
    this.age = age;

    // method to printInfo
    this.printInfo = () => {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }

    // method to incrementally addAge by 1
    this.addAge = () => {
        this.age += 1;
    }
}

// Creating two people using 'new' keyword
let person1 = new Person("Keanu Reeves", 58);
let person2 = new Person("Johnny Depp", 59)

// Print starting ages
person1.printInfo();
person2.printInfo();

// Incremenet person2's age
person2.addAge();
// two more years
person2.addAge();
person2.addAge();

// print their info
person1.printInfo();
person2.printInfo();


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const isGreaterThan10 = (str) => {
    return new Promise((resolve, reject) => {
        if (str.length > 10) {
            console.log('Big word');
            resolve(true);
        } else {
            console.log('Small Number');
            reject(false);
        }
    });
};


isGreaterThan10('inconceivable')
    .then( (result) => {
        console.log(`Over 10 characters: ${result}`);
    })
    .catch( (error) => {
        console.log(`Over 10 characters: ${error}`);
    });




// Codewars problems

// 7KYU - Shortest Word
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

// Python
// def find_short(s):
//     words = s.split()
//     l = len(words[0])
//     for word in words:
//         if len(word) < l:
//             l = len(word)
//     return l # l: shortest word length

// JS
function findShort(s) {
    let words = s.split(" ");
    let l = words[0].length;
    for (let word of words){
        if (word.length < l){
            l = word.length;
        }  
    }
    return l;
}

let s = "many different words here ok dude or dudette?"; // 2
console.log(findShort(s))


// 7KYU - Vowel Count
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


// create empty array to hold counts of vowels
// replace spaces in string with nothing, not sure if this is needed?
// for loop to loop through letters
// if statement to count vowels
// push +1 to empty string
function getCount(sentence) {
    count = []
    let s = sentence.replace(" ", '')
    for (let v of s){
        if (v === 'a' || v === 'e' || v === 'i' || v === 'o' || v === 'u'){
            count++
        }
    }
    return count
}

let sentence = "this is a sentence with spaces and lowercase letters"; // 16
console.log(getCount(sentence))