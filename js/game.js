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
  }

  start() {
    //console.log("I started the game");
    this.animation();
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

    }
  }

  animation() {
    this.draw();
    this.update();
    this.animationId = window.requestAnimationFrame(() => {
      this.animation();
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
