'use strict'
// Please don't delete the 'use strict' line above
//q1
/**
 * 10未満の自然数のうち、3 もしくは 5 の倍数になっているものは 3, 5, 6, 9 の4つがあり、
 * これらの合計は 23 になります。
 * 同じようにして、1000 未満の 3 か 5 の倍数になっている数字の合計を求めてください。
 */
function sumMultiplesBelow1000(){
    let sum = 0;
    //for文を使う、while文でいけないわけは？
    for(let i = 1; i < 1000; i++){
        // "%"を使ってね 
        if(i % 3 === 0 || i % 5 === 0){
            sum += i;
        }
}
    return sum;
}
//定数を定義
const result = sumMultiplesBelow1000();
console.log(result);//233168


//q2
/**
 * 左右どちらから読んでも同じ値になる数を回文数と言います。
2桁の数の積で表される回文数のうち、最大のものは 9009 = 91 × 99 です。
では、3桁の数の積で表される回文数の最大値を求めてください。
 */
function palindromicNumberMaximum(){
    let max = 0;
    for(let i = 1;i < 1000; i++){

    }
}

