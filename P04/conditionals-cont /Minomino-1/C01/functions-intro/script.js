'use strict'
// Please don't delete the 'use strict' line above

// ヒント： ここで何かする必要があるかもしれません
let i = 1;
function counter() {
    // ここにあなたのコードを書いてください
  console.log(i);
  i++;
}
  
  counter(); // => 1
  counter(); // => 2
  counter(); // => 3
  // etc.
  // ヒント： ここで何かする必要があるかもしれません


function counter() {
    // ここにあなたのコードを書いてください
  }
  
  counter(); // => 1
  counter(); // => 2
  counter(); // => 3
  // etc.

  function isOdd(givenNumber) {
    // ここにあなたのコードを書いてください
    // 与えられた数値によって、"Yes, it's odd" もしくは "No, it's even" を表示
  
  if(givenNumber%2==1){
    console.log("Yes, it's odd");
  }else{
        console.log("No, it's even")
  }
}

isOdd(2);
isOdd(7);

