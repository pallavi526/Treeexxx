
var trex ,trex_running;

function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")

}
//preload is used to load animation, Image and sound etc
function setup(){
  createCanvas(600,200)

  
  //create a trex sprite
  trex=createSprite(50,180,20,20);
  trex.addAnimation("running",trex_running);
  trex.scale=0.5;
 
}
//setup runs only once
function draw(){
  background("white")

  if(keyDown("space")){
    trex.velocityY=-5;
  }
  //gravity
  trex.velocityY=trex.velocityY+0.5;
  edges=createEdgeSprites();
  trex.collide(edges[3])
  drawSprites();
}
