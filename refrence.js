var shapeheight=101;
var shapewidth=171;
var startpositionY=450;
var startpositionX=250;
var stepX=0;
var stepY=0;

var canvas = document.getElementById('board');
var ctx = canvas.getContext('2d');

	 // Draw shapes
     var img = new Image();
     img.src = 'char-horn-girl.png';

     var img2 = new Image();
	 img2.src = 'Rock.png';
	 
//to display something, a script first needs to access the rendering context and draw on it.
if(canvas.getContext){
	img.onload = function(){
     	ctx.drawImage(img,startpositionX,startpositionY);
		
     }
}
else{
	console.log("canvas not supported in your browser");	
}



document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    
    moveshape(e.keyCode);
});

function moveshape(e){
	console.log(e);
	//clearrect
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	if(e==39){
		moveright();
	} else if(e==37){
		moveleft();
	} else if(e==38){
		moveup();
	} else if(e==40){
		movedown();
	}
	ctx.drawImage(img2,50,50);
}

function moveright(){
	stepX+=1;
	startpositionX=startpositionX+(shapewidth/2);
	ctx.drawImage(img,startpositionX,startpositionY);
}

function moveleft(){
	stepX-=1;
	startpositionX=startpositionX-(shapewidth/2);
	ctx.drawImage(img,startpositionX,startpositionY);
}

function movedown(){
	stepY+=1;
	startpositionY=startpositionY+(shapeheight/2);
	ctx.drawImage(img,startpositionX,startpositionY);
}

function moveup(){
	stepY-=1;
	startpositionY=startpositionY-(shapeheight/2);
	ctx.drawImage(img,startpositionX,startpositionY);
}


//randome speed //steps
var enemyElementsPositionsY=[]

var y = Math.floor((Math.random() * 600));
	ctx.drawImage(img2,0,y);+
setInterval(function(){ 
	

 }, 500);