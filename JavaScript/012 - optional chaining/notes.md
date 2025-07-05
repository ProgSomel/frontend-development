# Optional Chaning
```js
const user = {
    id: 339,
    name: "Somel",
    age: 42,
    education: {
        degree: "Graduate",
        school: {
            name: "Rajuk Uttara Model College"
        }
    }
}
console.log(user?.education?.school?.name);
```