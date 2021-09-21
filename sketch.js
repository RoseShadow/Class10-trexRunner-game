var trex;
var trexRunning;
var edges;
var ground;
var groundImage;
function preload(){
   
  trexRunning=loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage=loadImage("ground2.png");
}

function setup() {
  createCanvas(600, 200);

  trex=createSprite(50,160,20,50);
  trex.addAnimation("running",trexRunning);
  trex.scale=0.5;

  edges = createEdgeSprites();

  ground=createSprite(200,180,400,20);
  ground.addImage("repeat",groundImage);
  ground.velocityX=-3;

}

function draw(){

  background("white");

  if(keyDown("space")){
     trex.velocityY=-10;
  }
 
  trex.velocityY+=0.8;

  trex.collide(ground);

  if(ground.x<0){
    ground.x=ground.width/2
  }


  drawSprites();

}

