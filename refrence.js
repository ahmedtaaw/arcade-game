var shapeheight=101;
var shapewidth=171;
var startpositionY=450;
var startpositionX=250;
var stepX=0;
var stepY=0;

var canvas = document.getElementById('board');
canvas.width = 600;
canvas.height = 600;
var ctx = canvas.getContext('2d');

	 // Draw shapes
     var img = new Image();
     img.src = 'images/char-horn-girl.png';

     var img2 = new Image();
	 img2.src = 'images/Rock.png';
	 
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
	
}

function moveright(){
	stepX+=1;
	startpositionX=startpositionX+(shapewidth/2);
	ctx.drawImage(img,startpositionX,startpositionY);
	ctx.drawImage(img2,x,y);
}

function moveleft(){
	stepX-=1;
	startpositionX=startpositionX-(shapewidth/2);
	ctx.drawImage(img,startpositionX,startpositionY);
	ctx.drawImage(img2,x,y);
}

function movedown(){
	stepY+=1;
	startpositionY=startpositionY+(shapeheight/2);
	ctx.drawImage(img,startpositionX,startpositionY);
	ctx.drawImage(img2,x,y);
}

function moveup(){
	stepY-=1;
	startpositionY=startpositionY-(shapeheight/2);
	ctx.drawImage(img,startpositionX,startpositionY);
	ctx.drawImage(img2,x,y);
}


//randome speed //steps
var enemyElementsPositionsY=[]

var y = Math.floor((Math.random() * canvas.height));
var x=0;
setInterval(function(){ 
	x+=1;
	ctx.clearRect(0, 0, canvas.width,canvas.height);
	
	ctx.drawImage(img2,x,y);
	ctx.drawImage(img,startpositionX,startpositionY);

 },20);