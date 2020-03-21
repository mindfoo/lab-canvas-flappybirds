class infiniteBackground {
    constructor(game){
        this.game = game;
        this.ctx = game.ctx;

        this.x = 0;
        this.y = 0;
        this.width = 300;//900
        this.height = 151;//504
        this.scrollSpeed = 1;
        this.loopImg = 0;

        this.image = new Image();
        this.image.src = "../images/bg.png";
    
    }
    drawBackground(){
        // draw image 1 
        this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        // draw image 2
        this.ctx.drawImage(this.image, this.x - this.game.width, this.y, this.width, this.height);
    
        // update image height 
        this.x += this.scrollSpeed; 
        console.log(this.x);
    
        // reseting the images when the first image entirely exits the screen 
        if (this.x == this.game.width) {
            this.x = 0;
        }
    
    }
}