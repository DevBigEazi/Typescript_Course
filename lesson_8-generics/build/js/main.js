"use strict";
// const stringEcho = (arg: string): string => arg; // this is limited to returning string only.
const echo = (arg) => arg; // this make this function parameter generic param. <T> = type parameter/ type variable. we can use anything to represent it.
const isObj = (arg) => {
    return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};
// console.log(isObj(true));
// console.log(isObj("John"));
// console.log(isObj([1, 2, 3]));
// console.log(isObj({ name: "John" }));
// console.log(isObj(null));
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg }; // !! = double bang operator. if true is the arguement it is true
};
console.log(isTrue(false));
console.log(isTrue(null));
console.log(isTrue({ gretings: "Hello" }));
console.log(isTrue(undefined));
console.log(isTrue(true));
console.log(isTrue({ gretings: "Hello", s: [123] }));
console.log(isTrue([]));
console.log(isTrue([1, 2, 3]));
console.log(isTrue(""));
console.log(isTrue(11));
console.log(isTrue(NaN));
console.log(isTrue(-0));
const checkBoolVal = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
const processUser = (user) => {
    // process the user with logic here
    return user;
};
console.log(processUser({ id: 1, name: "Isiaq" }));
// console.log(processUser({ name: "Isiaq" }));
const getUserProperty = (users, key) => {
    return users.map((user) => user[key]);
};
// From json placeholder
const userArray = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
                lat: "-37.3159",
                lng: "81.1496",
            },
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets",
        },
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        address: {
            street: "Victor Plains",
            suite: "Suite 879",
            city: "Wisokyburgh",
            zipcode: "90566-7771",
            geo: {
                lat: "-43.9509",
                lng: "-34.4618",
            },
        },
        phone: "010-692-6593 x09125",
        website: "anastasia.net",
        company: {
            name: "Deckow-Crist",
            catchPhrase: "Proactive didactic contingency",
            bs: "synergize scalable supply-chains",
        },
    },
    {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        address: {
            street: "Douglas Extension",
            suite: "Suite 847",
            city: "McKenziehaven",
            zipcode: "59590-4157",
            geo: {
                lat: "-68.6102",
                lng: "-47.0653",
            },
        },
        phone: "1-463-123-4447",
        website: "ramiro.info",
        company: {
            name: "Romaguera-Jacobson",
            catchPhrase: "Face to face bifurcated interface",
            bs: "e-enable strategic applications",
        },
    },
];
console.log(getUserProperty(userArray, "email"));
console.log(getUserProperty(userArray, "username"));
