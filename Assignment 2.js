var btnRoll = document.querySelector('#rollDice');
var display = document.querySelector('.process');
var playerTurn = 2;
var playerPosition = [0, 0];
var dice;
var resetGame = 1;
btnRoll.addEventListener('click', function(){rollDice()});

function rollDice(){

    if (resetGame == 0) {
      console.clear();
      display.innerHTML = " ";
      resetGame = 1;
      playerTurn = 2;
    }

    if (playerTurn == 1) {
      playerTurn = 2;
      dice = Math.floor(Math.random() * 6) + 1
      playerPosition[playerTurn-1] += dice;
      console.log('Player 2 rolled ' + dice);
      display.innerHTML += "Player 2 rolled " + dice + "<br/>";

      if (playerPosition[playerTurn-1] >= 25) {
        console.log('Player 2 won!');
        display.innerHTML += "Player 2 won!" + "<br/>";
        playerPosition[0] = 0;
        playerPosition[1] = 0;
        resetGame = 0;
      }

      else {
        console.log('Player 2 moved to position ' + playerPosition[playerTurn-1]);
        display.innerHTML += "Player 2 moved to position " + playerPosition[playerTurn-1] + "<br/>";
      }
    }

    else if (playerTurn == 2) {
      playerTurn = 1;
      dice = Math.floor(Math.random() * 6) + 1
      playerPosition[playerTurn-1] += dice;
      console.log('Player 1 rolled ' + dice);
      display.innerHTML += "Player 1 rolled " + dice + "<br/>";

      if (playerPosition[playerTurn-1] >= 25) {
        console.log('Player 1 won!');
        display.innerHTML += "Player 1 won! " + "<br/>";
        playerPosition[0] = 0;
        playerPosition[1] = 0;
        resetGame = 0;
      }

      else {
        console.log('Player 1 moved to position ' + playerPosition[playerTurn-1]);
        display.innerHTML += "Player 1 moved to position " + playerPosition[playerTurn-1] + "<br/>";
      }
    }
    else;

    if (playerPosition[playerTurn-1] == 15) {
      playerPosition[playerTurn-1] = 5;
      console.log('Player ' + playerTurn + ' stepped on a snake! Go down to position 5.');
      display.innerHTML += "Player " + playerTurn + " stepped on a snake! Go down to position 5." + "<br/>";
    }

    else if (playerPosition[playerTurn-1] == 23) {
      playerPosition[playerTurn-1] = 16;
      console.log('Player ' + playerTurn + ' stepped on a snake! Go down to position 16.');
      display.innerHTML += "Player " + playerTurn + " stepped on a snake! Go down to position 16." + "<br/>";
    }

    else if (playerPosition[playerTurn-1] == 8) {
      playerPosition[playerTurn-1] = 15;
      console.log('Player ' + playerTurn + ' stepped on a ladder! Go up to position 15.');
      display.innerHTML += "Player " + playerTurn + " stepped on a ladder! Go up to position 15." + "<br/>";
    }

    else if (playerPosition[playerTurn-1] == 19) {
      playerPosition[playerTurn-1] = 24;
      console.log('Player ' + playerTurn + ' stepped on a ladder! Go up to position 24.');
      display.innerHTML += "Player " + playerTurn + " stepped on a ladder! Go up to position 24." + "<br/>";
    }

    else;
}
