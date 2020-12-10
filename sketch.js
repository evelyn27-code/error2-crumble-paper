
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dumper1,ground1;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 300);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	//Create the Bodies Here.

  dumper1= new dumper(1000,280,200,20);
  dumper2= new dumper(1090,240,20,100);
  dumper3= new dumper(910,240,20,100);

  ground1 = new Ground(600,294,1200,10);
 waste1 = new Waste(300,280,22,22)


}


function draw() {
  rectMode(CENTER);
  background(0);

  if (keyCode === UP_ARROW) {
	
	Matter.Body.applyForce(waste1.body,waste1.body.position,{x:85,y:-85});
	
  }
  


  dumper1.display();
  dumper2.display();
  dumper3.display();

  ground1.display();
  waste1.display();

  drawSprites();
 
}
/*
function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	   Matter.Body.setStatic(packageBody, false);
	   
	 }
   }
*/
