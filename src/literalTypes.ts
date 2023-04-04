let num: number = 10; //can be any number

let num2: 50 = 50; //can only be 50
// using union type
let num3: 50 | 100 = 100; //can be either 50 or 100

// more structure way

// aliase
type NumberType = 50 | 100; //literal type

let num4: NumberType = 100; // set that type for num4
