const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
      
    }

    ground = new Ground(600,390,1200,20)

    box1  = new Box(660,350,60,60);
    box2  = new Box(840,350,60,60);
    pig = new Pig(750,340);
    console.log(box1);
    console.log(box2);
}

function draw(){
    background(0);
    Engine.update(engine);

    

    box1.display();
    box2.display();
    pig.display();
    ground.display();
  
   
}