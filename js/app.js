// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x=x;
    this.y=y;
    this.speed=speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    //console.log("Enemy update");
    if(this.x<505){
        this.x+=this.speed*dt;
    }else{
        this.x=-50;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Enemy.prototype.iscollide = function(){

        //console.log("this.x",this.x);
       //console.log("player.x",player.x);
        if((this.x>player.x-80 && this.x<player.x+60)&&(this.y<player.y && this.y>player.y-50)){
            console.log("collide");
            player.y=101*4;
        }
       
  
}
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var ownplayer = function(x,y){
   
    this.sprite = 'images/char-boy.png';
    this.width=101;
    this.height=171;
    this.x=x;
    this.y=y;
};
ownplayer.prototype.update=function(){
    //console.log("player update");
}
ownplayer.prototype.render=function(){
    //console.log("player render");
    ctx.drawImage(Resources.get(this.sprite),this.x,this.y);
}
ownplayer.prototype.handleInput=function(e){
    //console.log("player handleInput");
    //console.log(this.x);
    //console.log(e);
    if(e=="right"){
        if (this.x<402){
        this.x+=100;
        }
	} else if(e=="left"){
        if (this.x>2){
        this.x-=100;
        }
	} else if(e=="down"){
        if (this.y<404){
        this.y+=85;
        }
	} else if(e=="up"){
		this.y-=85;
    }
    //console.log(this.y);
    if(this.y==-106){
        this.y=101*4;
    }
    
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = new Array();
var newenemy = new Enemy(0,60,Math.floor(Math.random() * 50) + 10);
var newenemy2 = new Enemy(0,145,Math.floor(Math.random() * 50) + 10);
var newenemy3 = new Enemy(0,230,Math.floor(Math.random() * 50) + 10);

allEnemies.push(newenemy);
allEnemies.push(newenemy2);
allEnemies.push(newenemy3);
//console.log(allEnemies)
// Place the player object in a variable called player
var player = new ownplayer(202,101*4);



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    //console.log(e.keyCode);
    player.handleInput(allowedKeys[e.keyCode]);
});

