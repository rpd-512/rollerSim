let gridSize = 50; // Size of each grid cell
let zoomLevel = 0.75; // Initial zoom level
let offsetX = 150; // X-axis offset for dragging
let offsetY = 0; // Y-axis offset for dragging
const zoomSpeed = 0.001; // Speed of zooming

let gridDraggable=true;

var rollerWorld;

function preload(){
    rollerWorld = new phy2DWorld;
    rollerWorld.setGravityValue(0.5);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
	textFont("Roboto Condensed");
}

function draw() {
    const xStart = -width / 2 / zoomLevel - offsetX/zoomLevel;
    const xEnd = width / 2 / zoomLevel - offsetX/zoomLevel;
    const yStart = -height / 2 / zoomLevel - offsetY/zoomLevel;
    const yEnd = height / 2 / zoomLevel - offsetY/zoomLevel;
	
    background(255)
    background('rgba(57,70,51,0.05)');

    translate(width / 2 + offsetX, height / 2 + offsetY);
    scale(zoomLevel);
    drawGrid(xStart, xEnd, yStart, yEnd);

    for (elemId in componentData) {
        try{
            componentClassList[elemId].displayComponent();
            if(componentClassList[elemId].velocity[0]!=0 || componentClassList[elemId].velocity[1]!=0){
                console.log($('#' + elemId + ' input[placeholder="x"]').is(":focus"));
                componentData[elemId].coordinates = [componentClassList[elemId].coordinateX,componentClassList[elemId].coordinateY];
                if(!$('#' + elemId + ' input[placeholder="x"]').is(":focus"))
                {
                    $('#' + elemId + ' input[placeholder="x"]').val(round(10*componentClassList[elemId].coordinateX)/(gridSize*10));
                }
                if(!$('#' + elemId + ' input[placeholder="y"]').is(":focus"))
                {
                    $('#' + elemId + ' input[placeholder="y"]').val(round(10*componentClassList[elemId].coordinateY)/(gridSize*10));
                }
            }
            componentData[elemId].componentPhysicsInfo.velocity = componentClassList[elemId].velocity;
                
        }
        catch(err){
            console.log(err);
        }
    }
}


function drawGrid(xStart, xEnd, yStart, yEnd) {
	noStroke();
	text("0",-15,15)
    for (let x = xStart - (xStart % gridSize); x < xEnd; x += gridSize) {
		strokeWeight(.5);
		noStroke();
		textSize(15);
		textAlign(CENTER, CENTER);
		fill('rgba(0,0,0,0.25)')
		x!=0 ? text(x/50,x+10*Math.sign(x),15):{};
		stroke('rgba(0,0,0,0.75)');
		if(x==0){
            stroke('rgba(0,0,0,0.75)');
            strokeWeight(2);
        }
        line(x, yStart, x, yEnd);
    }
    for (let y = yStart - (yStart % gridSize); y < yEnd; y += gridSize) {
        strokeWeight(.5);
		noStroke();
		textSize(15);
		textAlign(CENTER, CENTER);
		fill('rgba(0,0,0,0.25)')
		y!=0 ? text(-y/50,-15,y+10*Math.sign(y)):{};
		stroke('rgba(0,0,0,0.75)');
        if(y==0){
            stroke('rgba(0,0,0,0.75)');
            strokeWeight(2);
        }
        line(xStart, y, xEnd, y);
    }
}

function mouseDragged() {
    if(gridDraggable){
    	offsetX += mouseX - pmouseX;
    	offsetY += mouseY - pmouseY;
	}
}

function mouseWheel(event) {
    if (keyIsDown(CONTROL)) {
        const zoomAmount = zoomSpeed * event.delta;
        zoomLevel -= zoomAmount;
        zoomLevel = constrain(zoomLevel, 0.1, 5);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
