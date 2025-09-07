# 001 - Scope
## var --> is Function Scoped
```javaScript
var lang = "Bangla";

function learn(topic) {
    lang = topic;
    console.log(`I am learning ${lang}`);
}

learn("JavaScript")
console.log(`I know ${lang}`);
```
```bash
I am learning JavaScript
script.js:9 I know JavaScript
```

-----------------------------------------------------------------------------------------------------------------------

```javaScript
var lang = "Bangla";

function learn(topic) {
    var lang = topic;
    console.log(`I am learning ${lang}`);
}

learn("JavaScript")
console.log(`I know ${lang}`);
```
```bash
I am learning JavaScript
script.js:9 I know Bangla
```

**-----------------------------------------------------------------------------------------------------------------------**

## let VS var VS const
### Let -> blocked scoped({})
```javaScript
var lang = "Bangla";

function learn(topic) {
    var lang = topic;
    if (true) {
        let a = 5;
        console.log(a);
    }
    console.log(`I am learning ${lang}`);
}

learn("JavaScript")
console.log(`I know ${lang}`);
```
```bash
5
script.js:9 I am learning JavaScript
script.js:13 I know Bangla
```

-----------------------------------------------------------------------------------------------------------------------

### Let --> can not be redeclared
```javaScript
var lang = "Bangla";

function learn(topic) {
    var lang = topic;
    if (true) {
        let a = 5;
        let a;
        console.log(a);
    }
    console.log(`I am learning ${lang}`);
}

learn("JavaScript")
console.log(`I know ${lang}`);
```
```bash
Cannot redeclare block-scoped variable 'a'.ts(2451)
```

-----------------------------------------------------------------------------------------------------------------------

### Let --> can be reassign
```javaScript
var lang = "Bangla";

function learn(topic) {
    var lang = topic;
    if (true) {
        let a = 5;
        a = 10;
        console.log(a);
    }
    console.log(`I am learning ${lang}`);
}

learn("JavaScript")
console.log(`I know ${lang}`);
```
```bash
10
script.js:10 I am learning JavaScript
script.js:14 I know Bangla
```

-----------------------------------------------------------------------------------------------------------------------

### const can not be reassign
```go
var lang = "Bangla";

function learn(topic) {
    var lang = topic;
    if (true) {
        const a = 5;
        a = 10;
        console.log(a);
    }
    console.log(`I am learning ${lang}`);
}

learn("JavaScript")
console.log(`I know ${lang}`);
```
```bash
script.js:7 Uncaught TypeError: Assignment to constant variable.
    at learn (script.js:7:11)
    at script.js:13:1
```

-----------------------------------------------------------------------------------------------------------------------

### but if const is a reference value like array or objects than we can reassign
```go
var lang = "Bangla";

function learn(topic) {
    var lang = topic;
    if (true) {
        const a = {
            b : 5,
        }
        a.b = 10 //? this is called mutate not reassign
        console.log(a);
    }
    console.log(`I am learning ${lang}`);
}

learn("JavaScript")
console.log(`I know ${lang}`);
```
```bash
{b: 10}
script.js:12 I am learning JavaScript
script.js:16 I know Bangla
```