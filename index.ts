import Repository from "./Repository";

let repository: Repository;

const initializeCache = async (): Promise<void> => {
   repository = new Repository();
};

const getCache = (key: string) => {
    return repository.get(key);
};

const setCache = (key: string, value: any, expire?: number) => {
    return repository.set(key, value, expire);
};

const deleteCache = (key: string) => {
    return repository.delete(key);
};

export {
    initializeCache,
    getCache,
    setCache,
    deleteCache
};