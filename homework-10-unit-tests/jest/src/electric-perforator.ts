import { Perforator } from './perforator';
import { IWired } from './iwired';

export class ElectricPerforator extends Perforator implements IWired {

    private maxSpeed: number;
    private currentSpeed: number;

    public constructor(brand: string, power: number, maxSpeed: number) {
        super(brand, power);
        this.maxSpeed = maxSpeed;
        this.currentSpeed = 1;
    }

    public perforate(): void {
        console.log(`${this.brand} (Електричний, ${this.power}W): Починає свердління завдяки електроенергії мережі.`);
    }

    public controlOfRotationalSpeed(speed: number): void {
        if (speed > 0 && speed <= this.maxSpeed) {
            this.currentSpeed = speed;
            console.log(`${this.brand} має поточний режим швидкоті свердління ${speed}.`);
        } else {
            console.log(`${this.brand}. Режим швидкоті свердління не може бути більшим, ніж Max Speed=${this.maxSpeed}.`);
        }
    }

    public getPower(): void {
        console.log(`Підключіть ${this.brand} пристрій до мережі 220 В`);
    }

    public getSpeed(): number {
        return this.currentSpeed;
    }

    public getBrand(): string {
        return this.brand;
    }
}
