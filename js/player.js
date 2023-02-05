export class Player{
    constructor(game){
        this.game = game;
        this.width = 27.7;
        this.height = 22.5;
        this.x = (this.game.width - this.width)/2;
        this.y = (this.game.height - this.height)/2;
        this.image = document.getElementById('player');
        this.imageFlip = document.getElementById('playerFlip');
        this.vel_x = 0;
        this.vel_y =0;
        this.speed = 0;
        this.imageWidth = 27.7;
        this.imageHeight = 22.5;
        this.frameX = 0;
        this.frameY = 0;
        this.array = [];
        this.canvas_width = 900;
        this.canvas_height = 600;

    }
    update(input){
    
        
        this.x += this.vel_x;
        this.y += this.vel_y;
        if(input.includes("ArrowRight")) this.vel_x+= 0.05;
        else if (input.includes("ArrowLeft")) this.vel_x-=0.05;
        else this.speed = 0;
        if(this.x<0) this.x = 0;
        if(this.x > this.game.width - this.width) this.x=this.game.width-this.width;
        if(input.includes("ArrowUp")) this.vel_y-= 0.05;
        else if (input.includes("ArrowDown")) this.vel_y += 0.05;
        else this.speed = 0;
        if(this.y<0) this.y = 0;
        if(this.y> this.game.height - this.height) this.y = this.game.height - this.height;
        this.array = input
        //updated
        if (
            this.y >= this.canvas_height - this.height
        ) {
            this.vel_y = 0;
            this.vel_y -=  1.5;
           
        }
        // Check If Player move out of tank . set player_velocity bounce back down
        if (this.y <= 0) {
            this.y = 0;
            this.vel_y += 1;
        }
        // Check If Player move to left and hit the wall set position 0 / set player_velocity bounce back out to avoid object stick on it
        if (this.x <= 0) {
            this.x = 0;
            this.vel_x += 1.5;
        }
        // Check If Player move to right and hit the all set postion at that spot /set player_velocity bounce back out to avoid object stick on it
        if (this.x >= this.canvas_width - this.width ) {
            this.x = this.canvas_width - this.width;
            this.vel_x = 0;
            this.vel_x -= 1.5;
       
        }
        
    }
    draw(context){
        if(this.array.indexOf("ArrowLeft")){
            this.frameY = 0;
        }else
        {
            this.frameY = 1;
        }
        if(this.frameX<6) {this.frameX++;}
        else {this.frameX = 0;}
        context.drawImage(this.image, this.frameX * this.imageWidth, this.frameY * this.imageHeight, this.imageWidth,this.imageHeight, this.x, this.y, this.width,this.height);

        
    }
    
}
