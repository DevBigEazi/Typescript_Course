"use strict";
const logMsg = (msg) => {
    return console.log(msg);
};
logMsg("Hello World");
// convert to more or less specific
let a = "hello";
let b = a; // less specific
let c = a; // more specific
// we can also use angle bracket <> in place of as keyword
let d = "world";
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
const myValue = addOrConcat(2, 3, "concat");
// Becareful! TS sees no problem - but a string is returned, which wrong. Mistakes can be made with assertion
const nextValue = addOrConcat(2, 3, "concat");
// 10 as string // ts wll see this assertion as a mistakes and not overlook it. so to convert this number to String using assertion, we have to use the unknown keyword
10;
// In a nutshell type assertion is not recommended at all but occasionally it is useful to know how to use it.
logMsg(myValue);
logMsg(nextValue);
// However, it can be very useful with DOM or web pages
const img = document.querySelector("img");
