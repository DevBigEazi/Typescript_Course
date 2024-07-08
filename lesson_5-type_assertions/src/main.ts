const logMsg = (msg: any): any => {
  return console.log(msg);
};
logMsg("Hello World");

// Type Assertions or Type Casting
type One = string;
type Two = string | number;
type Three = "hello";

// convert to more or less specific
let a: One = "hello";
let b = a as Two; // less specific
let c = a as Three; // more specific

// we can also use angle bracket <> in place of as keyword

let d = <One>"world";
let e = <string | number>"world";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

const myValue: string = addOrConcat(2, 3, "concat") as string;

// Becareful! TS sees no problem - but a string is returned, which wrong. Mistakes can be made with assertion
const nextValue: number = addOrConcat(2, 3, "concat") as number;

// 10 as string // ts wll see this assertion as a mistakes and not overlook it. so to convert this number to String using assertion, we have to use the unknown keyword
10 as unknown as string;

// In a nutshell type assertion is not recommended at all but occasionally it is useful to know how to use it.

logMsg(myValue);
logMsg(nextValue);

// However, it can be very useful with DOM or web pages

const img = document.querySelector("img")!; // ! here is called non-known assertion
const myImg = document.getElementById("#myImg") as HTMLImageElement;
const nextImg = <HTMLImageElement>document.getElementById("#myImg"); // This way it wont work with tsx file for react

img.src;
myImg.src;
