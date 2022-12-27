function pageLoaded () {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');    
    
    
    
    function lineToCenter (positionX, positionY, color) {     
            
            context.beginPath();
            context.moveTo(positionX,positionY);
            context.lineTo(canvas.width * .5, canvas.height * .5);
            context.strokeStyle = color;
            context.stroke();

            console.log(positionX,positionY);                
    }    

    const random = (max, min) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
     }

     /*A lineToCenter függvény meghívásakor argumentumként hívom meg a random függvényt annak két 
     argumentumával és a random függvény által létrehozott érték kerül be a lineToCenter 
     függvénybe paraméterként. */

    for (i = 0; i <= 1000; i++) {
        lineToCenter(random(canvas.width,0),random(canvas.height,0),'teal');
     } 
    
    
}

window.addEventListener("load", pageLoaded);