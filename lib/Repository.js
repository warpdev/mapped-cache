"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Repository {
    constructor() {
        this.bucket = new Map();
    }
    get(key) {
        return this.bucket.get(key);
    }
    set(key, value, expire) {
        this.bucket.set(key, value);
        setTimeout(() => {
            this.bucket.delete(key);
        }, expire);
    }
    has(key) {
        return this.bucket.has(key);
    }
    delete(key) {
        this.bucket.delete(key);
    }
}
exports.default = Repository;
