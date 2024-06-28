'use strict'
// Please don't delete the 'use strict' line above

//q1
function add(numOne, numTwo) {
    return numOne + numTwo;
  }
  
  // テスト
  console.log(add(4, 3)); // 7 を表示
  console.log(add(100, 42)); // => 142
 
  //q2
  console.log(add(100)); // 100 =>NaN
  console.log(add(1, 4, 5)); // 5 => 5

//q3
function simpleFunctionA() {
    return "Hello simple function A";
  }
  
  function simpleFunctionB() {
    console.log("Hello simple function B");
  }
  
  console.log(simpleFunctionA(), "--> From running Simple Function A");
  console.log(simpleFunctionB(), "--> From running Simple Function B");

  //q4
  function average(num1, num2) {
    // ここにコードを書いてください
    return (num1 + num2) / 2;
  }
  console.log(average(4, 6)); // => 5
  console.log(average(100, 42)); // => 71
  console.log(average(5, 7));//6
  console.log(average(99, 100));//99.5

  //q5
  function square(num) {
    return num * num;
  }
  function squareStrings(text) {
    return text * text;
  }

console.log(square(5));
console.log(squareStrings("x"))

//q6
function Square(monkey) {
    return monkey **2;
  }
  console.log(Square("monkey"));

  //q7
  function cube(x) {
    return x**3;
  }
  console.log(cube(4));

  //q8
  function waffleMaker(topping) {
    return `${topping}` + " " + "Waffle";
  }

  // テスト
  console.log(waffleMaker("Apple")); // => Apple Waffle
  console.log(waffleMaker("Honey")); // => Honey Waffle

//q9
function circleArea(circleRadius){
    const pi = Math.PI;
    return circleRadius ** 2 * pi;
}

circleArea(3);//28.274333882308138

//q10
function simpleHelloA() {
  console.log("hello");//hello
}

function simpleHelloB() {
  return "hello";
}

const a = simpleHelloA();
const b = simpleHelloB();
console.log(a, b);// undefined, 'hello'

//q11
function createGreeting(greetingPhrase, instructorName) {
  return greetingPhrase + ", " + instructorName + "!";
}
const morningGreeting = ("Good morning", "Mike");

function createGreeting(greetingPhrase, instructorName) {
  return greetingPhrase + ", " + instructorName + "!";
}
const dayGreeting = ("Hello", "Beau");

function createGreeting(greetingPhrase, instructorName) {
  return greetingPhrase + ", " + instructorName + "!";
}
const eveningGreeting = ("Good evening", "Alex");


console.log(morningGreeting); //"Good morning, Mike!" を表示
console.log(dayGreeting); // "Hello, Beau!" を表示
console.log(eveningGreeting); // "Good evening, Alex!" を表示
