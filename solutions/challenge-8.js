const fs = require("fs/promises");

fs.readFile(`${__dirname}/../data/challenge-8-test.txt`, "utf-8").then(
  (content) => {
    const grid = content.split("\n").map((row) => row.split(""));
    let visibleTrees = 0;
    const coutnedTrees = [];
    grid.forEach((row, i) => {
      // from left
      let visibleTreesFromLeft = 0;
      let biggestTreeFromLeft = 0;
      row.forEach((treeString, j) => {
        const tree = +treeString;
        if (tree > biggestTreeFromLeft && !coutnedTrees.includes([i, j])) {
          biggestTreeFromLeft = tree;
          visibleTreesFromLeft++;
          coutnedTrees.push([i, j]);
        }
      });

      //from right
      visibleTrees += visibleTreesFromLeft;
      console.log(visibleTrees);
    });
  }
);
