var aantalRijenRaster = 12;
var aantalKolommenRaster = 18;
var celGrootte;

var animatie = [];
var aantalBeeldjes = 6;
var nummer = 3;

var frame;
var xJos = 400;
var yJos = 300;

let lastPressedKey = false;

function preload() {
  brug = loadImage("images/backgrounds/dame_op_brug_1800.jpg");

  for (var b = 0; b < aantalBeeldjes; b++) {
  frame = loadImage("images/sprites/Jos100px/Jos_" + b + ".png");
  animatie.push(frame)
  }
  
}
  

function setup() {
  canvas = createCanvas(900,600);
  canvas.parent('processing');
  frameRate(5);
  celGrootte = width / aantalKolommenRaster;
}

function draw() {
  background(brug);
  tekenRaster();

  if (keyIsDown(LEFT_ARROW)) { 
    xJos -= celGrootte;
     nummer = 2;
     lastPressedKey = LEFT_ARROW;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xJos += celGrootte;
    nummer = 1;
    lastPressedKey = RIGHT_ARROW;
  }
  if (keyIsDown(UP_ARROW)) {
    yJos -= celGrootte;
    nummer = 4 ;
    lastPressedKey = UP_ARROW;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yJos += celGrootte;
    nummer = 5;
    lastPressedKey = DOWN_ARROW;
  }


  if(lastPressedKey == RIGHT_ARROW){
    nummer = 1;
  }
  if(lastPressedKey == LEFT_ARROW){
    nummer = 2;
  }
  if(lastPressedKey == UP_ARROW){
    nummer = 4;
  }
  if(lastPressedKey == DOWN_ARROW){
    nummer = 5;
  }
  

  xJos = constrain(xJos, 0, width - celGrootte);
  yJos = constrain(yJos, 0, height - celGrootte);

  
  image(animatie[nummer], xJos, yJos, celGrootte, celGrootte);
  nummer = (frameCount) % aantalBeeldjes;
}



function tekenRaster() {
  push();
  noFill();
  stroke('grey');
  for (var rij = 0;rij < aantalRijenRaster;rij++) {
    for (var kolom = 0;kolom < aantalKolommenRaster;kolom++) {
      rect(kolom*celGrootte,rij*celGrootte,celGrootte,celGrootte);
    }
  }
  pop();
}