class infiniteBackground {
    constructor(game){
        this.game = game;
        this.ctx = game.ctx;

        this.x = 0;
        this.y = 0;
        this.width = 300;//900
        this.height = 151;//504
        this.scrollSpeed = .5;

        this.image = new Image();
        this.image.src = "../images/bg.png";

        this.animationId;
    
    }
    drawBackground(){
        
        
    
        // update image height 
        this.x -= this.scrollSpeed; 
        //console.log(this.x);
    
        // resetting the images when the first image entirely exits the screen 
        if (this.x < -this.game.width) {
            this.x = 0;
            //console.log("this");
        }
        
    
    }
    update(){
        
        this.drawBackground();
        console.log("drawing bg" + this.scrollSpeed)
        //this.ctx.clearRect(0, 0, this.width, this.height);
        this.animationId = window.requestAnimationFrame(() => {
            this.update();
          });
          
    }
}