const fs = require ("fs/promises");

fs.readFile(`${d=__dirname}/../data/challenge-6.txt`, "utf-8").then(dataStream => {
    const last14 = new Set()
    for (let i = 14; i < dataStream.length; i++) {
        last14.add(dataStream[i-14])
        last14.add(dataStream[i-13])
        last14.add(dataStream[i-12])
        last14.add(dataStream[i-11])
        last14.add(dataStream[i-10])
        last14.add(dataStream[i-9])
        last14.add(dataStream[i-8])
        last14.add(dataStream[i-7])
        last14.add(dataStream[i-6])
        last14.add(dataStream[i-5])
        last14.add(dataStream[i-4])
        last14.add(dataStream[i-3])
        last14.add(dataStream[i-2])
        last14.add(dataStream[i-1])
        if (last14.size === 14) {
            console.log(i)
            break;
        } else {
            last14.clear()
        }
    }
})