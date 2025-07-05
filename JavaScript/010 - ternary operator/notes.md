# Ternary Operator --> short cut for if/else

```js
const a = 6;
let result;
if(a%2 == 0){
    result = 'Even'
}else{
    result = 'Odd'
}

console.log(result);
```
```bash
Even
```

----------------------------------------------------------------------------------------------------------------------------------------

```js
const a = 6;

const result = a%2 === 0 ? 'Even' : 'Odd';
console.log(result);
```
```bash
Even
```