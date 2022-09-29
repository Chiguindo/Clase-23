const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, ball, ball2, ground;


function setup() {
  createCanvas(400,400);

//crear engine

engine = Engine.create();

//Agregar world a engine
  
world= engine.world; 
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }

  var ball2_options = {
    restitution: 0.90,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  
//crear un fondo

ground = Bodies.rectangle(200, 390, 400, 20, ground_options);

//agregarlo a world

  ball = Bodies.circle(100,10,20,ball_options);
  ball2 = Bodies.circle(250,10,30,ball2_options);
  World.add(world,ball);
  World.add(world,ball2);
  World.add(world,ground);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  //escribir una función rectangle para mostrar el suelo.
  
  rect(ground.position.x, ground.position.y,400, 20);
  ellipse(ball.position.x,ball.position.y,20);
  ellipse(ball2.position.x,ball2.position.y,30);

 


  
  
}

