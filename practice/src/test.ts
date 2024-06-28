// DATA TYPES
// Q1. Declare a string variable name with the value "John" and print it.
const _name: string = "John";
console.log(_name);

// Q2. Declare a number variable age with the value 25 and print it.
const age: number = 25;
console.log(age);

// Q3. Declare a boolean variable isStudent with the value true and print it.
const isStudent: boolean = true;
console.log(isStudent);

// Q4. Declare an array ids with numbers 1, 2, and 3 and print it
const ids: number[] = [1, 2, 3];
console.log(ids);

// Q5. Declare an object person with keys name and age and print it.
const person: object = {
  name: "Isiaq",
  age: 24,
};
console.log(person);

// Q6. Declare a tuple coordinates with elements 10 and 20.
let myTurple: [number, number] = [10, 20];
console.log(myTurple);

// Q7. Declare an array colors with strings "red", "green", and "blue" and print it.
const colors: string[] = ["red", "green", "blue"];
console.log(colors);

// Q8. Declare an object personDetails with key having string type and print it.
type personDetails = {
  [key: string]: string;
};
//or
interface personDetailss {
  [key: string]: string;
}

// Q9. Declare a variable status from the enum Status with value Active and print it.
enum Status {
  Active,
}

const activeStatus: Status = Status.Active;
console.log(activeStatus);

// Q10. Declare a variable data with any "Hello, world" and print it.
const data: any = "Hello World";
console.log(data);

// ARRAY
// Q1. Declare an array numbers containing numbers 1, 2, and 3 and print it.
const numbers: number[] = [1, 2, 3];
console.log(numbers);

// Q2. Declare an array names containing strings "Alice", "Bob", and "Charlie" and print it.
const names: string[] = ["Alice", "Bob", "Charlie"];
console.log(names);

// Q3. Declare an array mixed containing a mix of numbers and strings and print it.
const mixed: (number | string)[] = [1, 2, "2", "Ade", 4];
console.log(mixed);

// Q4. Declare an empty array fruits and push strings "apple", "banana", and "orange" into it. Print the array.
const fruits: string[] = [];
fruits.push("apple", "banana", "orange");
console.log(fruits);

// Q5. Declare an array matrix containing nested arrays representing a 2x2 matrix. Print the array.
let matrix: number[][] = [
  [1, 2],
  [3, 4],
];
console.log(matrix);

// Q6. Declare an array colors containing strings "red", "green", and "blue". Iterate over the array and print each color.
// Q7. Declare an array ages containing numbers 25, 30, and 35. Map over the array and double each age. Print the modified array.
// Q8. Declare an array numbers containing numbers 1 through 10. Filter the array to only include even numbers. Print the filtered array.
// Q9. Declare an array grades containing numbers 85, 90, and 95. Reduce the array to calculate the average grade. Print the average.
// Q10. Declare an array names containing strings "Alice", "Bob", and "Charlie". Check if "Charlie" exists in the array and print the result.
