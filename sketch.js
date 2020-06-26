var player1img, player1img2, player1, lazyTNT1, lazyTNT2, lazyTNT3, tntimg, state=1, boom, boomimg, lava, lavaimg, playermelt, playermeltimg, spikes, spikeimg, playerspiked, playerspikedimg;
var base, d1, d2, d3, d4, d5, p1, p2;

var title, titleimg, instructions, instructionsimg;

var finishpole, finishpoleimg, winimg, win;

var dieSound, explosionSound, walkSound, splashSound, sizzleSound, sliceSound, theme;

function preload(){
  player1img=loadImage("player1a.png");
  boomimg=loadImage("boom!.png");
  tntimg=loadImage("bomb.png");
  lavaimg=loadImage("lava.png");
  playermeltimg=loadImage("playerInFlames.png");
  spikeimg=loadImage("spikes.png");
  playerspikedimg=loadImage("playerSpiked.png");
  titleimg=loadImage("Title.png");
  instructionsimg=loadImage("instructions.png");
  finishpoleimg=loadImage("finishPole.png");
  winimg=loadImage("Win.png");

  dieSound=loadSound("die0.ogg");
  explosionSound=loadSound("explosion.mp3");
  walkSound=loadSound("sidewalk0.wav");
  splashSound=loadSound("splash0.wav");
  sizzleSound=loadSound("sizzle sound.mp3");
  sliceSound=loadSound("sliceSound.mp3");
}

function setup() {
  createCanvas(800,380);

  title=createSprite(200, 50, 50, 50);
  title.addImage("title", titleimg);

  title.scale=0.5;

  win=createSprite(400, 190, 50, 50);
  win.addImage("win", winimg);

  win.scale=3;

  win.visible=false;

  instructions=createSprite(400, 50, 50, 50);
  instructions.addImage("instructions", instructionsimg);

  instructions.scale=0.5;

  player1 = createSprite(50,200,10,10);
  player1.addImage("p",player1img);

  lazyTNT1=createSprite(200,200,10,10);
  lazyTNT1.addImage("suck my lassitute",tntimg);

  lazyTNT1.scale=1.7; 

  lazyTNT2=createSprite(1800,100,10,10);
  lazyTNT2.addImage("suck my lassitute",tntimg);

  lazyTNT2.scale=1.7; 

  lazyTNT3=createSprite(1000,100,10,10);
  lazyTNT3.addImage("suck my lassitute",tntimg);

  lazyTNT3.scale=1.7; 

  boom=createSprite(player1.x, player1.y, 20, 20);
  boom.addImage("ba-bye!",boomimg);

  boom.visible=false;

  playermelt=createSprite(player1.x, player1.y, 20, 20);
  playermelt.addImage(":~(",playermeltimg);

  playermelt.visible=false;

  lava=createSprite(800, 350, 20, 20);
  lava.addImage("sizzling....",lavaimg);

  lava.scale=2;

  spikes=createSprite(1650, 350, 20, 20);
  spikes.addImage("Ouch!!!!",spikeimg);

  playerspiked=createSprite(player1.x, player1.y, 20, 20);
  playerspiked.addImage("Zing!!!",playerspikedimg);

  playerspiked.visible=false;

  base = createSprite(400, 380, 3000, 20);
  d1 = createSprite(235, 320, 470, 100);
  d2 = createSprite(445, 315, 420, 160);
  d3 = createSprite(1000, 315, 100, 160);
  d4 = createSprite(1300, 290, 510, 200);
  d5 = createSprite(1950, 340, 400, 100);

  p1 = createSprite(800, 280, 50, 50);

  finishpole=createSprite(1950, 270, 50, 50);
  finishpole.addImage("Finish!!!", finishpoleimg);
  finishpole.scale=1.7;

  base.velocityX=-4;
  d1.velocityX=-4;
  d2.velocityX=-4;
  d3.velocityX=-4;
  d4.velocityX=-4;
  d5.velocityX=-4;

}

function draw() {
  background(200);  

  boom.x=player1.x;
  boom.y=player1.y;

  playermelt.x=player1.x;
  playermelt.y=player1.y;

  playerspiked.x=player1.x;
  playerspiked.y=player1.y;

  if(state==1){
    if(keyDown(UP_ARROW)){
      player1.velocityY = -10;
    }
  
    player1.velocityY=player1.velocityY+1;

    lazyTNT1.velocityY=lazyTNT1.velocityY+1;
    lazyTNT2.velocityY=lazyTNT1.velocityY+1;
    lazyTNT3.velocityY=lazyTNT1.velocityY+1;

    
    lazyTNT1.collide(base);
    lazyTNT1.collide(d1); 
    lazyTNT1.collide(d2);
    lazyTNT1.collide(d3);
    lazyTNT1.collide(d4);
    lazyTNT1.collide(d5);

    lazyTNT2.collide(base);
    lazyTNT2.collide(d1); 
    lazyTNT2.collide(d2);
    lazyTNT2.collide(d3);
    lazyTNT2.collide(d4);
    lazyTNT2.collide(d5);

    lazyTNT3.collide(base);
    lazyTNT3.collide(d1); 
    lazyTNT3.collide(d2);
    lazyTNT3.collide(d3);
    lazyTNT3.collide(d4);
    lazyTNT3.collide(d5);
    
  
    if(keyDown(RIGHT_ARROW)){

      if(frameCount%4==0){
        walkSound.play();
      }
  
      base.velocityX=-4;
      d1.velocityX=-4;
      d2.velocityX=-4;
      d3.velocityX=-4;
      d4.velocityX=-4;
      d5.velocityX=-4;

      lazyTNT1.velocityX=-4;
      lazyTNT2.velocityX=-4;
      lazyTNT3.velocityX=-4;

      p1.velocityX=-4;

      lava.velocityX=-4;
      spikes.velocityX=-4;

      title.velocityX=-4;
      instructions.velocityX=-4;

      finishpole.velocityX=-4;
    }else{
  
      base.velocityX=0;
      d1.velocityX=0;
      d2.velocityX=0;
      d3.velocityX=0;
      d4.velocityX=0;
      d5.velocityX=0;

      lazyTNT1.velocityX=0;
      lazyTNT2.velocityX=0;
      lazyTNT3.velocityX=0;

      p1.velocityX=0;

      lava.velocityX=0;
      spikes.velocityX=0;

      title.velocityX=0;
      instructions.velocityX=0;

      finishpole.velocityX=0;
    }

    

    if(player1.collide(lazyTNT1)){
      explosionSound.play();
      state=0;
      player1.visible=false;
      lazyTNT1.visible=false;
      boom.visible=true;
    }

    if(player1.collide(lazyTNT2)){
      explosionSound.play();
      state=0;
      player1.visible=false;
      lazyTNT2.visible=false;
      boom.visible=true;
    }

    if(player1.collide(lazyTNT3)){
      explosionSound.play();
      state=0;
      player1.visible=false;
      lazyTNT3.visible=false;
      boom.visible=true;
    }

    if(player1.collide(lava)){
      splashSound.play();
      sizzleSound.play();
      state=0;
      player1.visible=false;
      playermelt.visible=true;
      
    }

    if(player1.collide(spikes)){
      playerspiked.visible=true;
      sliceSound.play();
      state=0;
      player1.visible=false;
      
      
    }

    if(player1.collide(finishpole)){
      state=2;
      win.visible=true;
    }
  
  
    player1.collide(base);
    player1.collide(d1); 
    player1.collide(d2);
    player1.collide(d3);
    player1.collide(d4);
    player1.collide(d5);

    player1.collide(p1);

  }

  if(state==0 || state ==2){

    player1.velocityX=0;
    player1.velocityY=0;

    base.velocityX=0;
    d1.velocityX=0;
    d2.velocityX=0;
    d3.velocityX=0;
    d4.velocityX=0;
    d5.velocityX=0;

    lazyTNT1.velocityX=0;
    lazyTNT2.velocityX=0;
    lazyTNT3.velocityX=0;

    lava.velocityX=0;
    spikes.velocityX=0;

    p1.velocityX=0;

    title.velocityX=0;
    instructions.velocityX=0;

    finishpole.velocityX=0;
  }

  
  
  drawSprites();
}