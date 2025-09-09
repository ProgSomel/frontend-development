# 005 - Array Methods
## Array.find() --> return the first matched value
```javascript
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"]
const result = fruits.find((fruit)=> fruit === "Orange")
console.log(result);
```
```bash
Orange
```

**---------------------------------------------------------------------------------------------------------------------**

## Array.findIndex() --> return the index number of the first matched value
```javascript
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"]
const result = fruits.findIndex((fruit)=> fruit === "Orange")
console.log(result);
```
```bash
1
```

**---------------------------------------------------------------------------------------------------------------------**

## Array.filter() --> returns an array based on condition and does not change the main array
```javascript
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"]
const result = fruits.filter((fruit)=> fruit === "Orange" || fruit == "Apple")
console.log(result);
```
```bash
['Orange', 'Apple']
```

**---------------------------------------------------------------------------------------------------------------------**

## Array.slice(startingIndex, endingIndex) --> returns an array and does not change the main array
```javascript
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"]
const result = fruits.slice(2, 4)
console.log(result);
console.log("Main Array: ", fruits);
```
```bash
['Lemon', 'Apple']
Main Array:  (5) ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
```

**---------------------------------------------------------------------------------------------------------------------**

## Array.splice(index, noOfRemovedItems, items) --> will return the deleted items in array and will change the original array with new added items
```javascript
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"]
const result = fruits.splice(2, 2, "Kola", "Angor")
console.log(result);
console.log("Main Array: ", fruits);
```
```bash
['Lemon', 'Apple']
Main Array: ['Banana', 'Orange', 'Kola', 'Angor', 'Mango']
```

**---------------------------------------------------------------------------------------------------------------------**

## Array.concat(newItems) --> returns an array with adding newItems. Does not change Main Array
```javascript
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"]
const result = fruits.concat("Fruit 1", "Fruit2")
console.log(result);
console.log("Main Array: ", fruits);
```
```bash
['Banana', 'Orange', 'Lemon', 'Apple', 'Mango', 'Fruit 1', 'Fruit2']
Main Array: ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
```

**---------------------------------------------------------------------------------------------------------------------**

## Array.push(newItems) --> return length of array after adding new Items. Change the main array
```javascript
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"]
const result = fruits.push("Fruit 1", "fruit2")
console.log(result);
console.log("Main Array: ", fruits);
```
```bash
7
Main Array:  (7) ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango', 'Fruit 1', 'fruit2']
```

**---------------------------------------------------------------------------------------------------------------------**

## Array.map() --> like for loop --> returns an array
If we want to do anything with each array element
```javascript
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango", "Apple"]
const result = fruits.map((fruit)=> {
    if(fruit === "Apple") return "Apple"
    else return "N/A"
})
const res = [];
for(let i = 0; i < fruits.length; i++){
    if(fruits[i] == "Apple") res.push("Apple")
    else res.push("N/A")
}
console.log(result);
console.log(res);
console.log("Main Array: ", fruits);
```
```bash
['N/A', 'N/A', 'N/A', 'Apple', 'N/A', 'Apple']
['N/A', 'N/A', 'N/A', 'Apple', 'N/A', 'Apple']
Main Array: ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango', 'Apple']
```

---------------------------------------------------------------------------------------------------------------------

```javascript
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango", "Apple"]
const result = fruits.map((fruit)=> `${fruit} - `)
console.log(result);
console.log("Main Array: ", fruits);
```
```bash
['Banana - ', 'Orange - ', 'Lemon - ', 'Apple - ', 'Mango - ', 'Apple - ']
Main Array:  (6) ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango', 'Apple']
```

**---------------------------------------------------------------------------------------------------------------------**

## Array.reduce() --> return a single value, reducing all elements
```javascript
const numbers = [1, 2, 3, 4, 5];
const result = numbers.reduce((total, currValue)=> total + currValue, 0)
console.log(result);
```
```bash
15
```

**---------------------------------------------------------------------------------------------------------------------**

## Array.forEach() --> returns undefined
```javascript
const numbers = [1, 2, 3, 4, 5];
const result = numbers.forEach((num) => console.log(num))
console.log(result);
console.log(numbers);
```
```bash
1
2
3
4
5
undefined
(5) [1, 2, 3, 4, 5]
```

**---------------------------------------------------------------------------------------------------------------------**

## for...of loop --> for iterable, like: Array, String
```javascript
const numbers = [1, 2, 3, 4, 5];
const name = "Somel Ahmed"

for(num of numbers) {
    console.log(num);
}

for(n of name) {
    console.log(n);
}
```
```bash
1
2
3
4
5
S
o
m
e
l
 
A
h
m
e
d
```

**---------------------------------------------------------------------------------------------------------------------**

## for...in --> used in object
```javascript
const language = {
    name: "JavaScript",
    year: 1995,
    creator: "Brendon Eich"
}

for (key in language) {
    console.log(language[key]);
}
```
```bash
JavaScript
1995
Brendon Eich
```