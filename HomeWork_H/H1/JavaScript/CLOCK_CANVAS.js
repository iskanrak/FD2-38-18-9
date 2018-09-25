window.addEventListener('load', drawClockCanvas(), false);
function drawClockCanvas() {
    var canvas,circle, HourHand,SecondHand;
    canvas=document.createElement('canvas');
    document.body.appendChild(canvas);

    circle = canvas.getContext('2d');
    circle.arc(100, 100, 50, 0, 2*Math.PI, false); //круг (х,у, р)
    circle.fillStyle = 'yellow';//цвет заливки
    circle.fill();//заливка

    SecondHand=canvas.getContext('2d');
    SecondHand.beginPath();
    SecondHand.moveTo(100, 100);
    SecondHand.lineTo(175, 175);
    SecondHand.lineWidth=2;
    SecondHand.stroke();
}

