function setup() {
    createCanvas(400, 400);
    background("purple");
  }
  
  function draw() {
    stroke("pink");
    fill ("gray");
    
    if(mouseIsPressed) {
    rect (mouseX,mouseY,20,20);
  }
     }