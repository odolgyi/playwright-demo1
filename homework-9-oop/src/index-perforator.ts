import { ElectricPerforator } from './electric-perforator';
import { CordlessPerforator } from './cordless-perforator';
import { ManualDrill } from './manual-drill';

const electricDrill = new ElectricPerforator('Bosch', 800, 6);
const cordlessDrill = new CordlessPerforator('Makita', 600, 50, 3);
const manualDrill = new ManualDrill('Stanley');

electricDrill.perforate();
cordlessDrill.perforate();
manualDrill.perforate();

electricDrill.controlOfRotationalSpeed(4);
cordlessDrill.controlOfRotationalSpeed(2);
manualDrill.controlOfRotationalSpeed();
