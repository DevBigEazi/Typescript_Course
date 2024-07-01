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

// reusable msg func
const logMsg = (msg: any) => {
  console.log(msg);
};

// Q6. Define a new type alias called ArtistDetails that includes the properties name, active, and albums. Then, create an object of this type. You have the option to use type alias

type strOrNumArr = (string | number)[];

interface ArtistDetails {
  name?: string;
  active: boolean;
  albums: strOrNumArr;
}

const Baddo: ArtistDetails = {
  active: true,
  albums: ["Ikigai", "Eyan Meayweather", 999],
};

// Q6. Create a variable genre with literal types "Rock" | "Jazz" | "Pop". Assign a value to it and print it.

let genre: "Rock" | "Jazz" | "pop";
genre = "Rock";
logMsg(genre);

// Q7. Using a type alias for function signature, declare a function subtractNumbers that subtracts two numbers. Then, use this function to subtract 7 from 10 and print the result.

type mathFunction = (a: number, b: number) => number;

const subtract: mathFunction = (a, b) => {
  return a - b;
};

logMsg(subtract(10, 7));

// Q8. Modify the addAll function to return a string "Incomplete parameters" if the third parameter c is not provided.
//coming from lesson 4
const addAll = (a: number, b: number, c?: number): number | string => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return "Incomplete parameters";
};

// Q9. Create a new function multiplyAll that multiplies three numbers. The third parameter should have a default value of 1.

const multiplyAll = (a: number, b: number, c: number = 1) => {
  return a * b * c;
};

logMsg(multiplyAll(2, 3, 6));
// Q10. Write a function calculateSum that takes a fixed parameter initial and any number of additional numbers. It should return the sum of initial and all the additional numbers.

const calculateSum = (a: number, ...b: number[]) => {
  return a + b.reduce((prev, curr) => prev + curr);
};
logMsg(calculateSum(2, 3, 4, 5, 6));

// Q11. Create an interface BandMember with properties name, instrument, and yearsActive. Create an object of this type and a function introduceMember that takes a BandMember object and returns a string introducing the member.

type bandMember = {
  name: string;
  instrument: string;
  yearsActive: number;
};

const lead: bandMember = {
  name: "Kunle",
  instrument: "Sax",
  yearsActive: 9,
};

const introduceMember = (lead: bandMember): string => {
  return `Introducing ${lead.name}, the leader of the group`;
};

logMsg(introduceMember(lead));

// Q12. Define a type alias ComplexObject that includes nested objects and arrays. Create an object of this type and print it.

type complexObject = {
  studentsProfile: {
    name: string;
    department: string;
    yearSpent: number;
    courseCodes: {
      EngLish: string;
      Math: string;
    };
  };
  lecturersProfile: {
    name: string;
    department: string;
    yearsActive: number[];
  };
};

const classRep: complexObject = {
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
