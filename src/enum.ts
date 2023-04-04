// enum is a special class of group of constants

// take this into a class called enum
const weight = 1;
const len = 5;
const height = 6;

// enums have two flavour string and numeric

// declaring with const will generate more simplified/ optimized code in js
const enum Measures {
  weight = 5, //default initialized with 0 if its five the rest will be 6 and 7
  len, //increment of previous 1
  height, //2 as well
}
console.log(Measures.weight, Measures.len, Measures.height);
