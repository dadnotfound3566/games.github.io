class DobbelSteen {
  constructor(x, y, grootte, diameterOgen) {
    this.x = x;
    this.y = y;
    this.grootte = grootte;
    this.diameterOgen = diameterOgen;
    this.ogen = null;
    this.R = null;
    this.G = null;
    this.B = null;
  }

  gooi() {
    this.ogen = floor(random(0, 6)) + 1;
    this.R = round(random(0, 255));
    this.G = round(random(0, 255));
    this.B = round(random(0, 255));
  }

  teken() {
    push();
    fill(this.R, this.G, this.B);
    rect(this.x, this.y, this.grootte, this.grootte);

    fill('black');
    if (this.ogen != 1) {
      ellipse(this.x + this.grootte / 6 * 1, this.y + this.grootte / 6 * 1, this.diameterOgen, this.diameterOgen);
    }
    if (this.ogen == 6) {
      ellipse(this.x + this.grootte / 6 * 3, this.y + this.grootte / 6 * 1, this.diameterOgen, this.diameterOgen);
    }
    if (this.ogen > 3) {
      ellipse(this.x + this.grootte / 6 * 5, this.y + this.grootte / 6 * 1, this.diameterOgen, this.diameterOgen);
    }
    if (this.ogen == 1 || this.ogen == 3 || this.ogen == 5) {
      ellipse(this.x + this.grootte / 6 * 3, this.y + this.grootte / 6 * 3, this.diameterOgen, this.diameterOgen);
    }
    if (this.ogen > 3) {
      ellipse(this.x + this.grootte / 6 * 1, this.y + this.grootte / 6 * 5, this.diameterOgen, this.diameterOgen);
    }
    if (this.ogen == 6) {
      ellipse(this.x + this.grootte / 6 * 3, this.y + this.grootte / 6 * 5, this.diameterOgen, this.diameterOgen);
    }
    if (this.ogen != 1) {
      ellipse(this.x + this.grootte / 6 * 5, this.y + this.grootte / 6 * 5, this.diameterOgen, this.diameterOgen);
    }
    pop();
  }
}

let dobbelSteen;
let dob1;
let dob2;
let dob3;
let totalScore = 0;

function setup() {
  canvas = createCanvas(700, 300);
  canvas.parent('processing');
  colorMode(RGB, 255, 255, 255, 1);
  noStroke();
  textFont("Georgia");
  textSize(80);
  frameRate(10);
  background('lightcyan');
  dob1 = new DobbelSteen(25, 25, 200, 50);
  dob2 = new DobbelSteen(250, 25, 200, 50);
  dob3 = new DobbelSteen(475, 25, 200, 50);
}

function draw() {
  if (mouseIsPressed) {
    background('lightcyan');

    dob1.gooi();
    dob2.gooi();
    dob3.gooi();

    dob1.teken();
    dob2.teken();
    dob3.teken();

    totalScore = dob1.ogen + dob2.ogen + dob3.ogen;

    textSize(30);
    text("Totaal gegooid: " + totalScore, 25, 275);
  }
}
