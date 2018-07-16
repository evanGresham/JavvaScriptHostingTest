var x = 0;

function setup() {
  createCanvas(1280,720);
}

function draw(){
  background(180,181,254);
  fill(0);
  ellipse(x%canvas.width,400,20 );

  x+= 10;
}
