class Vehicle {
  
  constructor(public color: string) {}

  public drive(): void {
    console.log('chugga chugga');
  }

  protected honk(): void {
    console.log('beep');
  }
}

class CCar extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  public drive(): void {
    console.log('vroom');
  }

  public startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle('orange');
vehicle.drive();

const mycar = new CCar(4, 'red');
mycar.startDrivingProcess();

