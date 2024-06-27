"use strict";
let stringArr = ["hello", "world", "Isiaq"];
let students = ["Wale", "Akeem", 220];
let mixedData = ["EVM", 2024, true];
stringArr[0] = "Hi";
stringArr.push("Hey");
students[0] = 123;
students.unshift("Tunde");
// // stringArr is assignable to the union types variable and not vice versa only because the union types arr accept string
// students = stringArr;
// mixedData = stringArr;
// mixedData = students;
let test = [];
let bands = []; // athe variable is annotated here
bands.push("Van Halen");
// if you want to be more strict in define something that is locked in to a type in specific element position in a specific link of an array, all you really want to create is tuple.
// e.g
let myTuple = ["vanhalen", 200, true];
let mixed = ["john", 1, false];
myTuple[1] = 20;
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: "Isiaq",
    prop2: true,
};
exampleObj.prop1 = "Adeshola";
let evh = {
    name: "Eddie",
    active: true,
    albums: [1001, 1002, "UI1003"],
};
let jp = {
    name: "Jimmy",
    active: false,
    albums: [1, 2, "VII"],
};
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return "Hello!";
    //   return `Hello ${guitarist.name?.toUpperCase()}!`;
};
console.log(greetGuitarist(evh));
// Enum
/*
Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime.
 */
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
