// type intersaction is the opposite of union types where we require both type

// the real time example is that

// define type aliase
type Dragable = {
  drag: () => number;
};

// another type aliase
type Resizeable = {
  resize: (num: number) => number;
};

// create another type but combination of both dragable and resizeable
type Box = Dragable & Resizeable; //Insertion type

// create an object with the help of the Box type
let newBox: Box = {
  drag: () => 5,
  resize: () => 10,
};

console.log(newBox.drag());
