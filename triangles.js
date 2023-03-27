let shapes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  
  // Aggiungiamo una nuova forma con una certa probabilità
  if (random(1) < 0.02) {
    addShape();
  }
  
  // Mostrare e aggiornare ogni forma
  for (let i = shapes.length - 1; i >= 0; i--) {
    let shape = shapes[i];
    shape.show();
    shape.update();
    if (shape.timer <= 0) {
      shapes.splice(i, 1);
    }
  }
}

function addShape() {
  let shapeType = floor(random(3));
  let shape;
  switch (shapeType) {
    case 0:
      shape = new Triangle();
      break;
    case 1:
      shape = new Square();
      break;
    case 2:
      shape = new Circle();
      break;
  }
  shapes.push(shape);
}

class Shape {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(30, 50);
    this.strokeWeight = 3;
    this.timer = random(200, 600); // valore massimo di scomparsa della forma
    this.timerStart = this.timer;
    // rotate(random(360));
  }
  
  update() {
    this.timer--;
  }
  
  show() {
    strokeWeight(this.strokeWeight);
    noFill();
    push();
    translate(this.x, this.y);
    this.drawShape();
    pop();
  }
  
  drawShape() {}
}

class Triangle extends Shape {
  constructor() {
    super();
    this.color = color(255, 0, 0, 50);
  }
  
  drawShape() {
    stroke(this.color);
    triangle(-this.size/2, -this.size/2, 0, this.size/2, this.size/2, -this.size/2);
    
  }
}

class Square extends Shape {
  constructor() {
    super();
    this.color = color(0, 255, 0,50);
  }
  
  drawShape() {
    stroke(this.color);
    rectMode(CENTER);
    rect(0, 0, this.size, this.size);
  }
}

class Circle extends Shape {
  constructor() {
    super();
    this.color = color(0, 0, 255,50);
  }
  
  drawShape() {
    stroke(this.color);
    ellipse(0, 0, this.size, this.size);
  }
}
