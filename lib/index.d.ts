declare const initializeCache: () => Promise<void>;
declare const getCache: (key: string) => any;
declare const setCache: (key: string, value: any, expire?: number) => void;
declare const deleteCache: (key: string) => void;
export { initializeCache, getCache, setCache, deleteCache };
