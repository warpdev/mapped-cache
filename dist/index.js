var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Repository from "./Repository";
let repository;
const initializeCache = () => __awaiter(void 0, void 0, void 0, function* () {
    repository = new Repository();
});
const getCache = (key) => {
    return repository.get(key);
};
const setCache = (key, value, expire) => {
    return repository.set(key, value, expire);
};
const deleteCache = (key) => {
    return repository.delete(key);
};
export { initializeCache, getCache, setCache, deleteCache };
//# sourceMappingURL=index.js.map