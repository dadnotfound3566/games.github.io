function setup() {
  canvas = createCanvas(450,450);
  background('darkred');
  canvas.parent('processing');
  noLoop();
}

function draw() {
  // noStroke();
  // fill('darkred');
  // triangle(0,0,0,450,450,450);

  strokeWeight(5);
  stroke('darkred');
  fill('darkred');
  beginShape();
  triangle(225,0,0,450,450,450)
  endShape(CLOSE);

  strokeWeight(5);
  stroke('pink');
  fill('pink');
  beginShape();
  triangle(0,225,450,0,450,450)
  endShape(CLOSE);
  
  strokeWeight(5);
  stroke('purple');
  fill('purple');
  beginShape();
  triangle(0,0,0,450,450,225)
  endShape(CLOSE);
}
