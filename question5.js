class Vehicle {
    constructor(vehicleNo, driverName, distance) {
        this.vehicleNo = vehicleNo;
        this.driverName = driverName;
        this.distance = distance;
    }

    calculateFare() {
        return 0;
    }

    static displayPlatform() {
        console.log("Booking Platform: Ola");

        
    }
}

class Car extends Vehicle {
    constructor(vehicleNo, driverName, distance) {
        super(vehicleNo, driverName, distance);
    }

    calculateFare() {
        return this.distance * 15;
    }
}

class Bike extends Vehicle {
    constructor(vehicleNo, driverName, distance) {
        super(vehicleNo, driverName, distance);
    }

    calculateFare() {
        return this.distance * 8;
    }
}


Vehicle.displayPlatform();


let car = new Car("CAR101", "Rahul", 20);
let bike = new Bike("BIKE202", "Amit", 15);


console.log("Car Driver:", car.driverName);
console.log("Car Distance:", car.distance, "km");
console.log("Car Fare: Rs.", car.calculateFare());

console.log("Bike Driver:", bike.driverName);
console.log("Bike Distance:", bike.distance, "km");
console.log("Bike Fare: Rs.", bike.calculateFare());