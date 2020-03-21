class infiniteBackground {
    constructor(game){
        this.game = game;
        this.ctx = game.ctx;

        this.x = 0;
        this.y = 0;
        this.width = 300;//900;
        this.height = 150//504;

        this.image = new Image();
        this.image.src = "../images/bg.png";
    
    }
    drawBackground(){
        this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}