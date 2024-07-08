class Coder {
  //   name: string; // Instead of having to have these redundant code we will use visibility modifiers, which will make our code little more DRY.

  //   music: string;
  //   age: number;
  //   lang: string;

  secondLang!: string; // one way to avoid those errors but this is very unusual. this a property you dont want to initialized right away.

  // Here, we applied visibility modifiers
  constructor(
    public readonly name: string,
    public music: string,
    private age: number, // this can only be access in the class
    protected lang: string = "Typescript" // default value
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
    return `Hello, I'am ${this.age}`;
  }
}

const Isiaq = new Coder("Isiaq", "Rap", 42); // language value become optional here cos of lang default value

console.log(Isiaq.getAge());
// console.log(Isiaq.age);
// console.log(Isiaq.lang);

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }

  public getLang() {
    return `I write ${this.lang}`;
  }
}

const Sara = new WebDev("Mac", "Sara", "Hip-Hop", 23);

console.log(Sara.getLang());
// console.log(Sara.age);
// console.log(Sara.lang);

///////////////////////////////////////

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Artist implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string) {
    return `${this.name} ${action} with the ${this.instrument}`;
  }
}

const Page = new Artist("Asake", "Mic");

console.log(Page.play("singing"));
//////////////////////////////////////////

class Peeps {
  static count: number = 0;

  static getCount(): number {
    return Peeps.count; // you have to refer to the class itself when calling the property of the static keyword
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");

console.log(Peeps.count); // This will tell us how many times the class has been intstatiated.

console.log(Steve.id);
console.log(John.id);
console.log(Amy.id);

////////////////////////////////////////////////
class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
    } else throw new Error("Param is not an array of string");
  }
}

const myBands = new Bands();
// getter
myBands.data = ["Neil Young", "Led Zep"];
console.log(myBands.data);
//setter
myBands.data = [...myBands.data, "ZZ Top"]
console.log(myBands.data);
// myBands.data = ["Rock", 1223]


