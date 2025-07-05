# rest... and ...spread operators
## ...spread -- will create a new copy of array or object. will not change original array
```js
const fruits = ["Banana", "Orange"];
const result = [...fruits];
console.log(result);
```
```bash
['Banana', 'Orange']
```

------------------------------------------------------------------------------------------------------------------------------------

```js
const fruits = ["Banana", "Orange"];
const result = [...fruits];
result.push("Apple")
console.log(result);
console.log(fruits);
```
```bash
['Banana', 'Orange', 'Apple']
['Banana', 'Orange']
```

------------------------------------------------------------------------------------------------------------------------------------

```js
const language = {
    name: "JavaScript",
    year: 1995,
    creator: "Brendon Eich",
}
const result = {...language};
console.log(result);
```
```bash
{name: 'JavaScript', year: 1995, creator: 'Brendon Eich'}
```

**------------------------------------------------------------------------------------------------------------------------------------**

## rest... -- will create an array
```js
function sum(...rest){
    console.log(rest);
}

sum(5, 6, 8)
```
```bash
[5, 6, 8]
```

------------------------------------------------------------------------------------------------------------------------------------

```js
function sum(text, ...rest){
    const result = rest.reduce((sum, cur)=> sum+cur, 0);
    console.log(`${text} is ${result}`);
}

sum("Sum: ", 5, 6, 8)
```
```bash
Sum:  is 19
```

