import {Player} from "./player.js";
import {InputHandler} from "./input.js";
import {Enemy} from "./enemy.js";


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
            this.numberOfEnemies = 5;

            this.gameOver = false;
            
            for(let i=0; i<this.numberOfEnemies; i++){
                this.enemies.push(new Enemy(this));
            };
        }
       
        update(){
            
            this.player.update(this.input.keys);
            
            for(let i=0; i<this.numberOfEnemies; i++){
                this.enemies[i].update();
            };

            if(this.input.keys.length >= 1){
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
         }

        }

        draw(context){
            this.player.draw(context);

            for(let i=0; i<this.numberOfEnemies; i++){
                this.enemies[i].draw(context);
            };

         }
      
        }

    const game = new Game(canvas.width, canvas.height);
    console.log(game);

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