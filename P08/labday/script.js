'use strict'
// Please don't delete the 'use strict' line above

//q1
/**
 * 引数①: {string} ??? - テストの対象となる文字列
 * 引数②: {number} ??? - 閾値
 * 返り値： 与えられた文字列の長さが指定された閾値より長いかどうか
 */
// ここにコードを書きましょう
function isLongerThan(string, number){
    if(number < string.length){
        return "それ長いよ";
    }else{
        return "それ短いよ";
    }
}
console.log(isLongerThan("apple", 6))
console.log(isLongerThan("apple",3))
//q2
/**
 * @param {Array<any>} array
 * @returns {boolean} 与えられた配列に "fun" という文字列が入っているかどうかを表すブーリアン
 */
//私たちの答え
const myarray=["funtastic","apple","funny"]
const array2=["f","a","u"]
    function hasFun(array) {
        // 配列内の各要素を順番にチェック
        for (let i = 0; i < array.length; i++) {
            // 要素が文字列かどうかを確認し、かつその文字列に "fun" が含まれているかチェック
            if (typeof array[i] === 'string' && array[i].includes('fun')) {
                return true; // "fun" が含まれている場合はtrueを返す
            }
        }
        // ループを終了しても "fun" が含まれていない場合はfalseを返す
        return false;
    }

/**
 * const array1 = ["funtastic", "enjoy"];
function hasFun(arrays){
  for(const i of arrays){
       if(array.includes("fun") == true){
          return true;
    }else{
        return false;
        }
    }
}
console.log(hasFun[array]);
function containsFun(arr) {
  return arr.includes("fun");
}
 */

//q3
/**
 * @param {Array<number>} ???
 * @param {"+"|"-"|"*"|"/"|"**"|"%"} ??? - 使用したい算術演算子を表す文字列
 * @param {number} ??? - 使用したい被演算子
 * @returns {Array<any>} 与えられた配列の各要素に、引数の算術演算子と被演算子を適用した結果が入った新たな配列
 */

const arr = [2, 10, 5];
function getOperatedArray(array, operator1, operator2) {


  }

  console.log(getOperatedArray(arr, "+", "="))

  //非演算子：1, 4など計算される数字
  /**
   * function getOperatedArray(arr, operator, num){
   * const answerArr = [];
   * for(const element of arr){
   *    if(operator == "+"){
   *        answerArr.push(element + num);
   *    }else if(operator == "-"){
   *        answerArr.push(element - num);
   * }
   *    }
   *    }
   * return answerArr
   * 
   * console.log()
   */

  //空の配列を準備（配列の初期化）
  //forループ、for ofループの順で勉強！
  //できるだけ"===" を使うように！