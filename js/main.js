var canvas;
var bg1,bg2,planeImg,bird1,bird2,sky,plane2,BG2,distance=0,life=3;
var gameState = 1;

function preload() {
    bg1=loadImage("./img/bg.jpg");
    bg2=loadImage("./img/bg2.jpg");
    planeImg=loadImage("./img/Airplane.png");
    bird1=loadImage("./img/bird1.png");
    bird2=loadImage("./img/bird2.png");
    Cloud=loadImage("./img/Cloud.png");
    sky=loadImage("./img/sky.jpg");
}

function setup(){
    canvas=createCanvas(displayWidth,displayHeight);
    plane=createSprite(300,820,10,50)
    plane2=createSprite(300,820,10,50)
    plane2.visible = false
    
    plane.addImage(planeImg)
    plane2.addImage(planeImg)
    plane.scale=.7
    
}


function draw(){
    background(bg1)
    
    if(keyDown("w")){
        plane.velocityX = 15; 
    }
    if(keyDown("UP_ARROW")){
        plane.velocityY = -4.5;
    }

    if(plane.x >= displayWidth)
    {
        gameState = 2;  
    }

    if(gameState == 2)
    {   
        //var select_oppPlayer = Math.round(random(1,3));
        background(sky);
        plane2.visible = true
        
        plane.scale=.82
        if(keyDown("w")){
            plane2.velocityY = -5;
        }
        if(keyDown("s")){
            plane2.velocityY = 5;
        }
        if(keyDown("d")){
            plane2.velocityX = 5; 
        }
        if(keyDown("a")){
            plane2.velocityX = -5; 
        }
        if (World.frameCount % 150 == 0) {
            BG2 = createSprite(displayWidth,Math.round(random(50, 250)));
            BG2.scale = .1
            distance = distance + Math.round(getFrameRate()/50);
            BG2.velocityX = -(6 + 2*distance/150);
            BG2.addImage(Cloud);

        }
        if (World.frameCount % 200 == 0) {
            BIRD1=createSprite(displayWidth,Math.round(random(300, 600)),10,50)
            BIRD1.scale=.3
            BIRD1.velocityX = -(6 + 2*distance/100);
            BIRD1.addImage(bird1)
        }
        textSize(30);
        fill(0,0,0);
        
        text("Life: "+life,10,50);

        
    }

    drawSprites() 
}
