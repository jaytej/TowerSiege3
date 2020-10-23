class Chain {
    constructor(bodyA,pointB){

        var options = {

            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            lenght: 100
        }
        this.pointB = pointB;
        this.chain = Matter.Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){

    if (this.chain.bodyA){

        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        push();
        strokeWeight(5);
        stroke(48,22,8);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
      }
    }
    fly(){

        this.chain.bodyA = null;
    }
} 
