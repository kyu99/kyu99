var winner = "___"
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

var button = document.getElementById("mako"),
  countMako = 0;
button.onclick = function() {
  //countMako += 1;
  winner = "Mako"
  memList[winner] += 1
};

var button = document.getElementById("riku"),
  countRiku = 0;
button.onclick = function() {
  //countRiku += 1;
  winner = "Riku"
  memList[winner] += 1
};

var button = document.getElementById("rio"),
  countRio = 0;
button.onclick = function() {
  //countRio += 1;
  winner = "Rio"
  memList[winner] += 1
};

var button = document.getElementById("maya"),
  countMaya = 0;
button.onclick = function() {
  //countMaya += 1;
  winner = "Maya"
  memList[winner] += 1
};

var button = document.getElementById("mayuka"),
  countMayuka = 0;
button.onclick = function() {
  //countMayuka += 1;
  winner = "Mayuka"
  memList[winner] += 1
};

var button = document.getElementById("ayaka"),
  countAyaka = 0;
button.onclick = function() {
  //countAyaka += 1;
  winner = "Ayaka"
  memList[winner] += 1
};

var button = document.getElementById("rima"),
  countRima = 0;
button.onclick = function() {
  //countRima += 1;
  winner = "Rima"
  memList[winner] += 1
};

var button = document.getElementById("miihi"),
  countMiihi = 0;
button.onclick = function() {
  //countMiihi += 1;
  winner = "Miihi"
  memList[winner] += 1
};

var button = document.getElementById("nina"),
  countNina = 0;
button.onclick = function() {
  //countNina += 1
  winner = "Nina"
  memList[winner] += 1
};

/*
button.onclick = function() {
    if (countMako > highest) {
        highest = countMako
        winner = "Mako"
    }
    if (countRiku > highest) {
        highest = countRiku
        winner = "Riku"
    }
    if (countRio > highest) {
        highest = countRio
        winner = "Rio"
    }
    if (countMaya > highest) {
        highest = countMaya
        winner = "Maya"
    }
    if (countAyaka > highest) {
        highest = countAyaka
        winner = "Ayaka"
    }
    if (countMayuka > highest) {
        highest = countMayuka
        winner = "Mayuka"
    }
    if (countRima > highest) {
        highest = countRima
        winner = "Rima"
    }
    if (countMiihi > highest) {
        highest = countMiihi
        winner = "Miihi"
    }
    if (countNina > highest) {
        highest = countNina
        winner = "Nina"
    }
};
*/

for (keys in memList) {
  memList[keys] += Math.ceil(Math.random()*10)
}

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

