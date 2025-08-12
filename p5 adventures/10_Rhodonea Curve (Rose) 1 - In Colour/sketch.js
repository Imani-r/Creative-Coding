let n = 1.5; // Start somewhere between the first and second pattern
let d = 1;
let nTarget = 2;
let dTarget = 1;
let transitionSpeed = 0.0005;

let hexColors = [
  "#264653", // deep teal
  "#2a9d8f", // turquoise green
  "#e9c46a", // warm mustard yellow
  "#f4a261", // muted orange
  "#e76f51"  // warm coral red
];

let colors = [];

let colorTransitionDuration = 180; // frames per color transition (~3 seconds at 60fps)

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Convert hex strings to p5.Color objects once
  colors = hexColors.map(c => color(c));
}

function draw() {
  background("#ffffff");
  translate(width / 2, height / 2);

  // Update target values and interpolate
  updateTargets();
  n = lerp(n, nTarget, transitionSpeed);
  d = lerp(d, dTarget, transitionSpeed);

  // Calculate rose constant
  let k = n / d;

  // Calculate interpolation progress (0 to 1) within current color transition
  let t = (frameCount % colorTransitionDuration) / colorTransitionDuration;

  // Current and next color indices in palette
  let currentIndex = floor(frameCount / colorTransitionDuration) % colors.length;
  let nextIndex = (currentIndex + 1) % colors.length;

  // Interpolate between the two colors
  let currentColor = lerpColor(colors[currentIndex], colors[nextIndex], t);

  stroke(currentColor);
  strokeWeight(1.75);
  noFill();

  // Draw the rose curve with smooth curvature
  beginShape();
  for (let a = 0; a < TWO_PI * 10; a += 0.02) {
    let r = 300 * cos(k * a);
    let x = r * cos(a);
    let y = r * sin(a);
    curveVertex(x, y);
  }
  endShape();
}

function updateTargets() {
  // Valid n/d combinations
  let combinations = [
    { n: 2, d: 1 }, { n: 3, d: 1 }, { n: 4, d: 1 }, { n: 5, d: 1 }, { n: 6, d: 1 }, { n: 7, d: 1 },
    { n: 1, d: 2 }, { n: 3, d: 2 }, { n: 5, d: 2 }, { n: 7, d: 2 },
    { n: 1, d: 3 }, { n: 2, d: 3 }, { n: 4, d: 3 }, { n: 5, d: 3 }, { n: 7, d: 3 },
    { n: 1, d: 4 }, { n: 3, d: 4 }, { n: 5, d: 4 }, { n: 7, d: 4 },
    { n: 1, d: 5 }, { n: 2, d: 5 }, { n: 3, d: 5 }, { n: 4, d: 5 }, { n: 6, d: 5 }, { n: 7, d: 5 },
    { n: 1, d: 6 }, { n: 5, d: 6 }, { n: 7, d: 6 },
    { n: 1, d: 7 }, { n: 2, d: 7 }, { n: 3, d: 7 }, { n: 4, d: 7 }, { n: 5, d: 7 }, { n: 6, d: 7 },
    { n: 1, d: 8 }, { n: 3, d: 8 }, { n: 5, d: 8 }, { n: 7, d: 8 },
    { n: 1, d: 9 }, { n: 2, d: 9 }, { n: 4, d: 9 }, { n: 5, d: 9 }, { n: 7, d: 9 }
  ];

  // Cycle through combinations every 120 frames (~2 seconds at 60fps)
  let currentIndex = floor(frameCount / 120) % combinations.length;
  nTarget = combinations[currentIndex].n;
  dTarget = combinations[currentIndex].d;
}
