const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21,b22,b23,b24,b25;
var polygon1;
var slingshot1;
var timeDragged = 1;

function setup(){
    createCanvas(1000, 500);

    engine = Engine.create();
    world = engine.world;

    platform1 = new Platform(400, 450, 250, 10);
    platform2 = new Platform(800, 225, 200, 10);
    //p1,layer one
    b1 = new Block(400, 420);
    b2 = new Block(373, 420);
    b3 = new Block(346, 420);
    b4 = new Block(319, 420);
    b5 = new Block(427, 420);
    b6 = new Block(454, 420);
    b7 = new Block(481, 420);
    //p1,layer two
    b8 = new Block(400, 380);
    b9 = new Block(373, 380);
    b10 = new Block(346, 380);
    b11 = new Block(427, 380);
    b12 = new Block(454, 380);
    //p1,layer three
    b13 = new Block(400, 345);
    b14 = new Block(373, 345);
    b15 = new Block(427, 345);
    //p1,layer four
    b16 = new Block(400, 311);
    //p2,layer one
    b17 = new Block(800, 200);
    b18 = new Block(773, 200);
    b19 = new Block(746, 200);
    b20 = new Block(827, 200);
    b21 = new Block(854, 200);
    //p2,layer two
    b22 = new Block(800, 175);
    b23 = new Block(773, 175);
    b24 = new Block(827, 175);
    //p2,layer three
    b25 = new Block(800, 145);

    polygon1 = new polygon(100, 250);

    slingshot1 = new slingshot(polygon1.body,{x:100, y:250});

    Engine.run(engine);

}

function draw(){
    background("grey");

    platform1.display();
    platform2.display();
    polygon1.display();
    slingshot1.display();
    
    fill("yellow");
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    
    fill("orange");
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    
    fill("red");
    b13.display();
    b14.display();
    b15.display();
    
    fill(rgb(150, 0, 0))
    b16.display();

    fill("pink");
    b17.display();
    b18.display();
    b19.display();
    b20.display();
    b21.display();
    
    fill("blue");
    b22.display();
    b23.display();
    b24.display();
    
    fill("purple");
    b25.display();

    if(timeDragged>0){
    textSize(20);
    stroke("red");
    strokeWeight(3);
    fill("cyan");
    text("Press 'space' to get one more chance", 50, 50);
    }
}

function mouseDragged(){
    Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingshot1.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot1.attach(polygon1.body);
        timeDragged = timeDragged-1;
    }
}