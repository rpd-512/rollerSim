var componentClassList = {}


var elemCurEdit = "";


function remComp(elementId) {
    $('#' + elementId).remove();
    delete componentData[elementId];
}

function createComp() {
    colorId = (Math.floor(Math.random() * (3 - 0 + 1)) + 0).toString();
    compontId = (Math.floor(Math.random() * (4 - 0 + 1)) + 0).toString();
    randID = CryptoJS.MD5("compinfoID" + (Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000)).toString();
    
    makeComp(randID, compontId, colorId);
    componentData[randID] = {
        "color": colorId,
        "component": compontId,
        "coordinates":[0,0],
        "componentPhysicsInfo":{
            "mass":1,
            "size":1,
            "angle":0,
            "velocity":[0,0],
            "angularVelocity":0,
            "collision":false,
            "gravity":false
        }
    };

    componentClassList[randID] = new phy2DComponent(rollerWorld)
    updateComponentClass(randID,true);
}

function updateComponentClass(elementId,imgChange = false){
    fList = componentData[elementId].componentPhysicsInfo;
    fListRaw = componentData[elementId];
    tList = componentClassList[elementId];
    
    componentClassList[elementId].setCoordinateX(fListRaw.coordinates[0]);
    componentClassList[elementId].setCoordinateY(fListRaw.coordinates[1]);
    componentClassList[elementId].setMass(fList.mass);
    componentClassList[elementId].setSize(fList.size);
    componentClassList[elementId].setAngle(fList.angle);
    componentClassList[elementId].setVelocity(fList.velocity);
    componentClassList[elementId].setAngularVelocity(fList.angularVelocity);
    componentClassList[elementId].setCollision(fList.collision);
    componentClassList[elementId].setGravityAffect(fList.gravity);

    if(imgChange){
        svgCode = comptListArr[fListRaw.component].replaceAll("$COLOR$","#"+colorListArr[fListRaw.color]);
        componentClassList[elementId].initiateSVGImage(svgCode);
    }
}

function makeComp(elemId, compId, clrNum, scrollBottom = true, fromExisting=false) {
    var cmp = componentHTML;
    cmp = cmp.replaceAll("$COMPID$", elemId);
    cmp = cmp.replaceAll("$COLOR$", "#" + colorListArr[clrNum]);
    cmp = cmp.replaceAll("$COMPLOOK$", comptListArr[compId].replaceAll("$COLOR$", "#" + colorListArr[clrNum]));
    coordinateArray = [0,0];
    if(fromExisting){
        coordinateArray = componentData[elemId]["coordinates"]
    }
    cmp = cmp.replaceAll("$XCOR$", coordinateArray[0]/gridSize);
    cmp = cmp.replaceAll("$YCOR$", coordinateArray[1]/gridSize);
    $('#compList').append(cmp);

    if (scrollBottom) {
        scrollableElement = document.getElementById('compList');
        scrollableElement.scrollTop = scrollableElement.scrollHeight;
    }
}


function showColSelector(elementId) {
    var elmnt = $('#' + elementId + " > .inputFields > .colorSelector")[0];
    elmnt.classList.add("active")
}

function hideColSelector(elementId) {
    var elmnt = $('#' + elementId + " > .inputFields > .colorSelector")[0];
    setTimeout(function() {
        elmnt.classList.remove("active")
    }, 250);
}

function setColorOfComp(colorId, elementId) {
    colorFound = $('#' + elementId).find('.colorOfComponent').css('background-color')
    allTxtInDiv = $('#' + elementId).html()
    newTxt = allTxtInDiv.replaceAll(rgbToHex(colorFound), "#" + colorListArr[colorId]);
    newTxt = newTxt.replaceAll(" active", "");

    xVal = $('#' + elementId + ' input[placeholder="x"]').val()
    yVal = $('#' + elementId + ' input[placeholder="y"]').val()

    xPat = /x" value="([^"]*)"/;
    yPat = /y" value="([^"]*)"/;

    xValInHTML = xPat.exec(newTxt)[1];
    yValInHTML = yPat.exec(newTxt)[1];

    newTxt = newTxt.replaceAll('x" value="' + xValInHTML, 'x" value="' + xVal);
    newTxt = newTxt.replaceAll('y" value="' + yValInHTML, 'y" value="' + yVal);

    componentData[elementId]["color"] = colorId;

    $('#' + elementId).html(newTxt);
    updateComponentClass(elementId,true);
}



function selectComponent(elementId){
    var elmnt = $('#' + elementId + " > .inputFields > .compSelector")[0];
    elmnt.classList.add("active")
}

function hideCompSelector(elementId) {
    var elmnt = $('#' + elementId + " > .inputFields > .compSelector")[0];
    setTimeout(function() {
        elmnt.classList.remove("active")
    }, 250);
}

function changeComp(elementId,compId){
    compFound = $('#' + elementId).find('.compSelectorButton')[0].innerHTML
    allTxtInDiv = $('#' + elementId).html()
    colorFound = $('#' + elementId).find('.colorOfComponent').css('background-color')
    newTxt = allTxtInDiv.replace(compFound, comptListArr[compId].replaceAll("$COLOR$",rgbToHex(colorFound)));
    newTxt = newTxt.replaceAll(" active", "");

    xVal = $('#' + elementId + ' input[placeholder="x"]').val()
    yVal = $('#' + elementId + ' input[placeholder="y"]').val()

    xPat = /x" value="([^"]*)"/;
    yPat = /y" value="([^"]*)"/;

    xValInHTML = xPat.exec(newTxt)[1];
    yValInHTML = yPat.exec(newTxt)[1];

    newTxt = newTxt.replaceAll('x" value="' + xValInHTML, 'x" value="' + xVal);
    newTxt = newTxt.replaceAll('y" value="' + yValInHTML, 'y" value="' + yVal);

    componentData[elementId]["component"] = compId;

    $('#' + elementId).html(newTxt);
    updateComponentClass(elementId,true);
}


function editDetail(elementId) {
    $('.listArea').css('overflow-x', 'auto');
    scrollableElement = document.getElementsByClassName('listArea')[0];
    
    scrollableElement.scrollTo({
        left: scrollableElement.scrollWidth,
        behavior: 'smooth'
      });    
    $('.listArea').css('overflow-x', 'hidden');
    $('#detailHeader').html(
        comptListArr[componentData[elementId]["component"]].replaceAll("$COLOR$","#"+colorListArr[componentData[elementId]["color"]])
    );
    
    editorPanelHTML = "";

    editorPanelHTML += editSlider.replaceAll("$ELEMID$",elementId).replaceAll("$DETEDIT$",'size').replaceAll("$PROPNAME$",'size').replaceAll("$LOWERLIM$",'10').replaceAll("$UPPERLIM$",'500').replaceAll("$CURVAL$",componentData[elementId].componentPhysicsInfo.size*100).replaceAll("$MULT$",100);
    editorPanelHTML += editSlider.replaceAll("$ELEMID$",elementId).replaceAll("$DETEDIT$",'angle').replaceAll("$PROPNAME$",'angle').replaceAll("$LOWERLIM$",'0').replaceAll("$UPPERLIM$",'360').replaceAll("$CURVAL$",componentData[elementId].componentPhysicsInfo.angle*57.3).replaceAll("$MULT$",57.3);
    

    cboxDat = editCheckbox.replaceAll("$ELEMID$",elementId).replaceAll("$DETEDIT$",'gravity').replaceAll("$PROPNAME$",'fixed');
    if(!componentData[elementId].componentPhysicsInfo.gravity){
        cboxDat = cboxDat.replaceAll("$CURVAL$","checked");
    }
    else{
        cboxDat = cboxDat.replaceAll("$CURVAL$","");
    }
    editorPanelHTML += cboxDat;
    
    $("#editorTools").html(editorPanelHTML);

    elemCurEdit = elementId;
}


function changeCord(elementId,cord,dim){
    componentData[elementId]["coordinates"][dim] = cord;
    updateComponentClass(elementId);
}


function backtoList() {
    $('.listArea').css('overflow-x', 'auto');
    scrollableElement = document.getElementsByClassName('listArea')[0];
    scrollableElement.scrollLeft = 0;
    $('.listArea').css('overflow-x', 'hidden');
}

function recreatFromJson() {
    for (elemId in componentData) {
        dat = componentData[elemId];
        makeComp(elemId, dat["component"], dat["color"], false,true);
        componentClassList[elemId] = new phy2DComponent(rollerWorld)
        updateComponentClass(elemId,true);
    }
}

function updateTextInput(value, textInput, whatChange, elementId,mult){
    textInput.value = value;
    componentData[elementId].componentPhysicsInfo[whatChange] = value/mult;
    updateComponentClass(elementId);
}
  
function updateCheckInput(value, whatChange, elementId){
    componentData[elementId].componentPhysicsInfo[whatChange] = !value;
    updateComponentClass(elementId);   
}