const fs = require("fs/promises");

fs.readFile(`${__dirname}/../data/challenge-7-test.txt`, "utf-8").then((content) => {
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
      else deepValues(directoryLibrary[entry])
    }
    if (sum <= 100000) targetNumbers.push(sum);
  };
  deepValues(directoryLibrary)
  console.log(targetNumbers)
  console.log(targetNumbers.reduce((a, b) => a + b));
});
