import { ElectricPerforator } from '../src/electric-perforator';
import { describe, expect, test } from 'vitest';
import { CordlessPerforator } from '../src/cordless-perforator';

describe('Unit test suite', () => {
    test('ElectricDrill має поточний режим швидкоті свердління 4', () => {
        const electricDrill = new ElectricPerforator('Bosch', 800, 6);
        electricDrill.controlOfRotationalSpeed(4);

        expect(electricDrill.getSpeed()).to.be.equal(4);
    });

    test('Brand electricDrill = Bosch', () => {
        const electricDrill = new ElectricPerforator('Bosch', 800, 6);
        expect(electricDrill.getBrand()).to.be.equal('Bosch');
    });

    test('Brand cordlessPerforator = Makita', () => {
        const cordlessPerforator = new CordlessPerforator('Makita', 600, 50, 3);
        expect(cordlessPerforator.getBrand()).to.be.equal('Makita');
    });
    test('CordlessPerforator має поточний режим швидкоті свердління 3', () => {
        const cordlessPerforator = new CordlessPerforator('Makita', 600, 50, 3);
        cordlessPerforator.controlOfRotationalSpeed(3);

        expect(cordlessPerforator.getSpeed()).to.be.equal(3);
    });
});
