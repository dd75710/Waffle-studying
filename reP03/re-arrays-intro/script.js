'use strict'
// Please don't delete the 'use strict' line above

const todos = ["buy tomatos", "do homework", undefined, null, "cook"];
console.log(todos[1]);//undefined

todos[4] = 5;
console.log(todos[4]);//5

const todos2 = [];
console.log(todos2.length);//0

todos2.push("wash dishes");//
todos2.push("interview");
todos2.push("buy eggs");
console.log(todos2);//['wash dishes', 'interview', 'buy eggs']
console.log(todos2.length);//3

todos2.pop();
console.log(todos2.length);//2
console.log(todos2[todos2.length - 1]);//"interview"


//q1
/**
 * 引数：arrayOfPeople - 人の名前の配列
 * 返り値： 与えられた配列の長さ
 */
function numberOfPeople(arrayOfPeople) {
    return arrayOfPeople.length;
  }
  console.log(numberOfPeople(["Alex", "Beau", "Carlos", "Dustin"])); // => 4
  

//q2
// ここに,配列studentsを作成するコードを書きましょう.
const students = ["xiumin", "suho", "lay", "baekhyun", "chen"];
function numberOfPeople(students){
    return students.length;
}

// テスト
console.log(numberOfPeople(students)); // => 5

//q3
// ここにコードを書きましょう.
students.push("nyorudo", "kai", "sehun");
 // テスト
 console.log(numberOfPeople(students)); // => 8


//q4
/**
 * 引数： array - 配列
 * 返り値： 与えられた配列の最後の要素を返す
 */
const array = ["mama", "growl", "overdose"]
function last(array) {
  return array[array.length - 1];
}

// ここにテストを書いてください
// console.logを使って出力してOK. 意図した答えかを確認しよう
console.log(last(array));




