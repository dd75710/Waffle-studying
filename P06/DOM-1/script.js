'use strict'
// Please don't delete the 'use strict' line above

// favoriteFoodのidがついたpタグを持ってきて、変数に入れる
const favoriteFood = document.getElementById("favoriteFood")

// 上で作成した変数に、文字をいれる
favoriteFood.textContent = "カレーライス";


// 問題1
// 上のを真似して、「好きなこと」も表示させましょう！
const favoriteThings =  document.getElementById("favoriteThings")

favoriteThings.textContent = "音楽を聴くこと";

// 問題2
// 日付を表示させましょう！
const today = new Date();

// 今日の 年 を取得し、変数に保存
let year = today.getFullYear();

// 今日の 月 を取得し、変数に保存
let month = today.getMonth() + 1;

// 今日の 日 を取得し、変数に保存
let day = today.getDate();

// あとは、必要な情報をDOM操作を使って、HTMLに表示させよう
let dateSring = year + "年" + month + "月" + day + "日" ;
let dateContainer = document.getElementById("date-container");
dateContainer.textContent = dateSring;


// 問題3
// DOMイベントを活用して、「クリックしたら背景色が変わる」ようにしよう

// 呼び出されるたびにランダムに色を生成する
let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

document.getElementById('changeColor').addEventListener('click', function(){
    document.body.style.background = "#" + Math.floor(Math.random() * 16777215).toString(16);
});