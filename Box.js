class Box {
  
    constructor(x,y,width,height){


        var options ={
            restitution: 0.6,
            friction: 0.3,
            density : 1
        }
        this.body = Bodies.rectangle(x,y,width,height, options);
        World.add(world,this.body);

        this.width = width;
        this.height = height;
        
    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        rectMode(CENTER);
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(5);
        stroke("green");
        
        console.log("x"+pos.x)
        console.log("y"+pos.y)
        rect(0,0,this.width, this.height);
        pop();
    }




}