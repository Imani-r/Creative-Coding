function preload() {
  table = loadTable("colors.csv", "csv", "header");
}

function setup() {
  // Create a canvas that fills the browser window
  createCanvas(windowWidth, windowHeight);
  // max hue, max saturation, max brightness
  colorMode(HSB, 360, 100, 100);
  frameRate(0.5);
}

function draw() {
  background("lightcyan");
  
  // Pick a color palette
  palette = 0;
  getColor(floor(random(5)));
  fill(H, S, B);
  noStroke();
  
  // Move the origin to the center of the canvas
  translate(width/2, height/2);
  
  // Scale the flower based on the window size
  // Use the smaller dimension to ensure it fits in both directions
  let scaleFactor = min(width, height) / 600;
  
  let radius = 100 * scaleFactor; // Scale the radius
  let w = 50 * scaleFactor, h = 150 * scaleFactor; // Scale the ellipse size
  
  for (let i = 0; i < 12; i++) {
    let angle = i * (PI / 6); // 12 equal rotations (30° increments)
    push();
    rotate(angle);
    ellipse(0, -radius, w, h); // Place ellipse at the top of its rotation
    pop();
  }
}

function getColor(col1) {
  H = int(table.get(palette, col1 * 3));
  S = int(table.get(palette, col1 * 3 + 1));
  B = int(table.get(palette, col1 * 3 + 2));
}

// This function is called whenever the browser window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
