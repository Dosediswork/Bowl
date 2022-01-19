var ball,ballImg
var bg,backgroundImg
var grass,grassImg,grassG
var GameOver,GameOverImg
var Play=1
var End=0
var gameState=1
function preload(){
ballImg=loadImage("Blueball.png");
grassImg=loadImage("Grass.png");
backgroundImg=loadImage("Background.notpng.jpg");
GameOverImg=loadImage("GameOver.png");
}

function setup() {
createCanvas(windowWidth,windowHeight);
bg=createSprite(width/2,200);
bg.addImage(backgroundImg);
bg.velocityY = 5;
bg.scale=6
ball = createSprite(width/2,height,20,20);
ball.addImage(ballImg);
ball.scale=0.5;
grassG=new Group();
GameOver=createSprite(750,350)
GameOver.addImage(GameOverImg)
GameOver.visible=false
}
function draw() {
    background(0);
    
    if(gameState===Play){
        ball.x = World.mouseX;
        edges= createEdgeSprites();
        ball.collide(edges);
        if(bg.y > height ){
            bg.y = height/2;
        }
            createGrass()
            if(grassG.isTouching(ball)) {
            gameState=End;
            bg.velocityY=0
            grass.velocityY=0
            GameOver.visible=true
        
            
}
    }

    
    drawSprites()
}
            function createGrass(){
            if(frameCount%20==0){
                grass=createSprite(random(0,1500),0)
                grass.addImage(grassImg)
                grassG.add(grass)
                grass.velocityY=+4
            }
        }
