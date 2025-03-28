import { Perforator } from './perforator';
import { IWired } from './iwired';

export class ManualDrill extends Perforator implements IWired {
    public constructor(brand: string) {
        super(brand);
    }

    public perforate(): void {
        console.log(`Ручний перфоратор: ${this.brand}  починає свердління`);
    }

    public controlOfRotationalSpeed(): void {
        console.log(`${this.brand} Ваша фізична сила визначає режим обертання`);
    }

    public getPower(): void {
        console.log(`Пристрій ${this.brand} потребує лише фізичну силу`);
    }
}
