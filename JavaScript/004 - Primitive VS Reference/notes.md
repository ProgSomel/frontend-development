# 004 - Primitive VS Reference
**Primitive** --> core types like: string, number, ... for Primitive if we change the value than we change the value not the Reference
**Reference** --> object, array, ... for Reference type if we change the value than we change the Reference value

```javascript
let x = 5;
let y = 6;
x = y;
y = 7;
console.log("x: ", x);
console.log("y: ", y);
```
```bash
x:  6
y:  7
```

-----------------------------------------------------------------------------------------------------------------------

```javascript
let a = ["JS", "Python"]
let b = ["HTML", "CSS"]

b = a;

console.log(a);
console.log(b);

a.push("Go")

console.log(a);
console.log(b);
```
```bash
['JS', 'Python']
['JS', 'Python']
['JS', 'Python', 'Go']
['JS', 'Python', 'Go']
```