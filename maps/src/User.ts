import { faker } from '@faker-js/faker';
import { Mappable } from './Map';

export class User implements Mappable {
  name: string;
  age: number;

  location: {
    lat: number;
    lng: number;
  };

  // constructor(name: string, age: number, location: { lat: number, lng: number }) {
  //   this.name = name;
  //   this.age = age;
  //   this.location = location;
  // }

  constructor() {
    this.name = faker.person.firstName();
    this.age = faker.number.int({ min: 0, max: 100 });
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }

  public markerContent(): string {
    return `
      <h1>User Name: ${this.name}</h1>
      <h3>User Age: ${this.age}</h3>
    `;
  } 
}
