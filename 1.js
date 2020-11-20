var winner = "___"
var highest = 0

var button = document.getElementById("mako"),
  countMako = 0;
button.onclick = function() {
  countMako += 1;
  winner = "Mako"
};

var button = document.getElementById("riku"),
  countRiku = 0;
button.onclick = function() {
  countRiku += 1;
  winner = "Riku"
};

var button = document.getElementById("rio"),
  countRio = 0;
button.onclick = function() {
  countRio += 1;
  winner = "Rio"
};

var button = document.getElementById("maya"),
  countMaya = 0;
button.onclick = function() {
  countMaya += 1;
  winner = "Maya"
};

var button = document.getElementById("mayuka"),
  countMayuka = 0;
button.onclick = function() {
  countMayuka += 1;
  winner = "Mayuka"
};

var button = document.getElementById("ayaka"),
  countAyaka = 0;
button.onclick = function() {
  countAyaka += 1;
  winner = "Ayaka"
};

var button = document.getElementById("rima"),
  countRima = 0;
button.onclick = function() {
  countRima += 1;
  winner = "Rima"
};

var button = document.getElementById("miihi"),
  countMiihi = 0;
button.onclick = function() {
  countMiihi += 1;
  winner = "Miihi"
};

var button = document.getElementById("nina"),
  countNina = 0;
button.onclick = function() {
  countNina += 1
  winner = "Nina"
};

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


