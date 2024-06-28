'use strict'
// Please don't delete the 'use strict' line above
const name = "Minori Otsuka";
console.log(name);
let age = 20;
console.log(age);
const isProgrammer = 1;
if(isProgrammer) {
    console.log('true');
}else {
    console.log('false');
}
let currentTask = 1;
console.log(currentTask);
currentTask= 2;
console.log(currentTask);
4+10;
1*3;
12*4;
4%2;
5%2;
5/1-99;
5000*-100*(1+2)*(5*6);
1241/9+99;
const firstname = "Otsuka";
const lastname = "Minori";
const myname = firstname +" "+ lastname;
console.log(myname);
const waffle = "Waffle";
const college = "College";
const wf = waffle + " " + college;
console.log(wf);
typeof variableUndifined
let number =3;
let string = "mimimi";
const stringnumber = number + string;
console.log(stringnumber);
const numberstring =string + number;
console.log(numberstring);
number = 5 ;
string = "5";
const five = number*string;
console.log(five);
"hello".length;
"hello world".length;
"123".length;
"hello".toUpperCase();
"HELLO".toLowerCase();
"hello".endsWith("o");
"hello".endsWith("e");
"hello".endsWith("llo");
"hello".endsWith();
// 正方形の面積を計算して保存
const squareSideLength = 2;
// ここにあなたのコードを書いてください
const squareArea = squareSideLength**2;
console.log(squareArea); // "4" を表示
// 長方形の面積を計算して保存
const rectangleBaseLength = 3;
const rectangleHeightLength = 4;
const rectangleArea = rectangleBaseLength*rectangleHeightLength;
console.log(rectangleArea); // "12" を表示
// 三角形の面積を計算して保存
const triangleBaseLength = 4;
const triangleHeightLength = 5;
const triangleArea = triangleBaseLength*triangleHeightLength;
console.log(triangleArea); // "10" を表示
// 例
const variableString = "I am a string";
console.log(typeof variableString); // "string"と表示されましたか?
// 問題1
const variableNumber = 3; 
console.log(typeof variableNumber); // "number"と表示されましたか?
// 問題2
const variableBoolean = true;
console.log(typeof variableBoolean);
// 問題3
//ここにコードを書いて、"undefined"と表示されるようにしてください。
const variableUndefined = undefined;
console.log(typeof variableUndefined);
const numberA = 35;
const numberB = 23;
const average = (numberA + numberB)/2;
console.log(average); // numberA と numberB の平均が表示される。
// 円の円周と面積を計算して保存する
const circleDiameter = 10;
function calculateCircumference(radius) {
    return Math.PI * (radius + radius);
  }
  console.log(Math.PI);
const circleCircumference = circleDiameter* Math.PI;
const circleArea = (circleDiameter/2)**2 * Math.PI;
console.log(circleCircumference); // "31.41592653589793" に近い値を表示
console.log(circleArea); // "78.53981633974483" に近い値を表示
let a = "B";
let b = "A";
let c = "A" ;
a = c; 
c = "A" ;
b =  "B"
console.log(a); // "A" を表示
console.log(b); // "B" を表示
// 台形の面積を計算して保存
const jouhen = 12;
const kahen = 50;
const height =10;
const daikei = (jouhen + kahen)*height /2;
console.log(daikei); // "310" を表示