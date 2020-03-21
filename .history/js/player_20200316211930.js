class Player {
  constructor(game) {
    this.game = game;
    this.ctx = game.ctx;
    this.x = 20;
    this.y = this.game.height / 2;
    this.width = 40;
    this.height = 35;

    this.speedY = 0;
    this.speedX = 0;

    this.gravity = 0;
    this.gravitySpeed = 2;

    this.image = new Image();
    this.image.src = "../images/flappy.png";
  }

  drawPlayer() {
    this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  update() {
    this.y += this.speedY;
    this.x += this.speedX;

    if (this.y <= 0) {
      this.speedY = 0;
    }
    if (this.y >= this.game.height - this.height) {
      this.speedY = 0;
    }
    if (this.x <= 0) {
      this.speedY = 0;
    }
    if (this.x >= this.game.width - this.width) {
      this.speedX = 0;
    }
  }

  setControls() {
    window.addEventListener("keydown", event => {
      if (event.keyCode === 38) {
        this.speedY = -2;
      }
      if (event.keyCode === 40) {
        this.speedY = 2;
      }
    });
  }
}
