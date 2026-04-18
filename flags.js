function flagSegment(color, xInitial, yInitial, segmentWidth, segmentHeight, param1, param2) {
  fill(color);
  beginShape();
  
  for (let x = xInitial; x < xInitial + segmentWidth; x++) {
    let y = map(sin(frequency + x * param1), -param2, param2, yInitial, yInitial + segmentHeight);
    vertex(x, y);
  }

  for (let x = xInitial + segmentWidth; x > xInitial; x--) {
    let y = map(sin(frequency + x * param1), -param2, param2, yInitial + segmentHeight, yInitial + segmentHeight * 2);
    vertex(x, y);
  }

  endShape(CLOSE);
}

function drawFlags() {
  flagSegment('yellow', 100, 20, 200, 40, 0.05, 10);
  flagSegment('green', 100, 60, 200, 40, 0.05, 10);
  flagSegment('red', 100, 100, 200, 40, 0.05, 10);
  
  frequency += 0.05;
};