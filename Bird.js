class Bird{
  constructor(x, y, radius) {
    var options = {
        restitution:0.5,
        friction:0,
      
       isStatic: false
    }

  

    
    this.radius = radius;
    this.body = Bodies.circle(x, y, this.radius, options);
    
    
    //this.image = loadImage("sprites/part1.png");
    World.add(world, this.body);
  }
  display(){
    
    push();
    translate(this.body.position.x, this.body.position.y);
    
    //imageMode(CENTER);
    //image(this.image, 0, 0, this.width, this.height);
    ellipseMode(RADIUS);
    
   

    
    fill(100);

    ellipse(0,0,this.radius, this.radius)
    pop();
  }
  }
