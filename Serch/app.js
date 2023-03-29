var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var isDrawing = false;
var lastX = 0;
var lastY = 0;

canvas.addEventListener('mousedown', function(e) {
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
});

canvas.addEventListener('mousemove', function(e) {
    if (isDrawing === true) {
        drawLine(lastX, lastY, e.offsetX, e.offsetY);
        lastX = e.offsetX;
        lastY = e.offsetY;
    }
});

canvas.addEventListener('mouseup', function(e) {
    isDrawing = false;
});

function drawLine(x1, y1, x2, y2) {
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 2;
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();
}