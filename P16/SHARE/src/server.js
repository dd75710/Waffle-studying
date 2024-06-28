const { constants } = require("buffer");
const pokeData = require("./data");

const setupServer = () => {
  /**
   * Create, set up and return your express server, split things into separate files if it becomes too long!
   */
  const express = require("express");
  const app = express();

  // pokeDataに格納されている全てのデータを「そのまま」表示するAPI
  //ココ！👇
  // app.get("/api/sample", (req, res) => {
  //   res.send(pokeData);
  // });
  //非同期的にpokeDataを送信？
  //答え？：pokeDataを返す

  // http://127.0.0.1:3000/api/sample

  // ↓↓↓↓ 宿題のプログラムは、ここより下に書く
  // app.get("/api/pokemon", (req, res) => {
  //   res.send(pokeData);
  // });
  app.get("/api/pokemon", (req, res) => {
    res.send(pokeData.pokemon);
  });

  app.get("/api/pokemon", (req, res) => {
    let result = pokeData.pokemon; //pokedata.pokemon:配列を返している
    const limit = Number(req.query.limit);

    if (limit) {
      result = result.slice(0, limit);
    }

    res.send(result);
  });

  //
  app.get("/api/pokemon/:id", (req, res) => {
    const id = req.params.id;
    console.log("id", id);
    let result = pokeData.pokemon;

    res.send(result);
  });

  // ↑↑↑↑ 宿題のプログラムは、ここより上に書く

  // '/'のルーティングは、その他のAPIのプログラムよりも下に記載
  app.use("/", (req, res) => {
    console.log("Hello, express");

    res.send(`
    <html>
        <body>
            <h1>Let's make Pokemon API</h1>
        </body>
    </html>
    `);
  });

  return app;
};

module.exports = { setupServer };
