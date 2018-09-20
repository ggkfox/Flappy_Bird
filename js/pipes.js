function Pipe() {
    this.gap = 200;
    this.top = random(height-200);
    this.x = width;
    this.w = 20;

    this.speed = 2.5;

    this.show = function() {
        fill(255);
        rect(this.x, 0, this.w, this.top);
        rect(this.x, this.top+this.gap, this.w, height-this.gap-this.top);
    }

    this.update = function() {
        this.x -= this.speed;
    }
}