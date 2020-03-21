class infiniteBackground {
    constructor(game){
        this.game = game;
        this.ctx = game.context;

        this.image = new Image();
        this.image.src = "../images/bg.png";
    
    }
    drawBackground(){
        this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}