
var p;
function setup(){
    p = new Particle(0,0,0,200,100);
    createCanvas(window.innerWidth, window.innerHeight, WEBGL);
}

function draw(){
    background(0);
    p.update();
    p.show();
}

class Particle{
    constructor(x,y,z,r,size){
        this.x = x;
        this.y = y;
        this.z = z;
        this.r = r;
        this.size = size;
    }

    update(){
        this.x = sin(radians(frameCount)) * this.r;
        this.y = cos(radians(frameCount)) * this.r;
        this.z = sin(radians(frameCount)) * this.r;
    }

    show(){
        noFill();
        ellipse(this.x,this.y,100 + this.z * 0.25,100 + this.z*0.25);
    }

}