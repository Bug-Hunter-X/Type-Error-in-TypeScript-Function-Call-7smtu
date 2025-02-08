# Type Error in TypeScript Function Call

This repository demonstrates a common type error in TypeScript that arises from a mismatch between the expected and provided argument types in a function call.  The `add` function expects two numbers, but a string is passed as a second argument causing a type error.

## How to reproduce

1. Clone the repository.
2. Compile the code using the TypeScript compiler: `tsc bug.ts`
3. Observe the compiler error message.

## Solution

The solution involves ensuring that the provided arguments match the function's expected parameter types.  This can be done through type checking or by converting the argument to the correct type.