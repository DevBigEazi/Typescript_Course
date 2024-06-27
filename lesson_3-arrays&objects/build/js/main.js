"use strict";
let stringArr = ["hello", "world", "Isiaq"];
let students = ["Wale", "Akeem", 220];
let mixedData = ["EVM", 2024, true];
stringArr[0] = "Hi";
stringArr.push("Hey");
console.log(stringArr.length);
console.log(stringArr.length - 1);
students[0] = 123;
students.unshift("Tunde");
console.log(students);
// // stringArr is assignable to the union types variable and not vice versa only because the union types arr accept string
// students = stringArr;
// mixedData = stringArr;
// mixedData = students;
let test = [];
let bands = [];
bands.push("Van Halen");
console.log(bands);
// Turple
