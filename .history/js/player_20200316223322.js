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

    this.gravity = 1;
    this.gravitySpeed = 2; //aka acceleration

    this.newPos = function() {
        this.gravitySpeed += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed;
    }

    this.image = new Image();
    this.image.src = "../images/flappy.png";
  }

  drawPlayer() {
    this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  update() {
    //this.y += this.speedY;
    //this.x += this.speedX;
    this.newPos();

    if (this.y <= 0) {
      this.speedY = 0;
      this.gravitySpeed = 0;
    }
    if (this.y >= this.game.height - this.height) {
      this.speedY = 0;
      this.gravitySpeed = 0;
    }
    if (this.x <= 0) {
      this.speedX = 0;
    }
    if (this.x >= this.game.width - this.width) {
      this.speedX = 0;
    }
  }

  setControls() {
    window.addEventListener("keydown", event => {
      /*
      if (event.keyCode === 38) {
        this.speedY = -1;
      }
      if (event.keyCode === 40) {
        this.speedY = 1;
      }
      if (event.keyCode === 37) {
        this.speedX = -1;
      }
      if (event.keyCode === 39) {
        this.speedX = 1;
      }
      */
     if (event.keyCode === 32) {
        this.speedY = -1;
        this.speedX = 1;
        this.gravity *= -0.1;
      }

    });

    window.addEventListener("keyup", event => {
        this.gravity *= -1;
    });
  }
}
