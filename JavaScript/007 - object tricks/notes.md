# Object tricks
## Object.keys(objectName)
```js
const language = {
    name: "JavaScript",
    year: 1995,
    creator: "Brendon Eich"
}

console.log(Object.keys(language));
```
```bash
['name', 'year', 'creator']
```

**--------------------------------------------------------------------------------------------------------------------------------------**

## Object.values(objectName)
```js
const language = {
    name: "JavaScript",
    year: 1995,
    creator: "Brendon Eich"
}

console.log(Object.values(language));
```
```bash
['JavaScript', 1995, 'Brendon Eich']
```

**----------------------------------------------------------------------------------------------------------------------------------**

## Object.entries(objectName)
```js
const language = {
    name: "JavaScript",
    year: 1995,
    creator: "Brendon Eich"
}

console.log(Object.entries(language));
```
```bash
0 : ['name', 'JavaScript']
1 : ['year', 1995]
2 : ['creator', 'Brendon Eich']
```

**-------------------------------------------------------------------------------------------------------------------------------------**

## New key adding
```js
const language = {
    name: "JavaScript",
    year: 1995,
    creator: "Brendon Eich"
}

language.property = "100%";
console.log(language);
```
```bash
{name: 'JavaScript', year: 1995, creator: 'Brendon Eich', property: '100%'}
```

------------------------------------------------------------------------------------------------------------------------------------
```js
const language = {
    name: "JavaScript",
    year: 1995,
    creator: "Brendon Eich"
}
const a = "popularity";
language.a = "100%";
console.log(language);
```
```bash
{name: 'JavaScript', year: 1995, creator: 'Brendon Eich', a: '100%'}
```

------------------------------------------------------------------------------------------------------------------------------------

```js
const language = {
    name: "JavaScript",
    year: 1995,
    creator: "Brendon Eich"
}
const a = "popularity";
language[a] = "100%";
console.log(language);
```
```bash
{name: 'JavaScript', year: 1995, creator: 'Brendon Eich', popularity: '100%'}
```

-----------------------------------------------------------------------------------------------------------------------------------

```js
const a = "popularity";
const language = {
    name: "JavaScript",
    year: 1995,
    creator: "Brendon Eich",
    a: a,
}
console.log(language);
```
```bash
{name: 'JavaScript', year: 1995, creator: 'Brendon Eich', a: 'popularity'}
```

-----------------------------------------------------------------------------------------------------------------------------------

```js
const a = "popularity";
const language = {
    name: "JavaScript",
    year: 1995,
    creator: "Brendon Eich",
    a,
}
console.log(language);
```
```bash
{name: 'JavaScript', year: 1995, creator: 'Brendon Eich', a: 'popularity'}
```

**------------------------------------------------------------------------------------------------------------------------------------**

## Accessing object value
```js
const a = "popularity";
const language = {
    name: "JavaScript",
    year: 1995,
    creator: "Brendon Eich",
}
console.log(language.name);
```
```bash
JavaScript
```

--------------------------------------------------------------------------------------------------------------------------------------

```js
const a = "popularity";
const language = {
    name: "JavaScript",
    year: 1995,
    creator: "Brendon Eich",
}
console.log(language["name"]);
```
```bash
JavaScript
```

------------------------------------------------------------------------------------------------------------------------------------

```js
const language = {
    name: "JavaScript",
    year: 1995,
    creator: "Brendon Eich",
}
const a = "name";
console.log(language[a]);
```
```bash
JavaScript
```
