'use strict'
// Please don't delete the 'use strict' line above
//practice
function sayFizz(num){
    if (num%3===0){
        return "Fizz!"
    }
}
console.log(sayFizz(6));
console.log(sayFizz(8));

//q1
function simplePasswordLock(password) {
    if (password === "password") {
      return "Correct! Welcome.";
    }else {
        return "Incorrect password, please try again.";
  }
}
    console.log(simplePasswordLock("qwerty")); // => "Incorrect password, please try again."
    console.log(simplePasswordLock("password")); // => "Correct! Welcome."

//q2
console.log("Hello".length);
console.log("The length of this string is 31".length);
console.log(" spaces! ".length);

//q3
function isItTooLong (word){
    if(word.length > 10) {
        return true;
        } else if (word.length <= 10){
            return false;
        }
    }
      
    console.log(isItTooLong("hellomynameisminomino"));
    console.log(isItTooLong("thisishar"));

//q4
function biggerNumber(numOne, numTwo) {
    if ( numOne > numTwo){
        return "The first argument is bigger.";
    }else{
        return "The second argument is bigger.";
        
    }
}

console.log(biggerNumber(4, 3)); // 'The first argument is bigger.' を表示
console.log(biggerNumber(3, 4)); // => 'The second argument is bigger.'



//q5
function greeting(name, language){
    name ="Harry Potter";
    if (language === "Japanese"){
        return "Konnichiwa, " + `${name}` + "!";
    }else if (language === "English"){
        return "Hello, " + `${name}` + "!" ;
    }
    }



console.log(greeting("Harry Potter", "Japanese")); // "Konnichiwa, Harry Potter!" が表示されるようにする。
console.log(greeting("Harry Potter", "English")); // => "Hello, Harry Potter!"

