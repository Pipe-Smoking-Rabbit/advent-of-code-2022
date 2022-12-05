const fs = require("fs/promises");

const shipYard = {
  1: ["P", "D", "Q", "R", "V", "B", "H", "F"].reverse(),
  2: ["V", "W", "Q", "Z", "D", "L"].reverse(),
  3: ["C", "P", "R", "G", "Q", "Z", "L", "H"].reverse(),
  4: ["B", "V", "J", "F", "H", "D", "R"].reverse(),
  5: ["C", "L", "W", "Z"].reverse(),
  6: ["M", "V", "G", "T", "N", "P", "R", "J"].reverse(),
  7: ["S", "B", "M", "V", "L", "R", "J"].reverse(),
  8: ["J", "P", "D"].reverse(),
  9: ["V", "W", "N", "C", "D"].reverse(),
};

fs.readFile(`${__dirname}/../data/challenge-3.txt`, "utf-8").then((content) => {
  const steps = content.split("\n").map((line) => {
    return line.match(/\d+/g);
  });
  steps.forEach((step) => {
    const quantity = step[0];
    const start = step[1];
    const end = step[2];

    shipYard[end].push(shipYard[start].splice(-quantity));
    shipYard[end] = shipYard[end].flat()
  });
  console.log(shipYard);
});
