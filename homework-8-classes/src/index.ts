import { SportCar, Truck, Vehicle } from './abstraction';

const truck = new Truck(110, 25000);
truck.start();
console.log(getVehicleParameter(truck));

const sportCar = new SportCar(230, 1000);
sportCar.start();
console.log(getVehicleParameter(sportCar));

function getVehicleParameter(obj: Vehicle): string {
    return `max speed is ${obj.maxSpeed}, load capacity is ${obj.loadCapacity}`;
}
