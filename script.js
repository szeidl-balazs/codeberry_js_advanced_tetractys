function pageLoaded () {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    let canvasWidth = canvas.width;
    let canvasHeight = canvas.height;
    
    function drawCheckeredPattern(row,col) {

        let rectWidth = canvasWidth / row;
        let rectHeight = canvasHeight / col;

        context.moveTo(0,0);
        context.lineTo(rectWidth, rectHeight - rectHeight);
        context.lineTo(rectWidth, rectHeight);
        context.lineTo(rectWidth - rectWidth, rectHeight);
        context.lineTo(rectWidth - rectWidth, rectHeight - rectHeight);
        context.strokeStyle = 'black';
        context.stroke();
        
    }

    drawCheckeredPattern(8,8);
    
}

window.addEventListener("load", pageLoaded);