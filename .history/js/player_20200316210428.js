class Player {
    constructor(game) {
        this.game = game;
        this.ctx = game.ctx;
        this.x = 20;
        this.y = this.game.width / 2;
        this.width = 40;
        this.height = 50;
        this.speedX = 0;
        this.image = new Image();
        this.image.src = "../images/car.png";
    
    }
}