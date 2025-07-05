# Nullish(null/undefined) Coalescing and Short Circuit Condition (??)
```js
let lang = null;

console.log(lang ?? "JavaScript"); //? JavaScript
```

-----------------------------------------------------------------------------------------------------------------------------------------

```js
let lang = undefined;

console.log(lang ?? "JavaScript"); //? JavaScript
```

--------------------------------------------------------------------------------------------------------------------------------------

```js
let lang = "Python";

console.log(lang ?? "JavaScript"); //? Python
```

***--------------------------------------------------------------------------------------------------------------------------------------**

## Difference between ||, ??, &&
### || ---> for falsy values(false, undefined, null, 0, '', NaN)
### ?? ---> only for null and undefined
## && only for truthy values