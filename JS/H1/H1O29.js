var aantal = 5;

function setup() {
  canvas = createCanvas(1000,200);
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
  translate(100,100);
  for(n=0;n<6;n++){
  tekenBloem();
  translate(160,0)
  }
  if (keyIsDown(LEFT_ARROW) && aantal >= 2) {
    aantal--;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    aantal++;
  }
}
function tekenBloem(){
   fill(178, 34, 34,0.7);
 for (var n = 0;n < aantal;n++) {
    ellipse(0,0,160,20);
    rotate(360 / aantal);
  }
  fill(255, 195, 0,0.5);
  for (var n = 0;n < aantal;n++) {
    rect(0,0,30,30)
    rotate(360 / aantal);
  }
}
