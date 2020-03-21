class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.x = this.game.width / 2;
        this.y = 510;
        this.width = 40;
        this.height = 50;

        this.background = new infiniteBackground(this);
        this.animationId;
    }
}