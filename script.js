function pageLoaded () {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    let base = 100;
    let height = 86.6;
    
    
    function drawTriangle (x,y) {       

            
        for (var row = 0; row < 3; row++) {

            for (var column = 0; column <= row; column++) {

                context.beginPath();
                
                context.moveTo(x - row * base * .5 + column * base, y + row * height);                
                context.lineTo(x - base * (row + 1) * .5 + column * base, y + (row + 1) * height);
                context.lineTo(x - base * (row - 1) * .5 + column * base, y + (row + 1) * height);
                context.lineTo(x - row * base * .5 + column * base, y + row * height);
                
                if (row === 0) {

                    context.strokeStyle = 'rgb(227,98,102)';
                    context.fillStyle = 'rgb(227,98,102)';
                    
                } else if ( row === 1) {
    
                    context.strokeStyle = 'rgb(38,172,73)';
                    context.fillStyle = 'rgb(38,172,73)';
    
                } else {
    
                    context.strokeStyle = 'rgb(34,128,128)';
                    context.fillStyle = 'rgb(34,128,128)';
    
                }

                context.stroke();
                context.fill();
                

            }
 
        }

    }

    drawTriangle(225, 33);
    
}

window.addEventListener("load", pageLoaded);