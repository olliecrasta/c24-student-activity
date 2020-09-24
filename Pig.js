class Pig {
  
    constructor(x,y){


        var options ={
            restitution: 0.6,
            friction: 0.3,
            density : 1
        }
        this.body = Bodies.rectangle(x,y,50,50, options);
        World.add(world,this.body);

        this.width = 50;
        this.height = 50;
        
    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        rectMode(CENTER);
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(5);
        stroke("red");
        fill("pink");
        
        console.log("x"+pos.x)
        console.log("y"+pos.y)
        rect(0,0,this.width, this.height);
        pop();
    }




}