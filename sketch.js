var fixedRect, MovingRect;

function setup() {
  createCanvas(800,400);
 fixedRect = createSprite(400, 200, 50, 50);
MovingRect = createSprite(200,200,80,30);
MovingRect.shapeColor = ("green");
fixedRect.shapeColor = ("green");

}

function draw() {
  background(0);  
console.log(MovingRect.x - fixedRect.x)
  MovingRect.x = World.mouseX;
  MovingRect.y = World.mouseY

  if (MovingRect.x - fixedRect.x < fixedRect.width/2 + MovingRect.width/2 && fixedRect.x - MovingRect.x < fixedRect.width/2 + MovingRect.width/2) {
    MovingRect.shapeColor = ("red");
    fixedRect.shapeColor = ("red");
}
else {
  MovingRect.shapeColor = ("green")
  fixedRect.shapeColor = ("green");
}
  drawSprites();
}