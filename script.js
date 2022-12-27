function pageLoaded () {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    
    let width = 113;
    let height = 98;
    
    function drawHexagon(positionX, positionY) {

        context.beginPath();
        context.moveTo(positionX, positionY);
        context.lineTo(positionX + width * .25, positionY - height * .5);
        context.lineTo(positionX + width * .75, positionY - height * .5);
        context.lineTo(positionX + width, positionY);
        context.lineTo(positionX + width * .75, positionY + height * .5);
        context.lineTo(positionX + width * .25, positionY + height * .5);
        context.lineTo(positionX, positionY);

        context.strokeStyle = 'orange';
        context.stroke();        

    }
    
    drawHexagon(76, 120);
    drawHexagon(76, 230);
    drawHexagon(168.5, 65);   
    drawHexagon(168.5, 175);
    drawHexagon(168.5, 285);
    drawHexagon(261, 120);
    drawHexagon(261, 230);
    /*Csak azt a síkidomot színezi ki, amelyik meghívása után adjuk meg a színezés kódját. */
    context.fillStyle = 'orange';
    context.fill();   
    
}

window.addEventListener("load", pageLoaded);