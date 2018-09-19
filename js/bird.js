function Bird() {
    this.y = height/2;
    this.x = 40;

    this.gravity = .3;
    this.velocity = 0;

    this.show = function(){
        fill(255);
        ellipse(this.x, this.y, 25, 25);
    }

    this.up = function(){
        this.velocity = -7;
    }

    this.update = function(){
        //make bird fall
        this.velocity += this.gravity;
        this.y += this.velocity;

        //stop bird at bottom of screen
        if (this.y > height) {
            this.y=height;
            velocity = 0;
        }
        //stop bird at top of screen
        if (this.y <= 0) {
            this.y = 0;
            velocity = 0;
        }
    }
}