const fs = require("fs/promises");

fs.readFile(`${__dirname}/../data/challenge-4.txt`, "utf-8").then(content => {
    const pairs = content.split("\n").map(line => line.split(",").map(pair => pair.split("-")))
    let count = 0;
    pairs.forEach(pair => {
        const elf1 = pair[0]
        const elf2 = pair[1]
        const elf1Start = +elf1[0]
        const elf1End = +elf1[1]
        const elf2Start = +elf2[0]
        const elf2End = +elf2[1]
        const elf1Range = []
        const elf2Range = []
        for (let i = elf1Start; i <= elf1End; i++) {
            elf1Range.push(i)
        }
        for (let i = elf2Start; i <= elf2End; i++) {
          elf2Range.push(i);
        }
        for (let i = 0; i < elf1Range.length; i++) {
            if (elf2Range.includes(elf1Range[i])) {
                count++
                break;
            }
        }

        // if (elf1Start >= elf2Start || elf1End <= elf2End) count++
        // else if (elf2Start >= elf1Start || elf2End <= elf1End) count++
    });
    console.log(count)
})