# Queueing a Series of State Update

### 1. Batches state updates

#### 1). features of batching
1. optimize performance.
2. React only does it when it is safe.

#### 2). update a state variable multiple times
1. path a function to it instead of directly replacing old value.
```js
setNumber(n => n + 1);

// instead of

setNumber(number + 1);
```
