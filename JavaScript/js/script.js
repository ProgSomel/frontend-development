async function getData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1") 
        //? in response we will get a string buffer. We need to convert it to json
        const data = await response.json() //? converting to json is also asynchronous. So need to use await
        console.log(data);
    }catch(err) {
        console.log(err);
    }
}

function bigWork() {
    // onk kah korchi
    return getData();
}

(async function(){
    const resutlt = await bigWork();
})()
