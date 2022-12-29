function pageLoaded () {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    let base = 100;
    let height = 86.6;
    
    function drawTriangle (positionX, positionY) {

        for (i = 0; i < 3; i++) {

            context.moveTo(positionX - i * base * .5, positionY + i * height);
            context.lineTo(positionX + base * .5, positionY + height);
            context.lineTo(positionX - base * .5, positionY + height);
            context.lineTo(positionX, positionY);


        }




        context.stroke();


    }

    drawTriangle(225, 33);
    
}

window.addEventListener("load", pageLoaded);