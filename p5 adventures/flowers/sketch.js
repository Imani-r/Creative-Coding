function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(1);
}

function draw() {
  background("#E1EBEE"); // light sky blue background

  // // Create flower object.
  // let myFlower = createFlower();

// Testing drawFlower().
  let flower1 = createFlower();
  drawFlower(flower1);
}

// Function that creates a random flower object.
function createFlower() {
  // Define a flower object.
  let flower = {
    x: random(20, windowWidth),
    y: random(20, windowHeight),
    size: random(50, 190),
    lifespan: random(255, 300),
    color: color(random(255), random(255), random(255), random(300)),
  };

  // Return the flower object.
  return flower;
}

function drawFlower(flower) {
  noStroke();
  fill(flower.color);

  // Draw petals
  ellipse(flower.x, flower.y, flower.size / 2, flower.size);
  ellipse(flower.x, flower.y, flower.size, flower.size / 2);

  // Draw a yellow center
  fill(255, 204, 0);
  circle(flower.x, flower.y, flower.size / 2);
}
