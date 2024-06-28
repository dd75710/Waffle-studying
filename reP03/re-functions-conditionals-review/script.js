'use strict'
// Please don't delete the 'use strict' line above

    // ファイル全体で使用する TDD 用の変数を宣言する
    let expected;
    let actual;

     // 上の問題のように、関数testにチェックする内容を全てまとめる
    function test(actualExpression, expectedExpression){
        if (actualExpression === expectedExpression) {
            console.log("Yay! Test PASSED.");
        } else {
            console.error("Test FAILED. Keep trying!");
            console.log("    actual: ", actualExpression);
            console.log("  expected: ", expectedExpression);
        }
    }

    actual = /* テストを行う EXPRESSION（式）を定義する */
    expected = /* EXPRESSION（式）の期待値を定義する */

    // testを呼び出す
    test(actual, expected)


//q1   
/**
 * 引数①: {string} ??? - テストの対象となる文字列
 * 引数②: {number} ??? - 閾値
 * 返り値： 与えられた文字列の長さが指定された閾値より長いかどうか
 */

function isLongerThan(string, number){
    if (string.length > number){
        return true;
    }else if(string.length < number){
        return false;
    }else{
        return "Invalid input.";
    }
    
}

actual = isLongerThan("three", 3);
expected = true;

// testを呼び出す
 test(actual, expected)

actual = isLongerThan("three", 5);
expected = false;

// testを呼び出す
 test(actual, expected)

actual = isLongerThan(3, 5);
expected = "Invalid input.";

// testを呼び出す
 test(actual, expected)
 actual = isLongerThan("five", 2);
 expected = true

 //q2
 /**
 * 引数: { number }num - テストの対象となる数値
 * 返り値:  与えられた数値が奇数かどうかを表すブーリアン
 */
// ここにコードを書きましょう
function isOddWithoutIf(num){
    typeof num === "number";
    return 
}
actual = isOddWithoutIf(3);
expected = true;

// testを呼び出す
 test(actual, expected)

actual = isOddWithoutIf(4);
expected = false;

// testを呼び出す
 test(actual, expected)

 actual = isOddWithoutIf(17);
 expected = false;

 //q3
 /**
 * 引数: num - 数値（0-10）。その名前がアルファベットの形で返ることになる
 * 返り値:  {"zero"|"one"|"two"|"three"|"four"|"five"|"six"|"seven"|"eight"|"nine"|"ten"} 与えられた数値をアルファベットで記した時の名前
 */
function getSimpleNumberName(num){

}

actual = getSimpleNumberName(0);
expected = "zero";

// testを呼び出す
 test(actual, expected)

 actual = getSimpleNumberName(5);
 expected = "five";


//q4
/**
 * 引数:  ??? - 正多角形の辺の数 (3-8)
 * 返り値:  {"triangle"|"square"|"pentagon"|"hexagon"|"heptagon"|"octagon"} 与えられた数の辺を持つ凸多角形の英語名
 */
// ここにコードを書きましょう

actual = getRegularConvexPolygonName(3);
expected = "triangle";

// testを呼び出す
 test(actual, expected)

// さらにテストを書いて、コードが正しいことを確認してください