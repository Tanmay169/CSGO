var car, wall; 
var safeimg,lethalimg,averageimg,mainimg;
var speed, weight; 

function setup() {

  createCanvas(1600,400);

  speed=random(30,100);
  weight=random(700,2500);
  
  car=createSprite(50, 200, 50,50);
  car.shapeColor="white";
  car.velocityX=speed;

  wall=createSprite(1500, 200, 40, 200);
  wall.shapeColor="grey";

}

function draw() {
  background("black");

  if (car.x - wall.x < wall.width/2 + car.width/2
    && wall.x - car.x < wall.width/2 + car.width/2){
    car.velocityX=0;

    if(((0.5*weight*speed*speed)/22500)>180){
      car.changeAnimation("lethal",lethalimg);
    }else if(((0.5*weight*speed*speed)/22500)<80){
      car.changeAnimation("safe",safeimg);
    }else if(((0.5*weight*speed*speed)/22500)<180 && ((0.5*weight*speed*speed)/22500)>80){
      car.changeAnimation("average",averageimg);
    }

  }

  drawSprites();
}