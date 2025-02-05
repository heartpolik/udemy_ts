const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// Type alias
type Drink = [string, boolean, number];

const pepsi: IDrink = ['brown', true, 40];

const pepsi2: [string, boolean, number] = ['brown', true, 40];

// Why use tuples?
// 1. They are easy to recognize
// 2. They are easy to destructure
// 3. They are easy to type

const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horsepower: 400,
  weight: 3354
};

const carStats2: { horsepower: number; weight: number } = {
  horsepower: 400,
  weight: 3354
};