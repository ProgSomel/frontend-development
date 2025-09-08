# 002 - Function --> by default returns undefined
```go
function hello() {
    console.log("Hello World");
}

let message = hello();

console.log(message);
```
```bash
Hello World
undefined
```

------------------------------------------------------------------------------------------------------------------------

## Function Expression
Statement --> doing some action on it
Expression --> evaluates to a value

```javaScript
const hello = function() {
    console.log("Hello world");
}

hello();
```
```bash
Hello world
```

------------------------------------------------------------------------------------------------------------------------

## Named function Expression
```javaScript
const hello = function hello () {
    console.log("Hello world");
}

hello();
```
```bash
Hello world
```

**------------------------------------------------------------------------------------------------------------------------**

## Arrow Function
```javaScript
const hello = () => {
    console.log("Hello world");
}
hello()
```
```bash
Hello world
```

--------------------------------------------------------------------------------------------------------------------------

```javaScript
//! returning object from function
const hello = () => {
    return {
        a: 5,
        b: 10
    }
}
console.log(hello());
```
```bash
{a: 5, b: 10}
```

--------------------------------------------------------------------------------------------------------------------------

```javaScript
//! returning object from function
const hello = () => (
    {
        a: 5,
        b: 10
    }
)
console.log(hello());
```
```bash
{a: 5, b: 10}
```

**------------------------------------------------------------------------------------------------------------------------**

## Anynomous Function
```javaScript
function hello() {
    return ()=> {
        console.log("Hello World");
    }
}
const result = hello();
result()
```
```bash
Hello World
```

--------------------------------------------------------------------------------------------------------------------------

```javaScript
function hello() {
    return function () {
        console.log("Hello World");
    }
}
const result = hello();
result()
```
```bash
Hello World
```