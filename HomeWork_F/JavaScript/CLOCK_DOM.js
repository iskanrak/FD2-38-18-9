//угол стрелок постоянно рассчитывается исходя из текущего времени
window.addEventListener('load', drawClock(), false);//запускаем функцию после загрузки
// функция часов целиком
function drawClock(){
let watch, Hand, watchArray=['watch','watch_SecondHand','watch_MinuteHand','watch_HourHand','watch_DigitalClock'];

    //создание циферблата и стрелок
    for (let i=0; i<watchArray.length; i++)
        if(watchArray[i]==="watch"){
            watch=document.createElement('div');
            watch.className='watch';
            document.body.appendChild(watch);
        }
        else{
            Hand=watchArray[i];
            Hand=document.createElement('div');
            Hand.className=watchArray[i];
            watch.appendChild(Hand);
        }

    //создание цифр циферблата
    for(let TimeUnit,HourCircle,  i=1; i<=12; i++){
        HourCircle=document.createElement('div');
        HourCircle.className='watch_HourCircle';
        HourCircle.style.transform='rotate('+(0+30*i)+'deg)';
        watch.appendChild(HourCircle);
        TimeUnit=document.createElement('div');
        TimeUnit.innerHTML=i;
        TimeUnit.style.cssText='display: flex; align-items: center; justify-content: center';
        TimeUnit.style.transform='rotate('+(0-30*i)+'deg)';
        HourCircle.appendChild(TimeUnit);
    }

    //отрисовка цифровых часов в блоке класса watch_DigitalClock
    function drawDigitalClock(){
      let date=new Date;
        document.getElementsByClassName('watch_DigitalClock')[0].innerHTML=date.toLocaleTimeString();
    }
    drawDigitalClock();
    setInterval(drawDigitalClock,500);

  //отрисовка стрелок
    function drawHands(){
      let date=new Date,hours;
        document.getElementsByClassName('watch_SecondHand')[0].style.transform='rotate('+(180+6*date.getSeconds())+ 'deg)';
        document.getElementsByClassName('watch_MinuteHand')[0].style.transform='rotate('+(180+6*date.getMinutes())+ 'deg)';
        hours=(date.getHours()<=12)?date.getHours():date.getHours()-12;
        document.getElementsByClassName('watch_HourHand')[0].style.transform='rotate('+(180+30*hours+date.getMinutes()/2)+ 'deg)';
    }
    drawHands();
    setInterval(drawHands,500);
}

