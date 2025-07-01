# Primitive(String, number, boolean...) VS Reference(Object, array)

## Primitive -- if we change the value then we change only the value
```javascript
let x = 5;
let y = 6;
x = y;
y = 7;
console.log(x); //? 6
console.log(y); //? 7
```

**----------------------------------------------------------------------------------------------------------------------------------------------------**

## Reference -- chane the Reference or address
```javascript
let a = ["JS", "Python"];
let b = ["HTML", "CSS"];

b = a;
console.log(a);
console.log(b);
a.push("Go");
console.log(a);
console.log(b);
```
```bash
(2) ['JS', 'Python']
script.js:6 (2) ['JS', 'Python']
script.js:8 (3) ['JS', 'Python', 'Go']
script.js:9 (3) ['JS', 'Python', 'Go']
```