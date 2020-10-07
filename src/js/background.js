let dot = new Array();
//var maxWidth = window.innerWidth;
var sap = 30;
var boxWidth = window.innerWidth / sap;
var logo;

var pointer;
var pointer2;

function setup(){
    logo = loadImage("../img/logo_w.svg");
    createCanvas(window.innerWidth,window.innerHeight);
    background(color('#ffc533'));
    for(var i = 0; i < sap ; i++){
        for(var j = 0; j < window.innerHeight/boxWidth; j++){
            dot_instance = new Dot(i * boxWidth,
                j * boxWidth,Math.random());
                dot.push(dot_instance);
        }
    }
    pointer = new Pointer(200,200,120);
    pointer2 = new Pointer(200,200,120);
    maxHeight = window.innerHeight;
    boxWidth = window.innerWidth / sap;
}

function draw(){
    background(color('#ffbc1f20'));
    //background(color('#000000'));
    // dot.forEach(element => {
    //     element.move();
    // });
    noStroke();
    fill(0);
    pointer.move();
    pointer2.move();
    noStroke();
    rect(5,window.innerHeight-25,150,20)
    fill(255);
    text(`${(int) (frameCount/millis()*1000)} fps - mode : DEBUG`,10,window.innerHeight-10);
    if(frameCount % 70 == 0){
        pointer.update(Math.random()*windowWidth,Math.random()*windowHeight,100);
        pointer2.update(Math.random()*windowWidth,Math.random()*windowHeight,100);
    }

    fill(0);
    image(logo, windowWidth/2 - 300, windowHeight/2 - 200, 600, 400);
}

function windowResized(){
    setup();
}


class Pointer{
    constructor(x,y,size){
        this.x = x;
        this.y = y;
        this.size = size;
        this.destX = x;
        this.destY = y;
        this.nSize = size;
    }

    update(newX,newY,newSize){
        this.destX =  newX;
        this.destY =  newY;
        this.nSize =  newSize;
    }

    move(){
        stroke(0,0,0,20);
        fill(0);
        strokeWeight(3);
        line(0,this.y,windowWidth,this.x);
        line(0,this.x, windowWidth, this.y);
        line(this.y , 0, this.x, windowHeight);
        line(this.x, 0, this.y , windowHeight);
        //update position
        this.x = (this.destX - this.x) * 0.1 + this.x;
        this.y = (this.destY - this.y) * 0.1 + this.y;
        this.size = (this.nSize - this.size) * 0.01 + this.size;

        console.log(this.x);
    }

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