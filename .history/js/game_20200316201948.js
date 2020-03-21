class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.width = canvas.width;
        this.height = canvas.height;

        this.background = new infiniteBackground(this);
        this.animationId;
    }

    start(){
        console.log("I started the game");
    }
    draw(){
        console.log("I started the game");
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.background.drawBackground();
    }
    update(){
        console.log("I updated");
    }
    animation() {
        this.draw();
        this.update();
        this.animationId = window.requestAnimationFrame(() => {
          if (this.gameStatus === "game") {
            this.animation();
          }
          if (this.gameStatus === "game-over") {
            window.cancelAnimationFrame(this.animationId);
            this.gameOver();
          }
        });
      }
}