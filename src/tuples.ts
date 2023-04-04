// Tuple in ts

// Tuple is a typed array with pre-defined type and length of each index

// for example
let person: [string, number, boolean]; //define tuple -> fixed length and fixed type

person = ["Joy", 10, true]; //create an array with defined tuple
// person = ["Joy", "Alom", true]; //throw error for type
person = ["Joy", 5, true, 5]; //throw error for length

console.log(person);
