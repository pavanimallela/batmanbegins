class Drops{
    constructor(x,y){
        var options={
            restitution:0.1,
            friction:0.01
        }
        this.r=3;
    this.drop = Bodies.circle(x,y,3,options);
    World.add(world,this.drop);
    }
    updateDrops(){
        if(this.drop.position.y>height){
            Matter.Body.setPosition(this.drop,{x:random(0,350),y:(0,50)})
        }
    }
    display(){
        fill("skyblue");
        ellipseMode(RADIUS);
        ellipse(this.drop.position.x,this.drop.position.y,this.r,this.r);

    }
   
    
}