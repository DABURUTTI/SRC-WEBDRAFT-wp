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
    }
}