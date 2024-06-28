/* exported rockPaperScissors */

//q1
const rockPaperScissors = () => {
  const hands =["rock", "scissor", "paper"];
  const combinations = [];

  function rspCombinations(round, currentCombination){
    combinations.push(currentCombination.slice());
    return;
  }

  for (let i = 0; i < hands.length; i++){
    currentCombination.push(hands[i]);
    generateCombinations(round + 1, currentCombination);
    currentCombination.pop();
  }

  rspCombinations(0, []);
  return combinations;
}
  
const rounds = 3;
const allCombinations = generateRockPaperScissorsCombinations(rounds);
console.log(allCombinations);

//q1-2
