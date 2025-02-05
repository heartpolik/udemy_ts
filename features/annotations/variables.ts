const apples: number = 5;

const speed: string = 'fast';

const hasName: boolean = true;

const nothingMatch: null = null;

const nothing: undefined = undefined;

// Date
const now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];

// Class
class Car {}

let car: Car = new Car();

// Object literal
const point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// Function
const logNumber: (i: number) => void = (i) => {
  console.log(i);
}

logNumber(10);

// When to use annotations
// 1. Function that returns the 'any' type
const json = '{"x": "10", "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2. When we declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3. When we want to force a type on a variable
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
