var jos = {
  x: null,
  y: null,
  schaal: 1.0,
  naam: "Jos",
  
  teken(muisPositieX, muisPositieY) {
    this.x = muisPositieX;
    this.schaal = this.x / (0.25*width);
    this.y = muisPositieY;
    this.y = constrain(this.y, 100, 150);
    push();
    translate(this.x,this.y);
    scale(this.schaal);
    noStroke();
    fill('indianred');
    ellipse(0,0,50);
    fill('slategray');
    ellipse(-7,-10,17);
    ellipse(7,-10,17);
    fill('white');
    ellipse(-7,-8,7,13);
    ellipse(7,-8,7,13);
    fill('orange');
    ellipse(0,3,17);
    stroke('slategray');
    strokeWeight(3);
    fill('white');
    arc(0, 13, 26, 13, 0, PI, CHORD);
    pop();
  }
};


function setup() {
  canvas = createCanvas(1000,250);
  canvas.parent('processing');
  fill('black');
  textFont("Verdana");
  textSize(14);
  noStroke();
  frameRate(20);
}

function draw() {
  background('lavender');
  jos.teken(mouseX, mouseY);
  text(jos.naam + " bevindt zich op x-positie " + jos.x + ",de y-positie is " + jos.y + " en de schaal is " + jos.schaal + ".",20,20 )
}