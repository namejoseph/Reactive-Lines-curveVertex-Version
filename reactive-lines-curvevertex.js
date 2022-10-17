  
let flux, mouseIntensity;
let lines = [];

function setup() {
    createCanvas(300, 600);
    strokeCap(PROJECT);
    flux = 127;
    strokeWeight(1);
    noFill();

    for (let j=0; j < 21; j++) {
        lines.push([100+(j * 5), 100+(j * 5), 100+(j * 5), 100+(j * 5), 100+(j * 5)]);
    }
    console.log(lines);
}

function draw() {

    fluxColor();

    background(flux, 0, 0);

    // check mouse position
    adjustMovement();

    // create the lines
    createLines();
    
}

function fluxColor() {
    if (random() > 0.5) {
        flux += random(10);
    } else {
        flux -= random(10);
    }
    
    if (flux < 0) { flux = 0; }
    if (flux > 200) { flux = 200; }
}

function adjustMovement() {

    mouseIntensity = Math.abs((150 - mouseX) / 100);
    
    if (mouseX < 100 || mouseX > 200) {
        for (let k = 0; k < lines.length; k++) {
            for (let m = 1; m < 5; m++) {
                lines[k][m] = lines[k][m] + random(mouseIntensity * -1, mouseIntensity);
            }
        }
    } else {
        for (let k = 0; k < lines.length; k++) {
            for (let m = 1; m < 5; m++) {
                if (lines[k][m] < lines[k][0]) { lines[k][m] += random(2); } else if (lines[k][m] > lines[k][0]) { lines[k][m] -= random(2); }
                if (Math.abs(lines[k][m] - lines[k][0]) < 1) { lines[k][m] = lines[k][0]; }
            }
        }
    }
}

function createLines() {

    for (let i = 0; i < lines.length; i++) {
        stroke(255, 0, lines[i][0]);
        line(lines[i][0], 0, lines[i][0], 150);
        
        // line(lines[i][0], 150, lines[i][1], 210);
        // line(lines[i][1], 210, lines[i][2], 270);
        // line(lines[i][2], 270, lines[i][3], 330);
        // line(lines[i][3], 330, lines[i][4], 390);
        // line(lines[i][4], 390, lines[i][0], 450);
        

        beginShape();
        curveVertex(lines[i][0], 150);
        curveVertex(lines[i][0], 150);
        curveVertex(lines[i][1], 210);
        curveVertex(lines[i][2], 270);
        curveVertex(lines[i][3], 330);
        curveVertex(lines[i][0], 450);
        curveVertex(lines[i][0], 450);
        endShape();

        line(lines[i][0], 450, lines[i][0], 600);
    }

    
}