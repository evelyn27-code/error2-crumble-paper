class Waste{
    constructor(x,y,r){
    var options= {
        isStatic : true
    }
    
    this.x = x;
    this.y=y
    this.r = r;
    this.body = Bodies.circle(this.x,this.y,this.r/2,options)
    
    World.add(world,this.body);
}   
   display(){
    var pos = this.body.position;
   
    push()
    translate(pos.x,pos.y);
    rectMode(CENTER);
    strokeWeight(3);
    fill(255,0,255);
   ellipse(0,0,this.r,this.r);
   pop()
    //Matter.Bodies.circle(this.x, this.y,2);

   
   }
    
      // var pos = this.body.position;
      // rectMode(CENTER);
      // fill("blue");
      // rect(pos.x,pos.y,this.width,this.height);
  // }
}
