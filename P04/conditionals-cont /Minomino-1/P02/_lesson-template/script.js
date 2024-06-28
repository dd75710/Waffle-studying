'use strict'
// Please don't delete the 'use strict' line above
//Q1
function add(numOne, numTwo) {
    return numOne + numTwo;
  }
  console.log(add(4, 3)); // 7 を表示
  console.log(add(100, 42)); // => 142

  //Q2
  console.log(add(100)); // 何が起こる？ ==>NaN
  console.log(add(1, 4, 5)); // 何が起こる？ ==>5

  //Q3
  function simpleFunctionA() {
    return "Hello simple function A";
  }
  
  function simpleFunctionB() {
    console.log("Hello simple function B");
  }
  console.log(simpleFunctionA(), "--> From running Simple Function A");
  console.log(simpleFunctionB(), "--> From running Simple Function B");

  //Q4 
  function average(num1, num2) {
    return (num1 + num2)/2;
  }
  console.log(average(4, 6)); // => 5
  console.log(average(100, 42)); // => 71 
  console.log(average(7,9));
  console.log(average(20,50));
  
  function average(num3,num4){
    return (num3 + num4)/2;
  }
  console.log(average(78,90));//==>84
  console.log(average(33,11));//==>22

//Q5  
  function square(five) {
    return five * five;
  }
  console.log(square(5));//==>25

  function square(x) {
    return x * x;
  }
  console.log(square(7));//==>49

//Q6
  function Square(monkey) {
    return monkey **2;
  }
  console.log(Square(3));//9
//Q7
  function cube(x) {
    return x**3;
  }
  console.log(cube(3));//27
//Q8
  function waffleMaker(topping) {
    return topping + " " + "Waffle";
  }
console.log(waffleMaker("Apple")); // => Apple Waffle
console.log(waffleMaker("Honey")); // => Honey Waffle

//Q9
function circlearea(radius){
  return radius**2* Math.PI;
}
console.log(Math.PI);
console.log(circlearea(4));//16*Math.PI
//理解度チェック
//1:仮引数より実引数の数が少ない：NaNになる
//多い：仮引数の数ぶんだけ認識する
//2:return：００／できない（下のコードが実行できなかった）
//function cube2(y){
  //console.log(4);}
//return y**3;

//Q10
function simpleHelloA() {
  console.log("hello");
}
function simpleHelloB() {
  return "hello";
}

const a = simpleHelloA();
const b = simpleHelloB();
console.log(a, b);


//演習１
function subtract(num5,num6){
  return num5 - num6;
}

console.log(subtract(8,3));
console.log(subtract(20,10));

//演習２
function greeting(name){
  console.log("Hello, " + name + "!");
}

console.log(greeting("Suzuki"));//
console.log(greeting("Sato"));

//Q11
function createGreeting(greetingPhrase, instructorName) {
  return greetingPhrase + ", " + instructorName + "!";
}

function createGreeting(greetingPhrase, instructorName) {
 
  return greetingPhrase + ", " + instructorName + "!";
}

function createGreeting(greetingPhrase, instructorName) {
  
  return greetingPhrase + ", " + instructorName + "!";
}
greetingPhrase = "Good morning";
instructorName = Mike; 
console.log(morningGreeting); //"Good morning, Mike!" を表示
greetingPhrase = "Hello";
instructorName = Beau;
console.log(dayGreeting); // "Hello, Beau!" を表示
greetingPhrase = "Good evening";
instructorName = Alex;
console.log(eveningGreeting); // "Good evening, Alex!" を表示
