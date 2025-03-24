import { Perforator } from './perforator';
import { IWired } from './iwired';

export class HammerDrill extends Perforator implements IWired {

    private maxSpeed: number;
    private flagDrillingMode: boolean;

    public constructor(brand: string, power: number, maxSpeed: number) {
        super(brand, power);
        this.maxSpeed = maxSpeed;
        this.flagDrillingMode = false;
    }

    public perforate(): void {
        console.log(`${this.brand} (Електричний, ${this.power}W): Починає свердління завдяки електроенергії мережі.`);
    }

    public controlOfRotationalSpeed(speed: number): void {
        if (speed > 0 && speed < this.maxSpeed) {
            console.log(`${this.brand} має поточний режим швидкоті свердління ${speed}.`);
        } else {
            console.log(`${this.brand}. Режим швидкоті свердління не може бути більшим, ніж Max Speed=${this.maxSpeed}.`);
        }
    }

    public turnOnHammerMode (enabled: boolean): boolean {
        if (enabled){
            this.flagDrillingMode = true;
            console.log(`Ввімкнуто ударний режим для ${this.brand}.`);
        }
        else {
            this.flagDrillingMode = false;
            console.log(`Ударний режим для ${this.brand} вимкнуто.`);
        }
        return this.flagDrillingMode;
    }

    public getPower(): void {
        console.log(`Підключіть ${this.brand} пристрій до мережі 220 В`);
    }

    public get flagDrillingStatus(): boolean {
        return this.flagDrillingMode;
    }
}
