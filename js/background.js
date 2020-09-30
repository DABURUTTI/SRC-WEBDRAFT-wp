let dot = new Array();
//var maxWidth = window.innerWidth;
var sap = 20;
var boxWidth = window.innerWidth / sap;

function setup(){
    createCanvas(window.innerWidth,window.innerHeight);
    background(color('#ffc533'));
    for(var i = 0; i < sap ; i++){
        for(var j = 0; j < window.innerHeight/boxWidth; j++){
            dot_instance = new Dot(i * boxWidth,
                j * boxWidth,Math.random());
                dot.push(dot_instance);
        }
    }
    maxHeight = window.innerHeight;
    boxWidth = window.innerWidth / sap;
}

function draw(){
    //background(color('#ffc533'));
    background(color('#000000'));
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
        this.speed = speed+0.1;
        this.size = (speed) * 10+5;
        this.color = speed * 255;
    }

    move(){
        //this.x += this.speed;
        stroke(color("#5797ff"));
        //fill(sin()*255);
        fill(255);
        rect(this.x,this.y,boxWidth,boxWidth);
        //text(frameCount/millis()*1000,this.x+10,this.y);


    }
}