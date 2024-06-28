'use strict'
// Please don't delete the 'use strict' line above

function mergeSortedLists(list1, list2) {
    // ここにあなたのコードを書いてください,mergeするだけ
    let list = [];
    let i = 0;
    let j = 0;
 while(i < list1.length && j < list2.length){
    if(list1[i] < list2[j]){
        list.push(list1[i]);
        i = i + 1;
    }else{
        list.push(list2[j]);
        j = j + 1;
    }
    
 }
 while(i < i.length){
    C.push(i[list1]);
    
 }
  }
  let list1 = [2, 7, 11, 23];
  let list2 = [6, 9, 13, 25];
  mergeSortedLists(list1,list2); // => [2,6,7,9,11,13,23,25]