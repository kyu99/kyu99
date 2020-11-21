var winner = "None"
var highest = 0

var memList = {
  "Mako": 0,
  "Riku": 0,
  "Rio": 0,
  "Maya": 0,
  "Mayuka": 0,
  "Ayaka": 0,
  "Rima": 0,
  "Miihi": 0,
  "Nina": 0
}

for (keys in memList) {
    memList[keys] += Math.ceil(Math.random()*10)
}

console.log(memList)

for (keys in memList) {
    if (memList[keys] > highest) {
        winner = keys
        highest = memList[keys]
    } else if (memList[keys] === highest && winner.length > 10) {
        winner = keys + ", " + winner
    } else if (memList[keys] === highest) {
        winner = keys + " and " + winner
    }
}

console.log(winner, highest)