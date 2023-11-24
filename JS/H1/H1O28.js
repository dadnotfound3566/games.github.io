var aantal = 15;

function setup() {
  canvas = createCanvas(450,450);
  canvas.parent('processing');
  frameRate(10);
  colorMode(RGB, 255, 255, 255, 1);
  angleMode(DEGREES);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background('lavender');
  fill('black');
  text("aantal = " + aantal,10,20);    
  translate(225,225);
  
  // tekenen rode bladeren
  
  fill(57, 124, 163,.7);
  ellipse(0,0,400,50);
  rotate(360 / aantal);

for (var i = 0; i < aantal; i++) {
ellipse(0,0,400,50)
rotate(360 / aantal);
}

  
  // gele vulkleur

  for (var i = 0; i < aantal; i++) {
  fill(189, 189, 189,0.5);
  rect (0,0, 75, 75);
  rotate(360/aantal);
  }


  if (keyIsDown(LEFT_ARROW) && aantal >= 2) {
    aantal--;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    aantal++;
  }   
}