export abstract class Vehicle {
    public maxSpeed: number;
    public loadCapacity: number;

    public abstract start(): void;

    public constructor(maxSpeed: number, loadCapacity: number) {
        this.maxSpeed = maxSpeed;
        this.loadCapacity = loadCapacity;
    }
}

export class SportCar extends Vehicle {
    public constructor(maxSpeed: number, loadCapacity: number) {
        super(maxSpeed, loadCapacity);
    }

    public start(): void {
        console.log('Starting my fast sport car');
    }
}

export class Truck extends Vehicle {
    public constructor(maxSpeed: number, loadCapacity: number) {
        super(maxSpeed, loadCapacity);
    }

    public start(): void {
        console.log('Starting my heavy truck');
    }
}
