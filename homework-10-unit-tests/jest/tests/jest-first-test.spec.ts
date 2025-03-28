import { ElectricPerforator } from '../src/electric-perforator';
import { CordlessPerforator } from '../src/cordless-perforator';
import { expect as expectChai } from 'chai';

describe('Drill test suite', () => {
    beforeEach(() => {
        console.log("Initialising tests");
    });

    it('ElectricDrill має поточний режим швидкоті свердління 4', () => {
        const electricDrill = new ElectricPerforator('Bosch', 800, 6);
        electricDrill.controlOfRotationalSpeed(4);

        expectChai(electricDrill.getSpeed()).to.be.equal(4);
    });

    it('Brand electricDrill = Bosch', () => {
        const electricDrill = new ElectricPerforator('Bosch', 800, 6);
        expectChai(   electricDrill.getBrand()).to.be.equal('Bosch');
    });

    it('Brand cordlessPerforator = Makita', () => {
        const cordlessPerforator = new CordlessPerforator('Makita', 600, 50, 3);
        expectChai(cordlessPerforator.getBrand()).to.be.equal('Makita');
    });
    it('CordlessPerforator має поточний режим швидкоті свердління 3', () => {
        const cordlessPerforator = new CordlessPerforator('Makita', 600, 50, 3);
        cordlessPerforator.controlOfRotationalSpeed(3);

        expectChai(cordlessPerforator.getSpeed()).to.be.equal(3);
    });
});
