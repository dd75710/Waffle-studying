'use strict'
// Please don't delete the 'use strict' line above

//q2-1
//allの場合Allがついているものを使う
const p = document.querySelectorAll("p");

//q2-2
const mainHeader = document.querySelector("main-header");

//q2-3
const ip = document.getElementsByClassName("inner-paragraph");
for (let i = 0; i < ip.length; i++){
    let element = ip[i];
    console.log(element.textContent);
}

//q3−1
function bigLetter(string){
    return string.toUpperCase();
}
//toLowerCase()で大文字を小文字に

//q3-2
function alphaBigLetter(items){
   const elements = document.querySelectorAll(items);
  //わからなかった↓
   for (let i = 0; i < elements.length; i++  ){
    elements[i].textContent = elements[i].textContent.toUpperCase();
   }
}
alphaBigLetter(".inner-paragraph");
/** 
function convertTextToUpperCase(selector) {
    const elements = document.querySelectorAll(selector);

    elements.forEach(element => {
        element.textContent = element.textContent.toUpperCase();
    });
}
function bigstr2(select) {
//対象の要素を取得
  const elements = document.querySelectorAll(select);

  //取得した要素のテキストを上書きしている
  for (let i = 0; i < elements.length; i++) {
    elements[i].textContent = elements[i].textContent.toUpperCase();
  }
}
bigstr2("p");

*/

//q3-4
function bigLetterAll(){
    //bodyを入れるのか！or ＊ で全部を指定できる
    const elements = document.querySelectorAll("body");
    const elementsArray = Array.from(elements);

    for (let i = 0; i < argArray.length; i++) {
        const arg = argArray[i];
        arg.textContent = arg.textContent.toUpperCase();
      }
}



/**
function toUpperAll(){
    *　→「全て」を表す
    const args = document.getElementsByTagName("*");
    const argArray = Array.from(args);

    for (let i = 0; i < argArray.length; i++) {
        const arg = argArray[i];
        arg.textContent = arg.textContent.toUpperCase();
      }
}
function Omoji(){//タグ、id、クラス名で検索
	const id = document.querySelectorAll("body")
	console.log(id);
	for(let i of id){
        innerHTMLを使うと文字列が行間とか保ちながら大文字にできる
		i.innerHTML = i.innerHTML.toUpperCase();
	}
}
Omoji();
textContentだとぜんぶ文字列になるっぽいです...?
 */