function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

let result = add(10, 20); //Corrected the type error by providing a number
console.log(result); //outputs 30

//Another way to solve the error is to use type assertion 
// result = add(10, <number>"20"); //Type assertion - not recommended in this case, as it can hide potential problems.