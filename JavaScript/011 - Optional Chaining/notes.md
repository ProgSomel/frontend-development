# 011 - Optional Chaining
```javascript

const user = {
    id: 339,
    name: "Sumit",
    age: 42,
    education: {
        degree: "Graduate",
        school: {
            name: "Rangpur Zilla School"
        }
    }
}

console.log(user?.education?.school?.namet);
```
```bash
undefined
```