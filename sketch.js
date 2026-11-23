let btn, colorPicker, slider, eraser;
function setup() {
  createCanvas(windowWidth, windowHeight - 50);
  background(0);

  //btn = createButton("Clear");
  //btn.size(100, 40);
  //btn.mousePressed(Clear);

  noStroke();
  colorPicker = createColorPicker("#ed225d");
  stroke(colorPicker.color());
  colorPicker.size(windowWidth);

  slider = createSlider(0, 100, 40, 0.1);
  strokeWeight(slider.value());
  slider.size(windowWidth - 10);
}

function draw() {
  //background(51);
  if (mouseIsPressed) {
      //blendMode(LIGHTEST);
    stroke(colorPicker.color());
    strokeWeight(slider.value());
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
  if (keyIsDown(69)) {
    blendMode(BLEND);
    strokeWeight(0);
    stroke(255);
    fill(51);
    ellipse(mouseX, mouseY, 50, 50);
  }
}

function Clear() {
  blendMode(BLEND);
  background(51);
}

