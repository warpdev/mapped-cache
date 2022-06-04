declare class Repository {
    private bucket;
    constructor();
    get(key: string): any;
    set(key: string, value: any, expire?: number): void;
    has(key: string): boolean;
    delete(key: string): void;
}
export default Repository;
//# sourceMappingURL=Repository.d.ts.map