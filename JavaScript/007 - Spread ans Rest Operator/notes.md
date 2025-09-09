# 007 - Spread and Rest Operator
## spreed operator --> ...Array
```go

const fruits = ["Banana", "Orange"]

const language = {
    name: "JavaScript",
    year: 1995,
    creator: "Brendon Eich",
}

const result = [...fruits]
console.log(result);
```
```bash
['Banana', 'Orange']
```

----------------------------------------------------------------------------------------------------------------------

```javascript

const fruits = ["Banana", "Orange"]

const language = {
    name: "JavaScript",
    year: 1995,
    creator: "Brendon Eich",
}

const result = [...fruits, "PineApple"]
console.log(result);
```
```bash
['Banana', 'Orange', 'PineApple']
```

----------------------------------------------------------------------------------------------------------------------

```javascript

const fruits = ["Banana", "Orange"]

const language = {
    name: "JavaScript",
    year: 1995,
    creator: "Brendon Eich",
}

const result = {...language}
console.log(result);
```
```bash
{name: 'JavaScript', year: 1995, creator: 'Brendon Eich'}
```

**----------------------------------------------------------------------------------------------------------------------**

## Rest operator
```javascript

function sum(...numbers) {
    console.log(numbers);
}

sum(5, 6, 8);
```
```bash
[5, 6, 8]
```