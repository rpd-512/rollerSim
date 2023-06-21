
/*
let gridSize = 50; // Size of each grid cell
let zoomLevel = 0.5; // Initial zoom level
let offsetX = 0; // X-axis offset for dragging
let offsetY = 0; // Y-axis offset for dragging
const zoomSpeed = 0.001; // Speed of zooming

let freq = 0.1;
let angl = 0;

function preload() {
    rollerHandleCode = rollerHandle.replaceAll("$COLOR$", "#5B93FF")
    let svgBlob1 = new Blob([rollerHandleCode], {
        type: 'image/svg+xml'
    });
    svgImageHandle = loadImage(URL.createObjectURL(svgBlob1));


    rollerBasicCode = rollerBasic.replaceAll("$COLOR$", "#FF5B79")
    let svgBlob2 = new Blob([rollerBasicCode], {
        type: 'image/svg+xml'
    });
    svgImageBasic = loadImage(URL.createObjectURL(svgBlob2));

    rollerBasicCode2 = rollerBasic.replaceAll("$COLOR$", "#5BFF93")
    let svgBlob3 = new Blob([rollerBasicCode2], {
        type: 'image/svg+xml'
    });
    svgImageBasic2 = loadImage(URL.createObjectURL(svgBlob3));

}

function setup() {
    createCanvas(windowWidth, windowHeight);
    sPos = 150;
}

function draw() {
    background(255)
    background('rgba(57,70,51,0.05)');

    translate(width / 2 + offsetX, height / 2 + offsetY);
    scale(zoomLevel);

    // Calculate the range of visible grid lines
    const xStart = -width / 2 / zoomLevel - offsetX;
    const xEnd = width / 2 / zoomLevel - offsetX;
    const yStart = -height / 2 / zoomLevel - offsetY;
    const yEnd = height / 2 / zoomLevel - offsetY;

    drawGrid(xStart, xEnd, yStart, yEnd);


    rotSpeed = .125;

    push();
    translate(189, 0);
    let rotation2 = -frameCount * rotSpeed / 2; // Adjust the rotation speed here
    rotate(rotation2);
    imageMode(CENTER);
    scale(1);
    image(svgImageBasic, 0, 0);
    pop();


    push();
    translate(-220, 220);
    let rotation3 = -frameCount * rotSpeed / 4; // Adjust the rotation speed here
    rotate(rotation3);
    imageMode(CENTER);
    scale(2);
    image(svgImageBasic2, 0, 0);
    pop();


    push();
    translate(0, 0);
    let rotation1 = frameCount * rotSpeed; // Adjust the rotation speed here
    rotate(rotation1);
    imageMode(CENTER);
    scale(0.5);
    image(svgImageHandle, 0, 0);
    pop();


    push();
    translate(800, -200);
    //rotate(rotation1);
    p = (sin(angl) * 100);
    angl += freq;
    makeSpring(-100, 0, p + sPos + 150, 16, "#" + colorListArr[3], 200)
    pop();


    push();
    translate(800, p + sPos);
    rotation3 = -frameCount * rotSpeed * 2; // Adjust the rotation speed here
    rotate(rotation3);
    imageMode(CENTER);
    scale(1);
    image(svgImageBasic2, 0, 0);
    pop();


}

function drawGrid(xStart, xEnd, yStart, yEnd) {

    // Draw vertical lines
    for (let x = xStart - (xStart % gridSize); x < xEnd; x += gridSize) {
        stroke('rgba(0,0,0,0.75)');
        strokeWeight(.5);
        if(x==0){
            stroke('rgba(0,0,0,0.75)');
            strokeWeight(2);
        }
        line(x, yStart, x, yEnd);
    }

    // Draw horizontal lines
    for (let y = yStart - (yStart % gridSize); y < yEnd; y += gridSize) {
        stroke('rgba(0,0,0,0.75)');
        strokeWeight(.5);
        if(y==0){
            stroke('rgba(0,0,0,0.75)');
            strokeWeight(2);
        }
        line(xStart, y, xEnd, y);
    }
}

function mouseDragged() {
    // Update offset based on mouse movement
    offsetX += mouseX - pmouseX;
    offsetY += mouseY - pmouseY;
}

function mouseWheel(event) {
    if (keyIsDown(CONTROL)) {
        // Adjust zoom level based on mouse wheel
        const zoomAmount = zoomSpeed * event.delta;
        zoomLevel -= zoomAmount;
        // Constrain zoom level
        zoomLevel = constrain(zoomLevel, 0.1, 5);
    }
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}




function makeSpring(xCor, yCor, ht, numOfZig, springColor, wid) {
    boxWidth = wid;
    boxHeight = (40 / 175) * wid;
    springWidth = (60 / 175) * wid;
    pos = yCor + ht
    strokeWeight((10 / 175) * wid);
    for (let i = yCor + boxHeight / 2; i < pos; i += 2 * (pos - yCor) / numOfZig) {
        stroke(springColor)
        line(xCor + boxWidth / 2 - springWidth, i, xCor + boxWidth / 2 + springWidth, i + (pos - yCor) / numOfZig);
        stroke("rgba(0,0,0,0.25)")
        line(xCor + boxWidth / 2 - springWidth, i, xCor + boxWidth / 2 + springWidth, i + (pos - yCor) / numOfZig);
        stroke(springColor)
        line(xCor + boxWidth / 2 + springWidth, i + (pos - yCor) / numOfZig, xCor + boxWidth / 2 - springWidth, i + 2 * (pos - yCor) / numOfZig);
        stroke("rgba(0,0,0,0.25)")
        line(xCor + boxWidth / 2 + springWidth, i + (pos - yCor) / numOfZig, xCor + boxWidth / 2 - springWidth, i + 2 * (pos - yCor) / numOfZig);
    }
    noStroke();
    fill(springColor);
    rect(xCor, yCor, boxWidth, boxHeight, (5 / 175) * wid)
    rect(xCor, pos, boxWidth, boxHeight, (5 / 175) * wid)
}
*/