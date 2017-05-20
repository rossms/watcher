//create the canvas element
var myCanvas = document.createElement("canvas");

//set the canvas width and height
myCanvas.width=100;
myCanvas.height=100;

//get the 2-dimensional drawing context
var ctx = myCanvas.getContext("2d");
//first we clear the canvas
ctx.clearRect(0,0,100,100);
//setup the palette array
var grayPalette = ["#aaaaaa","#bbbbbb","#cccccc","#dddddd","#eeeeee"];

//create 10x10 squares
for (i=0;i<10;i++){
    for(j=0;j<10;j++){
        //indicate when starting drawing a rectangle
        ctx.beginPath();
        ctx.rect(0+10*j,0+10*i,10,10);
        
        //choose a random color from the palette
        var randomColorIndex =
        Math.round(Math.random() * (grayPalette.length-1));
        ctx.fillStyle = grayPalette[randomColorIndex];
        
        //fill the rectangle with the selected color
        ctx.fill();
        
        //draw a white border for the rectangle
        ctx.strokeStyle = "#ffffff";
        ctx.stroke();
        
        //indicating when finished drawing the rectangle
        ctx.closePath();
    }
}

//this will run when the document has finished loading
function setDynamicBackground(){
    //generate the image from the canvas
    var imageDataURL = myCanvas.toDataURL();
    
    //set the dynamic image as the background
    document.body.style.background = 
    "transparent url('"+imageDataURL+"') repeat";
}
