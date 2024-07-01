"use strict";
// DATA TYPES
// Q1. Declare a string variable name with the value "John" and print it.
const _name = "John";
console.log(_name);
// Q2. Declare a number variable age with the value 25 and print it.
const age = 25;
console.log(age);
// Q3. Declare a boolean variable isStudent with the value true and print it.
const isStudent = true;
console.log(isStudent);
// Q4. Declare an array ids with numbers 1, 2, and 3 and print it
const ids = [1, 2, 3];
console.log(ids);
// Q5. Declare an object person with keys name and age and print it.
const person = {
    name: "Isiaq",
    age: 24,
};
console.log(person);
// Q6. Declare a tuple coordinates with elements 10 and 20.
let myTurple = [10, 20];
console.log(myTurple);
// Q7. Declare an array colors with strings "red", "green", and "blue" and print it.
const colors = ["red", "green", "blue"];
console.log(colors);
// Q9. Declare a variable status from the enum Status with value Active and print it.
var Status;
(function (Status) {
    Status[Status["Active"] = 0] = "Active";
})(Status || (Status = {}));
const activeStatus = Status.Active;
console.log(activeStatus);
// Q10. Declare a variable data with any "Hello, world" and print it.
const data = "Hello World";
console.log(data);
// ARRAY
// Q1. Declare an array numbers containing numbers 1, 2, and 3 and print it.
const numbers = [1, 2, 3];
console.log(numbers);
// Q2. Declare an array names containing strings "Alice", "Bob", and "Charlie" and print it.
const names = ["Alice", "Bob", "Charlie"];
console.log(names);
// Q3. Declare an array mixed containing a mix of numbers and strings and print it.
const mixed = [1, 2, "2", "Ade", 4];
console.log(mixed);
// Q4. Declare an empty array fruits and push strings "apple", "banana", and "orange" into it. Print the array.
const fruits = [];
fruits.push("apple", "banana", "orange");
console.log(fruits);
// Q5. Declare an array matrix containing nested arrays representing a 2x2 matrix. Print the array.
let matrix = [
    [1, 2],
    [3, 4],
];
console.log(matrix);
// reusable msg func
const logMsg = (msg) => {
    console.log(msg);
};
const Baddo = {
    active: true,
    albums: ["Ikigai", "Eyan Meayweather", 999],
};
// Q6. Create a variable genre with literal types "Rock" | "Jazz" | "Pop". Assign a value to it and print it.
let genre;
genre = "Rock";
logMsg(genre);
const subtract = (a, b) => {
    return a - b;
};
logMsg(subtract(10, 7));
// Q8. Modify the addAll function to return a string "Incomplete parameters" if the third parameter c is not provided.
//coming from lesson 4
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return "Incomplete parameters";
};
// Q9. Create a new function multiplyAll that multiplies three numbers. The third parameter should have a default value of 1.
const multiplyAll = (a, b, c = 1) => {
    return a * b * c;
};
logMsg(multiplyAll(2, 3, 6));
// Q10. Write a function calculateSum that takes a fixed parameter initial and any number of additional numbers. It should return the sum of initial and all the additional numbers.
const calculateSum = (a, ...b) => {
    return a + b.reduce((prev, curr) => prev + curr);
};
logMsg(calculateSum(2, 3, 4, 5, 6));
const lead = {
    name: "Kunle",
    instrument: "Sax",
    yearsActive: 9,
};
const introduceMember = (lead) => {
    return `Introducing ${lead.name}, the leader of the group`;
};
logMsg(introduceMember(lead));
const classRep = {
    studentsProfile: {
        name: "Owoblow",
        department: "Mass Comm",
        yearSpent: 8,
        courseCodes: {
            EngLish: "GNS 400",
            Math: "MTH 401",
        },
    },
    lecturersProfile: {
        name: "Mr Chuks",
        department: "Mass Comm",
        yearsActive: [2000, 2001, 2006, 2008],
    },
};
logMsg(classRep);
logMsg(classRep.studentsProfile);
logMsg(classRep.lecturersProfile);
// Q14.
// Q14.
