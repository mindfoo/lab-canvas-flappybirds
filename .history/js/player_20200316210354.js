class Player {
    constructor(game) {
        this.game = game;
    this.context = game.context;
    this.x = this.game.width / 2;
    this.y = 510;
    this.width = 40;
    this.height = 50;
    this.speedX = 0;
    this.image = new Image();
    this.image.src = "../images/car.png";
    
    }
}