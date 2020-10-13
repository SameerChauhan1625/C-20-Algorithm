var MR,FR;

function setup() {
  createCanvas(1200,800);
  FR = createSprite(600, 400, 50, 80);
  FR.shapeColor = "green";
  FR.debug = true;
  MR = createSprite(400,200,80,30);
  MR.shapeColor = "green";
  MR.debug = true;
}

function draw() {
  background(255,255,255);  

  MR.x = World.mouseX;
  MR.y = World.mouseY;

  if(MR.x-FR.x <FR.width/2+MR.width/2 && FR.x-MR.x <FR.width/2+MR.width/2
    && MR.y-FR.y <FR.height/2+MR.height/2 && FR.y-MR.y <FR.height/2+MR.height/2)
  {
    MR.shapeColor = "red";
    FR.shapeColor = "red";
  }
  else{
    MR.shapeColor = "green";
    FR.shapeColor = "green";
  }
  drawSprites();



}