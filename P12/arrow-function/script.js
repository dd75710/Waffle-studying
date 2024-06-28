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

//q1
/**
 * @param {number} ???
 * @returns {boolean} 与えられた数値が 10 の倍数かどうか
 */
// ここにコードを書きましょう
function isMultipleOfTen(number){
    //for(let i = 0; i < number.length; i++){
        //if(number % 10 === 0){
            return number % 10 === 0;
        /*else{
            return false;
        }
    }*/
   
}
const arrayOfNumbers = [2, 4, 6, 8, 10, 15, 20, 30, 66, 89, 100];
const arrayOfNumbers2 = [20, 30, 66, 89, 100]

test(arrayOfNumbers.filter(isMultipleOfTen), [10, 20, 30, 100]);
test(arrayOfNumbers2.filter(isMultipleOfTen), [20, 30, 100]);

//q2
/**
 * @param {string} ???
 * @returns {boolean} 与えられた文字列に母音 (a, e, i, o, u) が1つ以上含まれているか
 */
// ここにコードを書きましょう
function hasAVowel(arr){
    //const newArray = [];
    const vowels =  ['a', 'e', 'i', 'o', 'u'];
    for(let i = 0; i < arr.length; i++){
        if(vowels.includes(arr[i])){
            return true;
    }}
        return false;
    }   
    


const arrayOfStrings1 = ["bat", "ball", "tree", "cow", "bnm"];
const arrayOfStrings2 = ["bhg", "waa", "cvb"];

test(arrayOfStrings1.filter(hasAVowel), ["bat", "ball", "tree", "cow"]);
test(arrayOfStrings2.filter(hasAVowel), ["waa"]);

//q3
/**
 * @param {Array<number>} ???
 * @returns {Array<number>} 与えられた配列の中にある正の数のみを要素として持つ配列
 */
// ここにコードを書きましょう
function getPositiveNumbers(num){

}
  

test(getPositiveNumbers([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
test(getPositiveNumbers([0, 1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
test(getPositiveNumbers([1, -2, 3, -4, 5]), [1, 3, 5]);
test(getPositiveNumbers([-2, -4]), []);

//q4
/**関数 `getPositiveNumbers` を、アロー関数使って書き換えましょう。
 * 今度は、補助関数`isPositive`を、関数 `getPositiveNumbers` の内部で**使用しません。**
   アロー関数を使って書き直した場合でも、上の問題のテストが通っているか確認しましょう。 */

   function getPositiveNumbers(num){
    const positiveNum = num.filter((num2) => num2 > 0);
    return positiveNum;
    /*for(let i = 0; i < num.length; i++){
      //const aaa = num.filter();
      function isPositive(){
      return num > 0;
    }
    }*/
  }
  test(getPositiveNumbers([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
  test(getPositiveNumbers([0, 1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
  test(getPositiveNumbers([1, -2, 3, -4, 5]), [1, 3, 5]);
  test(getPositiveNumbers([-2, -4]), []);

//q5
		/**
 * @param {Array<string>} ???
 * @returns {Array<string>} 与えられた配列の中にある、大文字で始まり、疑問符で終わる文字列のみを要素として持つ配列
 */
// ここにコードを書きましょう
function getQuestions(arr){
  const strings = arr.filter(str => str.charAt(0) === str.charAt(0).toUpperCase() && str[str.length - 1] === "?")
    return strings;
  }
  /*if(arr[0] === arr.toUpperCase()){
    return true;
  }
  for(let i = 0; i < arr.length; i++){
    if(arr[0] === arr.toUpperCase()arr[arr.length - 1] === "?"){
      return str.filter();
    }
  }
}*/
const arrayOfStrings3 = [
    "Hi, there.",
    "What in the world?",
    "My name is JavaScript",
    "Do you want to know a secret?",
  ];
  
  test(getQuestions(arrayOfStrings3), [
    "What in the world?",
    "Do you want to know a secret?",
  ]);
  test(getQuestions(arrayOfStrings3.slice(2)), [
    "Do you want to know a secret?",
  ]);
