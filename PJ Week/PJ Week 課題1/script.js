'use strict'
// Please don't delete the 'use strict' line above

function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);//1
    console.log("expected:", expected);
    console.trace();
    console.groupEnd();
  }
}

//q1
   /**
    * @param {Array<any>} ??? - 配列
    * @returns {boolean} 与えられた配列の要素が重複を含んでいないかを表すブーリアン
    */

   function haveMultipleElements(Array) {
         const setElements = new Set(Array);
         return setElements.size !== Array.length;
   }

    // テストを実行
   test(haveMultipleElements([1, 2, 3, 4]), true);
   test(haveMultipleElements([1, 3, 3, 4]), false);

//q2
function gcd(x, y){
    if (x % y){
        return gcd(y, x % y);
    } else {
        return y;
    }
}

test(gcd(10,15)); //=> 5
test(gcd(12,34)) ; //=> 2

//q3
const hands = new Array("パー", "グー", "チョキ");
const player = "パー"

/**
    * @param {int} min - ランダムで出したい値の最小値
    * @param {int} max - ランダムで出したい値の最大値より1つ大きい値
    *
    * @returns {int}} min 以上 max 未満 の整数値を「ランダムで」出力
    */

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

// 1つめの引数を0, 2つ目の引数を3とすると, 0から2の整数がランダムで出力される
console.log(getRandomInt(0, 3))

// 上記のgetRandomInt関数と、配列 hands を生かしてジャンケンゲームを作成してみましょう！
 if (getRandomInt == 0){
  console.log("You have the same");
}else if (getRandomInt == 1){
  console.log("You win");
}else if (getRandomInt == 2){
  console.log("You lose");
}



//q4
function flatten(arr) {
  console.log(arr);
  return arr.reduce((a, b) => a.concat(b));
}

console.log(flatten([[1, 2, 3], [4, 5], [6]]));
/**function splitArray(array) {
  let realArray = array.reduce((a, b) => {
    return a.concat(b);
  }, []);
  return realArray;
}

console.log(splitArray([
  [1, 2, 3],
  [4, 5],
  [6]
])); */
console.log(flatten([1, 2, 3, [4, 5, 6]]));
  /**let i=0;
    let b=[];
    return function flafla(arr){
      if(typeof(arr)=="object"){
        for(var j in arr){
          console.log(arr[j]);
          flafla(arr[j]);
          console.log(arr[j]);
        }
    }else if(typeof(arr)=="number"){
      b[i] = arr;
      i++;
    }
    return b;
  }}

  let a = [[1,2],3,[4,5,[6,7],8],[9]];
  console.log(flatten()(a));//->[1,2,3,4,5,6,7,8,9]
  let c = ([[1, 2, 3,][4, 5, 6],]);
  console.log(flatten()(c)); // [1, 2, 3, 4, 5, 6]

console.log(flatten([1, 2, 3, [4, 5, 6]])); // [1, 2, 3, 4, 5, 6]
let d = [[1], [2], [3], [4, 5, 6]];
console.log(flatten()(d)); // [1, 2, 3, 4, 5, 6]
*/