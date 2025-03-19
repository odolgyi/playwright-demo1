import { IDrill } from './idrill';

export abstract class Perforator implements IDrill {
    public constructor(protected brand: string, protected power?: number) {}

    public abstract perforate(): void;
    public abstract controlOfRotationalSpeed(numberOfSpeed: number): void;
}
