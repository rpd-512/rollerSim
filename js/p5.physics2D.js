class phy2DComponent{
    constructor(worldSet){

        this.world = worldSet;
        let defaultSVGCode = `
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="25" r="25" fill="#5B93FF"/>
            </svg>
        `;
        this.uniqueID = (Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000).toString();
        this.collision = false;
        this.affectedByGravity = false;

        this.mass = 1;
        this.size = 1;
        this.angle = 0;
        this.coordinateX = 0;
        this.coordinateY = 0;
        this.velocity = [0,0];
        this.angularVelocity = 0;

        let svgBlob = new Blob([defaultSVGCode], { type: 'image/svg+xml' });
        let svgURL = URL.createObjectURL(svgBlob);
        this._img = loadImage(svgURL);
    }
    setCollision(coll){
        this.collision = coll;
    }
    setMass(mass){
        this.mass = mass;
    }
    setSize(size){
        this.size = size;
    }
    setAngle(ang){
        this.angle = ang;
    }
    setGravityAffect(grav){
        this.affectedByGravity = grav;
    }
    setCoordinateX(corX){
        this.coordinateX = +corX;
    }
    setCoordinateY(corY){
        this.coordinateY = +corY;
    }
    setCoordinates(corX,corY){
        this.coordinateX = +corX;
        this.coordinateY = +corY;
    }
    setVelocity(velo){
        this.velocity = velo;
    }
    setAngularVelocity(angVelo){
        this.angularVelocity = angVelo;
    }

    initiateSVGImage(svgCode){
        let svgBlob = new Blob([svgCode], { type: 'image/svg+xml' });
        let svgURL = URL.createObjectURL(svgBlob);
        this._img = loadImage(svgURL);
    }

    displayComponent(){
        push();
        if(!this.world.gravityTowardsAPoint && this.affectedByGravity){
            this.velocity[0]+=this.world.gravityTowards[0]*this.world.gravityValue;
            this.velocity[1]+=this.world.gravityTowards[1]*this.world.gravityValue;
        }
        if(!this.affectedByGravity){
            this.velocity = [0,0];
        }
        this.angle+=this.angularVelocity;
        this.coordinateX += this.velocity[0];
        this.coordinateY += this.velocity[1];
        translate(this.coordinateX,-this.coordinateY);
        rotate(this.angle);
        scale(this.size);
        imageMode(CENTER);
        image(this._img,0,0);
        pop();
    }

}

class phy2DWorld{
    constructor(){
        this.gravityTowardsAPoint = false;
        this.gravityTowards=[0,-1];
        this.gravityValue=0;
    }
    setGravityToPoint(coord){
        this.gravityTowardsAPoint=true;
        this.gravityTowards=coord;
    }
    setGravityToDirection(direct){
        this.gravityTowardsAPoint=false;
        this.gravityTowards=direct;
    }
    setGravityValue(val){
        this.gravityValue=val;
    }
    makeWorld(){
    }
}