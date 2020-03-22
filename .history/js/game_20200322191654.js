class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.width = canvas.width;
    this.height = canvas.height;

    this.background = new infiniteBackground(this);
    //this.obstacle = new ObstaclePipes(this);
    this.animationId;

    this.player = new Player(this);
    this.player.setControls();

    this.frame = 0;
    this.obstaclesArray = [];
    this.scoreArray = [];
    //Helper for obstacle creation
    this.frame = 0;

    this.gameStatus = "game";
  }

  start() {
    //console.log("I started the game");
    if (this.gameStatus === "game") {
      this.animation();
    }
  }
  draw() {
    //console.log("I draw the game");
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.background.drawBackground();
    this.player.drawPlayer();

    //Iterate over the obstacles
    for (let obstacle of this.obstaclesArray) {
      obstacle.drawObstacle();
    }
  }
  

  obstaclesExistence() {
    for (let obstacle of this.obstaclesArray) {
      obstacle.update();
      if (this.checkCollision(this.player, obstacle)) {
        this.gameStatus = "game-over";
      }

      if (obstacle.y > this.height) {
        this.obstaclesArray.shift();
        this.scoreArray.push(1);
      }
    }
  }

  checkCollision(player, object) {
    if (object) {
      // console.log(`Player -
      // x - ${player.x}
      // y - ${player.y}
      // w - ${player.width}
      // h - ${player.height}
      // obstacle
      // x - ${object.x}
      // y - ${object.y}
      // w - ${object.width}
      // h - ${object.height}`);
      return (
        player.x < object.x + object.width &&
        player.x + player.width > object.x &&
        player.y < object.y + object.height &&
        player.y + player.height > object.y
      );
    }
  }
  gameOver() {
    this.context.save();
    this.context.fillStyle = "black";
    this.context.fillRect(0, 0, this.width, this.height);
    this.context.fillStyle = "red";
    this.context.font = "30px Arial";

    this.context.fillText(`GAME OVER!`, this.width / 3, this.height / 3);
    this.context.fillText(
      `YOU AVOIDED ${this.scoreArray.length} OBSTACLE(S)`,
      this.width / 8,
      this.height / 2
    );

    this.context.restore();
    this.player.carCrashAudio.play();
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

  update() {
    this.frame++;
    //console.log("I updated");
    this.player.update();
    //Append obstacles being created into array
    if (this.frame % 120 === 0) {
      this.obstaclesArray.push(new ObstaclePipes(this));
    }
    this.obstaclesExistence();
  }
}
