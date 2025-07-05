# for...of and for...in
## for...of -- for iterable
```js
const numbers = [1, 2, 3, 4, 5];
for(num of numbers){
    console.log(num);
}
```
```bash
1
2
3
4
5
```

-----------------------------------------------------------------------------------------------------------------------------------------

```js
const numbers = [1, 2, 3, 4, 5];
const name = "somel";
for(c of name){
    console.log(c);
}
```
```bash
s
o
m
e
l
```

**-----------------------------------------------------------------------------------------------------------------------------------------**

## for...in -- for objects
```JavaScript
const language = {
    name: "JavaScript",
    year: 1995,
    creator: "Brendon Eich"
}

for(key in language){
    console.log(language[key]);
}
```
```bash
JavaScript
1995
Brendon Eich
```
