let gameCount, playerName, scoreplayer, scoreAi, scoreDraw, gameInfo;
const start = document.querySelector('[data-text]')
gameInfo = 'Player turn'
gameCount = 0
playerName = 'Player'
scoreplayer = 0
scoreAi = 0
scoreDraw = 0
let stepCount = 0
const winCombinations = [
    [0, 1, 2], // Horizontals
    [0, 3, 6],
    [3, 4, 5],
    [1, 4, 7], // Verticals
    [6, 7, 8],
    [2, 5, 8],
    [0, 4, 8], // Diagonals
    [2, 4, 6],
  ]

start.addEventListener('click', createApp)
function currentStep(){

    if(!this.innerHTML){
    this.innerHTML = 'X'
    this.classList.remove('hover')
    stepCount++
    console.log( random(1))


    }
    return stepCount

}





