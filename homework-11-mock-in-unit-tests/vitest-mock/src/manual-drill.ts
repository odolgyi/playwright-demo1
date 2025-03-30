import { Perforator } from './perforator';

export class ManualDrill extends Perforator {
    public constructor(brand: string, power: number) {
        super(brand);
    }

    public perforate(): void {
        console.log(`Ручний перфоратор: ${this.brand}  починає свердління`);
    }

    public controlOfRotationalSpeed(): void {
        console.log(`${this.brand} Ваша фізична сила визначає режим обертання`);
    }
}
