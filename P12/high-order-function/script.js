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
 * @returns {number} 与えられた引数の絶対値
 */
// ここにコードを書きましょう
function abs(num){
    return Math.abs(num);//Math.abs()->数値の絶対値を返す
}
test([1, 2, 3].map(abs), [1, 2, 3]);
test([-1, -2, -3].map(abs), [1, 2, 3]);
test([-1, 2, -3].map(abs), [1, 2, 3]);

//q2
/**
 * @param {Array<number>} ???
 * @returns {Array<number>} 与えられた配列の各要素に 1 を足した数を要素として持つ、新しい配列
 */
// ここにコードを書きましょう

function getIncrementedNumbers(num){
    //const num = [];
    const result2 = num.map(num2 => num2 + 1);
    return result2;
}

test(getIncrementedNumbers([1, 2, 3]), [2, 3, 4]);
test(getIncrementedNumbers([-1, -2, -3]), [0, -1, -2]);

const array1 = [0, 0, 0];
test(getIncrementedNumbers(array1), [1, 1, 1]);
// 元の配列が変更されていないことを確認してください
test(array1, [0, 0, 0]);

//q3
/**
 * @param {Array<number|string>} ???
 * @returns {Array<number|string>} 与えられた配列の各要素が数値型なら文字列型に、文字列型なら数値型に変換したものが入った、新しい配列
 */
// ここにコードを書きましょう

function getSwitched(elements){
  const changed = elements.map(function(element){
    //typeofを使うの忘れない！
    if(typeof element === 'number'){
      return element.toString();
    }else if(typeof element === 'string'){
      return Number(element);
    }
  })
  return changed;
};
test(getSwitched([1, 2, 3]), ["1", "2", "3"]);
test(getSwitched(["1", "2", "3"]), [1, 2, 3]);
test(getSwitched(["1", 2, "3"]), [1, "2", 3]);

