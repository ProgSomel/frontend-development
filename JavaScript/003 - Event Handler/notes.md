# Event Handler
Javascript is a Event Driven Programming Language

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src="js/script.js"></script>
    <button onclick="hello()">Click Now</button>
</body>
</html>
```
```javascript
function hello(){
    console.log("Hello World"); //? it will print if we click on the click now button
}
```

-----------------------------------------------------------------------------------------------------------------------------------------------

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
```javascript
//? Select button
const button = document.getElementById("btn");
button.addEventListener("click", hello)
function hello(){
    console.log("Hello World");
}
```