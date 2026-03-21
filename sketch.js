function setup() {
  createCanvas(400, 400);

  frameRate(1)
}

function draw() {
  background(
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255)
  );
}
