let dot = new Array();
var maxHeight = window.innerHeight;

function setup(){
    createCanvas(window.innerWidth,window.innerHeight);
    background(color('#ffc533'));
    for(var i = 0; i < 100 ; i++){
        dot_instance = new Dot(Math.random()*window.innerWidth,Math.random()*window.innerHeight,1,20);
        dot.push(dot_instance);
    }
    maxHeight = window.innerHeight;
}

function draw(){
    background(color('#ffc53305'));
    dot.forEach(element => {
        element.move();
    });
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
        noStroke();
        fill(255,255,255,40);
        ellipse(this.x,this.y,this.size,this.size);
        //text(frameCount/millis()*1000,this.x+10,this.y);

        if(this.y - this.size >= maxHeight){
            this.y = -this.size;
        }
    }
}