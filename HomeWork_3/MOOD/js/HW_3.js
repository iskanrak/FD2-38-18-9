
function randomDiap(n,m) {
    return Math.floor(Math.random()*(m-n+1))+n;
}

function mood(colorsCount) {
    var colors=[ '', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый' ],
        colorsRandom={};
    if (colorsCount<colors.length){
    console.log( 'цветов: ' + colorsCount );
    while ( Object.keys(colorsRandom).length<colorsCount) {
        var n=randomDiap(1,7);
        colorsRandom[n]=colors[n];
    }
    console.log(colorsRandom);
    }
    else
    console.log("Выбрано неверное количество цветов для отображения");
}

mood(3);