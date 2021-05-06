var hr, mn, sc;
var secAngle, minAngle, hrAngle;

function setup() {
  createCanvas(800,400);

  angleMode(DEGREES)
}

function draw() {
  background(255,255,255);  

hr = hour()
mn = minute()
sc = second()

translate(200,200);

secAngle = map(sc, 0 , 60, 0, 360);
minAngle = map(mn, 0 , 60, 0, 360);
hrAngle = map(hr, 0 , 60, 0, 360);

push();
rotate(secAngle);
stroke(255,0,0);
strokeWeight(7);
line(0,0,100,0)
pop();

push();
rotate(minAngle);
stroke(0,255,0);
strokeWeight(7);
line(0,0,100,0)
pop();

push();
rotate(hrAngle);
stroke(0,0,255);
strokeWeight(7);
line(0,0,100,0)
pop();



  
drawSprites();
}