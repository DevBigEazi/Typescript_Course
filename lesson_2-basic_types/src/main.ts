let myName: string = "Isiaq";
let meaningOfLife: number;
let isLoading: boolean;
let album: any;

myName = "Adeshola";
meaningOfLife = 42;
isLoading = true;
album = 1988;

const sum = (a: number, b: string) => {
  return a + b;
};

// union types
let postId: string | number;
let isActive: number | boolean; // it is not limited to only two data types

let regex: RegExp = /\w+/g;
