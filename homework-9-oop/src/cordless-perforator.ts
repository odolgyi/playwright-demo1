import { Perforator } from './perforator';
import * as console from 'node:console';

export class CordlessPerforator extends Perforator {
    private _batteryCapacity: number;
    private _maxSpeed: number;

    public constructor(brand: string, power: number, batteryCapacity: number, maxSpeed: number) {
        super(brand, power);
        this._batteryCapacity = batteryCapacity;
        this._maxSpeed = maxSpeed;
    }

    public perforate(): void {
        console.log(`${this.brand} (Акумуляторний, ${this.batteryCapacity}mAh): Починає свердління завдяки акамулятору!`);
    }

    public controlOfRotationalSpeed(speed: number): void {
        if (speed > 0 && speed < this.maxSpeed) {
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
}
