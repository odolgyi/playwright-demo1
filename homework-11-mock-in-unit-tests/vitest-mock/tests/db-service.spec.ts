import { beforeEach, describe, Mocked, expect, test, vi } from 'vitest';
import { ShopService } from '../src/shop-service';
import { DbConnectionExample } from '../src/DbConnectionExample';
import { Perforator } from '../src/perforator';
import { ManualDrill } from '../src/manual-drill';
import { ElectricPerforator } from '../src/electric-perforator';
import { CordlessPerforator } from '../src/cordless-perforator';
import { HammerDrill } from '../src/hammer-drill';

describe('Drill Service Unit Tests', () => {
    let mockedDbConnection: Mocked<DbConnectionExample>;
    let service: ShopService;

    const expectedResult: Perforator[] = [
        new ElectricPerforator('Bosch', 80, 5),
        new ElectricPerforator('Metabo', 90, 4),
        new ManualDrill('Stanley', 1),
        new CordlessPerforator('Makita', 60, 50, 3),
        new HammerDrill('Dewalt', 110, 6)
    ];

    beforeEach(() => {
        mockedDbConnection = {
            findElectricPerforator: vi.fn(),
            findManualPerforator: vi.fn(),
            findCordlessPerforator: vi.fn(),
            findHammerPerforator: vi.fn(),
            findMaxPowerDrill: vi.fn()
        } as unknown as Mocked<DbConnectionExample>;
        mockedDbConnection.findManualPerforator.mockReturnValue(
            expectedResult.filter(drill => drill instanceof ManualDrill)
        );
        mockedDbConnection.findElectricPerforator.mockReturnValue(
            expectedResult.filter(drill => drill instanceof ElectricPerforator)
        );
        mockedDbConnection.findCordlessPerforator.mockReturnValue(
            expectedResult.filter(drill => drill instanceof CordlessPerforator)
        );
        mockedDbConnection.findHammerPerforator.mockReturnValue(
            expectedResult.filter(drill => drill instanceof HammerDrill)
        );
        mockedDbConnection.findMaxPowerDrill.mockReturnValue(new HammerDrill('Dewalt', 110, 6));
        service = new ShopService(mockedDbConnection);
    });

    describe('Sort perforators', () => {
        test('Find only Manual Perforator', () => {
            const result = service.findManualPerforator();
            expect(result).toEqual([new ManualDrill('Stanley', 1)]);
            expect(mockedDbConnection.findManualPerforator).toHaveBeenCalledTimes(1);
        });
        test('Find only Electric Perforator', () => {
            const result = service.findElectricPerforator();
            expect(result).toEqual(
                [
                    new ElectricPerforator('Bosch', 80, 5),
                    new ElectricPerforator('Metabo', 90, 4)
                ]);
            expect(mockedDbConnection.findElectricPerforator).toHaveBeenCalledTimes(1);
        });
        test('Find only Cordless Perforator', () => {
            const result = service.findCordlessPerforator();
            expect(result).toEqual(
                [
                    new CordlessPerforator('Makita', 60, 50, 3)
                ]);
            expect(mockedDbConnection.findCordlessPerforator).toHaveBeenCalledTimes(1);
        });
        test('Find only Hammer Perforator', () => {
            const result = service.findHammerPerforator();
            expect(result).toEqual(
                [
                    new HammerDrill('Dewalt', 110, 6)
                ]);
            expect(mockedDbConnection.findHammerPerforator).toHaveBeenCalledTimes(1);
        });
    });
    describe('Find the most powerful drill', () => {
        test('Get the most powerful drill', () => {
            const result = service.findMaxPowerDrill();
            expect(result).toEqual(new HammerDrill('Dewalt', 110, 6));
            expect(mockedDbConnection.findMaxPowerDrill).toHaveBeenCalledTimes(1);
        });
    });
});
