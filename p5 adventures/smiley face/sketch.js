function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(234, 253, 248);

  // face
  rectMode(CENTER);
  stroke(0, 0, 0);
  strokeWeight(2);
  fill(236, 221, 133);
  rect(200, 150, 100, 100, 50);
  
  // eyes
  fill(171, 195, 47);
  circle(180, 140, 10);
  circle(215, 140, 10);
   // ellipse(210, 160, 70, 30);

  // eyebrows
  line(170, 130, 185, 120);
  line(225, 130, 210, 120);
  
  // smile
  fill(236, 221, 133);
  arc(200, 145, 70, 70, (1/6) * PI, (5/6) * PI);

  // fill(255, 0, 0);
  // stroke(0, 255, 0);
  // ellipse(200, 250, 50, 50);
}
