type CompareReturnValue = 1 | 0;
export type CompareFunction = <T>(a: T, b: T) => CompareReturnValue;

export class Comparator<T> {
    private compareFn: CompareFunction;

    constructor(compareFn?: CompareFunction) {
        this.compareFn = compareFn ?? ((a, b) =>  a === b ? 0 : 1);
    }

    public equal(a: T, b: T): CompareReturnValue {
        return this.compareFn(a, b);
    }
}