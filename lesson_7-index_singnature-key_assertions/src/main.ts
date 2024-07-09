// Index Signatures

// interface TransactionObj {
//   readonly [index: string]: number;

//   // readonly will not allow new assignment to any property from our object
// }

interface TransactionObj {
  readonly [index: string]: number;
  Pizza: number;
  Books: number;
  Job: number;
}

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
  //   Dave: 40, // Dave is not require cos it is not in the interface
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);

let props: string = "Pizza";
console.log(todaysTransactions[props]);

const todaysNet = (transactions: TransactionObj): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction];
  }

  return total;
};

console.log(todaysNet(todaysTransactions));

todaysTransactions.Pizza = 40;

console.log(todaysTransactions["Dave"]);

///////////////////////////////////////////

interface Student {
  //   [key: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[]; // when one of the property is optional, we need to specify undefined in the index signature
}

const student: Student = {
  name: "Ademola",
  GPA: 3.5,
  classes: [100, 200],
};

// console.log(student.test);

// for (const key in student) {
//   console.log(`${key}: ${student[key] }`);
// }

for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`); // key of keyword and assertion is used here to create a union type that allow us to loop through the object even without the key signature in the interface
}

// How to iterate an object if the key signature is not assigned

Object.keys(student).map((key) => {
  console.log(student[key as keyof typeof student]); //
});

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student${key}: ${student[key]}`);
};

logStudentKey(student, "name");

///////////////////////////////////////////////
// interface Incomes {
//   [key: string]: number;
// }

type Streams = "salary" | "bonus" | "sidehustle";

type Incomes = Record<Streams, number | string>;

const monthlyIncome: Incomes = {
  salary: 200,
  bonus: 100,
  sidehustle: 250,
};

for (const revenue in monthlyIncome) {
  console.log(`${revenue}: ${monthlyIncome[revenue as keyof Incomes]}`);
  //   console.log(monthlyIncome[revenue]);
}
