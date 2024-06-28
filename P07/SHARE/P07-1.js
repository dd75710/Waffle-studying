//q1
let theLoneliestNumber = 1;

let aFriend = theLoneliestNumber;

console.log(theLoneliestNumber); // ???
console.log(aFriend); // ???
console.log(theLoneliestNumber === aFriend); // ???

//q2
const kermit = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ];
  const missPiggy = kermit.slice();
  
  console.log(kermit); // ['red', "orange", "yellow""red","green","blue","indigo",　"violet",]
  console.log(missPiggy); // ['red', "orange", "yellow""red","green","blue","indigo",　"violet",]
  console.log(kermit === missPiggy); // false
  //中に入っているものは同じ？、シャローコピー（値コピー、浅いshallowcopy）、新しい配列を作る
  //Googleドキュメントをコピーしたら中身同じだけどリンクは違う


//q3
let mamas = "Monday";

let papas = mamas;

papas += ", so good to me.";

console.log(mamas); // Monday
console.log(papas); // Monday, so good to me.
console.log(mamas === papas); // false

//q4
const theFabFour = {
    bass: ["paul"],
    drums: ["ringo"],
    guitar: ["george", "john"],
    vocals: ["george", "john", "paul", "ringo"],
  };
  
  const theFifthBeatle = theFabFour;
  theFifthBeatle.guitar.push("beau");
  
  console.log(theFabFour); // ???
  console.log(theFifthBeatle); // ???
  console.log(theFabFour === theFifthBeatle); // ???
  
  console.log(theFabFour.guitar); // ???
  console.log(theFifthBeatle.guitar); // ???
  console.log(theFabFour.guitar === theFifthBeatle.guitar); // ???

