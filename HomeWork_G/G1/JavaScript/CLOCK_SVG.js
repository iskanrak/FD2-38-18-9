window.addEventListener('load', drawClock(), false);

function drawClock() {
    let watch, date = new Date,
        watchStartAngle = {SecondHand: [-90 + 6 * date.getSeconds(), 60], MinuteHand: [-90 + 6 * date.getMinutes(), 3600]};//хэш массивов начальных углов и  продолжительности вращения каждой стрелки
    watchStartAngle.HourHand = (date.getHours() <= 12) ? [(-90 + 30 * date.getHours() + date.getMinutes() / 2), 3600 * 60] : [(-90 + 30 * (date.getHours() - 12) + date.getMinutes() / 2), 3600 * 60];//добавляем массив часовой стрелки с переходом на 12 сасовой формат
    watch = document.createElement('div');
    watch.style.cssText = 'position: relative';
    watch.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="80" class="watch">\n' +//вставляем svg одним иннером, что бы не прописывать отдельно атрибуты каждого элемента
        '<circle cx="50" cy="35" r="30" fill="yellow" class="watch_Circle"/>' +
        '<line x1="50" y1="35" x2="70" y2="35" stroke="black" stroke-width="1" class="SecondHand"/>' +
        '<line x1="50" y1="35" x2="67" y2="35" stroke="black" stroke-width="2" class="MinuteHand"/>' +
        '<line x1="50" y1="35" x2="65" y2="35" stroke="black" stroke-width="3" class="HourHand"/>' +
        '</svg>';
    document.body.appendChild(watch);
    for (let key in watchStartAngle) {//добавляем каждой стрелке вращение
        watch.getElementsByClassName(key)[0].innerHTML = "'<animateTransform attributeType=XML attributeName=transform type=rotate " +
            "from=\'" + watchStartAngle[key][0] + " 50 35\' to=\'" + (watchStartAngle[key][0] + 360) + " 50 35\' " +
            "dur=" + watchStartAngle[key][1] + "s repeatCount=indefinite />'";
    }

    //создание цифр циферблата
    for(let HourCircleAngle,TimeUnit,watchHourCircle,TimeUnitAngle, HourCircle,  i=1; i<=12; i++){
        watchHourCircle=document.createElementNS('http://www.w3.org/2000/svg','svg');
        watchHourCircle.className='watch_HourCircle';
        document.getElementsByClassName('watch')[0].appendChild(watchHourCircle);

        HourCircle=document.createElementNS('http://www.w3.org/2000/svg','circle');
        HourCircle.className='HourCircle';
        HourCircle.setAttribute('cx','50');
        HourCircle.setAttribute('cy','9');
        HourCircle.setAttribute('fill','green');
        HourCircle.setAttribute('r','4');
        HourCircleAngle='rotate('+(0+30*i)+' 50 35)';
        HourCircle.setAttribute('transform',HourCircleAngle);
        watchHourCircle.appendChild(HourCircle);

        TimeUnit=document.createElementNS('http://www.w3.org/2000/svg','text');
        TimeUnit.className='watch_TimeUnit';
        TimeUnit.innerHTML=i;
        TimeUnit.setAttribute('fill','black');
        TimeUnit.setAttribute('x','50');
        TimeUnit.setAttribute('y','11');
        TimeUnit.setAttribute('font-size','7');
        TimeUnit.setAttribute('text-anchor','middle');
        TimeUnitAngle='rotate('+(0+30*i)+' 50 35)'+' rotate('+(0-30*i)+' 50 9)';
        TimeUnit.setAttribute('transform',TimeUnitAngle);
        watchHourCircle.appendChild(TimeUnit);
    }
}
