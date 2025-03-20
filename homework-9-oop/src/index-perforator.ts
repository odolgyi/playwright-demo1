import { ElectricPerforator } from './electric-perforator';
import { CordlessPerforator } from './cordless-perforator';
import { ManualDrill } from './manual-drill';

const electricDrill = new ElectricPerforator('Bosch', 800, 6);
const cordlessDrill = new CordlessPerforator('Makita', 600, 50, 3);
const manualDrill = new ManualDrill('Stanley');

console.log('######################################');
electricDrill.getPower();
electricDrill.perforate();
electricDrill.controlOfRotationalSpeed(4);

console.log('######################################');
cordlessDrill.getPower();
cordlessDrill.perforate();
cordlessDrill.controlOfRotationalSpeed(2);

console.log('######################################');
manualDrill.getPower();
manualDrill.perforate();
manualDrill.controlOfRotationalSpeed();
