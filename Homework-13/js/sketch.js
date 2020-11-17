var rectObjs = []; //
// x and y for my character
var characterX = 100;
var characterY = 100;

var w = 55;
var s = 42;
var a = 32;
var d = 63;

var mouseShapeX;
var mouseShapeY;

function setup() {
  createCanvas(700, 700);
}
function draw() {
  background(50);
  noStroke();
  rectMode(CENTER);
  fill(255);
  for (var i = 0; i < rectObjs.length; i++) {
    fill(rectObjs[i].fillColor);
    rect(rectObjs[i].xpos,
        rectObjs[i].ypos, 50, 25);
    rectObjs[i].ypos += 1;

    // exit message
    textSize(16);
    text("EXIT", width - 50, height - 50)

  }
}
function mousePressed() {
  rectObjs.push({xpos: mouseX, ypos: mouseY,
    fillColor: random(255)});
}
function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}
