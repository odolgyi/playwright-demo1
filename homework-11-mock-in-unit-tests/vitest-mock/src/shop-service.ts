import { DbConnectionExample } from './DbConnectionExample';
import { ElectricPerforator } from './electric-perforator';
import { ManualDrill } from './manual-drill';
import { HammerDrill } from './hammer-drill';
import { CordlessPerforator } from './cordless-perforator';
import { Perforator } from './perforator';


export class ShopService {
    private _dbConnection: DbConnectionExample;

    public constructor(dbConnection: DbConnectionExample) {
        this._dbConnection = dbConnection;
    }

    public findElectricPerforator(): ElectricPerforator[] {
        return this._dbConnection.findElectricPerforator();
    }

    public findManualPerforator(): ManualDrill[] {
        return this._dbConnection.findManualPerforator();
    }

    public findHammerPerforator(): HammerDrill[] {
        return this._dbConnection.findHammerPerforator();
    }

    public findCordlessPerforator(): CordlessPerforator[] {
        return this._dbConnection.findCordlessPerforator();
    }

    public findMaxPowerDrill(): Perforator | null {
        return this._dbConnection.findMaxPowerDrill();
    }
}
