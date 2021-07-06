var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["9270ed45-cbc4-4fcb-9295-882af166df19","559f2de8-1ed8-49f8-a01b-c3002b7b66b0","31112f22-9f15-4256-9b66-d41861281950","e082757a-b752-429b-87f5-02e94fdad0b0","9a0335c3-68de-41f1-a1da-56eba76ccce5"],"propsByKey":{"9270ed45-cbc4-4fcb-9295-882af166df19":{"name":"UFO","sourceUrl":null,"frameSize":{"x":101,"y":70},"frameCount":1,"looping":true,"frameDelay":12,"version":"3w9kHMvRffn.i7dZxFWKVld1rF_uIFix","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":101,"y":70},"rootRelativePath":"assets/9270ed45-cbc4-4fcb-9295-882af166df19.png"},"559f2de8-1ed8-49f8-a01b-c3002b7b66b0":{"name":"Alien","sourceUrl":"assets/api/v1/animation-library/gamelab/yK6UXQtnemQ5itIdr3t5PWyn_FP7jFUf/category_fantasy/alienYellow_walk.png","frameSize":{"x":72,"y":88},"frameCount":2,"looping":true,"frameDelay":1,"version":"yK6UXQtnemQ5itIdr3t5PWyn_FP7jFUf","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":144,"y":88},"rootRelativePath":"assets/api/v1/animation-library/gamelab/yK6UXQtnemQ5itIdr3t5PWyn_FP7jFUf/category_fantasy/alienYellow_walk.png"},"31112f22-9f15-4256-9b66-d41861281950":{"name":"1","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"kNtDHtfGJA6QVUKv7DHEB1_LndToLGYt","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/31112f22-9f15-4256-9b66-d41861281950.png"},"e082757a-b752-429b-87f5-02e94fdad0b0":{"name":"2","sourceUrl":null,"frameSize":{"x":32,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"eYihMJ0ZmaGSUrslkdZsRNkHXSJSUMYV","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":32,"y":30},"rootRelativePath":"assets/e082757a-b752-429b-87f5-02e94fdad0b0.png"},"9a0335c3-68de-41f1-a1da-56eba76ccce5":{"name":"3","sourceUrl":null,"frameSize":{"x":32,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"JVQD5NjcbI_kVzLrovG80RQ6XC.tlwMa","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":32,"y":30},"rootRelativePath":"assets/9a0335c3-68de-41f1-a1da-56eba76ccce5.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

// CREATING VARIABLES FOR Alien,UFO AND OTHER THINGS.
var Alien = createSprite(20,380);
Alien.setAnimation("Alien");
Alien.scale = 0.3;

var UFO = createSprite(350,40);
UFO.setAnimation("UFO");
UFO.scale = 0.6;

var line1 = createSprite(3,300,795,5);
line1.shapeColor = "black";
var line2 = createSprite(3,200,795,5);
line2.shapeColor = "black";
var line3 = createSprite(3,100,795,5);
line3.shapeColor = "black";
var line4 = createSprite(3,1,5,795);
line4.shapeColor = "black";
var line5 = createSprite(397,1,5,795);
line5.shapeColor = "black";
var line6 = createSprite(1,3,795,5);
line6.shapeColor = "black";
var line7 = createSprite(1,396,795,5);
line7.shapeColor = "black";

var end1 = createSprite(385,348,20,91);
var end2 = createSprite(385,250,20,96);
var end3 = createSprite(385,150,20,94);

var block1 = createSprite(79,363,18,60);
block1.shapeColor = "green";
var block2 = createSprite(148,333,18,60);
block2.shapeColor = "green";
var block3 = createSprite(226,365,18,57);
block3.shapeColor = "green";
var block4 = createSprite(300,333,18,60);
block4.shapeColor = "green";


var ball1 = createSprite(100,288,20,20);
ball1.setAnimation("2");
var ball2 = createSprite(175,210,20,20);
ball2.setAnimation("3");
var ball3 = createSprite(250,288,20,20);
ball3.setAnimation("2");
var ball4 = createSprite(318,210,20,20);
ball4.setAnimation("3");



var bouncyBall = createSprite(85,140,30,30);
bouncyBall.setAnimation("1");


var lazer1 = createSprite(84,57,4,30);
lazer1.shapeColor = "blue";

var lazer2 = createSprite(153,57,4,30);
lazer2.shapeColor = "blue";

var lazer3 = createSprite(218,57,4,30);
lazer3.shapeColor = "blue";

var lazer4 = createSprite(278,57,4,30);
lazer4.shapeColor = "blue";


var gameState = "serve";
var Deaths = 0;

function draw() {
background(rgb(0, 234, 255));
  
// SETS THE BACKGROUND COLOUR.
  background(rgb(0, 251, 255));
  
// TEXT FOR SHOWING Alien AND UFO.
  stroke(0);
  fill("black");
  textSize("20");
  text("Deaths : " + Deaths,10,25); 
  text("UFO" , 330,90);
  text("Alien" ,10,360);
  
  // IF STATEMENT TO SHOW TEXT AT THE SERVE GAMESTATE.
  if(gameState === "serve") {
    text("press space to start",110,150);
  }

  
//SERVE THE PLAYER WHEN SPACE IS PRESSED.
 if (keyDown("space") && gameState === "serve") {
  stroke(0);
  fill("black");
  textSize("20");
  text("Deaths : " + Deaths,10,25); 
  text("UFO" , 330,90);
  text("Alien" ,10,360);
  serve();
  gameState = "play";
  playSound("assets/category_background/synthesize.mp3", true);
 }
  
  // IF STATEMENTS FOR Alien TO MOVE.
  if(keyDown(UP_ARROW)) {
    Alien.y = Alien.y-3;
  }
  if(keyDown(RIGHT_ARROW)) {
    Alien.x = Alien.x+3;
  }
  if(keyDown(DOWN_ARROW)) {
    Alien.y = Alien.y+3;
  }
  if(keyDown(LEFT_ARROW)) {
    Alien.x = Alien.x-3;
  }
  
// IF STATEMENT FOR Alien IF IT TOUCHES BLOCKS.
  if(Alien.isTouching(block1) || Alien.isTouching(block2) || 
  Alien.isTouching(block3) || Alien.isTouching(block4)) {
    Alien.x = 20;
    Alien.y = 380;
    Deaths++;
  }
  
// IF STATEMENTS FOR Alien IF IT TOUCHES THE BALLS.
   if(Alien.isTouching(ball1) || Alien.isTouching(ball2) || Alien.isTouching(ball3) || Alien.isTouching(ball4)){
    Alien.x = 20;
    Alien.y = 380;
    Deaths++;
  }
// IF STATEMENTS FOR Alien IF IT TOUCHES THE BOUNCYBALL.
  if(Alien.isTouching(bouncyBall)) {
    Alien.x = 20;
    Alien.y = 380;
    Deaths++;
  }
// IF STATEMENTS FOR Alien IF IT TOUCHES THE LAZERS.
  if(Alien.isTouching(lazer1) || Alien.isTouching(lazer2) || Alien.isTouching(lazer3) || Alien.isTouching(lazer4)) {
    Alien.x = 20;
    Alien.y = 380;
    Deaths++;
  }
  
// IF STATEMENTS FOR Alien IT IT TOUCHES THE ENDS.
  if(Alien.isTouching(end1)) {
    Alien.x = 20;
    Alien.y = 300;
  }
  if(Alien.isTouching(end2)) {
    Alien.x = 20;
    Alien.y = 190;
  }
  if(Alien.isTouching(end3)) {
    Alien.x = 20;
    Alien.y = 96;
  }
  
  // IF STATEMENT FOR THE Alien WHEN IT WINS.
  if(Alien.isTouching(UFO)) {
    textSize(30);
    text("YOU WIN!",170,130);
    textSize(20);
    text("Press 'R' to restart",120,162);
    
    ball1.velocityY = 0;
    ball2.velocityY = 0;
    ball3.velocityY = 0;
    ball4.velocityY = 0;
    bouncyBall.velocityY = 0;
    bouncyBall.velocityX = 0;
    lazer1.velocityY = 0;
    lazer2.velocityY = 0;
    lazer3.velocityY = 0;
    lazer4.velocityY = 0;
    gameState = "over";
  }
  
// IF STATEMENT TO SHOW GAME OVER AFTER 5 DEATHS.
  if(Deaths===5) {
    textSize(25);
    text("GAME OVER",170,150);
    textSize(15);
    text("press R to restart",170,175);
    
    ball1.velocityY = 0;
    ball2.velocityY = 0;
    ball3.velocityY = 0;
    ball4.velocityY = 0;
    bouncyBall.velocityY = 0;
    bouncyBall.velocityX = 0;
    lazer1.velocityY = 0;
    lazer2.velocityY = 0;
    lazer3.velocityY = 0;
    lazer4.velocityY = 0;
    Alien.x = 20;
    Alien.y = 380;
    Alien.velocityX = 0;
    Alien.velocityY = 0;
    gameState = "over";
  }

if(gameState=== "serve") {
  Alien.x = 20;
  Alien.y = 380;
  Alien.velocityX = 0;
  Alien.velocityY = 0;
}

// IF STATEMENT FOR RESTART IF WE PRESS "R".
if(keyDown("r") && gameState === "over") {
  gameState = "serve";
  Deaths = 0;
}
  
// CREATING EDGE SPRITES AND BOUNCE OFF.

  Alien.bounceOff(UFO);
  Alien.bounceOff(line1);
  Alien.bounceOff(line2);
  Alien.bounceOff(line3);
  Alien.bounceOff(line4);
  Alien.bounceOff(line5);
  Alien.bounceOff(line6);
  Alien.bounceOff(line7);
  
  Alien.bounceOff(block1);
  Alien.bounceOff(block2);
  Alien.bounceOff(block3);
  Alien.bounceOff(block4);
  
  Alien.bounceOff(ball1);
  Alien.bounceOff(ball2);
  Alien.bounceOff(ball3);
  Alien.bounceOff(ball4);
  
  Alien.bounceOff(end1);
  Alien.bounceOff(end2);
  Alien.bounceOff(end3);
  
  Alien.bounceOff(lazer1);
  Alien.bounceOff(lazer2);
  Alien.bounceOff(lazer3);
  Alien.bounceOff(lazer4);

  ball1.bounceOff(line1);
  ball1.bounceOff(line2);
  ball2.bounceOff(line1);
  ball2.bounceOff(line2);
  ball3.bounceOff(line1);
  ball3.bounceOff(line2);
  ball4.bounceOff(line1);
  ball4.bounceOff(line2);
  
  bouncyBall.bounceOff(line2);
  bouncyBall.bounceOff(line3);
  bouncyBall.bounceOff(end3);
  bouncyBall.bounceOff(line4);
  bouncyBall.bounceOff(Alien);
  
  lazer1.bounceOff(line3);
  lazer1.bounceOff(line6);
  lazer2.bounceOff(line3);
  lazer2.bounceOff(line6);
  lazer3.bounceOff(line3);
  lazer3.bounceOff(line6);
  lazer4.bounceOff(line3);
  lazer4.bounceOff(line6);
  
// DISPLAYS WHAT IS THERE.
  drawSprites();
}

function serve() {
  ball1.velocityX = 0;
  ball1.velocityY = -5;
  ball2.velocityX = 0;
  ball2.velocityY = 5;
  ball3.velocityX = 0;
  ball3.velocityY = -5;
  ball4.velocityX = 0;
  ball4.velocityY = 5;
  
  lazer1.velocityY = 5;
  lazer2.velocityY = -5;
  lazer3.velocityY = 5;
  lazer4.velocityY = -5;
  
  bouncyBall.velocityX = 5;
  bouncyBall.velocityY = 3;
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
