class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.width = canvas.width;
        this.height = canvas.height;

        this.background = new infiniteBackground(this);
        this.animationId;
    }

    start(){

    }
    draw(){
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.background.draw();
    }
}