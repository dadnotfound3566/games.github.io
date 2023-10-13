function setup() {
  canvas = createCanvas(450,450);
  background('cornflowerblue');
  canvas.parent('processing');
  noLoop();
}

function draw() {

  noStroke();
  fill('wheat');
  rect(0,350,450,100);
 
  strokeWeight(4);
  stroke('darkgrey');
  fill('lightgray');
  rect(100,280,100,100);
  fill('gray');
  
  triangle(145,190,100,280,200,280)

  noStroke();
  rect(115,330,30,50);

fill('khaki')
circle(350,90,130,0,2*Math.PI)


  

  fill('sienna');
  rect(300,250,40,130);
  fill('olive');
  
  fill('olive');
  ellipse(320,210,90,150)

  
}
