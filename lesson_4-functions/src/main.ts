// type aliases

// interface Guitarist {
//   name: string;
//   active?: boolean;
//   albums: (number | string)[];
// }

type stringOrNumber = string | number;

type stringOrNumberArr = (number | string)[];

type Guitarist = {
  name?: string;
  active?: boolean;
  albums: stringOrNumberArr;
};

type userId = stringOrNumber;

type postId = stringOrNumber;

// Literal types
let userName: "Isiaq";
// userName = "Ade"; //error // differant from

// let user_name: string = "Isiaq";
// user_name = "Ade"; // will work

let myName: "Isiaq" | "Ade" | "Eazi";

myName = "Eazi";

// functions
const add = (a: number, b: number): number => {
  return a + b;
};

// any functions that is not returning any data is returning void
const logMsg = (message: any): void => {
  console.log(message);
};

logMsg("Hello!");
console.log(add(2, 3));

let subtract = function (c: number, d: number): number {
  return c - d;
};
logMsg(subtract(2, 3));

// we can use type alias for functions as well, however, assigning difault value to the params cant work.
type mathFunction = (a: number, b: number) => number;
// interface mathFunction {
//   (a: number, b: number): number;
// }

const multiply: mathFunction = function (a, b) {
  return a * b;
};
logMsg(multiply(2, 3));

const divide: mathFunction = (a, b) => {
  return a / b;
};
logMsg(divide(2, 2));

// optional parameters

const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));

// default value
const sumAll = (a: number, b: number, c: number = 2): number => {
  return a + b + c;
};

logMsg(sumAll(2, 3));

const sumAll_ = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c;
};
logMsg(sumAll_(undefined, 5));

// Rest Parameters = rest of the params
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

logMsg(total(10, 2, 3));
