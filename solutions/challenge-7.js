const fs = require("fs/promises");

fs.readFile(`${__dirname}/../data/challenge-7.txt`, "utf-8").then((content) => {
  const directoryLibrary = {};
  const path = ["directoryLibrary"];

  const commands = content.split("\n").map((line) => line.split(" "));
  commands.forEach((line) => {
    if (line.length === 3) {
      if (line[2] === "..") path.pop();
      else if (line[2] !== "/") path.push(line[2]);
    } else if (line[0] === "dir") eval(path.join(".") + `.${line[1]} = {}`);
    else if (/\d+/.test(line[0]))
      eval(path.join(".") + `.${line[1].replace(".", "")} = ${line[0]}`);
  });

  const targetNumbers = [];
  const deepValues = (directoryLibrary) => {
    let sum = 0;
    for (const entry in directoryLibrary) {
      if (typeof directoryLibrary[entry] === "number") sum += directoryLibrary[entry]
      else sum += deepValues(directoryLibrary[entry])
    }
    targetNumbers.push(sum);
    return sum;
  };
  deepValues(directoryLibrary)
  const targetSpace = 30000000
  const sortedNumbers = targetNumbers.sort((a, b) => a - b)
  const usedSpace = sortedNumbers[sortedNumbers.length - 1]
  const freeSpace = 70000000 - usedSpace
  const minimumSize = targetSpace - freeSpace
  console.log(minimumSize)
  console.log(sortedNumbers.filter(number => number >= minimumSize)[0])
});
