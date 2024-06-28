'use strict'
//Please don't delete the 'use strict' line above

//lecture
function recursive(num){

    if(num === 1){
        return 1;
    }
    return num * recursive(num - 1);
    

}
/*
コードの return recursive(num) * recursive(num - 1); の部分で、関数が無限に再帰呼び出しを行います。
これは無限ループのように振る舞い、スタックオーバーフローエラーを引き起こします。
関数が自身を呼び出す際に、引数が変化しないため、再帰が終了する条件に達しなくなります*/


recursive(5);
/**
 * recursive(num (= 1))の時の処理だけreturn 
 */
function test1(){
    return "!";
}

function test2(){
    return test1();
}
console.log(test2());