//fibonacci

function F(n){
    if(n <= 1){
        return n;
    }
    /*let a = 0;
    let b = 0;
    let result;

    for(let i = 2; i <= n; i++){
        result = a + b;
        a = b;
        b = result;
    }
return result;*/
else{
    return F(n - 1) + F(n - 2);
}
    }

F(4);

/**
 * function fibonacci(n){
    //base case
    if(n===0){
        return n;
    }

    if(n===1){
        return n;
    }

    //recursive case
    return fibonacci(n-1) + fibonacci(n-2);
}

console.log(fibonacci(4));
console.log(fibonacci(6));
console.log(fibonacci(5));
 */
   