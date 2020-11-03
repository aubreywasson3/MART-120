var headX = 110;
var headY = 80;
var headDirection = 1;

var bodyX = 180;
var bodyY = 155;
var bodyDirection = 2;

var size = 24;
var count = 2;
var sizeDirection = 2;
function setup()
{
    createCanvas(800, 700);
}

function draw()
{
    background(150,55,80);
    textSize(24)
    text("Hello there!", 12,70);

    // head
    fill(220, 200, 0);
    circle(headX,headY,175);
    headX+=headDirection;
    if(headX >= 350 || headX <= 70)
    {
        headDirection *= -1;
    }

    // eyes
    strokeWeight(5);
    fill(0);
    point(150,75);
    point(185,75);

    // nose
    point(200,70);

    // mouth
    ellipse(235, 125, 10, 40)

    // hair
    line(120,175,175,50);
    line(125,50,360,175);
    // body
    fill(12, 24, 135);
    bodyY += bodyDirection;
    if(bodyY <= 0 || bodyY >= 450 )
    {
        bodyDirection *= -1;
    }
    // decoration
    fill(255);
    triangle(220,320,250,220,280,320)
    // right arm
    fill(10, 24, 120);
    rect(300,195,50,10);
    // left arm
    rect(150,195,50,10);
    // left leg
    rect(200,335,10,50);
    // right leg
    rect(290,335,10,50);

    fill(135);
    textSize(24);
    size+= sizeDirection;
    count++;
    if(count > 3)
    {
        sizeDirection *=-1;
        count = 1;
    }

    text("Aubrey Wasson",200,500 );
  }
