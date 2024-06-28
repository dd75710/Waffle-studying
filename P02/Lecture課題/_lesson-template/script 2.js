'use strict'
// Please don't delete the 'use strict' line above


//Q1
function getGreaterValue(number1,number2){
   //return number1
    if (number1 > number2){
        return number1;
    }//else 
    {
        return number2;
    }
}
console.log(getGreaterValue(10, 15)); // 15 を表示
console.log(getGreaterValue(15, 10)); // 15 を表示

//q2
function getGreatestValue(...theArgs){

}


console.log(getGreatestValue(10, 15)); // 15 を表示
console.log(getGreatestValue(15, 10)); // 15 を表示
console.log(getGreatestValue(1, 2, 3, 4, 5)); // 5 を表示
console.log(getGreatestValue(1, 10, 3, 4, 5)); // 10 を表示