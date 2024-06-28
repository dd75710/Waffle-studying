/* exported getElementsByClassName */
//q2
const getElementsByClassName = () => {
  const elements = document.querySelectorAll;
  return ;
};
console.log(document.childNodes);//NodeList(2)[<!DOCTYPE html>, html]
/*
0: <!DOCTYPE html>
1: html
length: 2
[[Prototype]]: NodeList
*/

/**
 * やらなくてはいけないこと
 * 1.全ての要素にアクセスする
   a. 子要素がある場合、ターゲットの要素を子要素にする
       これを繰り返すと全ての要素にアクセスできる
 * 2.返り値の配列を宣言する
 * 3.その要素が対象のクラスだった場合返り値の配列に追加する
 */

//演習
function fibonacci(num){
  if (num <= 1) {
    return num;
  }

  return fibonacci(num - 1) + fibonacci(num - 2);
}
fibonacci(4)//3
fibonacci(6);//8


let countDownFrom = (num) => {
  if (num === 0) return ;
  console.log(num);
  countDownFrom(num - 1);
  return 1;
}
countDownFrom(10);

let categories =[
  { id: 'animals', 'parent': null},
  { id: 'mammals', 'parent': 'animals'},
  { id: 'cats', 'parent': 'mammals'},
  { id: 'dogs', 'parent': 'mammals'}

]



let makeTree = () => {
  let node ={};
  categories
  .filter(c => c.parent === parent)
  .forEach(c => node[c.id] = makeTree(categories));
  return node;
}

console.log(
  JSON.stringify(
    makeTree(categories, null), null, 2)
  )
