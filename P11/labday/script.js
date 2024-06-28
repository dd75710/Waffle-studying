'use strict'
// Please don't delete the 'use strict' line above

//q1
/**素数を小さい方から6つ並べると 2, 3, 5, 7, 11, 13 であり、
 * 6番目の素数は 13 です。
 * では、10001 番目の素数を求めてください。 */
function sosuu(num){
    if(num < 2){
        return false;
    }
    for(let i = 2; i < Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;

}

function count(n){
    let count = 0;
    let candidate = 1;

    while(count < n){//いきなり２から始まる
        if(sosuu(candidate)){
            count++;
        }
    }
    return candidate;
}
const result = count(10001);
console.log(result);

//q2
/**10以下の素数の和は 2 + 3 + 5 + 7 = 17 です。

では、200万以下の全ての素数の和を求めてください。 */
function isprime(n){
    for(let i = 2; i*i<=n; i++){
        if(n % 1=== 0){
            return false;
        }
    }
}