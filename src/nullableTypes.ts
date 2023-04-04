// function
// Nullable Types
function printName(name: String | null | undefined): void {
  if (name) console.log(name);
  else console.log("Name is empty");
}

printName("Joy");

// but what if any null value passed

printName(null); //compile time error
printName(undefined); //compile time error
