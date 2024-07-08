"use strict";
class Coder {
    // Here, we applied visibility modifiers
    constructor(name, music, age, // this can only be access in the class
    lang = "Typescript" // default value
    ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'am ${this.age}`;
    }
}
const Isiaq = new Coder("Isiaq", "Rap", 42); // language value become optional here cos of lang default value
console.log(Isiaq.getAge());
// console.log(Isiaq.age);
// console.log(Isiaq.lang);
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Sara = new WebDev("Mac", "Sara", "Hip-Hop", 23);
console.log(Sara.getLang());
class Artist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} with the ${this.instrument}`;
    }
}
const Page = new Artist("Asake", "Mic");
console.log(Page.play("singing"));
//////////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count; // you have to refer to the class itself when calling the property of the static keyword
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");
console.log(Peeps.count); // This will tell us how many times the class has been intstatiated.
console.log(Steve.id);
console.log(John.id);
console.log(Amy.id);
////////////////////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("Param is not an array of string");
    }
}
const myBands = new Bands();
// getter
myBands.data = ["Neil Young", "Led Zep"];
console.log(myBands.data);
//setter
myBands.data = [...myBands.data, "ZZ Top"];
console.log(myBands.data);
// myBands.data = ["Rock", 1223]
