const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var Lightning1,Lightning2,Lightning3,lightning;
var engine,world;
var umbrella1;
var drops=[];
var thunderframe=0;

function preload(){
    Lightning1=loadImage("lightning.jpg");
    Lightning2=loadImage("lightning 2.jpg");
    Lightning3=loadImage("lightning 3.jpg");
}

function setup(){
   engine=Engine.create();
   world=engine.world;
   createCanvas(400,700);
    umbrella1=new Umbrella(200,500);

    if(frameCount%150===0){
    for (var i =0;i<100;i++){
    drops.push(new Drops(random(0,400),random(0,400)));
    }
    }
}

function draw(){
    Engine.update(engine);
    background(0);
    var rand=Math.round(random(1,3));
    if (frameCount%80===0){
    thunderframe=frameCount;
    lightning=createSprite(random(10,370),random(10,30),10,10);
    switch(rand){
        case 1: lightning.addImage(Lightning1);
        break;
        case 2: lightning.addImage(Lightning2);
        break;
        case 3: lightning.addImage(Lightning3);
        break;
        default:break;
    }
    lightning.scale=0.8;
    }
    if (thunderframe+10===frameCount && lightning){
        lightning.destroy;
    }
    umbrella1.display();
    for(var i =0;i<100;i++){
        drops[i].showDrops();
        drops[i].updateY();
    }
    drawSprites();
}   

