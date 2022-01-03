class Ball{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;

        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        angleMode(RADIANS);

        ellipseMode(RADIUS);
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("pink");
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}