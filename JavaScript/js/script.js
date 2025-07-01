function hello(){
    //? Anonymous Function
    return ()=>{
        console.log("Hello World");
    }
}

let value = hello();
value()