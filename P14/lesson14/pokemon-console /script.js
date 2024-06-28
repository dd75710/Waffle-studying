'use strict'
// Please don't delete the 'use strict' line above

// fetch(`https://pokeapi.co/api/v2/pokemon/?limit=10`)
// .then((results) => {
//   console.log(results.json())
//  })
//Promiseを返す

fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${10}`)
.then((results) => {
  return results.json()//jsonになり結果を受け取る
})
//results:resultsをjsonにしたもの、responseのデータ、広いデータが入っている
//json:jsで使えるようにしたもの、jsonではない
.then((json) => {
    //q6
    console.log(json.results)
    //q7
    console.log(json.results.map(pokemon =>pokemon.name))})
