class Hex{
    constructor(){

         var options = {
        
        restitution: 0,
        friction: 1,
        density: 1.2
    }

    this.body = Bodies.rectangle(100, 300, 40, 40, options);
    this.width = 40;
    this.height = 40
    this.img = loadImage("hex.png");
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push();
    imageMode(CENTER);
    image(this.img,pos.x, pos.y, 40, 40);
    pop();
  }
}
