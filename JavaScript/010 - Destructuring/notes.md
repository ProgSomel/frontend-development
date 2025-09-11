# 010 - Destructuring
```javascript

const user = {
    id: 339,
    name: "Sumit",
    age: 42,
    education: {
        degree: "Graduate"
    }
}

const {name, age} = user
console.log(name, age);
```
```bash
Sumit 42
```

--------------------------------------------------------------------------------------------------------------------------

```javascript

const user = {
    id: 339,
    name: "Sumit",
    age: 42,
    education: {
        degree: "Graduate"
    }
}

const {name:naam, age:agg} = user
console.log(naam, agg);
```
```bash
Sumit 42
```

--------------------------------------------------------------------------------------------------------------------------

```javascript

const user = {
    id: 339,
    name: "Sumit",
    age: 42,
    education: {
        degree: "Graduate"
    }
}

const {education:{degree}} = user
console.log(degree);
```
```bash
Graduate
```

--------------------------------------------------------------------------------------------------------------------------

```javascript

const user = {
    id: 339,
    name: "Sumit",
    age: 42,
    education: {
        degree: "Graduate"
    }
}

const {education:{degree:deg}} = user
console.log(deg);
```
```bash
Graduate
```

--------------------------------------------------------------------------------------------------------------------------

```javascript

const user = {
    id: 339,
    name: "Sumit",
    age: 42,
    education: {
        degree: "Graduate"
    }
}

const {education:{degree} = {}} = user //? with default value
console.log(degree);
```
```bash
Graduate
```

--------------------------------------------------------------------------------------------------------------------------

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

const {education:{school:{name}}} = user
console.log(name);
```
```bash
Rangpur Zilla School
```

--------------------------------------------------------------------------------------------------------------------------

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

const {education:{school:{name:naam}}={}} = user
console.log(naam);
```
```bash
Rangpur Zilla School
```