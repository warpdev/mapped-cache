class Repository {
    private bucket: Map<string, any>;
    constructor() {
        this.bucket = new Map();
    }

    public get(key: string): any {
        return this.bucket.get(key);
    }

    public set(key: string, value: any, expire?: number): void {
        this.bucket.set(key, value);
        if(expire) {
            setTimeout(() => {
                this.bucket.delete(key);
            }, expire);
        }
    }

    public has(key: string): boolean {
        return this.bucket.has(key);
    }

    public delete(key: string): void {
        this.bucket.delete(key);
    }
}

export default Repository;