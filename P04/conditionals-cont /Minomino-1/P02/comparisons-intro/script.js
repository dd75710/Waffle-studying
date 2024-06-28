'use strict'
// Please don't delete the 'use strict' line above
//q1
console.log(2 * 3 * 10 > 50);

//q2
function isEqual(valueOne, valueTwo) {
    return valueOne == valueTwo;
  }
  
  console.log(isEqual("100", 100));

//q3-1
function isGreaterThan(valueOne, valueTwo) {
    return valueOne > valueTwo;
}

console.log(isGreaterThan(6,2));
//q3-2
console.log(isGreaterThan(4,7));

//q4
function isOfAge(ofage){
    if(ofage >= 20){
        return true;
    }else{
        return false;
    }

}
console.log(isOfAge(21));//true
console.log(isOfAge(2));//false

//q5
function isEven(n){
    if(n%2===0){
        return true;
    }else{
        return false;
    }
}

console.log(isEven(18));//true
console.log(isEven(7));//false

//q6
function rectangleArea(l,w){
    return l * w;
}

console.log(rectangleArea(4,9));//36

function trianglePerimeter(s1,s2,b){
    return s1 + s2 + b;
}

console.log(trianglePerimeter(4,5,6));//15

//q7
function validCredentials(username,password){
    
    if(username.length > 5 && password.length > 7){
        return true;
        }else{
        return false
    }
}
let username = "aiueoka";
let password = "passwords";
console.log(validCredentials("aiueoka","passwords"));

//q8
function isEven(num8){
    if (num8 & 0){
        return true;
    }else{
        return false
    }
}

console.log(isEven(4));//true

//q9
function isOfAge(ofage){
    if(ofage >= 20){
        return true;
    }else{
        return false;
    }

}
console.log(isOfAge(21));//true
console.log(isOfAge(2));//false
if("true"){
    console.log("お酒飲みましょう！");
}
//演習
console.log(100>=99);
console.log("true"!=true);
let age = 16;
if(age<18){
    console.log(true);
}
