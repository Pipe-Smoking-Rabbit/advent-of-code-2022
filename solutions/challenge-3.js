const fs = require("fs/promises")

const upperCaseShift = -38
const lowerCaseShift = -96

fs.readFile(`${__dirname}/../data/challenge-3.txt`, "utf-8").then(content => {
    const rucksacks = content.match(/.+\n.+\n.+/g).map(group => group.split("\n"))
    let count = 0
    rucksacks.forEach(rucksack => {
        const elf1 = rucksack[0].split("");
        const elf2 = rucksack[1].split("");
        const elf3 = rucksack[2].split("");

        for (let i = 0; elf1.length; i++) {
            const letter = elf1[i]
            if (elf2.includes(letter) && elf3.includes(letter)) {
                const code = elf1[i].charCodeAt(0)
                if (code < 97) {
                    count += code + upperCaseShift
                } else {
                    count += code + lowerCaseShift
                }
                break;
            }
        }
        
        
        
    })
    console.log(count)
})