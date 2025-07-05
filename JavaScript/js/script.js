function sum(text, ...rest){
    const result = rest.reduce((sum, cur)=> sum+cur, 0);
    console.log(`${text} is ${result}`);
}

sum("Sum: ", 5, 6, 8)