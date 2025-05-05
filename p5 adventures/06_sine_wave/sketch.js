const maxPatternCount = 5000;

let path = [];

let patternCount = 0;

function setup() {
  createCanvas(600, 600);
  background(255);
  stroke(0);
  noFill();
}

function draw() {
  if (patternCount < maxPatternCount) {
  translate(width / 2, height / 2);

  let baseRadius = 150;
  let waveAmplitude = 300;
  let waveFrequency = 6; // how many waves per circle
  let angleIncrement = 0.005;

  let angle = frameCount * angleIncrement;

  // Tangent angle: perpendicular to the radius (angle + HALF_PI)
  let sineOffset = waveAmplitude * sin(waveFrequency * angle);

  // Position on circle
  let baseX = baseRadius * cos(angle);
  let baseY = baseRadius * sin(angle);

  // Direction of wave: tangent to the circle
  let tangentX = -sin(angle);
  let tangentY = cos(angle);

  // Add sine offset along tangent
  let finalX = baseX + sineOffset * tangentX;
  let finalY = baseY + sineOffset * tangentY;

  point(finalX, finalY);

  patternCount++;
}
}
