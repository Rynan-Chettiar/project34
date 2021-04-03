const Engine=Matter.Engine; 
const World=Matter.World; 
const Bodies=Matter.Bodies; 
const Constraint=Matter.Constraint
const Render = Matter.Render;

var engine,world,ground;
var box1, box2, box3, box4, box5;
var hero, rope, monster;

function setup() 
{ 
  createCanvas(1200,600); 

  engine=Engine.create(); 
  world=engine.world; 

  ground=new Ground(600, 590, 1200, 20);
  box1= new Box(700, 560, 60, 60);
  box6=new Box(700, 390, 60, 60)
  box7=new Box(700, 390, 60, 60)
  box8=new Box(700, 390, 60, 60)
  box9=new Box(700, 390, 60, 60)
  box10=new Box(700, 390, 60, 60)
  box11=new Box(700, 390, 60, 60)
  box2= new Box(920, 560, 60, 60);
  
  
  box3= new Box(700, 390, 60, 60)
  
  box4= new Box(920, 390, 60, 60)
  box17= new Box(920, 390, 60, 60)
  box18= new Box(920, 390, 60, 60)
  box19= new Box(920, 390, 60, 60)
  box20= new Box(920, 390, 60, 60)


  box5= new Box(810, 260, 60, 60)
  box12= new Box(810, 260, 60, 60)
  box13= new Box(810, 260, 60, 60)
  box14= new Box(810, 260, 60, 60)
  box15= new Box(810, 260, 60, 60)
  box16= new Box(810, 260, 60, 60)

  hero= new Hero(200, 50, 300, 200)

  rope= new Suspender(hero.body, {x:500, y:50})

  monster= new Monster(1100, 300, 100, 100)
  
  var render = Render.create({ 
    element: document.body, 
    engine: engine, 
    options: { width: 1200, height: 600, wireframes: false } 
    }); 
    Render.run(render);


} 
   
function draw() 
{ 
  background(0); 
  Engine.update(engine); 
  
 ground.display();

 box1.display();
 box2.display();
 
 box3.display();
 box4.display();

 box5.display();
 box6.display();
 box7.display();
 box8.display();
 box9.display();
 box10.display();
 box11.display();

 box12.display();
 box13.display();
 box14.display();
 box15.display();
 box16.display();

 box17.display();
 box18.display();
 box19.display();
 box20.display();
 
 hero.display();
 monster.display();

}