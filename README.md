# Mapped Cache

### What is a Mapped Cache?
Simple in-memory cache that maps keys to values.

### Usage

```ts
import {
    initializeCache, 
    getCache,
    setCache,
    deleteCache
} from "mapped-cache";

// Initialize the cache before use
initializeCache();

// Write to the cache without expire
setCache("key", { value: "value" });
/** key is string, value is any type */


// Write to the cache with expire
// Expire time is in milliseconds
setCache("key", { value: "value" }, 1000 * 60);

// Read from the cache
const value = getCache("key");

// Delete from the cache
deleteCache("key");
```