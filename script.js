function pageLoaded () {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    let canvasWidth = canvas.width;
    let canvasHeight = canvas.height;
    
    function drawCheckeredPattern(row,col) {

        let rectWidth = canvasWidth / row;
        let rectHeight = canvasHeight / col;
        
        let positionX = 0;
        let positionY = 0;

        let i;
        let k;

        for (i = 1; i <= row; i++) {
             
            positionX = i * rectWidth - rectWidth;            
            context.fillRect(positionX, positionY, rectWidth, rectHeight);                
            
            
            for (k = 1; k <= col; k++) {

                if ((i + k) % 2 === 0) {
                    context.fillStyle = 'white';
                } else {
                    context.fillStyle = 'black';
                }    
                
                positionY = k * rectHeight - rectHeight;
                context.fillRect(positionX, positionY, rectWidth, rectHeight);
            }
            
        }

        
    }

    drawCheckeredPattern(8,8);
    
}

window.addEventListener("load", pageLoaded);