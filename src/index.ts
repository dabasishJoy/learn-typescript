console.log("Hello world");

// This is  a varible with dynamic type that is default behavior of JS
let a;

// we can assign number and change the type of the varibale runtime
a = 5;
console.log("🚀 ~ file: index.ts:8 ~ a :", typeof a); //expected output: number

// again we can change the type into string
a = "Bangladesh";
console.log("🚀 ~ file: index.ts:11 ~ a:", typeof a); //expected output: string

// the above dynamic typing behavior can cause unexpected result

// but also if a varible is declared and defined then the variable will maintain the defined value type by default and won't be changed

// for example
let b = "Bangladesh"; //this is converted into static string type

// we cannnot assing another type of value in "b"

// this will throw compile time error : Type 'number' is not assignable to type 'string'.
// b = 5;
// but in ts we can specify the static types

// ts static type
let age: number = 50; //Define type so that it wont store any other value except "number"

// Debugging
let count: number = 5;

if (count > 2) {
  count += 5;
}

console.log(count);
