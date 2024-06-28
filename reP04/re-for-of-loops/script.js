'use strict'
// Please don't delete the 'use strict' line above
let expected;
let actual;

//q1
/**
 * @param {Array<number>} ??? - 数値型の要素を持つ配列
 * @returns {number} 与えられた配列のすべての数字の合計
 */

function sumArray(array) {
    // ここにコードを書きましょう。
    return array.reduce(function (a, x) {return a + x; } );
    //return number.reduce(function (a, x) { return a + x; });;
}
  
actual = sumArray([1, 2, 3, 4]);
expected = 10;

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}
  
  // さらにテストを書きましょう。
actual = sumArray([11, 12, 13, 14]);
expected = 20;
  
  if (actual === expected) {
    console.log("Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
  }

  //q2
/**
 * @param {Array<number>} ??? - 数値型の要素を持つ配列
 * @returns {number} 与えられた配列のすべての数字をかけあわせた答え
 */

function productArray(array1) {
    return array1.reduce(function(a, x) { return a * x ;　});
  }
  
  actual = productArray([1, 2, 3, 4]);
  expected = 24;
  
  if (actual === expected) {
    console.log("Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
  }
  
  actual = productArray([11, 12, 13,14]);
  expected = 24;
  
  if (actual === expected) {
    console.log("Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
  }
  
//q3
/**
 * @param {Array<any>} ???
 * @returns {boolean} 与えられた配列に "fun" という文字列が入っているかどうかを表すブーリアン
 */

function hasFun(array2) {
    if(array2.includes("fun")){
        return true;
    }else{
      return false;
    }
  }
  
  actual = hasFun(["whatever", 2, false, "fun", "hello"]);
  expected = true;
  
  if (actual === expected) {
    console.log("Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
  }
  
  actual = hasFun(["whatever", 2, false, "run", "hello"]);
  expected = false;
  
  if (actual === expected) {
    console.log("Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
  }
  
    
  actual = hasFun(["whatt??", 2, "fun", "run", "hello"]);
  expected = true;
  
  if (actual === expected) {
    console.log("Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
  }

  //q4
/**
 * @param {Array<any>} ???
 * @returns {boolean} 与えられた配列の要素がすべてブーリアンかどうかを表すブーリアン
 */

/**
 * function containsOnlyBooleans(element) {
  return Array.prototype.every(containsOnlyBooleans) === 'boorean';
}
 */

function containsOnlyBooleans(Array) {
  return typeof Array == 'boolean';//ここが違う、でもどうしたらいいかわからん
}

actual = containsOnlyBooleans([true, false, true, false, false]);
expected = true;

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = containsOnlyBooleans([true, true, true, "not a boolean"]);
expected = false;

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

// さらにテストを書きましょう。


  
  //q5
  /**
 * @param {Array<any>} ??? - 1番目の配列
 * @param {Array<any>} ??? - 2番目の配列
 * @returns {Array<any>} 与えられた2つの配列を連結させた配列
 */

function concatenate(arr1, arr2) {
    // ここにコードを書きましょう。

  }
  
  actual = concatenate(["eeny", "meeny"], ["miny", "moe"]);
  expected = ["eeny", "meeny", "miny", "moe"];
  
  // 現時点では、配列を比較するには JSON.stringify を使う必要があると覚えておいてください。
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
  }
  
  // さらにテストを書きましょう。
  