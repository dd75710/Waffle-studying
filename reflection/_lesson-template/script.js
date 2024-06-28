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
  /**値を直接再割り当てせずに a と b の値を入れ替えて、
   * 期待通りの値が出力されるようにしましょう。*/

let a = "B";
let b = "A";

// ここにあなたのコードを書いてください
"B" = a;

console.log(a); // "A" を表示
console.log(b); // "B" を表示

//q2
/** 2 つの引数 username と password をとる 
 * validCredentials という名前の関数を作成しましょう。
 * 両方の引数が十分な長さであれば true を、
 * そうでなければ false を返してください。
 * 「十分な長さ」は自由に決めてください。*/


function validCredentials(username, password){
  if(username.length > 7 && password.length > 7){
    return true;
  }else{
    return false;
  }
}
let username = "helloworld";
let password ="applebanana";

let result = validCredentials(username, password);
console.log(result);

//q3
/**以下の `pokemons` 配列を使って、
関数 `getNames` を宣言してください。 */

const pokemons = [
    {
      Number: "001",
      Name: "Bulbasaur",
      Generation: "Generation I",
      About:
        "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
      Types: ["Grass", "Poison"],
    },
    {
      Number: "025",
      Name: "Pikachu",
      Generation: "Generation I",
      About:
        "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.",
      Types: ["Electric"],
    },
    {
      Number: "019",
      Name: "Rattata",
      Generation: "Generation I",
      About:
        "Rattata is cautious in the extreme. Even while it is asleep, it constantly listens by moving its ears around. It is not picky about where it lives—it will make its nest anywhere.",
      Types: ["Normal"],
    },
  ];

  /**
 * @param {Array<object>} ??? - ポケモンオブジェクトが入った配列
 * @returns {Array<string>} 各オブジェクトの `Names` を要素に持つ配列
 */

// ここにコードを書きましょう.
function getNames(pokearr){

}

// 'pokemons' の配列は、以下のコードより上に書かれていなければいけません。

test(getNames(pokemons), ["Bulbasaur", "Pikachu", "Rattata"]);


  //q4
/**関数 printCars 内の while ループを for ループに書き換えてください。
 * 書き直しても結果が変わらないようにしましょう。 */

function printCars() {
    const cars = ["Toyota", "Mazda", "Mercedes", "BMW", "Hyundai", "Volvo"];
    /*let i = 0;
  
    while (i < cars.length) {
      console.log(cars[i]);
      i++;
    }*/
    for(let i = 0; i < cars.length; i++){
      console.log(cars[i]);
    }
  }
  printCars();

  //q6
  /**関数 getQuestions を宣言してください。
   * この関数は .filter メソッドを使用してください。
   * アロー関数も使用してください。
   * アロー関数は getQuestions 関数の 内部 で使用されます。
 */

  		/**
 * @param {Array<string>} ???
 * @returns {Array<string>} 与えられた配列の中にある、大文字で始まり、疑問符で終わる文字列のみを要素として持つ配列
 */
// ここにコードを書きましょう
function getQuestions(){

}
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
