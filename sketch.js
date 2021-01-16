var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight =300;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1
var div

function preload()
{
	
}

function setup() {
	createCanvas(485, 800);


	engine = Engine.create();
	world = engine.world;

//Create the Bodies Here.
	for(var k =0; k<=width;k=k+80){
		divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
	}

	for(var j =40;j<=width;j=j+50)
{
	plinkos.push(new Plinko(j,75,10));
}

for(var j =15;j<=width-10;j=j+50)
{
	plinkos.push(new Plinko(j,175,10));
}

for(var j =40;j<=width;j=j+50)
{
	plinkos.push(new Plinko(j,275,10));
}

for(var j =15;j<=width-10;j=j+50)
{
	plinkos.push(new Plinko(j,375,10));
}





	
ground1  = new Ground(240,795,480,10)


var render = Matter.Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 750, wireframes: false } });
Matter.Render.run(render);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  console.log(divisions);


  for(var k = 0;k<divisions.length;k++){
	  divisions[k].display();
  }

  for(var j = 0;j<plinkos.length;j++){
	plinkos[j].display();
}

   if(frameCount%90===0){
	particles.push(new Particle(random(width/2-10,width/20+10),10,10))
	
}

for(var j = 0;j<particles.length;j++){
particles[j].display();
}


//particles[particles].display();

 
  ground1.display()
  
  drawSprites();
 
}



