var fixedRect, movingRect,stillrect,mouserect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  stillRect = createSprite(600, 400,30,80);
  mouseRect = createSprite(700, 400,40,30);

  

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0); 

  mouseRect.x = World.mouseX;
  mouseRect.y = World.mouseY;
  
  if(isTouching(mouseRect,stillRect) == true){
    mouseRect.shapeColor = "blue";
    stillRect.shapeColor = "red";
  }
  else{
    mouseRect.shapeColor = "green";
    stillRect.shapeColor = "green";
  }

bounceOff(movingRect,fixedRect);

 
  drawSprites();
}
