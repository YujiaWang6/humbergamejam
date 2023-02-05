import {Player} from "./player.js";
import {InputHandler} from "./input.js";
import {Enemy} from "./enemy.js";
import {Target} from "./target.js";



window.addEventListener("load", function(){

    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext("2d");
    canvas.width = 900;
    canvas.height = 600;
    this.gameOver = false;
    var userChoice;
    class Game{
        constructor(width,height){      
            this.width = width;
            this.height = height;
            this.player = new Player(this);
            this.input = new InputHandler();
            this.enemies = new Array();
            this.numberOfEnemies = 10;

            this.gameOver = false;
            this.randon_postion_x = 0;
            this.range_height_x = 50;
            this.range_height_y = 50;
            for(let i=0; i<this.numberOfEnemies; i++){
                this.randon_postion_x = Math.floor(Math.random() * (600 - 1 +1 )+ 1)
                this.enemies.push(new Enemy(this,this.randon_postion_x));
            };
            this.target = new Target(this);
        }
       
        update(){
            this.player.update(this.input.keys);
            this.target.update(this);            
            for(let i=0; i<this.numberOfEnemies; i++){
                this.enemies[i].update();
            };

        for(let i=0; i<this.numberOfEnemies; i++){
        if(
            game.enemies[i].x < game.player.x + game.player.width && 
            game.enemies[i].x + game.enemies[i].width > game.player.x &&
            game.enemies[i].y < game.player.y + game.player.height &&
            game.enemies[i].y + game.enemies[i].height > game.player.y
        ){
            console.log(this.gameOver);
            this.gameOver = true;      
             }
          }
          //check collision 
          if(
            game.target.x  < game.player.x + game.player.width &&
            game.target.x + game.target.width + 250> game.player.x &&
            game.target.y < game.player.y + game.player.height &&
            game.target.y + game.target.height + 250 > game.player.y
          ){
            if(game.player.x > game.target.x + game.target.width + 100){
                game.target.vel_y -= 0.4;
                game.target.vel_x += 0.4;
                console.log("1");
            }
            else if( game.player.x < game.target.x + game.target.width + 100){
                game.target.vel_y += 0.4;
                game.target.vel_x -= 0.4;
                console.log("2");
            }
            
          }

        
        }

        draw(context){
            this.player.draw(context);
            this.target.draw(context);
            for(let i=0; i<this.numberOfEnemies; i++){
                this.enemies[i].draw(context);
            };

         }
        }
    const game = new Game(canvas.width, canvas.height);
    function animate(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if(game.gameOver==false){
            game.update();
            game.draw(ctx);
            requestAnimationFrame(animate);
        }else{
            cancelAnimationFrame(animate);
            userChoice = confirm("Game Over, Wanna another play?");
            if(userChoice === true){
                window.location.reload();
                
            }else{cancelAnimationFrame(animate);}
        }
    }
    
    animate();

})
