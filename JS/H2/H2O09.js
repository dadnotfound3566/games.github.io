var foto;
var pixelKleur;
var rood, groen, blauw;

var aantalRijenRaster = 18;
var aantalKolommenRaster = 18;
var celGrootte;

function preload() {
  foto = loadImage("images/brieck_klein.jpg");
}

function setup() {
  canvas = createCanvas(450, 450);
  canvas.parent('processing');
  textFont("Georgia");
  textSize(18);
  noStroke();
  foto.loadPixels();
  celGrootte = width / aantalKolommenRaster;
  image(foto, 0, 0, width, height);
  tekenRaster();
}

function draw() {
  pixelKleur = foto.get(mouseX, mouseY);
  rood = pixelKleur[0];
  groen = pixelKleur[1];
  blauw = pixelKleur[2];
}

function tekenRaster() {
  for (var rij = 0; rij < aantalRijenRaster; rij++) {
    for (var kolom = 0; kolom < aantalKolommenRaster; kolom++) {
      var x = kolom * celGrootte;
      var y = rij * celGrootte;
      var gemiddeldeKleur = gemiddeldePixel(x, y, celGrootte, celGrootte);
      fill(gemiddeldeKleur);
      rect(x, y, celGrootte, celGrootte);
    }
  }
}

function gemiddeldePixel(x, y, breedte, hoogte) {
  var totaalRood = 0;
  var totaalGroen = 0;
  var totaalBlauw = 0;
  var aantalPixels = 0;

  for (var kolomPositie = x; kolomPositie < x + breedte; kolomPositie++) {
    for (var rijPositie = y; rijPositie < y + hoogte; rijPositie++) {
      var pixel = foto.get(kolomPositie, rijPositie);
      totaalRood += pixel[0];
      totaalGroen += pixel[1];
      totaalBlauw += pixel[2];
      aantalPixels++;
    }
  }

  var gemiddeldeRood = totaalRood / aantalPixels;
  var gemiddeldeGroen = totaalGroen / aantalPixels;
  var gemiddeldeBlauw = totaalBlauw / aantalPixels;

  return color(gemiddeldeRood, gemiddeldeGroen, gemiddeldeBlauw);
}
