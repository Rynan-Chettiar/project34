class Suspender{
    constructor(body1, point2){
        
        var options={
        bodyA:body1,
        
       pointB:point2
    
        }
        this.Suspender = Constraint.create(options);
        World.add(world, this.Suspender);
        }
        display(){
            var pointA= this.Suspender.bodyA.position;
            var pointB= this.Suspender.pointB;

           
            strokeWeight (1)
            stroke("red")
            var Anchor1X = pointA.x
            var Anchor1Y = pointA.y
            
            var Anchor2X = pointB.x
            var Anchor2Y = pointB.y
            //fill(220);
            line (Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
        }
        
}
