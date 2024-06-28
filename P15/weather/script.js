'use strict'

//const { error } = require("console");

// Please don't delete the 'use strict' line above


// 使い回しがいい
// 縦スクロールできる

//q1
// 1. fetchを使って情報を取得
// 2. 情報をJSON形式に変換
// 3. 変換された情報を、Google Chromeのコンソール画面に出力
// 4. コンソール画面上で「東京地方」の天気予報が格納された配列を探し出す
// 5. コンソール画面に、東京の明日の天気だけを表示
//     1. 配列は3つの要素で構成されていますが、内容は[今日の天気, 明日の天気, 明後日の天気]となっています。ここから明日の天気を取ってきましょう

//q2
// WEATHER_FORECASTの末尾の130000の数値は地域コードです。
//([参考](https://nlftp.mlit.go.jp/ksj/gml/codelist/PrefCd.html))
// これを使って、**地域コードを受け取ったら、該当地域の今日の天気予報を返す`getTodaysForecast`関数を作りましょう。
// （天気予報の結果がコンソール画面に表示されればOK！）
// なお、`getTodaysForecast`関数には、エラー処理をつけてください。
//具体的には、**fetchする前に、間違った地域コードが入力された場合には、
//コンソール画面に「正しい地域コードを入力してください」と表示させるようにしましょう。**

function getTodaysForecast(a){
    const WEATHER_FORECAST =
        "https://www.jma.go.jp/bosai/forecast/data/forecast/" + a + "130000.json"
    const content = document.getElementById("forecast")
    console.log(content);
    
        fetch(WEATHER_FORECAST)
    .then((response) => {
    response.json()
    .then((data) => {
        console.log("元のデータ", data);
        // const tokyoForecast = data.find((region) =>region.name === "東京地方");
        const tokyoForecast = data.areas
        // console.log(tokyoForecast);
        //わからなかった、、↓
        /*ブラケット記法*/console.log(data[0]["timeSeries"][0]["areas"][0]["weathers"][1])
        /*ドット記法*/console.log(data[0].timeSeries[0].areas[0].weathers[1])
    })
})
    if(!WEATHER_FORECAST.includes("130000")){
    console.log("正しい地域コードを入力してください")
}
}


//q3
// DOM操作を利用して、index.htmlの方にも天気が表示されるようにしましょう！
// index.htmlも編集し、pタグやh3タグで表示できれば OKです。

function getTodaysForecast(regionCode) {
  const code = regionCode.substring(0,2);
  const codenum = parseInt(code);
  if(codenum < 1 || codenum > 47){
      console.log(" 正しい地域コードを入力してください");
      return;
  }
  
  const WEATHER_FORECAST =　"https://www.jma.go.jp/bosai/forecast/data/forecast/" + a + ".json"
  
  const content = document.getElementById("forecast");

  fetch(WEATHER_FORECAST)
  .then((response) => {
    response.json()
    .then((data) => { 
      const forecast = data[0]["timeSeries"][0]["areas"][0]["weathers"][0];
      console.log(forecast);
      content.innerHTML = forecast;
    })
  })
}


//q4
// 問題2では、地域コードが違う場合には、fetchする前にエラーを処理しました。
// ただ、エラーはどこで起こるかわかりません。
// 突然、気象庁のAPIがサービスを終了したら、APIのfetchが失敗する可能性もあります。
// そこで、fetchが失敗したときにどう処理するかを、catchメソッドを使ってプログラムとして書いてみましょう。
//fetchが失敗したときに、**Chromeのコンソール画面とHTMLの両方に「情報を取得できませんでした」と表示させてください。**