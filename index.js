"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCache = exports.setCache = exports.getCache = exports.initializeCache = void 0;
const Repository_1 = __importDefault(require("./src/Repository"));
let repository;
const initializeCache = () => {
    repository = new Repository_1.default();
};
exports.initializeCache = initializeCache;
const getCache = (key) => {
    return repository.get(key);
};
exports.getCache = getCache;
const setCache = (key, value, expire) => {
    return repository.set(key, value, expire);
};
exports.setCache = setCache;
const deleteCache = (key) => {
    return repository.delete(key);
};
exports.deleteCache = deleteCache;
//# sourceMappingURL=index.js.map