function setup() {
  createCanvas(400, 400);

  frameRate(5)
}

function draw() {
  background(
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255)
  );

  var circle_path_radius = 100;
  var circle_path_center_x = 200;
  var circle_path_center_y = 200;
  var time = millis() / 1000;

  var circle_center_x = circle_path_radius*cos(millis() / 1000) + circle_path_center_x;
  var circle_center_y = circle_path_radius*sin(millis() / 100) + circle_path_center_y;

  circle(circle_center_x, circle_center_y, 100)
}
