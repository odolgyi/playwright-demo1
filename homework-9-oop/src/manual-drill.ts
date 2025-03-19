import { Perforator } from './perforator';

export class ManualDrill extends Perforator {
    public constructor(brand: string) {
        super(brand);
    }
    public perforate(): void {
        console.log(`${this.brand} (Ручний): Потрібно докласти фізичне зусилля!`);
    }

    public controlOfRotationalSpeed():void {
        console.log(`${this.brand} Лише ваша фізична сила визначає режим обертання`);
    }
}
