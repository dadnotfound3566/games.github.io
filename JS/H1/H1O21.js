var x = 120;
var snelheid = 5;
var diameter = 200;

function setup() {
  canvas = createCanvas(1000,300);
  canvas.parent('processing');
  textFont("Verdana");
  textSize(30);
  frameRate(50);
}

function draw() {
  background('orange');
  fill('white');
  noStroke();
  rect(0,0,width,40);
  fill('black');  
  text("De bol beweegt heen en weer (snelheid = " + snelheid + "). | Klik met je muis!",10,30);
  stroke('white');
  strokeWeight(10);

  if (mouseIsPressed == true && snelheid == 5 || mouseIsPressed == true && snelheid-5) {
      fill('red');
  }

  else {
    fill('dodgerblue');
  }
  
  if(snelheid == 5) {
fill('green')
  }

if (mouseIsPressed == true && snelheid == 5 ) {
  fill ('red')
}

  if (x > 880 || x < 120) { snelheid = -1*snelheid; }

  if (mouseIsPressed == false) {
   ellipse(x,170,100)
  }
 
  else {
  ellipse(x,170,diameter);
}

x += snelheid;
}