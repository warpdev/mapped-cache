"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCache = exports.setCache = exports.getCache = exports.initializeCache = void 0;
const Repository_1 = __importDefault(require("./Repository"));
let repository;
const initializeCache = () => __awaiter(void 0, void 0, void 0, function* () {
    repository = new Repository_1.default();
});
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
