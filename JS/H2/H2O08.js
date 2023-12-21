var huisNummers = new Array(23, 25, 27, 29, 31, 33);
var huisEigenaren = new Array("Smiers", "Dekker", "Den Hartog", "Tolboom", "Kremer", "Velthuizen");
var kleur1 = 'lightgray';
var kleur2 = 'darkgrey';
var huidigeKleur = kleur1;

function setup() {
  canvas = createCanvas(1000, 300);
  canvas.parent('processing');
  background('cornflowerblue');
  textFont("Georgia");
  noStroke();
  noLoop();
}

function draw() {
  tekenAchtergrond();
  for (var i = 0; i < huisNummers.length; i++) {
    var xPos = 50 + i * 150; 
    tekenHuis(huidigeKleur, huisNummers[i], xPos, huisEigenaren[i]);
    wisselKleur(); 
  }
}

function tekenHuis(kleur, nr, xPos, eigenaar) {
  push();
  translate(xPos, 0); 
  fill(kleur);
  rect(0, 110, 150, 150);
  fill('gray');
  triangle(0, 110, 150, 110, 75, 20);
  rect(20, 170, 50, 90);
  fill('indianred');
  textSize(30);
  text(nr, 75, 190);
  fill('black');
  textSize(15);
  text(eigenaar, 20, 165);
  pop();
}

function tekenAchtergrond() {
  fill('wheat');
  rect(0, 220, width, height - 220);
}

function wisselKleur() {
  if (huidigeKleur === kleur1) {
    huidigeKleur = kleur2;
  } else {
    huidigeKleur = kleur1;
  }
}
