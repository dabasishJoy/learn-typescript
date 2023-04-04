// Introduction to arrays in TS
let array = [5, 4, 5]; //this is array of type number in ts since all are in numbers
let array1: number[] = [5, 4, 5]; //this is array of type number with type annotation
let array2: (string | number)[] = [5, 4, "5"]; //this is array of type string or numbers with type annotation

// define an empty arry with no annotaion

let array3 = []; //this is of type any so best practise is that to annotate the type
array3[0] = "Joy";
array3[1] = 5; //this is possible which is not the goal

//but this will throw error
let array4: number[] = []; //here because of type annotation
// array4[0] = "Joy"; //this will throw error for assigning the string value in number array
array4[0] = 5;
array4[1] = 6;

array4.map((num) => console.log(num));
