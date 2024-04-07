let player1Score = 0;
let player2Score = 0;
let turnTotal = 0;
let currentPlayer = 1;

function rollDice() {
  let die1 = Math.floor(Math.random() * 6) + 1;
  let die2 = Math.floor(Math.random() * 6) + 1;

  if (die1 === 1 || die2 === 1) {
    turnTotal = 0;
    switchPlayer();
  } else {
    turnTotal += die1 + die2;
    updateGameStatus();
  }
}

function hold() {
  if (currentPlayer === 1) {
    player1Score += turnTotal;
  } else {
    player2Score += turnTotal;
  }

  turnTotal = 0;
  updateGameStatus();
  switchPlayer();
}

function switchPlayer() {
  if (currentPlayer === 1) {
    currentPlayer = 2;
  } else {
    currentPlayer = 1;
  }

  updateGameStatus();
}

function updateGameStatus() {
  document.getElementById('player1Score').innerText = player1Score;
  document.getElementById('player2Score').innerText = player2Score;
  document.getElementById('turnTotal').innerText = turnTotal;
  document.getElementById('currentPlayer').innerText = currentPlayer;
  
  if (player1Score >= 100) {
    document.getElementById('message').innerText = 'Player 1 wins!';
    disableButtons();
  } else if (player2Score >= 100) {
    document.getElementById('message').innerText = 'Player 2 wins!';
    disableButtons();
  }
}

function disableButtons() {
  document.getElementById('rollButton').disabled = true;
  document.getElementById('holdButton').disabled = true;
}