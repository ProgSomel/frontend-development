# 012 - Nullish Coalescing Operator
**Nullish** --> means like NULL: null/Undefined
```javascript
let lang = null;
console.log(lang ?? "Javascript"); //? if null then Javascript
```
```bash
Javascript
```

---------------------------------------------------------------------------------------------------------------------

```javascript
let lang = "Python";
console.log(lang ?? "Javascript"); //? if null then Javascript
```
```bash
Python
```

---------------------------------------------------------------------------------------------------------------------

```javascript
let lang = undefined;
console.log(lang ?? "Javascript"); //? if null/undefined then Javascript
```
```bash
Javascript
```

**---------------------------------------------------------------------------------------------------------------------**

## logical OR -> for all falsy values --> returns right side
```javascript
let lang = false;
console.log(lang || "Javascript"); 
```
```bash
Javascript
```

**---------------------------------------------------------------------------------------------------------------------**

## logical and -> for all truthy values --> returns right side
```javascript
let lang = "python";
console.log(lang && "Javascript"); 
```
```bash
Javascript
```

---------------------------------------------------------------------------------------------------------------------

```javascript
let lang = false;
console.log(lang && "Javascript"); 
```
```bash
false
```