var canvas;
var music;
var box;
var surface1;
var surface2;
var surface3;
var surface4;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(65,585,210,20)
    surface1.shapeColor="blue";

    surface2 = createSprite(280,585,200,20)
    surface2.shapeColor="orange";
    
    surface3 = createSprite(490,585,200,20)
    surface3.shapeColor="maroon";

    surface4 = createSprite(700,585,200,20)
    surface4.shapeColor="green";

   

    box = createSprite(random(20,750),300,20,20)
    box.velocityX=3
    box.velocityY=3
    box.shapeColor="white"
}

function draw() {
    background(rgb(19,19,19));
    //create edgeSprite
    if(box.x<0){
        
         box.velocityX=3
      }else if(box.x>800){
        
          box.velocityX=-3
      }
    
   if(isTouching(box,surface1)){
    
    box.shapeColor="blue"
    bounceOff(box,surface1)
}
else if(isTouching(box,surface2)){
    
    box.shapeColor="orange"
    music.stop()
    bounceOff(box,surface2)
    box.velocityX=0
    box.velocityY=0

}
else if(isTouching(box,surface3)){
    box.shapeColor="maroon"
    bounceOff(box,surface3)
}
else if(isTouching(box,surface4)){
    music.play()
    box.shapeColor="green"
    bounceOff(box,surface4)
}

if (box.y<0){
   box.velocityY=3
  }
   
    drawSprites();   
}
