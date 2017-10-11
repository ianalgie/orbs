let bubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  b = new Bubble(mouseX, mouseY, 25);
  bubbles.push(b);
}

function draw() {
  background(0);

  for(let i=0; i < bubbles.length; i++) {
    bubbles[i].update();
    bubbles[i].show();
    if (bubbles[i].lifespan < 0) {
      bubbles.splice(i, 1);
    }
  }
}

// class definition etc.
class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.lifespan = 255;
  }

  update() {
    // this.x = this.x + random(-2, 2);
    // this.y = this.y + random(-2, 2);
    this.lifespan = this.lifespan - 1;
    this.r = this.r + 0.5;
  }

  show() {
    // stroke(255);
    // strokeWeight(2);
    noStroke();
    fill(255, 120, 80, this.lifespan);
    ellipse(this.x, this.y, this.r, this.r);
  }
}
