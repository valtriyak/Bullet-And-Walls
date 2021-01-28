var wall, thickness ;
var bullet, speed , weight ;


function setup() {
  createCanvas(1600, 400);

  speed=random(55, 90);
  weight=random(30, 51)

  thickness=random(22, 83);


  bullet=createSprite(50, 200, 50, 5);
  bullet.velocityX = speed ;
  bullet.shapeColor = color (255);

  wall=createSprite(1500, 200, 60, thickness , fheight/2 )

  wall.shapeColor = color(80,80,80)

}

function hasCollided(bullet, wall) 
{
 bulletRightEdge=bullet.x +bullet.widht;
 wallLeftEdge=wall.x ;
 if(bulletRightEdge>=wallLeftEdge)
{
  return true 
}
return false

}
if(hasCollided(bullet, wll))
{
  bullet.velocityX= 0 ;
  var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
  
  
  if(damage>10)
  {
    wall.shapeColor=color(255, 0, 0);
  }


  if(damage<10)
  {
    wall.shapeColor=color(0, 255,0);
  }

}