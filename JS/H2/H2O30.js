class Boom {
  constructor(td,kl,ks,x) {
  this.leeftijd = td;
  this.kleur = kl;
  this.x = x;
  this.kleurStam = ks;
  }
  
  groei() {
    if (this.leeftijd < 20) {
      this.leeftijd++;
    }
  } 

  teken() {
    push();
    translate(this.x,375);
    fill(this.kleurStam);
    rect(0,0,20 + 2*this.leeftijd,-100 - 10*this.leeftijd);
    fill(this.kleur);
    ellipse((20 + 2*this.leeftijd) / 2,-90 - 5*this.leeftijd,80 + 4*this.leeftijd,130 + 10*this.leeftijd);
    pop();
  }
}

function setup() {
  canvas = createCanvas(800,400);
  canvas.parent('processing');
  noStroke();
  frameRate(1);
  
  boom1 = new Boom(1,'olive','sienna',130);
  boom2 = new Boom(7, 'darkgreen','burlywood',220);
  boom3 = new Boom(5,'forestgreen','#966b2f',350);
  boom4 = new Boom(2, 'green','#dea350',450);
  boom5 = new Boom(3,'yellowgreen','#8a5f24',600);
}

function draw() {
  background('orange');
  fill('wheat');
  rect(0,350,canvas.width,canvas.height - 350);
  boom1.teken();
  boom2.teken();
  boom3.teken();
  boom4.teken();
  boom5.teken();
  
  boom1.groei();
  boom2.groei();
  boom3.groei();
  boom4.groei();
  boom5.groei();
}