var isMousePressed=false;

var cmnd="plcRoll";

var placedObj = [];

function onMousePrs(mFunc){
    if (mouseIsPressed && mouseX>250) {
        if(!isMousePressed){
            mFunc();
            isMousePressed=true;
        }
    }
    else{
        isMousePressed=false;
    }
}

//https://lospec.com/palette-list/nyx8

function placePrevObj(){
    for(p in placedObj){
        if(placedObj[p]["cmnd"] == "plcRoll"){
            spec = placedObj[p]["specs"];
            for(s in spec){
                fill("#08141e")
                stroke("#08141e")
                if(dist(spec[s][0],spec[s][1],mouseX,mouseY) < spec[s][2]/2){
                    stroke("#0f2a3f")
                    fill("#0f2a3f")
                }
                ellipse(spec[s][0],spec[s][1],spec[s][2],spec[s][2])
            }
        }
    }

    fill("white")
    rect(0,0,250,windowHeight)
    
}

var slider;

function setup() {
    createCanvas(windowWidth, windowHeight);
    slider = createSlider(25, 100, 100,25);
    slider.position(10, 10);
    slider.style('width', '200px');
}

var sz = 50


function draw() {
    background("#f6d6bd");

    var gridSize = 50;  // Size of each grid cell
  
    //----grid----//
    for (let x = 0; x <= width; x += gridSize) {
        line(x, 0, x, height);
    }
    for (let y = 0; y <= height; y += gridSize) {
        line(0, y, width, y);
    }
    //------------//

    placePrevObj();
    if(cmnd=="plcRoll"){
        xCor = mouseX;
        yCor = mouseY;
        
        //snapping
        snapRad = 15
        if((xCor%gridSize<snapRad || gridSize-xCor%gridSize<snapRad) && (yCor%gridSize<snapRad || gridSize-yCor%gridSize<snapRad)){
            if(xCor%gridSize<snapRad){
                xCor-=xCor%gridSize;
            }
            if(yCor%gridSize<snapRad){
                yCor-=yCor%gridSize;
            }
            if(gridSize-xCor%gridSize<snapRad){
                xCor+=gridSize-xCor%gridSize;
            }
            if(gridSize-yCor%gridSize<snapRad){
                yCor+=gridSize-yCor%gridSize;
            }
        }

        size = slider.value();
        noFill();
        ellipse(xCor,yCor,size,size)
        mFunc = () => {
            
            fill(0);
            ellipse(xCor, yCor, size, size);
            var placed=false
            for(p in placedObj){
                if(placedObj[p]["cmnd"]==cmnd){
                    placedObj[p]["specs"].push(
                        [xCor,yCor,size]
                    )
                    placed=true;
                }
            }
            if(!placed){
                console.log("catched");
                placedObj.push(
                    {
                        "cmnd":cmnd,
                        "specs":[[mouseX,mouseY,size]]
                    }
                )    
            }
        };
        onMousePrs(mFunc);
    }
}
            
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
