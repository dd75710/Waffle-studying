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
    * @param {Array<number>} ???
    * @returns {Array<string>} 与えられた配列の中にある、数字それぞれに20点追加した点数の配列。
    * ただし、最大100点とし、20点加点した結果、100点を越える場合は、その要素は100とする
    */
   // ここにコードを書きましょう
   function giveBonusPoints(numArray){
        return numArray.map((num) => {
            if(num > 80){
                return 100;
            }else{
                return num + 20;
            }
        })
   }
   /**
    * function giveBonusPoints(array){
    * let result = array.map(function(value)
    * if(value > 80){
    *   return 100;
    *   }else{
    *       return value + 20
    *   }
    * })
    * return result;
    */
   /*const giveBonusPoints = (array) =>
   a+= 20;//
   ...*/
   const points = [10, 60, 20];
   const points2 = [10, 90, 85];

   test(giveBonusPoints(points), [30, 80, 40]);
   test(giveBonusPoints(points2), [30, 100, 100]);

  //q2
  /**
	* @param {Array<Object>} ???
	* @returns {Array<string>} 与えられた配列の中にある、Level45以上のPokemonオブジェクトのみを要素として持つ配列
	*/
// ここにコードを書きましょう
function getStrongPokemon(list){
    const pokemon = list.filter((pokemonName) => {
        return pokemonName["level"] >= 45;
    });
    return pokemon;
}
//
const getStrongPokemon = (array=>
    array.filter((pokemon)=>
        pokemon["level"] >= 45)
)
//return pokemon["level"] >= 45;

const pikachu = {"name": "Pikachu", "level": 24};
const hitokage = {"name": "Hitokage", "level": 50};
const charizard = {"name": "Charizard", "level": 75};
const pachirisu = {"name": "Pachirisu", "level": 32};
const eevee = {"name": "Eevee", "level": 30};
const  piplup= {"name": "Piplup", "level": 80};
const pokemonList = [pikachu, hitokage, charizard, pachirisu];
const pokemonList2 = [eevee, piplup];
test(getStrongPokemon(pokemonList), [hitokage, charizard]);
test(getStrongPokemon(pokemonList2), [piplup]);

//テストをもう1つ自分で追加しましょう
