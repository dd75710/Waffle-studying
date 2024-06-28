'use strict'
// Please don't delete the 'use strict' line above

//p03-2-1
function numberOfPeople(arrayOfPeople) {
    return arrayOfPeople.length
  }
  
   // テスト
  console.log(numberOfPeople(["Alex", "Beau", "Carlos", "Dustin"])); // => 4

  
  //q2
const students =["taro","jiro", "saburo", "shiro", "goro" ]

console.log(numberOfPeople(students)); // => 5

//q3
// ここにコードを書きましょう.
students.push("rokuro", "shichiro", "hachiro")
 // テスト
 console.log(numberOfPeople(students)); // => 8

 //q4
 /**
 * 引数： array - 配列
 * 返り値： 与えられた配列の最後の要素を返す
 */
function last(array) {
   return array[array.length - 1];
  }
  
  // ここにテストを書いてください
  const array = ["orange", "apple", "watermalon"]
  // console.logを使って出力してOK. 意図した答えかを確認しよう
  console.log(last(array));//watermelon

 //practice
const sweets = ["Cupcake"];
sweets.push("Froyo");
sweets.push("Oreo");
//1
console.log(sweets.length);
//2
sweets[1]= "Waffle";
console.log(sweets[1]);
//3
console.log(sweets[sweets.length -1]); 
