const fs = require("fs/promises");

const moveTable = {
  A: "rock",
  B: "paper",
  C: "scissors",
  X: "lose",
  Y: "draw",
  Z: "win",
};

const scoreTable = {
  rock: 1,
  paper: 2,
  scissors: 3,
};

fs.readFile(`${__dirname}/../data/challenge-2.txt`, "utf-8").then((content) => {
  const matches = content
    .split("\n")
    .map((game) => game.split(" ").map((move) => moveTable[move]));
  let score = 0;
  matches.forEach((match) => {
    const opponentMove = match[0];
    const myMove = match[1];
    if (opponentMove === "paper" && myMove === "draw") {
      score += 3 + scoreTable[opponentMove]
    }
    if (opponentMove === "rock" && myMove === "draw") {
      score = score + 3 + scoreTable[opponentMove];
    }
    if (opponentMove === "scissors" && myMove === "draw") {
      score = score + 3 + scoreTable[opponentMove];
    }
    if (opponentMove === "paper" && myMove === "win") {
      score = score + 6 + scoreTable.scissors;
    }
    if (opponentMove === "scissors" && myMove === "win") {
      score = score + 6 + scoreTable.rock;
    }
    if (opponentMove === "rock" && myMove === "win") {
      score = score + 6 + scoreTable.paper;
    }
    if (opponentMove === "paper" && myMove === "lose") {
      score = score + 0 + scoreTable.rock;
    }
    if (opponentMove === "scissors" && myMove === "lose") {
      score = score + 0 + scoreTable.paper;
    }
    if (opponentMove === "rock" && myMove === "lose") {
      score = score + 0 + scoreTable.scissors;
    }
  });
  console.log(score);
});
