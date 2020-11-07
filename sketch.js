
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var option={
	isStatic:false,
	restitution:0.3,
	friction:0.5, 
	density:1.2
}
//you will be requiring one more matter.js 
//function called as Matter.Render

// create the varibales for the dustbin,paper and ground
var dustbin;
var paper;
var ground

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//Use the classes of ground,paper and dustbin to create the objects
	//use the hint given to you in the PDF of the project


	//writing the code  for render here
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  })
  


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
//display the ground,paper and dustbin objects here
  ground.display();
  paper.display();
  dustbin.display();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW) {
	Matter.Body.applyforce(paperObject.body,paperObject.body.position,{x:85,y:-85})
}
}
//check out hint no.4 and write the code of function key pressed here

