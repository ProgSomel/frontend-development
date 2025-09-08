# 003 - Event Handler
JavaScript is a Event-driven programming language

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button onclick="hello()">Click Now</button>
    <script src="js/script.js"></script>
</body>
</html>
```
```javaScript
function hello() {
    console.log("Hello World");
}
```

------------------------------------------------------------------------------------------------------------------------

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button id="btn">Click Now</button>
    <script src="js/script.js"></script>
</body>
</html>
```
```javaScript
//? select button
const button = document.getElementById("btn");

function hello() {
    console.log("Hello World");
}

button.addEventListener("click", hello)
```
