'use strict'
// Please don't delete the 'use strict' line above

    function numberOfPeople(arrayOfPeople) {
        return arrayOfPeople.length;
   }

    let actual = numberOfPeople(["Kimiko", "Yan", "Dustin", "Dylan"]);
    let expected = 4;

    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("Yay! Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.log("  expected:", expected);
        console.log("    actual:", actual);
    }

    actual = numberOfPeople(["John", "Paul", "George H.", "Ringo", "George M."]);
    expected = 5;

    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("Yay! Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.log("  expected:", expected);
        console.log("    actual:", actual);
    }
        //q1
        function numberOfPeople(arrayOfPeople) {
        return arrayOfPeople.length;
   }

   // 関数testArrayのコードを、以下に書きましょう！



 // ちゃんと動くか確認 → 全て"Yay! Test PASSED."と表示されますか??
 testArray(numberOfPeople(["Urara", "Tokotoko"]), 2);
　　testArray(numberOfPeople(["Akki", "Koshimu", "Ishity", "Maoko"]), 4);
　　testArray(numberOfPeople([]), 0);

   // "Test FAILED. Keep trying" と表示されるように、引数を決めてtestArrayを呼び出してみましょう！

   //q2
   /**
 * 引数:  ??? - 配列
 * 返り値:  配列の真ん中が "hi" に置き換えらえた配列、もしくは同じ配列を返す
 */
// ここにコードを書きましょう


 // テスト
actual = hiInTheMiddle([1, 2, 3, 4, 5]);
expected = [1, 2, "hi", 4, 5];

 // actual と expected を使って、テストを書いてみましょう！
 // 上で宣言した、testArray関数を使ってみましょう！


actual = hiInTheMiddle([1, 2, 3, 4]);
expected = [1, 2, 3, 4];

// actual と expected を使って、テストを書いてみましょう！
 // 上で宣言した、testArray関数を使ってみましょう！

 //q3
 /**
 * 引数： ??? - 配列
 * 返り値： 与えられた配列の最後の要素を返す。
 */
// ここにコードを書きましょう

array = [1, 2, 3, 4];

actual = pop(array);
expected = 4;
testArray(actual, expected)


actual = array;
expected = [1, 2, 3];
testArray(actual, expected)

//q4
/**
 * 引数①: ??? - 配列
 * 引数②: ??? - 配列の _先頭_ に追加する値
 * 返り値: {number} 処理後の配列の長さを返す。
 */
// ここにコードを書きましょう

array = [1, 2, 3, 4];

actual = unshift(array, 5);
expected = 5;

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}

actual = array;
expected = [5, 1, 2, 3, 4];
testArray(actual, expected)

//q5
/**
 * 引数: ??? - 配列
 * 返り値： 与えられた配列の先頭の要素を返す。
 */
// ここにコードを書きましょう

array = [1, 2, 3, 4];

actual = shift(array);
expected = 1;

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}

actual = array;
expected = [2, 3, 4];

testArray(actual, expected)