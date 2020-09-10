// DRAW ROBOT FACE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 600;

// Rectangle Behind Head for Ears
ctx.fillStyle = "rgb(100, 100, 100)";
ctx.fillRect(80, 260, 460, 80);

// Filled & outlined Triangles for Hair, neck & background
fillTriangle(180, 80, 140, 100, 220, 100);
fillTriangle(340, 80, 300, 100, 380, 100);
strokeTriangle(260, 80, 220, 100, 300, 100);
strokeTriangle(420, 80, 380, 100, 460, 100);
fillTriangle(300, 200, 220, 600, 380, 600);
fillTriangle(0, 50, 50, 50, 50, 50);

// Rectangle Head
ctx.fillStyle = "rgb(180, 180, 180)";
ctx.fillRect(100, 100, 400, 400);

// Filled Circles for Eye Sockets
ctx.fillStyle = "rgb(235, 235, 235)"
fillCircle(200, 250, 50, 0, 2);
fillCircle(400, 250, 50, 0, 2);

// Rectangle for Mouth
ctx.fillRect(200, 350, 200, 60);

// Lines for Teeth
ctx.strokeStyle = "rgb(180, 180, 180)"
lines(200, 380, 400, 380);
lines(250, 350, 250, 410);
lines(300, 350, 300, 410);
lines(350, 350, 350, 410);

// Outlined and Filled circles for eyes
fillShadedCircle(200, 250, 30, 0, 2);
fillShadedCircle(400, 250, 10, 0, 2);
outlineCircle(200, 250, 50, 0, 2);
outlineCircle(400, 250, 50, 0, 2);

// Lines for Eyebrows
lines(150, 180, 250, 180);
lines(350, 160, 450, 180);

// Outlined Triangle for Nose
strokeTriangle(300, 280, 320, 320, 280, 320)

// DRAW FUNCTIONS
function fillTriangle(x1, y1, x2, y2, x3, y3) {
    // DRAW A FILLED TRIANGLE WITH VERTICES (x1, y1), (x2,y2), (x3, y3)
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.fill();
}
function strokeTriangle(x1, y1, x2, y2 ,x3, y3) {
    // DRAW AN OUTLINED TRIANGLE WITH VERTICES (x1, y1), (x2, y2), (x3, y3)
    ctx.beginPath();
ctx.moveTo(x1, y1);
ctx.lineTo(x2, y2);
ctx.lineTo(x3, y3);
ctx.closePath()
ctx.stroke();
}
function fillCircle(x1, y1, x2, y2, x3) {
    // DRAW A FILLED CIRCLE
    ctx.beginPath();
ctx.arc(x1, y1, x2, y2, x3 * Math.PI);
ctx.fill();
}
function fillShadedCircle(x1, y1, x2, y2, x3) {
    // DRAW A CIRCLE WHICH IS DARK IN COLOUR
ctx.fillStyle = "rgb(100, 100, 100)";
    ctx.beginPath();
ctx.arc(x1, y1, x2, y2, x3 * Math.PI);
ctx.fill();
}
function outlineCircle(x1, y1, x2, y2, x3) {
    // Circle outline
ctx.strokeStyle = "rgb(100, 100, 100)";
ctx.beginPath();
ctx.arc(x1, y1, x2, y2, x3 * Math.PI);
ctx.stroke();
}
function lines(x1, y1, x2, y2) {
    // Any lines that are disconnected from other shapes
    ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(x1, y1);
ctx.lineTo(x2, y2);
ctx.stroke();
}