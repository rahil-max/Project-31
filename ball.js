class ball{
    constructor(y,size){
        var options = {
            //isStatic:true,
            friction : 1,
            density : 1.2,
            restitution : 0
        }
        this.body = Bodies.circle(random(20,680),y,10,options);
        this.size = size;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        var rand = Math.round(random(1,3));
        if(rand===1){
            color = "green";
        }
        else if(rand===2){
            color = "blue";
        }
        else{
            color= "red" ;
        }

         push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill(color);
        ellipse(0,0,this.size,this.size);
        pop();
    }
}