var bird;
var pipe;
function setup() {
    createCanvas(400, 600);
    bird = new Bird();
    pipe = new Pipe();
}

function draw() {
    background(0);
    bird.update();
    bird.show();
    pipe.update();
    pipe.show();
}

function keyPressed(){
    if (key==' ') {
        bird.up();
    }
}