var tower,tower2;
var player;
var wal1,wal2,wal3,wal4,wal5,wal6;
var ob1,ob2,ob3,ob4;
var wasd,wasd2;

function preload(){
tower2=loadImage("tower.png")
wasd=loadImage("wasd.png")
}

function setup(){
createCanvas(1500,1000)
tower=createSprite(802,495,22,22)
tower.addImage("ssjojso",tower2)
tower.scale=2
wasd2=createSprite(202,495,22,22)
wasd2.addImage("ssjojso",wasd)

player=createSprite(900,955,16,16)
wal1=createSprite(802,980,500,17)
wal2=createSprite(802,830,500,15)
wal3=createSprite(802,710,500,15)
wal4=createSprite(802,519,500,15)
ob1=createSprite(812,920,13,13)
ob2=createSprite(722,920,13,13)
wal5=createSprite(1042,619,15,900)
wal6=createSprite(542,619,15,900)
ob3=createSprite(850,970,20,15)
ob4=createSprite(765,970,20,15)


ob1.velocityY=-3.5
ob2.velocityY=-3

player.shapeColor="navy"
ob1.shapeColor="black"
ob2.shapeColor="black"

}



function draw(){
  background("white")
 player.collide(wal1)
 player.collide(wal2)
 player.collide(wal3)
 player.collide(wal4)
 player.collide(wal5)
 player.collide(wal6)



wal1.visible=false
wal2.visible=false
wal3.visible=false
wal4.visible=false
wal5.visible=false
wal6.visible=false
ob3.visible=false
ob4.visible=false


if (keyDown("w")){
  player.velocityY=-8
}
if (keyDown("a")){
  player.x=player.x-3
}
if (keyDown("d")){
  player.x=player.x+3
}

if (player.isTouching(ob1)){
  player.x=900
  player.y=955
}

if (player.isTouching(ob2)){
  player.x=900
  player.y=955
}

if (player.isTouching(ob4)){
  player.x=900
  player.y=955
}
if (player.isTouching(ob3)){
  player.x=900
  player.y=955
}


player.velocityY=player.velocityY+1.5;

ob1.bounceOff(wal2)
ob1.bounceOff(wal1)
ob2.bounceOff(wal2)
ob2.bounceOff(wal1)


drawSprites();
}