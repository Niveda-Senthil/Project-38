var bow, blueB, pinkB, greenB, redB, arrow, bg, score;
var bowImage, blueBi, pinkBi, greenBi, redBi, arrowImage, bgImage,s,arrowGroup; 


function preload(){
  bowImage = loadImage("bow0.png");
  blueBi = loadImage("blue_balloon0.png");
  greenBi = loadImage("green_balloon0.png");
  pinkBi = loadImage("pink_balloon0.png");
  redBi = loadImage("red_balloon0.png");
  arrowImage = loadImage("arrow0.png");
  bgImage = loadImage("background0.png");
}

function setup() {
  createCanvas(650, 650  );
  
  bg = createSprite(100,100,20,20);
  bg.addImage("bg",bgImage);
  bg.scale = 2.5;
  
  bow = createSprite(550,300, 30,30);
  bow.addImage("bow",bowImage)
  bow.scale = 1.2;
  
  score  = 0;
  arrowGroup = createGroup();
  redBg = createGroup();
  greenBg = createGroup();
  blueBg = createGroup();
  pinkBg = createGroup();
}

function draw() {
  textSize(30);

  bg.velocityX = 10;
  if(bg.x === 500){
    bg.x =  100; 
  } 
  bow.y = World.mouseY;

  if(keyDown("space")){
    spawnArrow(); 
  } 
  
  s = Math.round(random(1,4));
  console.log(s);
  
  if(frameCount % 80 === 0){
    if(s === 1){
      spawnBlue(); 
    }  
    else if(s === 2){
      spawnGreen(); 
    }  
    else if(s === 3){
      spawnRed();
    }  
    else if(s === 4){
      spawnPink(); 
    }  
  }
  if(arrowGroup.isTouching(blueBg)){
    blueBg.destroyEach();
    arrowGroup.destroyEach();
    score=score+1
  }  
  if(arrowGroup.isTouching(greenBg)){
    greenBg.destroyEach();
    arrowGroup.destroyEach();
    score=score+4
  } 
  if(arrowGroup.isTouching(redBg)){
    redBg.destroyEach();
    arrowGroup.destroyEach();
    score=score+1
  } 
  if(arrowGroup.isTouching(pinkBg)){
    pinkBg.destroyEach();
    arrowGroup.destroyEach();
    score=score+2
  }
  
  drawSprites();
  fill("black");
  text("score: " + score, 400,  50)
  
}

function spawnArrow(){
  arrow = createSprite(540,300,20,20);
  arrow.addImage("arrow",arrowImage)
  arrow.scale = 0.3
  arrow.velocityX = -20
  arrow.lifeTime = 30
  arrow.y = World.mouseY; 
  arrowGroup.add(arrow);
} 

function spawnBlue(){
  blueB  = createSprite(600,100,40,10);
  blueB.y = Math.round(random(20,380));
  blueB.x = Math.round(random(50,380));
  blueB.addImage(blueBi);
  blueB.scale = 0.1 
  blueB.velocityX = 2;
  blueB.lifetime = 400;
  blueBg.add(blueB);
}
function spawnGreen(){
  greenB  = createSprite(600,100,40,10);
  greenB.y = Math.round(random(20,200));
  greenB.x =  Math.round(random(20,380));
  greenB.addImage(greenBi);
  greenB.scale = 0.1 
  greenB.velocityX = 2;
  greenB.lifetime = 400;
  greenBg.add(greenB);
}  
function spawnRed(){
  redB  = createSprite(600,100,40,10);
  redB.y = Math.round(random(20,200));
  redB.x = Math.round(random(20,380));
  redB.addImage(redBi);
  redB.scale = 0.1 
  redB.velocityX = 2;
  redB.lifetime = 400;
  redBg.add(redB);
}  
function spawnPink(){
    pinkB  = createSprite(600,100,40,10);
    pinkB.y = Math.round(random(20,200));
    pinkB.x = Math.round(random(20,380));
    pinkB.addImage(pinkBi);
    pinkB.scale = 1.2;
    pinkB.velocityX = 2;
    pinkB.lifetime = 400;
    pinkBg.add(pinkB)
  
}  