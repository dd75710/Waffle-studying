const result = fetch("http://localhost:8080/hello");
result.then((response) => {
    const json = response.json();
    json.then((data) => {
        console.log(data);
        console.log(data.message);
    })
    //hello worldを表示 
    //const text = response.text();
    //text.then((data) => {
        //console.log(data);
    })
    //ステータスコードを表示
    //console.log(response);
    //console.log("ステータスコード: ",  response.status);
//})
//ステータスコード；200＝＞成功

fetch("https://dog.ceo/api/breeds/image/random").then((response) => {
    response.json().then((data) =>{
        console.log("dog: ", data);
    })
})
const forecastApi = fetch("https://weather.tsukumijima.net/api/forecast/city/130010");
forecastApi.then((response) =>{
    //const description = response.description();
    //↓これだと全部でる
    /*const text = response.text();
    text.then((description) =>{
        console.log(description);
        console.log(text);
    })*/
//これでも全部出る
   const descriptionText = response.text();
   descriptionText.then((text) => {
　      console.log(text);
   })
})

fetch("https://weather.tsukumijima.net/api/forecast/city/130010")
.then((response) =>{
    console.log(response)
    response.json()
        .then((data) => {
            console.log(data.description.text);//jsのオブジェクトになっている
            console.log(data.forecasts[0]);
            console.log(data.forecasts[0].telop);
            console.log(data.forecasts[1]);
            console.log(data.forecasts[1].telop);
            //これでいいんだ、、、
            //→data.description.textでdescriptionの中のtextをconsoleで表示できる、、、
        })
    })//.then(res => console.log("result ", res));


//console.log(fetch("https://weather.tsukumijima.net/api/forecast/city/130010"))
