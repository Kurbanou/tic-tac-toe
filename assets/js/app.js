let gameCount, playerName, scoreplayer, scoreAi, scoreDraw, gameInfo;
let dataX = []
let dataO = []
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
    let num = +this.getAttribute('data-ceil')
    this.innerHTML = 'X'
    this.classList.remove('hover')
    dataX.push(num)
    stepCount++

    if(dataX.length < 2 ){freeCeil()}
    else{step(dataX, num)}



    // console.log(stepCount)
    // console.log(dataO)
    console.log(dataX)


  }




}

function freeCeil(){
  if(ceil[4].innerHTML == ''){ceil[4].innerHTML = 'O'; stepCount++; dataO.push('4')}
  else if(ceil[0].innerHTML == ''){ceil[0].innerHTML = 'O'; stepCount++; dataO.push('0')}
  else if(ceil[2].innerHTML == ''){ceil[2].innerHTML = 'O'; stepCount++; dataO.push('2')}
  else if(ceil[6].innerHTML == ''){ceil[6].innerHTML = 'O'; stepCount++; dataO.push('6')}
  else if(ceil[8].innerHTML == ''){ceil[8].innerHTML = 'O'; stepCount++; dataO.push('8')}
}




function step(arr, number) {
  for (let i = 0; i < winCombinations.length;  i++) {
    let someWinArr = winCombinations[i],
      count = 0;
    if (someWinArr.indexOf(number) !== -1) {
      for (let k = 0; k < someWinArr.length; k++) {
        if (arr.indexOf(someWinArr[k]) !== -1) {
          count++
          if (count === 2) {
            return console.log(winCombinations[i])
          }
        }
      }
      count = 0
    }
  }
}





