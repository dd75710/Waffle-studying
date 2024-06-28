'use strict'
// Please don't delete the 'use strict' line above

//q1
/*フィボナッチ数列の項は前の2つの項の和です。
最初の2項を 1, 2 とすれば, 最初の10項は以下の通りとなります。
1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
では、数列の項の値が400万以下のとき, 偶数の項の総和を求めてください。*/

//function fib(n) 
function fiboSum(fib){
    let a = 1;
    let b = 2;
    let sum = 0 ;//a + b

    while(b <= fib){
        if(fib % 2 === 0){
        sum += b;//return sum;//let nextTerm = a + b;
    }/*else if(nextTerm > fib){
        break;
    }
    sum += nextTerm;*/

    //let nextTerm = a + b;
    let nextTerm = 4 * b + 2;

    a = b;
    b = nextTerm;
    }
    return sum;
}
//let result = fiboSum(10);
//console.log(result);
console.log(fiboSum(4));

//answer
function fiboSum(limit){
    let sum = 0 ;
    let a = 1;
    let b = 2;

 for(let next = 0; next < limit; next = a + BigInt){
        if(b % 2 === 0){
        sum += b;
    }

    a = b;//一番目の項を二番目に
    b = next;
    }
    return sum;
}
console.log(fiboSum(4));

//q2
/**
 * 13195 の素因数は 5, 7, 13, 29 です。
 * 600851475143 の素因数のうち最大のものを求めてください。 */

function maxPrimeNum(){
    let num = 600851475143;
    let sqrtNum = Math.sqrt(num);
    let truncNum = Math.trunc(sqrtNum);
    //ここまでできた！頑張った！
    let max = 1;
    let isSosu = false;

    for(let i = truncNum; i > 1; i--){
        if(truncNum % 1 === 0){
            for(let j = 3; j <= Math.floor(Math.sqrt(i)); j = j + 2){
                if(i % j === 0){
                    isSosu = false;
                    break;
                }else{
                    isSosu = true;
                }
            }
            if(isSosu){
                max = i;
                return max;
            }
        }
        if(isSosu){
            break;
        }    
    }
    return max;
}
//answer
function largestPrimeFactor(number){
let factor = 2;//最初の素数->factorは素数

while(number > 1){
    if(number % factor === 0){
        number /= factor;//割り切れたら数を更新
    }else{
        factor++;
    }
}

return factor;
}
console.log(largestPrimeFactor(24));//3
console.log(largestPrimeFactor(600851475143));//6857

//q3
/*2520 は 1 から 10 の数字の全ての整数で割り切れる数字であり、そのような数字の中では最小の値です。
では、1 から 20 までの整数全てで割り切れる数字の中で最小の正の数はいくらになりますか？*/
function findnumberTwenty(){
let num = 20;
while(true){//while(true)はわからんかった
    let arr = [];
    for(let i = 0; i<= 20; i++){//ここできた
        if(num % i === 0){
            arr.push(i);//ここできた！頑張った！
        }
    }
    if(arr.length === 20){
        break;
    }
    num++;
}
return num;
}

console.log(findnumberTwenty());

//1と2の最小公倍数、２と３の最小公倍数...で求めていく
//answer

function saidaikouyakusuu(a,b){
    while(b !== 0){
        let temp/**tempある数 */ = b;
        b = a % b;
        a = temp;
    }
    return a;
}
function saisyoukoubaisuu(a,b){
    return (a * b)/ saidaikouyakusuu(a,b);
}
function smallestMultiple(n){
    let result = 1;
    for(let i = 2; i < n; i++){
        result = saisyoukoubaisuu(result, i);
    }
    return result;
}
console.log(smallestMultiple(20));