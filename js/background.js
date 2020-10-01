let dot = new Array();
//var maxWidth = window.innerWidth;
var sap = 2;
var boxWidth = window.innerWidth / sap;
var logo;

var pointers = new Array();
function setup(){

    pointers = new Array();
    logo = loadImage("../img/logo_w.svg");
    createCanvas(window.innerWidth,window.innerHeight);
    background(color('#ffc533'));
    for(var i = 0; i < sap ; i++){
        // for(var j = 0; j < window.innerHeight/boxWidth; j++){
            pointer_instance = new Pointer(Math.random()*windowWidth,Math.random()*windowHeight,200);
            pointers.push(pointer_instance);
        // }
    }
    maxHeight = window.innerHeight;
    boxWidth = window.innerWidth / sap;
}

function draw(){
    background(color('#ffffff'));
    noStroke();
    fill(0);
    noStroke();
    rect(5,window.innerHeight-25,150,20)
    fill(255);
    text(`${(int) (frameCount/millis()*1000)} fps - mode : DEBUG`,10,window.innerHeight-10);
    pointers.forEach(element => {
        element.update();
        element.move();
    })

    fill(0);
    tint(0);

    var imageOffsetX = (windowWidth/2 - mouseX) * 0.05;
    var imageOffsetY = (windowHeight/2 - mouseY) * 0.05;
    

    image(logo, windowWidth/2 - 300 + imageOffsetX, windowHeight/2 - 200 + imageOffsetY, 600, 400);
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
        this.r = Math.random() * 800 + 200;
        this.offSet= Math.random()*360;
        this.spinSpeed= Math.random()*0.5 + 0.5;
        this.color = color(Math.random()*255,Math.random()*255,Math.random()*255);
        //this.color = color(50,84,48);
    }

    update(){
        this.destX =  windowWidth/2 + Math.sin(radians(frameCount*this.spinSpeed + this.offSet)) * 0.8 * this.r ;
        this.destY =  windowHeight/2 + Math.cos(radians(frameCount*this.spinSpeed + this.offSet)) * this.r;
    }

    move(){
        stroke(this.color);
        strokeWeight(5);
        noFill()
        ellipse(this.destX,this.destY,500,500);
        //update position
        // this.x = (this.destX - this.x) * 0.01 + this.x;
        // this.y = (this.destY - this.y) * 0.01 + this.y;
        // this.size = (this.nSize - this.size) * 0.01 + this.size;
    }

}

class colorDirector{
    constructor(){
    }

    getColor() {
       return color("#ffffff"); 
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
        stroke(this.color);
        //fill(sin()*255);
        fill(this.color);
        rect(this.x,this.y,boxWidth,boxWidth);
        //text(frameCount/millis()*1000,this.x+10,this.y);


    }
}