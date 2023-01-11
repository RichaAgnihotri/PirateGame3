class CannonBall {
  constructor(x, y) {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
      isStatic: true
    };
    this.r = 40;

    this.body = Bodies.circle(x, y, this.r, options);

    this.image = loadImage("./assets/cannonball.png");
    
    this.trajectory = [];//this is creation of array to store the path of the ball
    World.add(world, this.body);
  }


  //shooting the cannonball
  shoot() {
    var velocity = p5.Vector.fromAngle(cannon.angle);
    velocity.mult(20);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
  }

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    push();//used to implement property to an object
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.r, this.r);
    pop();

    //getting the positions of ball and pushing them in the trajectory array
    if (this.body.velocity.x > 0 && this.body.position.x > 300) {
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);// push is used to add value into array
    }

    // setting image to the trajectory
    for (var i = 0; i < this.trajectory.length; i++) {
      image(this.image, this.trajectory[i][0], this.trajectory[i][1], 5, 5);
    }
  }
}

//Array is collection of multiple values inside single variable
var friends = ['Adam','Parker', 'Virat', 'Kate', 'Tony'];
console.log(friends);

// value against index number(position of an element)
//indexing by default starts from zero in an array
console.log(friends[2]);

//finding length of array
var size=friends.length;
console.log(size);

//add element to array at the last
//push is used to store new value in array
friends.push("Richa");
console.log(friends);

friends.push("Richa1");
console.log(friends);
friends.push("Richa2");
console.log(friends);

//finding length of array
var size=friends.length;
console.log(size);


// to delete the value from end
//pop is used to delete value from array
friends.pop();
console.log(friends);

//finding length of array
var size=friends.length;
console.log(size);