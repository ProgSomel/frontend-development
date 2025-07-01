# Functions

## Regular Function
```javascript
function hello(){
    console.log("Hello world");
}
```

------------------------------------------------------------------------------------------------------------------------------------

### In JavaScript, function by default returns undefined
```javascript
function hello(){
    console.log("Hello world");
}

let msg = hello();
console.log(msg);
```

**------------------------------------------------------------------------------------------------------------------------------------------**

## Function Expression
**Expression** -- convert to a value or evaluate to a value
**Statement** -- do action on anything
```javascript
const hello = function(){
    console.log("Hello world"); //? Hello world
}

hello();
```

**-----------------------------------------------------------------------------------------------------------------------------------------------**

## Named Function Expression
```javascript
const hello = function printHello(){
    console.log("Hello world"); //? Hello world
}

hello();
```

**--------------------------------------------------------------------------------------------------------------------------------------**

## Arrow Function
```javascript
const hello = () =>{
    console.log("Hello World"); //? Hello World
}
hello();
```

-------------------------------------------------------------------------------------------------------------------------------------------------------

### if arrow function have only one line to Execute
```javascript
const hello = () => console.log("Hello World");
hello();
```
```bash
Hello World
```

-------------------------------------------------------------------------------------------------------------------------------------

```javascript
const hello = () =>{
    return 5;
};
let value = hello();
console.log(value); //? 5
```

---------------------------------------------------------------------------------------------------------------------------------------

```javascript
const hello = () =>  5;
let value = hello();
console.log(value); //? 5
```

-----------------------------------------------------------------------------------------------------------------------------------------

### Arrow Function with object return
```javascript
const hello = () =>  {
    return{
        a : 5,
        b : 10
    }
};
let value = hello();
console.log(value);
```
```bash
{a: 5, b: 10}
```

------------------------------------------------------------------------------------------------------------------------------------------

### Arrow Function with Object return in oneline
```javascript
const hello = () =>  ({
        a : 5,
        b : 10
    }
);
let value = hello();
console.log(value);
```
```bash
{a: 5, b: 10}
```

**----------------------------------------------------------------------------------------------------------------------------------------**

## Anonymous Function
```javascript
function hello(){
    //? Anonymous Function
    return function(){
        console.log("Hello World");
    }
}

let value = hello();
value()
```
```bash
Hello World
```

-----------------------------------------------------------------------------------------------------------------------------------------

```javascript
function hello(){
    //? Anonymous Function
    return ()=>{
        console.log("Hello World");
    }
}

let value = hello();
value()
```
```bash
Hello World
```