var car,wall
 
var speed;
var weight;

function setup() {
  createCanvas(800,400);

 speed=random(55,90);
weight=random(400,1500);
 
  car= createSprite(40, 200, 50, 50);
 wall=createSprite(700, 200, 50,height/2);
}

function draw() {
  background("blue");  

  

car.velocityX=speed;

car.shapeColor=("white")
 
if(wall.x - car.x < (car.width/2 + wall.width)/2 )
{
car.velocityX=0;
var deformation=0.5*weight*speed*speed/22509;
if(deformation>180)
{
car.shapeColor=color(255,255,0)
}

if(deformation<180 && deformation>100)
{
car.shapeColor=color(230,230,0)
}

if(deformation<100)
{
car.shapeColor=color(0,255,0)
}


}

drawSprites();
}