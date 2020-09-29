let dot;

function setup(){
    createCanvas(window.innerWidth,window.innerHeight);
    background(color('#ffc533'));
    dot = new Dot(10,10,1,20);
}

function draw(){
    background(color('#ffc533'));
    dot.move();
}

function windowResized(){
    setup();
}

class Dot{
    constructor(x,y,speed,size){
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.size = size;
    }

    move(){
        this.y += this.speed;
        fill(0);
        ellipse(this.x,this.y,this.size,this.size);
        text(frameCount/millis()*1000,this.x+10,this.y);
    }
}