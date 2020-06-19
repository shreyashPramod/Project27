const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var log1;
var bob1;
var rope1;
var rope2;
var rope3;
var rope4;
var rope5;
var bobDiameter=40;

function preload()
{ 
}
function setup() {
	createCanvas(500,500);
	engine = Engine.create();
	world = engine.world;

	log = new Log(250,100,300,20);
  bob1 = new Bob(150,200,40,40);
  bob2 = new Bob(190,200,40,40);
  bob3 = new Bob(230,200,40,40);
  bob4 = new Bob(270,200,40,40);
  bob5 = new Bob(310,200,40,40);
	
  Engine.run(engine);

  rope1=new Rope(bob1.body,log.body,-bobDiameter*2, 0)
   rope2=new Rope(bob2.body,log.body,-bobDiameter*1, 0)
    rope3=new Rope(bob3.body,log.body,0, 0)
   rope4=new Rope(bob4.body,log.body,bobDiameter*1, 0) 
    rope5=new Rope(bob5.body,log.body,bobDiameter*2, 0)


}
function draw() {
  rectMode(CENTER);
  background("white");

  log.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display()
   rope2.display()
    rope3.display() 
    rope4.display() 
    rope5.display()

  drawSprites();
}



