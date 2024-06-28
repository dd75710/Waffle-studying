//Expressのサーバを読み取る
const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true}));

//トップページにリクエストが来たら//第二引数：コールバック関数で何を行うか定義
app.get('/', (request, response) => {
  response.send('Hello World!');
});

//sendFile：引数で指定されたハイルをレスポンスに返す
app.get('/form', (request, response) => {
  response.sendFile(__dirname + '/form.html');
});

app.post('/sample', (request, response) => {
  const name = request.body.key;
  response.send('あなたの名前は' + name + 'です。');
})
//サーバが起動//8080：ポート番号
app.listen(8080, () => {
  console.log('server running on port 8080');
});

