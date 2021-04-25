class Bird extends BaseClass {
  //construction of bird using matter.js
  constructor(xInput, yInput, widthInput, heightInput) {
    super(xInput, yInput, widthInput, heightInput);
    this.image = loadImage("images/bird.png");
  }
  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
  }
}
