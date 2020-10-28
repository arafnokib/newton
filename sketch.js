const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var bird1;
var bird2;
var bird3;
var bird4;
var slingshot;
var slingshot1;
var slingshot2;
var slingshot3;
var slingshot4;

function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


 

    bird = new Bird(100,200,20);
    bird1 = new Bird(90,100,20);
    bird2 = new Bird(110,100,20);
    bird3 = new Bird(80,100,20);
    bird4 = new Bird(120,100,20);


    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:600, y:100});
    slingshot1 = new SlingShot(bird1.body,{x:540, y:100});
    slingshot2 = new SlingShot(bird2.body,{x:640, y:100});
    slingshot3 = new SlingShot(bird3.body,{x:500, y:100});
    slingshot4 = new SlingShot(bird4.body,{x:680, y:100});
}

function draw(){
    background(85);
    Engine.update(engine);
    strokeWeight(4);
    
    bird.display();
    bird1.display();
    bird2.display();
    bird3.display();
    bird4.display();
  
    slingshot.display();    
    slingshot1.display();
    slingshot2.display();
    slingshot3.display();
    slingshot4.display();
}
