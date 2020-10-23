class Box{
    constructor(x,y,color){

         var options = {
        
        restitution: 0,
        friction: 3
    }

    this.visibility = 255
    this.body = Bodies.rectangle(x, y, 35, 50, options);  
    World.add(world, this.body);

  if (color==="pink") {
    
    this.image = loadImage("1pink.png")
  }
  if (color==="skyblue") {
    
    this.image = loadImage("1skyblue.png")
  }
  if (color==="grey") {
    
    this.image = loadImage("1grey.png")
  }
  if (color==="turquoise") {
    
    this.image = loadImage("1turquoise.png")
  }
    this.color = color
  }
  display(){

var pos = this.body.position; 

  if (this.body.speed<6) {
    
    push();
    fill(this.color)
    rectMode(CENTER);
    rect(pos.x,pos.y,35,50);
    pop();

  }else{

     push()
     World.remove(world,this.body);
     this.visibility = this.visibility-20;
     tint(255,this.visibility);
     imageMode(CENTER);
     image(this.image,this.body.position.x,this.body.position.y,35,50); 
     pop() 
  }
  }
   score(){

   if (this.visibility<100&&this.visibility>-1005) {
     
     score = score+5; 
   }
}
}