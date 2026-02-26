class Vehicle {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }
  start() {
    console.log(this.brand + "vehicle speed "+ this.speed + "km/h.");
  }
}
class Car extends Vehicle {
  constructor(brand, speed, fuelType) {
    super(brand, speed);
    this.fuelType = fuelType;
  }
  showDetails() {
    console.log("Brand:", this.brand);
    console.log("Speed:", this.speed + " km/h");
    console.log("Fuel Type:", this.fuelType);
  }
}
let myCar = new Car("BMW", 120, "Petrol");
myCar.start();
myCar.showDetails();