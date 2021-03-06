class Player {
  constructor(game) {
    this.game = game;
    this.ctx = game.ctx;
    this.x = 20;
    this.y = this.game.height / 2;
    this.width = 40;
    this.height = 35;

    this.speedY = 0;
    this.gravity = 0.05;
    this.gravitySpeed = 0;

    this.image = new Image();
    this.image.src = "../images/flappy.png";
  }
  // only draws the player
  drawPlayer() {
    this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    //console.log(this.speedY , this.speedX);
  }

  // sets gravity on the position
  newPos() {
    this.gravitySpeed += this.gravity;
    this.y += this.speedY + this.gravitySpeed;
    this.hitBottom();
  }

  hitBottom() {
    let rockbottom = myGameArea.canvas.height - this.height;
    if (this.y > rockbottom) {
      this.y = rockbottom;
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
        console.log("pressed");

        myGamePiece.gravity = n;

      }
    });

    window.addEventListener("keyup", event => {
      if (event.keyCode === 32) {
        this.gravity *= -0.001;
        this.speedY += 0.005;
      }
    });

    function accelerate(n) {
      myGamePiece.gravity = n;
    }
    </script>
    
    <button onmousedown="accelerate(-0.2)" onmouseup="accelerate(0.1)">ACCELERATE</button>
  }


  update() {
    //this.y += this.speedY;
    //this.x += this.speedX;

  }
}
