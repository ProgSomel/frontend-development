# Asynchronous JavaScript --> always returns promise
```javascript
async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1") 
    //? in response we will get a string buffer. We need to convert it to json
    const data = await response.json() //? converting to json is also asynchronous. So need to use await
    console.log(data);
}

getData()
```
```bash
{userId: 1, id: 1, title: 'delectus aut autem', completed: false}
```

-------------------------------------------------------------------------------------------------------------------------

```javascript
async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1") 
    //? in response we will get a string buffer. We need to convert it to json
    const data = await response.json() //? converting to json is also asynchronous. So need to use await
    console.log(data);
}

function bigWork() {
    // onk kah korchi
    return getData();
}

const resutlt = await bigWork();
```
```bash
Uncaught SyntaxError: await is only valid in async functions and the top level bodies of modules (at script.js:13:17)
```

-------------------------------------------------------------------------------------------------------------------------

```javascript
async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1") 
    //? in response we will get a string buffer. We need to convert it to json
    const data = await response.json() //? converting to json is also asynchronous. So need to use await
    console.log(data);
}

function bigWork() {
    // onk kah korchi
    return getData();
}

(async function(){
    const resutlt = await bigWork();
})()
```
```bash
{userId: 1, id: 1, title: 'delectus aut autem', completed: false}
```

-------------------------------------------------------------------------------------------------------------------------

```javascript
async function getData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1") 
        //? in response we will get a string buffer. We need to convert it to json
        const data = await response.json() //? converting to json is also asynchronous. So need to use await
        console.log(data);
    }catch(err) {
        console.log(err);
    }
}

function bigWork() {
    // onk kah korchi
    return getData();
}

(async function(){
    const resutlt = await bigWork();
})()
```
```bash
{userId: 1, id: 1, title: 'delectus aut autem', completed: false}
```