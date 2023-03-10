var random_x = 0;
var random_y = 0;
export class Enemy{
    constructor(game, random_position_x){
        this.game = game;
        this.width = 28.8;
         this.height = 22.5;
        this.x = random_position_x;
        this.y = 0;
        this.speed = Math.random()*4-2;
       // this.angle = 0;
       // this.angleSpeed = Math.random()*0.005; //change speed
       // this.curve = Math.random()*5;
        this.vel_x = 0;
        this.vel_y = 0;
        this.canvas_width = 900;
        this.canvas_height = 600;
        //image insert
        this.image = document.getElementById('enemy');
        this.imageWidth = 28.8;
        this.imageHeight = 22.5;
        this.frameX = 0;
        this.frameY = 0;
    }
    update(){
        //x and y speed and position
        /*this.y+= this.speed;
        this.speedX = Math.random()*4-2+this.curve * Math.cos(this.angle);
        this.angle += this.angleSpeed;
        this.y += this.curve * Math.sin(this.angle);
        this.x +=this.speedX;
        //constrains
        if(this.x - this.width>=this.game.width) this.x = this.curve * Math.cos(this.angle);
        if(this.x <0) this.x = this.curve * Math.cos(this.angle);
        if(this.y - this.height >=this.game.height) this.y = this.curve * Math.cos(this.angle);
        if(this.y <0) this.y = this.curve * Math.cos(this.angle);
        */
    this.x += this.vel_x;
    this.y += this.vel_y;
    random_x = Math.floor(Math.random() * (8 - -10 + 1)) + -9;
    random_y = Math.floor(Math.random() * (8 - -10 + 1)) + -9;
    this.vel_x += random_x * 0.04;
    this.vel_y += random_y * 0.03;
          
        // move to bottom
        if (this.y >= this.canvas_height - this.height ) {
          //this.y =this.canvas_height - this.height ;
          this.vel_y = 0;
          this.vel_y -= 1.5;
          console.log(this.y);
        }
        // Check If this move out of tank . set this_velocity bounce back down
        if (this.y <= 0) {
          this.y = 0;
          this.vel_y = 0;
          this.vel_y += 1;
        }
        // Check If this move to left and hit the wall set position 0 / set this_velocity bounce back out to avoid object stick on it
        if (this.x <= 0) {
          this.x = 0;
          this.vel_x = 0;
          this.vel_x += 1.5;
        }
        // Check If this move to right and hit the all set postion at that spot /set this_velocity bounce back out to avoid object stick on it
        if (this.x >= this.canvas_width - this.width) {
          this.x = this.canvas_width - this.width;
          this.vel_x = 0;
          this.vel_x -= 1.5;
        }
    
    }
    draw(context){
    
        if(this.speed>0 ){
            this.frameY = 0;
        }else
        {
            this.frameY = 1;
        }
        if(this.frameX<6) {this.frameX++;}
        else {this.frameX = 0;}
        context.drawImage(this.image, this.frameX * this.imageWidth, this.frameY * this.imageHeight, this.imageWidth,this.imageHeight, this.x, this.y, this.width,this.height);
    }

};


