import { faker } from '@faker-js/faker';

export class Company {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }

  public markerContent(): string {
    return `
      <h1>Company Name: ${this.name}</h1>
      <h3>Company Catch Phrase: ${this.catchPhrase}</h3>
    `;
  }
} 
