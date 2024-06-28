'use strict'
// Please don't delete the 'use strict' line above

//q1
function simplePasswordLock(password) {
    if (password === "password") {
      return "Correct! Welcome.";
    }else{
      return "Incorrect password, please try again.";
    }
  }

console.log(simplePasswordLock("qwerty")); // => "Incorrect password, please try again."
console.log(simplePasswordLock("password")); // => "Correct! Welcome."

//q2
console.log("Hello".length);//5
console.log("The length of this string is 31".length);//31
console.log(" spaces! ".length);//9

//q3
function isItTooLong(string){
  if (string.length > 10){
    return true;
  }else{
    return false;
  }
}
console.log(isItTooLong("thisismyfav"));//t
console.log(isItTooLong("aiueokakik"));//f

//q4
function biggerNumber(numOne, numTwo) {
　if(numOne > numTwo){
  return 'The first argument is bigger.';
}else if(numOne < numTwo){
  return　'The second argument is bigger.';
}
}
console.log(biggerNumber(4, 3)); // 'The first argument is bigger.' を表示
console.log(biggerNumber(3, 4)); // => 'The second argument is bigger.'

//q5
function greeting(name, language){
  if (language === "Japanese"){
    return "Konnichiwa, "  + name + "!"
  }else if(language === "English"){
    return "Hello, " + name + "!";
  }
}

console.log(greeting("Harry Potter", "Japanese")); // "Konnichiwa, Harry Potter!" が表示されるようにする。
console.log(greeting("Harry Potter", "English")); // => "Hello, Harry Potter!"




