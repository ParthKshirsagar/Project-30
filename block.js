class Block {
    constructor(x, y){
        this.body = Bodies.rectangle(x, y, 25, 35);
        this.width = 25;
        this.height = 35;
        this.visiblity = 255;
        World.add(world, this.body);
    }
    display(){
        if(this.body.speed<5){
        rectMode(CENTER);
        var Pos = this.body.position;
        this.visiblity = this.visiblity - 5;
        rect(Pos.x, Pos.y, this.width, this.height);
        }
        else {
        push();
        World.remove(world, this.body);
        pop();
        }
    }
}