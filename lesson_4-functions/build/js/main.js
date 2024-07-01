"use strict";
// type aliases
// Lietral types
let userName;
// userName = "Ade"; //error // differant from
// let user_name: string = "Isiaq";
// user_name = "Ade"; // will work
let myName;
myName = "Eazi";
// functions
const add = (a, b) => {
    return a + b;
};
// any functions that is not returning any data is returning void
const logMsg = (message) => {
    console.log(message);
};
logMsg("Hello!");
console.log(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
logMsg(subtract(2, 3));
// interface mathFunction {
//   (a: number, b: number): number;
// }
const multiply = function (a, b) {
    return a * b;
};
logMsg(multiply(2, 3));
const divide = (a, b) => {
    return a / b;
};
logMsg(divide(2, 2));
// optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
// default value
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
logMsg(sumAll(2, 3));
const sumAll_ = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(sumAll_(undefined, 5));
// Rest Parameters = rest of the params
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(10, 2, 3));
