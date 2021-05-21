  
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var snow;
var snowFlake=[];

playSound("sound123.mp3", true);

function setup() {
  createCanvas(800,400); 
  engine=Engine.create();
   world=engine.world;
//  createSprite(400, 200, 50, 50);

}

function preload() {

  snow = loadImage("Snow BG.jpg");
}

function draw() {
  background(snow);  
  Engine.update(engine)
  if(frameCount % 5===0){
    snowFlake.push(new Snow(random (10, 790),30, 50) )
    
  }

  for(var i = 0;i<snowFlake.length; i =i+1){
    snowFlake[i].display();

  }
  
 // drawSprites();
}




