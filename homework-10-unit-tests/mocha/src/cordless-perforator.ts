import { Perforator } from './perforator';
import { IWired } from './iwired';

export class CordlessPerforator extends Perforator implements IWired  {
    private _batteryCapacity: number;
    private _maxSpeed: number;
    private currentSpeed: number;

    public constructor(brand: string, power: number, batteryCapacity: number, maxSpeed: number) {
        super(brand, power);
        this._batteryCapacity = batteryCapacity;
        this._maxSpeed = maxSpeed;
        this.currentSpeed = 1;
    }

    public perforate(): void {
        console.log(`${this.brand} (Акумулятор, ${this.batteryCapacity}mAh): Починає свердління завдяки акумулятору!`);
    }

    public controlOfRotationalSpeed(speed: number): void {
        if (speed > 0 && speed <= this.maxSpeed) {
            this.currentSpeed = speed;
            console.log(`${this.brand} має поточний режим швидкоті свердління ${speed}.`);
        } else {
            console.log(`${this.brand}. Режим швидкоті свердління не може бути більшим, ніж Max Speed=${this.maxSpeed}.`);
        }
    }

    public get batteryCapacity(): number {
        return this._batteryCapacity;
    }

    public get maxSpeed(): number {
        return this._maxSpeed;
    }

    public getPower(): void {
        console.log(`Підключіть до ${this.brand} пристрою акумулятор`);
    }

    public getSpeed(): number {
        return this.currentSpeed;
    }

    public getBrand(): string {
        return this.brand;
    }
}
