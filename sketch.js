const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4, box5;
var bird_1;
var pig_1,pig_2;
var log_1,log_2,log_3,log_4;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20)

    bird_1 = new Bird(200,200);


    //layer 1
    box1 = new Box(700,320,50,50);
    box2 = new Box(920,320,50,50);
    pig_1 = new Pig(810,350);
    log_1 = new Log(810,260,300,PI/2)

    //layer 2

    box3 = new Box(700,240,50,50);
    box4 = new Box(920,240,50,50);
    pig_2 = new Pig(810,220);
    log_2 = new Log(810,180,300,PI/2);

    //layer 3
    
    box5 = new Box(810,160,50,50);
    log_3 = new Log(760,120,110,PI/15);
    log_4 = new Log(870,120,110,-PI/15);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    bird_1.display();
    pig_1.display();
    log_1.display();
    box3.display();
    box4.display();
    pig_2.display();
    log_2.display();
    box5.display();
    log_3.display();
    log_4.display();
}