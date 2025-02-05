interface IVehicle extends IReportable {
  name: string;
  year: Date;
  broken: boolean;
}

interface IDrink extends IReportable {
  color: string;
  carbonated: boolean;
  sugar: number;
}

interface IReportable {
  summary(): string;
}

const oldCivic: IVehicle = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const drinkstuff: IDrink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  }
};

const printSummary = (item: IReportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drinkstuff);
