

// +++++++++++++++++++++++++++++++++++++++GAME+++++++++++++++++++++++++++++++
function aiTurn(arr){
  for(let i = 0; i < arr.length; i++){
    if(ceil[arr[i]].innerHTML !== "X" && ceil[arr[i]].innerHTML !== "O"){
      
      dataO.push(arr[i])
      ceil[arr[i]].classList.remove('hover')
      stepCount++
      return ceil[arr[i]].innerHTML = 'O'
    }
  }
}

function check(arr){
  for (let i = 0; i < winCombinations.length;  i++) {
    let someWinArr = winCombinations[i],
    count = 0;
      for (let k = 0; k < someWinArr.length; k++){
        if (arr.indexOf(someWinArr[k]) !== -1) {
          count++
          if (count == 2){
            // console.log(winCombinations[i])
            arrayRandom = winCombinations[i].concat(arrayRandom)
            // console.log(arrayRandom)
          }
        }
      }
    count = 0
  }
}

function checkWin(arr){
  for (let i = 0; i < winCombinations.length;  i++) {
    let someWinArr = winCombinations[i],
    count = 0;
      for (let k = 0; k < someWinArr.length; k++){
        if (arr.indexOf(someWinArr[k]) !== -1) {
          count++
          if (count == 3){
            ceil.forEach(element => element.removeEventListener('click', currentStep));
            return true, gameCount++, (arr === dataO) ? scoreAi++ : scorePlayer++, printScore()
          }
        }
      }
    count = 0
  }
}

function printScore(){

  document.querySelector('.playerScore').innerHTML = `${scorePlayer}`
  document.querySelector('.drawScore').innerHTML = `${scoreDraw}`
  document.querySelector('.compScore').innerHTML = `${scoreAi}`
  document.querySelector('.countGames').innerHTML = `Games played: ${gameCount}`
}

function scoreReset() {
  gameCount = 0
  scorePlayer = 0
  scoreAi = 0
  scoreDraw = 0
  printScore()
}


function currentStep(){
  if(!this.innerHTML){
    playerScore = document.querySelector('.playerScore')
    compScore = document.querySelector('.compScore')
    let num = +this.getAttribute('data-ceil')
    this.innerHTML = 'X'
    this.classList.remove('hover')
    dataX.push(num)
    checkWin(dataX)
    stepCount++
    if(dataX == 2 && ceil[0].innerHTML == 'X', ceil[8].innerHTML == 'X' || dataX == 2 && ceil[2].innerHTML == 'X', ceil[6].innerHTML == 'X'){
      arrayRandom.unshift(1)
    }
       
    check(dataX)
    check(dataO)
    aiTurn(arrayRandom)
    checkWin(dataO)
    arrayRandom = [4,8,2,1,6,5,3,7,0]

    if(stepCount === 9 && !checkWin(dataX) && !checkWin(dataO) ){
      scoreDraw++
      gameCount++
      printScore()
    }
    // console.log('stepCount :',stepCount)
    // console.log('dataX :',dataX)
    // console.log('dataO :',dataO)

  }

}



document.querySelector('.reset').addEventListener('click', scoreReset)
