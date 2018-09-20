function Pipe() {
    this.x = width;
    this.y = 0;
    this.w = 20;

    this.speed = 1;

    this.show = function() {
        fill(255);
        rect(this.x, 0, this.w, 100);
    }

    this.update = function() {
        this.x -= this.speed;
    }
}
