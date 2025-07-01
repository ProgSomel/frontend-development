# Scope: Let(Block Scope = {}) Var(function scope) Const(Block Scope but can not reassign)

```javascript
var lang = "Bangla"

function learn(topic){
    lang = topic
    console.log(lang) //? javascript
}

learn("javascript");

console.log(lang) //? javascript
```

-------------------------------------------------------------------------------------------------------------------------------------------

```javascript
var lang = "Bangla"

function learn(topic){
    var lang = topic
    console.log(lang) //? Bangla
}

learn("javascript");

console.log(lang) //? javascript
```

----------------------------------------------------------------------------------------------------------------------------------------------

## Let(Block Scope) and var(function Scope)
### Let(Block Scope = {})

```javascript
var lang = "Bangla"

function learn(topic){
    var lang = topic

    if(true){
        let a = 5;
        console.log(a); //? 5
    }

    console.log(lang) //? javascript
}

learn("javascript");

console.log(lang) //? Bangla

```

---------------------------------------------------------------------------------------------------------------------------------------

```javascript
var lang = "Bangla"

function learn(topic){
    var lang = topic

    if(true){
        let a = 5;
        console.log(a);
    }
    console.log(a);
    console.log(lang)
}

learn("javascript");

console.log(lang)

```
```bash
5
script.js:10 Uncaught ReferenceError: a is not defined
    at learn (script.js:10:17)
    at script.js:14:1
```

-------------------------------------------------------------------------------------------------------------------------------------------------------

### var(Function Scope)

```javascript
var lang = "Bangla"

function learn(topic){
    var lang = topic

    if(true){
        var a = 5;
        console.log(a);
    }
    console.log(a);
    console.log(lang)
}

learn("javascript");

console.log(lang)

```
```bash
5
script.js:10 5
script.js:11 javascript
script.js:16 Bangla
```

----------------------------------------------------------------------------------------------------------------------------------------

## can not redeclare let but can reassign. Where is we can redeclare and reassign var
### can not redeclare let but can reassign
```javascript
var lang = "Bangla"

function learn(topic){
    var lang = topic

    if(true){
        let a = 5;
        let a = 10
        console.log(a);
    }
    console.log(a);
    console.log(lang)
}

learn("javascript");

console.log(lang)

```
```bash
Uncaught SyntaxError: Identifier 'a' has already been declared (at script.js:8:13)
```

--------------------------------------------------------------------------------------------------------------------------------------

```javascript
var lang = "Bangla"

function learn(topic){
    var lang = topic

    if(true){
        let a = 5;
        a = 10
        console.log(a);
    }
    console.log(lang)
}

learn("javascript");

console.log(lang)
```
```bash
10
script.js:11 javascript
script.js:16 Bangla
```

-----------------------------------------------------------------------------------------------------------------------------------------

### Where is we can redeclare and reassign var
```javascript
var lang = "Bangla"

function learn(topic){
    var lang = topic

    if(true){
        var a = 5;
        var a = 10
        console.log(a);
    }
    console.log(lang)
}

learn("javascript");

console.log(lang)
```
```bash
10
script.js:11 javascript
script.js:16 Bangla
```

**-------------------------------------------------------------------------------------------------------------------------------------------**

## Const -- can not reassign but can mutate
## can not reassign
```javascript
var lang = "Bangla"

function learn(topic){
    var lang = topic

    if(true){
        const a = 5;
        a = 10
        console.log(a);
    }
    console.log(lang)
}

learn("javascript");

console.log(lang)
```
```bash
script.js:8 Uncaught TypeError: Assignment to constant variable.
    at learn (script.js:8:11)
    at script.js:14:1
```

-----------------------------------------------------------------------------------------------------------------------------------------

### can mutate or change(like for array and object)
```javascript
var lang = "Bangla"

function learn(topic){
    var lang = topic

    if(true){
        const a = {
            b : 5,
        }
        a.b = 100;
        console.log(a);
    }
    console.log(lang)
}

learn("javascript");

console.log(lang)
```
```bash
{b: 100}
script.js:13 javascript
script.js:18 Bangla
```