function setup() {
  createCanvas(700, 500);

  // Use degrees as units for angles
  angleMode(DEGREES);
}

function draw() {
  // Draw a light peach backround
  background(245, 228, 215);

  // Set thickness and colour for main shapes
  strokeWeight(3);
  // Light blue
  fill(200, 200, 255);

  // MAIN SHAPES

  // Draw a rectangle
  // Dark blue
  stroke(20, 20, 100);
  // x, y, width, height
  rect(50, 50, 200, 100);

  // Draw a square on top of the rectangle
  // Dark red
  stroke(100, 20, 20);
  // x, y, size
  square(200, 100, 100);

  // Draw eye shape with ellipse, circle, and arc

  push();
  
  // Draw ellipse as outer eye shape
  colorMode(HSB);
  // Light green
  fill(120, 70, 90);
  // Dark green
  stroke(120, 60, 30);
  // x, y, width, height
  ellipse(350, 300, 300, 100);

  // Draw circle as pupil
  // set colour
  fill('maroon');
  // remove stroke
  noStroke();
  // x, y, diameter
  circle(370, 300, 100);

  pop();

  // Draw arc as eyelid
  // set colour
  fill('#47D46F')
  // x, y, width, heght, start angle, stop angle, mode
  arc(350, 300, 300, 100, 180, 0, CHORD);

  
  // Draw line
  // x1, y1, x2, y2
  line(30, 300, 200, 400);

  // // Draw thick dot
  // strokeWeight(50);
  // point(80, 280);

  // Draw triangle
  // x1, y1, x2, y2, x3, y3
  triangle(550, 50, 650, 200, 400, 200);

  // Draw quadrilateral
  // Draw without inner color
  noFill();
  // x1, y1, x2, y2, x3, y3, x4, y4
  quad(600, 300, 650, 350, 500, 480, 450, 420);
    
  circle(100, 400, 100);
}
