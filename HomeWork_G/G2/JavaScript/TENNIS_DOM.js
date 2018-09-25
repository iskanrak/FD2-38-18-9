window.addEventListener('load', TENNIS_DOM(), false);

function TENNIS_DOM() {console.log("privet");
var gameTennis, gameButtonStart, gameScore, gamePlace, gameBall, gameRacketLeft, gameRacketRight,gameRacketLeftPosition,gameRacketRightPosition;
const GAME_TENNIS_HEIGHT='435px', GAME_TENNIS_WIDTH='800px';

    gameTennis=document.createElement('div');
    gameTennis.className='game-Tennis';
    gameTennis.style.height=GAME_TENNIS_HEIGHT;
    gameTennis.style.width=GAME_TENNIS_WIDTH;
    document.body.appendChild(gameTennis);

    gameButtonStart=document.createElement('button');
    gameButtonStart.innerText='старт!';
    gameButtonStart.className='game_Button-Start';
    gameTennis.appendChild(gameButtonStart);

    gameScore=document.createElement('div');
    gameScore.innerText='0:0';
    gameScore.className='game_Score';
    gameTennis.appendChild(gameScore);

    gamePlace=document.createElement('div');
    gamePlace.className='game_Place';
    gameTennis.appendChild(gamePlace);

    gameBall=document.createElement('div');
    gameBall.className='game_Ball';
    gamePlace.appendChild(gameBall);

    gameRacketLeft=document.createElement('div');
    gameRacketLeft.className='game_Racket-Left';
    gamePlace.appendChild(gameRacketLeft);

    gameRacketRight=document.createElement('div');
    gameRacketRight.className='game_Racket-Right';
    gamePlace.appendChild(gameRacketRight);

    addEventListener("keydown", function(event) {
        gameRacketLeftPosition=parseInt(getComputedStyle(gameRacketLeft).top);
        gameRacketRightPosition=parseInt(getComputedStyle(gameRacketRight).top);

        //движение ракеток
        switch (event.keyCode){
           case 16:
            if(gameRacketLeftPosition>0){
                gameRacketLeft.style.top=gameRacketLeftPosition-5+'px';
            }
               break;
           case 17:
               if(gameRacketLeftPosition<300){
                   gameRacketLeft.style.top=gameRacketLeftPosition+5+'px';
               }
               break;
           case 38:
               if(gameRacketRightPosition>0){
                   gameRacketRight.style.top=gameRacketRightPosition-5+'px';
               }
               break;
           case 40:
               if(gameRacketRightPosition<300){
                   gameRacketRight.style.top=gameRacketRightPosition+5+'px';
               }
               break;
        }

        //отмена скролла на стрелки вверх и вниз
       if(event.keyCode===40||event.keyCode===38) {
           event.preventDefault ? event.preventDefault() : event.returnValue = false;
       }

    });


}





