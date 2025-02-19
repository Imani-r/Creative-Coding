function setup() {
  // Creates a canvas 600 pixels wide
  // and 400 pixels high.
  createCanvas(600, 400);
}

function draw() {
  //sky blue background
  background("skyblue");
  // alternative: background(135, 206, 235);

  // sun in the top right
  fill(255, 255, 0); //yellow
  stroke(255, 165, 0); // orange outline
  strokeWeight(20); // large outline
  circle(550, 50, 100);

  // Draw grass on the bottom half of the canvas

  // Reset the values for the outline of shapes
  stroke("green"); //green outline
  strokeWeight(1); // thin outline

  fill("green"); // colour the grass green
  rect(0, 200, 600, 200);

  
  // Add emojis
  textSize(60);
  text('🌼', 30, 220); // daisy
  
  textSize(75);
  text("🪷", 100, 250); // lotus

  textSize(60);
  text("🌸", 200, 220); // cherry blossom
  
  textSize(90);
  text('🪲', 300, 220); // beetle
  
  textSize(175);
  text("🐛", mouseX, mouseY); //caterpillar
  
  textSize(75);
  text('🐞', 500, 380); // ladybird
}
