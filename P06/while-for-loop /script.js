'use strict'
// Please don't delete the 'use strict' line above

function test(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
      console.log("Yay! Test PASSED.");
    } else {
      console.error("Test FAILED. Keep trying!");
      console.log("    actual: ", actual);
      console.log("  expected: ", expected);
      console.trace();
    }
  }

  const object = {
    a: "hello",
    b: "bye",
    c: 1000,
  };

  console.log(object["a"]); // "hello"
  console.log(object.b); // "bye"
  object["b"] = "goodbye";
  console.log(object["b"]); // "goodbye"

  // これは少しトリッキーです 😉
  //console.log(object[a]); // error ??


  //q1
  function sayHellos(n){
    for (let counter = 1; counter <= n; counter += 1){
      console.log("Hello!")
    }
  }
  sayHellos(4);
// "Hello!"
// "Hello!"
// "Hello!"
// "Hello!"

//q2
function countToTen(i){
  for (let i = 1; i <= 10; i++){
    console.log(i)
  }
}
countToTen();
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

//q3
function counter(num) {
     for ( let i = 0; i<num; i++){
      console.log(i);
    }
  }
  counter(4);

//q4
/**
 * @param {number} start
 * @param {number} end
 * @returns {Array<number>} start 以上 end 以下のすべての整数を含む配列
 */
// ここにコードを書きましょう
/*function createRange(start,end){
  typeof start === 'number';
  typeof end === 'number';
  for (let i = start; start <= i <= end; i++){
    console.log(createRange[i])
  }
}
test(createRange(4, 6), [4, 5, 6]);
test(createRange(10, 16), [10, 11, 12, 13, 14, 15, 16]);
*/

//q5
function printCars() {
    const cars = ["Toyota", "Mazda", "Mercedes", "BMW", "Hyundai", "Volvo"];
  
    for (let i = 0; i < cars.length; i++){
      console.log(cars[i]);
    }
}
printCars();
//q6
const commands = ["Print me last", "Print me second", "Print me first"];

function decrement(list) {
  let i =　list.length - 1;
  while (i >= 0)/*(let i = list.length - 1; i >= 0; i--)  */{
    console.log(list[i]);
    i--;
  }
}
decrement(commands);
// "Print me first"
// "Print me second"
// "Print me last"

//q7-1
/**
 * @param {Array<number>} ???
 * @param {Array<number>} ???
 * @returns {Array<number>} それぞれの配列の対応する要素の和からなる配列
 */

function addTogether(array1,array2){
  array1.length === array2.length;
  const result = [];
  //配列の長さが異なるときに大きい方を取得
const maxLength = Math.max(array1.length, array2.length);

  for (let i = 0; i< maxLength; i++){
    //小さい方の配列だと値がなくなってしまうためかわ代わりに0を使う、undefinedにならない
    const arraysum = ((array1[i]　|| 0) + (array2[i] || 0));
    result.push(arraysum);
  }
  return result; //don't forget!
}//forループだと良い、スマートに書ける
//let i = 0; i< array1.lengthだと全てのインデックスを取得できる


test(addTogether([1, 2, 3], [4, 5, 6]), [5, 7, 9]);
test(addTogether([1, 2, 3], [7, 8, 9]), [8, 10, 12]);

//q7-2
test(addTogether([1], [4, 5, 6]), [5, 5, 6]);

//q8
/**
 * @param {Array<any>} 数字の配列
 * @returns {number} 引数の配列の要素の合計値
 */

/*function sum_arr(arr,element){
  for (let i = 0; i <= arr.length; i++){
  }
  let total = sum_arr.reduce(function(arr, element){
    return sum + element;
  }, 0);
  console.log(arr)
}


test(sum_arr([1]), 1);
test(sum_arr([1, 1, 1, 1, 1]), 5);
test(sum_arr([1, 2, 3, 4, 5]), 15);*/

//q9
/*function sum(...number){
return sum(number)
}
*/


function counter(num){
  let i = 0; 
  while (i <= num){
    console.log(i);
    i++;
  }
}
counter(4);

function counter(num){
  for(let i = 0; i<= num; i++){
    console.log(i);
  }
}