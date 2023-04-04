// specify the return type and also setting error for not used parameters
// js functions return undefined implicitly
function cal(num: number): number {
  const a = num + 5;
  return a;
}

// default value
function calc(num: 5): number {
  const a = num + 5;
  return a;
}

// this will occur error in ts but okay in js
cal(5);
