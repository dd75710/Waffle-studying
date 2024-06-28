'use strict'
// Please don't delete the 'use strict' line above

//q1
console.log(2 * 3 * 10 > 50);

//q2
function isEqual(valueOne, valueTwo) {
    return valueOne == valueTwo;
  }
  
  console.log(isEqual(5, '5'));

//q3-1
function isGreaterThan(valueOne, valueTwo) {
   return valueOne > valueTwo; 
}
console.log(isGreaterThan(5, 3));//true

//q3-2
console.log(isGreaterThan(2, 6));//false

//q4
function isOfAge(age){
    return age >= 20;
}
console.log(isOfAge(20));//true
console.log(isOfAge(19));//false

//q5
function isEven(n){
    if (n % 2 === 0) {
        return true;
    }
}
console.log(isEven(4));//true

//q6
function squareArea(sideLength){
    return sideLength ** 2;
}
console.log(squareArea(5));//25

function parallelogramArea(height, length){
    return height * length;
}
console.log(parallelogramArea(4, 6));//24

//q7
function validCredentials(username, password){
    return username.length > 5, password.length > 7;
}
console.log(validCredentials(4, 8));//false

//q8
function isEven(number){
    if((number & 1) === 0){
        return true;
    }else{
        return false;
    }
}
console.log(isEven(5));//f
console.log(isEven(10));//t

//q9
function isOfAge(age){
    if (age >= 20){
        return "お酒飲めますね！わーい！";
    }else{
        return false;
    }
}
console.log(isOfAge(20));//t
console.log(isOfAge(19));f
