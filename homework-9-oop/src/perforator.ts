export abstract class Perforator {
    public constructor(protected brand: string, protected power?: number) {}

    public abstract perforate(): void;
    public abstract controlOfRotationalSpeed(numberOfSpeed: number): void;
}
