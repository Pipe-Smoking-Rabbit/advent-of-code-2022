const fs = require("fs/promises")

fs.readFile(`${__dirname}/../data/challenge-1.txt`, "utf-8").then((content) => {
  const numbers = content.split("\n\n");
  return numbers.map((elf) => elf.split("\n"))
}).then(elves => {
    phattestElf(elves)
})

function phattestElf (elves) {
    const summedElves = elves.map(elf => {
        return elf.reduce((a, b) => +a + +b)
    })
    const mostCalories = Math.max(...summedElves)
    const secondMostCalories = Math.max(...summedElves.filter(elf => elf != mostCalories))
    const thirdMostCalories = Math.max(...summedElves.filter(elf => elf != mostCalories && elf != secondMostCalories))
    console.log(mostCalories + secondMostCalories + thirdMostCalories)
}

module.exports = phattestElf