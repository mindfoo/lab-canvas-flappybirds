class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.x = 0;
        this.y = 0;
        this.width = 900;
        this.height = 504;

        this.background = new infiniteBackground(this);
        this.animationId;
    }
}