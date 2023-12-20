var aantalRijenRaster = 6;
var aantalKolommenRaster = 9;
var celGrootte;

var spriteJos;
var josX;
var josY;

function preload() {
  brug = loadImage("images/backgrounds/dame_op_brug_1800.jpg");
  spriteJos = loadImage("images/sprites/Jos100px/Jos_0.png");
}

function setup() {
  canvas = createCanvas(901, 601);
  canvas.parent('processing');
  celGrootte = width / aantalKolommenRaster;
  josX = width / 2 - spriteJos.width / 2;
  josY = 300;
}

function draw() {
  background(brug);
  tekenRaster();
  image(spriteJos,josX,josY); 
}

function tekenRaster() {
  for (var rij = 0; rij < aantalRijenRaster; rij++) {
    for (var kolom = 0; kolom < aantalKolommenRaster; kolom++) {
      push();
      noFill();
      stroke('grey');
      rect(kolom * celGrootte, rij * celGrootte, celGrootte, celGrootte);
      pop();
    }
  }

}
