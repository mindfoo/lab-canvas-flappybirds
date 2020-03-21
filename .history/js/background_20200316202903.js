class infiniteBackground {
    constructor(game){
        this.game = game;
        this.ctx = game.ctx;

        this.x = 0;
        this.y = 0;
        this.width = 300;//900
        this.height = 151;//504
        this.scrollSpeed = 10;

        this.image = new Image();
        this.image.src = "../images/bg.png";
    
    }
    drawBackground(){
        this.ctx.drawImage(this.image, 0,0);
        this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    
    
        // draw image 1 
        ctx.drawImage(img, 0, imgHeight); 
    
        // draw image 2 
        ctx.drawImage(img, 0, imgHeight - can.height); 
    
        // update image height 
        imgHeight += scrollSpeed; 
    
        // reseting the images when the first image entirely exits the screen 
        if (imgHeight == can.height) 
            imgHeight = 0; 
    
        // this function creates a 60fps animation by scheduling a 
        // loop function call before the 
        // next redraw every time it is called 
        window.requestAnimationFrame(loop); 
    
    }
}