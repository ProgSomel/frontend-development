# Array Methods

## array.find() -- return one value(the finding value). Not change the original array
```javascript
const fruits = ["Banana", "Orange", "Lemon"];
const result = fruits.find((f)=> f === "Orange");
console.log(result);
```
```bash
Orange
```

**-------------------------------------------------------------------------------------------------------------------------------------------------**

## array.findIndex() -- return the index value of matched value. Not change the original array
```javascript
const fruits = ["Banana", "Orange", "Lemon"];
const result = fruits.findIndex((f)=> f === "Orange");
console.log(result);
```
```bash
1
```

**----------------------------------------------------------------------------------------------------------------------------------------------**

## array.filter() -- return array with matched multiple values. Not change the original array
```javascript
const fruits = ["Banana", "Orange", "Lemon", "Orange", "Mango"];
const result = fruits.filter((f)=> f === "Orange" || f === "Mango");
console.log(result);
```
```bash
['Orange', 'Orange', 'Mango']
```

**----------------------------------------------------------------------------------------------------------------------------------------**

## array.slice(starting index, ending index) -- sliced values from an array.return an array with sliced values and main array will not change
```javascript
const fruits = ["Banana", "Orange", "Lemon", "Orange", "Mango"];
const result = fruits.slice(1, 4);
console.log(result);
```
```bash
['Orange', 'Lemon', 'Orange']
```

**-------------------------------------------------------------------------------------------------------------------------------------------**

## array.splice(startingIndex, numberOfElements to be removed) -- sliced values in the basis of number of elements. return an array with sliced values and also change the main array
```javascript
const fruits = ["Banana", "Orange", "Lemon", "Orange", "Mango"];
const result = fruits.splice(1, 2);
console.log(result);
console.log(fruits);
```
```bash
['Orange', 'Lemon']
['Banana', 'Orange', 'Mango']
```

----------------------------------------------------------------------------------------------------------------------------------------

### array.splice(1,2, value1, value2, ...). We can also add values with splice after splicing.
```javascript
const fruits = ["Banana", "Orange", "Lemon", "Orange", "Mango"];
const result = fruits.splice(1, 2, "fruit1", "fruit2", "fruit3");
console.log(result);
console.log(fruits);
```
```bash
['Orange', 'Lemon']
['Banana', 'fruit1', 'fruit2', 'fruit3', 'Orange', 'Mango']
```

**-------------------------------------------------------------------------------------------------------------------------------------------**

## array.concat(value1, value2, ...). add new values with existing array and return an array with new added values but it does not change the original array
```javascript
const fruits = ["Banana", "Orange", "Lemon", "Orange", "Mango"];
const result = fruits.concat("fruit1", "fruit2", "fruit3");
console.log(result);
console.log(fruits);
```
```bash
['Banana', 'Orange', 'Lemon', 'Orange', 'Mango', 'fruit1', 'fruit2', 'fruit3']
['Banana', 'Orange', 'Lemon', 'Orange', 'Mango']
```

**--------------------------------------------------------------------------------------------------------------------------------------**

## array.push(value1, value2, ...) -- it is like array.concat(), will add values to the end of the array but will return the length of the array after pushing the value, it will not return an array. also it will change the original array
```javascript
const fruits = ["Banana", "Orange", "Lemon", "Orange", "Mango"];
const result = fruits.push("fruit1", "fruit2", "fruit3");
console.log(result);
console.log(fruits);
```
```bash
8
['Banana', 'Orange', 'Lemon', 'Orange', 'Mango', 'fruit1', 'fruit2', 'fruit3']
```

**---------------------------------------------------------------------------------------------------------------------------------------**

## array.map() -- it is like for loop. it will return an array. It's best use is if we want to change array elements. will not change original array
```javascript
const fruits = ["Banana", "Orange", "Lemon", "Orange", "Mango"];
const result = fruits.map((f)=> f === "Banana");
console.log(result);
console.log(fruits);
```
```bash
[true, false, false, false, false]
['Banana', 'Orange', 'Lemon', 'Orange', 'Mango']
```

----------------------------------------------------------------------------------------------------------------------------------

```javascript
const fruits = ["Apple", "Banana", "Orange", "Lemon", "Orange", "Mango"];
const res = [];
for(let i = 0; i <= fruits.length; i++){
    if(fruits[i] === "Apple"){
        res.push("Apple")
    }else{
        res.push("N/A")
    }
}
console.log(res);
console.log(fruits);
```
```bash
['Apple', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A']
['Apple', 'Banana', 'Orange', 'Lemon', 'Orange', 'Mango']
```

---------------------------------------------------------------------------------------------------------------------------------------

```javascript
const fruits = ["Apple", "Banana", "Orange", "Lemon", "Orange", "Mango"];
const res = fruits.map((f)=> {
    if(f === "Apple"){
        return "Apple"
    }else{
        return "N/A"
    }
})
console.log(res);
console.log(fruits);
```
```bash
['Apple', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A']
['Apple', 'Banana', 'Orange', 'Lemon', 'Orange', 'Mango']
```

--------------------------------------------------------------------------------------------------------------------------------------

```javascript
const fruits = ["Apple", "Banana", "Orange", "Lemon", "Orange", "Mango"];
const res = fruits.map((f)=> `${f} - `)
console.log(res);
console.log(fruits);
```
```bash
['Apple - ', 'Banana - ', 'Orange - ', 'Lemon - ', 'Orange - ', 'Mango - ']
['Apple', 'Banana', 'Orange', 'Lemon', 'Orange', 'Mango']
```

**---------------------------------------------------------------------------------------------------------------------------------------**

## array.reduce()
```javascript
const numbers = [1, 2, 3, 4, 5];
const result = numbers.reduce((total, currentValue)=> total+currentValue , 0)
console.log(result);
```
```bash
15
```

**--------------------------------------------------------------------------------------------------------------------------------------**

## array.forEach()
```javascript
const fruits = ["apple", "banana", "cherry"];

fruits.forEach(function(fruit, idx) {
  console.log(idx + ":", fruit);
});
// Output:
// 0: apple
// 1: banana
// 2: cherry
```

-----------------------------------------------------------------------------------------------------------------------------------

```javascript
const fruits = ["apple", "banana", "cherry"];

fruits.forEach((fruit) => {
  console.log(fruit.toUpperCase());
});
/**
 * APPLE
   BANANA
   CHERRY
 */
```

**---------------------------------------------------------------------------------------------------------------------------------------**

## Difference between array.forEach() and array.map()
**1. Purpose & Return Value**
**forEach**
- **Purpose:** Runs a function for each item in the array.
- **Return value:** Always returns undefined.
- **Use when:** You want to do something with each element (e.g., print, update variables), but don't need a new array.
```javascript
let sum = 0;
[1, 2, 3].forEach(num => sum += num); // sum is now 6
```

**map**
**Purpose:** Runs a function for each item and creates a new array with the returned values.
- **Return value:** A new array with the results of calling the function on every element.
- **Use when:** You want to transform an array into a new array.
```javascript
let doubled = [1, 2, 3].map(num => num * 2); // [2, 4, 6]
```

**2. Modifying the Original Array**
- Both can modify the original array if you change its elements inside the function.
- But map is meant for creating a new array rather than side effects.

**3. Chaining**
- **map**can be chained with other array methods because it returns an array.
```js
[1, 2, 3].map(x => x * 2).filter(x => x > 2); // [4, 6]
```
- **forEach** cannot be chained because it returns undefined.


**4. Breaking the Loop**
- Neither can be broken with break or return like a regular loop.
- Use a **for or for...of loop** if you need to break early.

