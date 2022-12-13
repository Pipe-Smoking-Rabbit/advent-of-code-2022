const fs = require("fs/promises");

fs.readFile(`${__dirname}/../data/challenge-9-test.txt`, "utf-8").then(content => {
    const gridSize = {
        vertical: 0,
        horizontal: 0,
    }
    const lines = content.split("\n").map(line => line.split(" ").map(char => {
        if (/\d+/.test(char)) return +char
        return char
    }))
    
})