class Player {
    constructor(game) {
        this.game = game;
        this.ctx = game.ctx;
        this.x = 20;
        this.y = this.game.height / 2;
        this.width = 40;
        this.height = 35;
        this.speedX = 0;
        this.image = new Image();
        this.image.src = "../images/flappy.png";
    }

    drawPlayer(){
        this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    setControls() {
        window.addEventListener("keydown", event => {
          if (event.keyCode === 37) {
            this.speedX = -2;
          }
          if (event.keyCode === 39) {
            this.speedX = 2;
          }
        });
      }
}