'use strict'

// Please don't delete the 'use strict' line above

// ヒント： これまでにならったRecursionやメソッドの知識をフル活用する必要がありそうです・・・！
function mergeSort(array) {
    if(array.length <= 1){
        return array;
    }

        const center = Math.floor(array.length / 2);
        const leftData = array.slice(0, center);
        const rightData = array.slice(center);

        const leftSorted = mergeSort(leftData);
        const rightSorted = mergeSort(rightData);

        return merge(leftSorted, rightSorted);

  }
  function merge(leftData, rightData){
    let result = [];
    let i = 0;
    let j = 0;

    while(i < leftData.length && j < rightData.length) {
        if(leftData[i] < rightData[j]){
            result.push(leftData[i++]);
        }else{
            result.push(rightData[j++]);
        }
    }
    return result.concat(leftData.slice(i)).concat(rightData.slice(j));
  }


  let arr = [1,5,4,3,8,7,6,10,18,2];
  arr = mergeSort(arr)
  console.log(arr); // => [1, 2, 3, 4, 5, 6, 7, 8, 10, 18]



  //回答 
  function mergeSort2(ar){ 
    if (ar.length <= 1) {
        return ar;
      }
    //middle:半分
    const middle = Math.floor(ar.length / 2);
    //分割:slice, splitなどのメソッドがある、floor()は整数を返す、arr2.length / 2は　０から半分まで
    let A = ar.slice(0, middle);
    let B = ar.slice(middle);
    //console.log(A, "A");
   // console.log(B, "B");
    //Aを分割
    let mergeA = mergeSort2(A);
    let mergeB = mergeSort2(B);

    let result = merge2(mergeA, mergeB);
    return result;
  }

//2. マージ（統合）
function merge2(A, B){
    //列C
    let C = [];
    let aIndex = 0;
    let bIndex = 0;

    //以下の操作を列A、Bが空になるまで繰り返す
    while(aIndex < A.length && bIndex < B.length){
        //どちらも空でなければAとBの小さい方をCに入れる
        if(A[aIndex] < B[bIndex]){
            C.push(A[aIndex]);
            aIndex = aIndex + 1;
        }else{
            C.push(B[bIndex]);
            bIndex = bIndex + 1;
        };
        //列Aが空なら列Bで最小の要素を列Cに戻す
        //列Aが０になっている, if(aIndex === undefined)
    while(aIndex < A.length){
            C.push(A[aIndex]);
            aIndex = aIndex + 1;
        }
        //
    while(bIndex < B[bIndex]){
            C.push(B[bIndex]);
            bIndex = bIndex + 1;
        }
        return C;
    }
}
let ar = [1,5,4,3,8,7,6,10,18,2];
let mergeResult = mergeSort2(ar);
console.log(mergeResult);

//マージーソートとマージの順番が逆でもOK

/**
 * // 1. マージソート（分割）
//N個の要素からなる列を、それぞれn/2個の要素からなる列A、列Bに分割する。
//列Aに対してマージソートを行い、ソートした後の列をA’とする。
//列Bに対してマージソートを行い、ソートした後の列をB’とする。

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  //N個の要素からなる列を、それぞれn/2個の要素からなる列A、列Bに分割する。
  const middle = Math.floor(arr.length / 2);
  let A = arr.slice(0, middle);
  let B = arr.slice(middle);
  //console.log(A,'A');
  //console.log(B,'B');
  

  let mergeA = mergeSort(A);
  let mergeB = mergeSort(B);
  //console.log(mergeA,'mergeA');
  //console.log(mergeB,'mergeB')

  let result = merge(mergeA, mergeB);
  return result;
}
//2. マージ(統合)
//整列されているAの列と、Bの列と、空のCの列
//以下の操作を、列A、列B全てが空になるまで繰り返す。
//列Aが空であれば、列Bで最小の要素を列Cに移す
//列Bが空であれば、列Aで最小の要素を列Cに移す
//どちらでもなければ、列Aの最小の要素と列Bの最小の要素のうち、小さい方を列Cに移す。

function merge(A, B) {
  let C = [];
  let aIndex = 0;
  let bIndex = 0;

  //以下の操作を、列A、列B全てが空になるまで繰り返す。
  while (aIndex < A.length && bIndex < B.length) {

    //どちらでもなければ、列Aの最小の要素と列Bの最小の要素のうち、小さい方を列Cに移す。
    if (A[aIndex] < B[bIndex]) {
      C.push(A[aIndex]);
      aIndex = aIndex + 1;
    } else {
      C.push(B[bIndex]);
      bIndex = bIndex + 1;
    }
  }
    //列Aが空であれば、列Bで最小の要素を列Cに移す
    while (aIndex < A.length) {
      C.push(A[aIndex]);
      aIndex = aIndex + 1;
    }
    //列Bが空であれば、列Aで最小の要素を列Cに移す
    while (bIndex < B.length) {
      C.push(B[bIndex]);
      bIndex = bIndex + 1;
    }
  
  return C;
}
let arr = [1,5,4,3,8,7,6,10,18,2];
let mergeResult = mergeSort(arr);
console.log(mergeResult);
 */