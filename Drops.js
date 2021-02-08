class Drops{
    constructor(x,y){
        
        this.body=Bodies.circle(x,y,5);
        this.radius=5;

        World.add(world,this.body);
    }

    updateY(){     
        if(this.body.position.y > height){

            Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
        }
    }

    display(){
        //var angle = this.body.angle;
        push();
       // translate();
       // rotate(angle);
       fill("blue")
       ellipseMode(RADIUS);
       ellipse(this.body.position.x, this.body.position.y,this.radius);
     pop();
    }
}