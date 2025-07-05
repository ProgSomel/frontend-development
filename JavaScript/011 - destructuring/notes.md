# Destructuring
## Object Destructuring
```js
const user = {
    id: 339,
    name: "Somel",
    age: 42,
    education: {
        degree: "Graduate"
    }
}

const {name, age} = user;
console.log(name, age);
```
```bash
Somel 42
```

-----------------------------------------------------------------------------------------------------------------------------------------

```js
const user = {
    id: 339,
    name: "Somel",
    age: 42,
    education: {
        degree: "Graduate"
    }
}

const {name, age, education:{degree}} = user
console.log(name, age, degree);
```
```bash
Somel 42 Graduate
```

----------------------------------------------------------------------------------------------------------------------------------

```js
const user = {
    id: 339,
    name: "Somel",
    age: 42,
    education: {
        degree: "Graduate"
    }
}

const {education:{degree}} = user;
console.log(degree);
```
```bash
Graduate
```

---------------------------------------------------------------------------------------------------------------------------------------

```js
const user = {
    id: 339,
    name: "Somel",
    age: 42,
    education: {
        degree: {
            Bsc: "Pass",
            Msc: "Running"
        }
    }
}

const {name, age, education: {degree:{Bsc, Msc}}} = user;
console.log(name, age, Bsc, Msc);
```
```bash
Somel 42 Pass Running
```

-------------------------------------------------------------------------------------------------------------------------------------

```js
const user = {
    id: 339,
    name: "Somel",
    age: 42,
    
}
const {education:{degree}} = user; 
console.log(degree);
```
```bash
Uncaught TypeError: Cannot read properties of undefined (reading 'degree')
    at script.js:7:19
```

----------------------------------------------------------------------------------------------------------------------------------

```js
const user = {
    id: 339,
    name: "Somel",
    age: 42,
    
}
const {education:{degree} = {}} = user; //? default value for degree 
console.log(degree);
```
```bash
undefined
```

-----------------------------------------------------------------------------------------------------------------------------------

```js
const user = {
    id: 339,
    name: "Somel",
    age: 42,
    education: {
        degree: "Graduate",
        school: {
            name: "Rajuk Uttara Model College"
        }
    }
}
const {education:{school:{name}}={}} = user
console.log(name);
```
```bash
Rajuk Uttara Model College
```

--------------------------------------------------------------------------------------------------------------------------------------

```js
const person = { name: "Alice", age: 25 };
const { name, age } = person;

console.log(name); // "Alice"
console.log(age);  // 25
```

------------------------------------------------------------------------------------------------------------------------------------

```js
const person = { name: "Alice", age: 25 };
const { name, age } = person;

//! rename variables while destructuring:
const { name: fullName } = person;
console.log(fullName); // "Alice"
```

------------------------------------------------------------------------------------------------------------------------------------

```js
const person = { name: "Alice", age: 25 };
const { name, age } = person;

//! set default values:
const { height = 170 } = person;
console.log(height); // 170 (default, since person.height is undefined)
```

--------------------------------------------------------------------------------------------------------------------------------------

```js
const data = {
    user: {
        id: 1,
        info:{
            email:"somelahmed.prog@gmail.com"
        }
    }
}

const {user:{info:{email}}={}} = data
console.log(email);
```
```bash
somelahmed.prog@gmail.com
```

--------------------------------------------------------------------------------------------------------------------------------------

```js
//! Destructuring in function parameter
function greet({ name }) {
  console.log("Hello, " + name);
}

greet({ name: "Sam" }); // Hello, Sam
```

**--------------------------------------------------------------------------------------------------------------------------------------**

## Array Destructuring
```js
const arr = [1, 2, 3];
const [a, b, c] = arr;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
```

--------------------------------------------------------------------------------------------------------------------------------------

```js
//! can skip elements or use defaults:
const arr = [10, 20];
const [x, , y = 30] = arr;

console.log(x); // 10
console.log(y); // 30 (because the third element is missing)
```
