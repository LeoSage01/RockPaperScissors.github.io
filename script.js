const totalScore = {computerScore: 0, playerScore: 0}

// getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string
const getComputerChoice = () => {
  const rpsChoice = ['Rock', 'Paper', 'Scissors']
  const randomNumber = Math.floor(Math.random() * 3)
  return rpsChoice[randomNumber]
} 

// getResult compares playerChoice & computerChoice and returns the score accordingly 

// human wins - getResult('Rock', 'Scissors') = 1
// human loses - getResult('Scissors', 'Rock') = -1
// human draws - getResult('Rock', 'Rock') = 0
const getResult = (playerChoice, computerChoice) => {
  // return the result of score based on if you won, drew, or lost  
  let score;
 
  if (playerChoice == computerChoice) {
    score = 0
  } else if(playerChoice == 'Rock' && computerChoice == 'Scissors') {
    score = 1
  } else if(playerChoice == 'Paper' && computerChoice == 'Rock') {
    score = 1
  } else if(playerChoice == 'Scissors' && computerChoice == 'Paper') {
    score = 1
  // Otherwise human loses (score set to -1)
 } else {
  score = -1
 }
 // return score
  return score 
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
const showResult = (score, playerChoice, computerChoice) => {
  
  const resultDiv = document.getElementById('result')
  const handsDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score')

  if (score == -1) {
    resultDiv.innerHTML = 'You Lose!'
  } else if (score == 0) {
    resultDiv.innerHTML = 'It\'s a tie!'
  }else {
    resultDiv.innerHTML = 'You Won!'
  }

  handsDiv.innerHTML = `person: ${playerChoice} vs computer: ${computerChoice}`
  playerScoreDiv.innerHTML = `Your Score: ${totalScore['playerScore']}`
}

// Calculates who won and show it on the screen 
const onClickRPS = (playerChoice) => {
  
  const computerChoice = getComputerChoice()
  
  const score = getResult(playerChoice, computerChoice)
  totalScore['playerScore'] += score
  
  showResult(score, playerChoice, computerChoice)
}


// RPS buttons actively listen for a click and do something once a click is detected 
const playGame = () => {
  
  // Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked 
  const rpsButtons = document.querySelectorAll('.rpsButton')
   
 rpsButtons.forEach(rpsButton => {
  rpsButton.onclick  = () => onClickRPS(rpsButton.value)
 })
 
 const endGameButton = document.querySelector('#endGameButton')
 endGameButton.onclick = () => endGame(totalScore); 
  
}

// endGame function clears all the text on the DOM
const endGame = (totalScore) => {
 totalScore['playerScore'] = 0
 totalScore['computerScore'] = 0

 const resultDiv = document.getElementById('result')
  const handsDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score')

  resultDiv.innerHTML = ''
  handsDiv.innerHTML = ''
  playerScoreDiv.innerHTML = ''
}

playGame()














/*
// Select Random item from array
const randomStuff = (stuff) => {

  let randomNum =  Math.floor(Math.random() * stuff.length)

  return stuff[randomNum];
}

let stuff = ['apple', 'egg', 'turkey', 'ice-cream']
console.log(randomStuff(stuff));


const weatherScore = (weather) => {

  let score;  
  if (weather == 'rainy'){
     score = +1;
  } else if (weather == 'sunny') {
     score = -1;
  } else {
     score = 0;
  } 
  return score;
}
console.log(weatherScore('sunny'));

*/










