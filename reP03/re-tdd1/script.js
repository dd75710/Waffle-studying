'use strict'
// Please don't delete the 'use strict' line above

function isPositive(num) {
    if (num > 0) {
      return true;
    }
    return false;
  }

   // テスト1つ目
  let actual = isPositive(10);
  let expected = true;

   if (actual === expected) {
       console.log("Yay! Test PASSED.");
   } else {
       console.error("Test FAILED. Keep trying!");
       console.log("  expected:", expected);
       console.log("    actual:", actual);
   }

   // テスト2つ目
  actual = isPositive(0);
  expected = false;

   if (actual === expected) {
       console.log("Yay! Test PASSED.");
   } else {
       console.error("Test FAILED. Keep trying!");
       console.log("  expected:", expected);
       console.log("    actual:", actual);
   }


//q1
// testという名前で関数を宣言しよう
function isPositive(number){
    return number > 0;
}

function test(actual, expect){
    if(actual === expect){ //actual expectを比較
        console.log("Yay! Test PASSED.");
    }else {
        console.log("Test FAILED. Keep trying");
        console.log("実際のテスト値：", actual);
        console.log("期待値:", expect);
    }
   
}

// ちゃんと動くか確認
test(isPositive(10), true);
// => "Yay! Test PASSED." と表示される?

test(isPositive(10), false);
// => "Test FAILED. Keep trying" と表示されたのち、「実際のテスト値」と「期待値」が表示される?

//