let A, B, C;
let p1, p2, p3;
let t = 0.03;
let frame = 0;

function setup() {
  createCanvas(800, 800);
  background(220);
  stroke(0);
  noFill();
  frameRate(60); // slow it down so you can see each line

  // Define base triangle vertices
  A = createVector((width * 1) / 8, (height * 7) / 8);
  B = createVector((width * 7) / 8, (height * 7) / 8);
  C = createVector(width / 2, (height * 1) / 8);

  // Draw initial triangle outline (optional guide)
  line(A.x, A.y, B.x, B.y);
  line(B.x, B.y, C.x, C.y);
  line(C.x, C.y, A.x, A.y);

  // Initialize triangle vertices for inward crawl
  p1 = A.copy();
  p2 = B.copy();
  p3 = C.copy();
}

function draw() {
  // Determine which edge to draw this frame (0, 1, or 2)
  let edge = frame % 3;

  // Compute the inward-shifted triangle for the next line
  let newA = p5.Vector.lerp(p1, p2, t);
  let newB = p5.Vector.lerp(p2, p3, t);
  let newC = p5.Vector.lerp(p3, p1, t);

  // Draw only one side of the current triangle per frame
  if (edge === 0) line(p1.x, p1.y, p2.x, p2.y);
  if (edge === 1) line(p2.x, p2.y, p3.x, p3.y);
  if (edge === 2) line(p3.x, p3.y, p1.x, p1.y);

  // Every 3 frames, move inward
  if (edge === 2) {
    p1 = newA;
    p2 = newB;
    p3 = newC;
  }

  // Stop when triangle gets too small
  if (p5.Vector.dist(p1, p2) < 1) noLoop();

  frame++;
}
