const arr = [10, 20];
const [x, , y = 30] = arr;

console.log(x); // 10
console.log(y); // 30 (because the third element is missing)
