
var bullet,wall,speed,weight,thickness;

function setup() {
  createCanvas(800,400);


 speed=random(223,321);
 weight = random(30,52);
 thickness=random(22,83);
 bullet=createSprite(60, 200, 100, 30);
 bullet.velocityX=speed;
wall=createSprite(720,200,thickness,height/2);
}

function draw() {
  background("Black");
  
 
  
  if(bullet.collide(wall))
  {
    bullet.velocityX=0;
    
   
    var damage=0.5 * weight * speed * speed/(thickness*thickness*thickness);
   
     if(damage<10){
bullet.shapeColor="green";

     }
     
     if(damage>10){
      bullet.shapeColor="red";
      
           }
          
    drawSprites();
    
                }
              }
             

