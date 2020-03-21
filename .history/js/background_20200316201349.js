class infiniteBackground {
    constructor(game){
        this.game = game;
        this.ctx = game.context;

        this.image = new Image();
        this.image.src = "../images/car.png";
    
    }
    drawBackground(){
        let landscape = addRsc(Image, 'images/bg.png');

    }
}