// union types
function union(weight: number | string): number {
  // we don't know what the type will be

  // Narrowing to get the type

  if (typeof weight === "number") {
    return weight * 5;
  }
  // other wise type cast to maintain the return type

  return parseInt(weight) * 5;
}

union(5);
