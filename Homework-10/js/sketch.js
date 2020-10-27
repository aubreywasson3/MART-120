
function draw()
{
    background(247, 178, 209);
    textSize(22);
    text("Hello! My name is Aubrey.", 10,80);

    // head
   fill(198, 230, 201);
ellipse(210, 198, 220, 310);
circle(headX,headY,175);
   headX+=headDirection;
   if(headX >= 318 || headX <= 52)
   {
       headDirection *= -3;
   }
    // eyes
    strokeWeight(9);
    fill(0);
    point(205,80);
    point(260,75);

    // nose
    point(239,90);

    // mouth
    ellipse(245, 143, 20, 55);

    // hair
    line(130,175,175,50);
    line(325,50,360,175);

    // body
    fill(236, 158, 240);
    rect(200,185,100,150);
    bodyY += bodyDirection;
    if(bodyY <= 0 || bodyY >= 350 )
    {
        bodyDirection *= -1;
    }

    // decoration
    fill(250, 173, 226);
   rect(200,185,100,150);

    // right arm
    fill(230, 233, 250);
    rect(300,195,50,10);
    // left arm
    rect(180,195,40,10);
    // left leg
    rect(200,335,10,40);
    // right leg
    rect(230,335,10,40);

    fill(247, 247, 247);
    textSize(34);
    size+= sizeDirection;
    count++;
    if(count > 3)
    {
        sizeDirection *=-1;
        count = 4;
    }
    text("Aubrey Wasson",380,700 );
  }
