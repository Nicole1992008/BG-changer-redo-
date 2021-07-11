var box;
function setup() {
  createCanvas(400,400);
   box = createSprite(200,200,30,30);



   btn_red = createButton("red");
   btn_red.position(100,50);
   btn_red.mousePressed(red_bg);
   
   btn_green = createButton("green");
   btn_green.position(250,50);
   btn_green.mousePressed(green_bg);
   }

function red_bg()
{
  r = 255;
  g = 0;
b = 0;
}
   

function green_bg()
{
  r = 0;
  g = 255;
  b = 0;
}


function draw() 
{
  

  if (keyIsDown(RIGHT_ARROW)) 
  {
    background("red");
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
  }

  drawSprites();
}
