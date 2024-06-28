'use strict'
// Please don't delete the 'use strict' line above

// 例
const school = "Waffle College";
console.log(school); // "Waffle College" を表示
let week = 1;
console.log(week); // "1" を表示
// 以下、問題です
const name = "mino";
console.log(name); // あなたの名前を表示
const age = 10;
console.log(age); // あなたの年齢を表示
const isProgrammer = "true";
console.log(isProgrammer); // "true" を表示
let currentTask = 1;
console.log(currentTask); // "1" を表示

//q2
currentTask = 2;
console.log(currentTask);

//q3

// 正方形の面積を計算して保存
const squareSideLength = 2;
const squareArea = squareSideLength ** 2;
console.log(squareArea); // "4" を表示

// 長方形の面積を計算して保存
const rectangleBaseLength = 3;
const rectangleHeightLength = 4;
const rectangleArea = rectangleBaseLength * rectangleHeightLength;
console.log(rectangleArea); // "12" を表示

// 三角形の面積を計算して保存
const triangleBaseLength = 4;
const triangleHeightLength = 5;
const triangleArea = (triangleBaseLength * triangleHeightLength) / 2;
console.log(triangleArea); // "10" を表示

//q-1
// 例
const variableString = "I am a string";
console.log(typeof variableString); // "string"と表示されましたか?
// 問題1
const variableNumber = 2 ; // "number"と表示させるにはどんな値を代入すればいいでしょう? "???"に値を入れてみてください
console.log(typeof variableNumber); // "number"と表示されましたか?
// 問題2
const variableBoolean = true;
console.log(typeof variableBoolean);
// 問題3
const variableUndefined = undefined;
console.log(typeof variableUndefined);

//q-2
const numberA = 46;
const numberB = 25;
const average = (numberA + numberB)/2;
console.log(average); // numberA と numberB の平均が表示される。

//中級演習
// 円の円周と面積を計算して保存する
const circleDiameter = 10;
const pi = Math.PI;
//console.log(pi); // 円周率の値が表示されます
const circleCircumference = circleDiameter * pi;
const circleArea = ((circleDiameter) / 2)**2 * pi;
console.log(circleCircumference); // "31.41592653589793" に近い値を表示
console.log(circleArea); // "78.53981633974483" に近い値を表示
