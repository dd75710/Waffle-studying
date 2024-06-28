/* exported stringifyJSON */

const stringifyJSON = () => {
}
console.log(JSON.stringify({ x: 5, y: 6 }));
// オブジェクトを渡すと何が出力されますか？
//{"x":5, "y": 6}
console.log(
  JSON.stringify({ x: [10, undefined, function() {}, Symbol("")] })
);
// オブジェクトの値に「numbers」「undefined」「functions」「symbols」を渡すと何が出力されますか？
//{"x": [10, null, null, null]}
console.log(JSON.stringify([3, "false", false]));
// 「numbers」「strings」「booleans」の配列を渡すと何が出力されますか？
//[3,"false",false]
console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));
// Date オブジェクトを渡すと何が表示されますか？
//"2006-01-02T06:04:05.000Z"






