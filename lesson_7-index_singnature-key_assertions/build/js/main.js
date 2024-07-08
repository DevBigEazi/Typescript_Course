"use strict";
// Index Signatures
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    //   Dave: 40, // Dave is not require cos it is not in the interface
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);
let props = "Pizza";
console.log(todaysTransactions[props]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
todaysTransactions.Pizza = 40;
console.log(todaysTransactions["Dave"]);
const student = {
    name: "Ademola",
    GPA: 3.5,
    classes: [100, 200],
};
// console.log(student.test);
// for (const key in student) {
//   console.log(`${key}: ${student[key] }`);
// }
for (const key in student) {
    console.log(`${key}: ${student[key]}`); // key of keyword and assertion is used here to create a union type that allow us to loop through the object even without the key signature in the interface
}
// How to iterate an object if the key signature is not assigned
Object.keys(student).map((key) => {
    console.log(student[key]); //
});
const logStudentKey = (student, key) => {
    console.log(`Student${key}: ${student[key]}`);
};
logStudentKey(student, "GPA");
