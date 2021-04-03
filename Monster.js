class Monster {
    constructor(x,y,w,h){
        var options={ 
            density:3,
        }
        this.x=x;
        this.y=y;
        this.width=w;
        this.height=h;
        
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options)
        this.image= loadImage("images/Monster-01.png")
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push ()
        translate(pos.x,pos.y);
        rotate (this.body.angle)
      
        image(this.image,0,0,this.width,this.height)
        pop ()
    }
}