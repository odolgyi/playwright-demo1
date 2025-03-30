import { ElectricPerforator } from './electric-perforator';
import { CordlessPerforator } from './cordless-perforator';
import { ManualDrill } from './manual-drill';
import { HammerDrill } from './hammer-drill';

const electricDrill = new ElectricPerforator('Bosch', 800, 6);
const cordlessDrill = new CordlessPerforator('Makita', 600, 50, 3);
const manualDrill = new ManualDrill('Stanley', 1);
const hammerDrill = new HammerDrill('Dewalt', 900, 8);

console.log('######################################');
electricDrill.getPower();
electricDrill.perforate();
electricDrill.controlOfRotationalSpeed(4);

console.log('######################################');
cordlessDrill.perforate();
cordlessDrill.controlOfRotationalSpeed(2);

console.log('######################################');
manualDrill.perforate();
manualDrill.controlOfRotationalSpeed();

console.log('######################################');
hammerDrill.getPower();
hammerDrill.controlOfRotationalSpeed(5);
hammerDrill.turnOnHammerMode(true);
hammerDrill.perforate();
hammerDrill.turnOnHammerMode(false);
hammerDrill.perforate();
