import { Perforator } from './perforator';
import { ElectricPerforator } from './electric-perforator';
import { ManualDrill } from './manual-drill';
import { HammerDrill } from './hammer-drill';
import { CordlessPerforator } from './cordless-perforator';


export class DbConnectionExample {
    public drills: Perforator[];

    public constructor(drills: Perforator[]) {
        this.drills = drills;
    }

    public findElectricPerforator(): ElectricPerforator[] {
        return this.drills.filter(
            (drill): drill is ElectricPerforator => drill instanceof ElectricPerforator
        );
    }

    public findManualPerforator(): ManualDrill[] {
        return this.drills.filter(
            (drill): drill is ManualDrill => drill instanceof ManualDrill
        );
    }

    public findHammerPerforator(): HammerDrill[] {
        return this.drills.filter(
            (drill): drill is HammerDrill => drill instanceof HammerDrill
        );
    }

    public findCordlessPerforator(): CordlessPerforator[] {
        return this.drills.filter(
            (drill): drill is CordlessPerforator => drill instanceof CordlessPerforator
        );
    }

    public findMaxPowerDrill(): Perforator | null {
        if (this.drills.length === 0) return null; // Handle empty array case
        const maxPower = Math.max(...this.drills.map(p => p.getDrillPower() ?? 0));
        return this.drills.find(p => (p.getDrillPower() ?? 0) === maxPower) || null;
    }
}
