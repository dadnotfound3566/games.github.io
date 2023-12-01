kleur='white';

function setup() {
  canvas = createCanvas(451,451);
  canvas.parent('processing');
  background('coral');
}

function draw() {
for (var rij = 0; rij < 450; rij += 50) {
for (var kolom = 0; kolom < 450; kolom += 50) {
if ((rij + kolom) % 100 === 0) {
fill('kleur');
} else {
fill('black');
}
rect(kolom, rij, 50, 50);
}
}
}