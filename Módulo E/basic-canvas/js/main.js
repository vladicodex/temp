const canvasWidth = 800;
const canvasHeight = 400;

var canvasForMove;
var contextForMove;
var addLineUp = 0;
var addLineDown = 0;
var addLineLeft = 0;
var addLineRight = 0;
var lastCoordinates_X = 0;
var lastCoordinates_Y = 0;

//Script for Geometric Figures
function drawDiamond(){
    const canvas = document.querySelector("#canvas-figures");
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    const context = canvas.getContext("2d");
    context.lineWidth = 5;
    context.strokeStyle = "#212121";
    context.fillStyle = "#C2185B";
    context.beginPath();
    context.moveTo(55, 5);
    context.lineTo(105, 55);
    context.lineTo(55, 105);
    context.lineTo(5, 55);
    context.closePath();
    context.stroke();
    context.fill();
}

function drawPentagon(){
    const canvas = document.querySelector("#canvas-figures");
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    const context = canvas.getContext("2d");
    context.lineWidth = 5;
    context.strokeStyle = "#212121";
    context.fillStyle = "#9CCC65";
    context.beginPath();
    context.moveTo(100, 5);
    context.lineTo(145, 38);
    context.lineTo(130, 80);
    context.lineTo(70, 80);
    context.lineTo(55, 38);
    context.closePath();
    context.stroke();
    context.fill();
}

function drawTriangle(){
    const canvas = document.querySelector("#canvas-figures");
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    const context = canvas.getContext("2d");
    context.lineWidth = 5;
    context.strokeStyle = "#212121";
    context.fillStyle = "#AB47BC";
    context.moveTo(5, 5);
    context.lineTo(5, 100);
    context.lineTo(150, 100);
    context.closePath();
    context.stroke();
    context.fill();
}

function drawCircle(){
    const canvas = document.querySelector("#canvas-figures");
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    const context = canvas.getContext("2d");
    context.lineWidth = 5;
    context.strokeStyle = "#212121";
    context.fillStyle = "#FFCC80";
    let x = 100,
        y = 100,
        radio = 50,
        anguloInicio = 0,
        anguloFin = Math.PI * 2;
    context.arc(x, y, radio, anguloInicio, anguloFin);
    context.stroke();
    context.fill();
}

function drawSquare(){
    const canvas = document.querySelector("#canvas-figures");
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    const context = canvas.getContext("2d");
    context.lineWidth = 5;
    context.strokeStyle = "#212121";
    context.fillStyle = "#F4511E";
    context.rect(5, 5, 100, 100);
    context.stroke();
    context.fill();
}

//Script for Movement Buttons
function activateDraw(){
    canvasForMove = document.querySelector("#canvas-movements");
    canvasForMove.width = canvasWidth;
    canvasForMove.height = canvasHeight;
    contextForMove = canvasForMove.getContext("2d");
    lastCoordinates_X = 100;
    lastCoordinates_Y = 100;
}

function drawUp(){
    contextForMove.beginPath();
    contextForMove.lineWidth = 3;
    contextForMove.strokeStyle = "blue";
    contextForMove.moveTo(lastCoordinates_X, lastCoordinates_Y);
    lastCoordinates_X = lastCoordinates_X;
    lastCoordinates_Y = lastCoordinates_Y - 5;
    contextForMove.lineTo(lastCoordinates_X, lastCoordinates_Y);
    contextForMove.stroke();
}

function drawDown(){
    //addLine = addLine + 5;
    //contextForMove.moveTo(0, 0);
    //contextForMove.lineTo(addLine, addLine);
    contextForMove.moveTo(lastCoordinates_X, lastCoordinates_Y);
    lastCoordinates_X = lastCoordinates_X;
    lastCoordinates_Y = lastCoordinates_Y + 5;
    contextForMove.lineTo(lastCoordinates_X, lastCoordinates_Y);
    contextForMove.stroke();
}

function drawLeft(){
    contextForMove.moveTo(lastCoordinates_X, lastCoordinates_Y);
    lastCoordinates_X = lastCoordinates_X - 5;
    lastCoordinates_Y = lastCoordinates_Y;
    contextForMove.lineTo(lastCoordinates_X, lastCoordinates_Y);
    contextForMove.stroke();
}

function drawRight(){
    contextForMove.moveTo(lastCoordinates_X, lastCoordinates_Y);
    lastCoordinates_X = lastCoordinates_X + 5;
    lastCoordinates_Y = lastCoordinates_Y;
    contextForMove.lineTo(lastCoordinates_X, lastCoordinates_Y);
    contextForMove.stroke();
}