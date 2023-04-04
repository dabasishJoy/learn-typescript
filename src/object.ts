// const employee: {
//   readonly id: number; //id can not be changed
//   name: string;
//   phone?: string; //optional to avoid error

//   retire: () => number;
// } = {
//   id: 1,
//   name: "Joy",
//   retire: () => {
//     return 5;
//   },
// };

// console.log(employee);

// in structure way with type aliases

// create an an shape
type Employee = {
  readonly id: number; //id can not be changed
  name: string;
  phone?: string;
};

// use that shape to create new Object following DRY priciple
let employee: Employee = {
  id: 1,
  name: "Joy",
};
