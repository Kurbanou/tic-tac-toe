// +++++++++++++++++++++++++++++++++++++++GAME+++++++++++++++++++++++++++++++
function aiTurn(arr){ //arrayRandom
  for(let i = 0; i < arr.length; i++){
    if(ceil[arr[i]].innerHTML !== "X" && ceil[arr[i]].innerHTML !== "O"){
      dataO.push(arr[i])
      ceil[arr[i]].classList.remove('hover')
      stepCount++
      return ceil[arr[i]].innerHTML = 'O'
    }
  }
}

function randomAi(){
  arrayRandom = [4,0,1,2,3,4,5,6,7,8]
  if(ceil[4].innerHTML === 'X'){
    arrayRandom.unshift(2)
    return console.log('0')

  }
  if(ceil[7].innerHTML == 'X' && ceil[5].innerHTML == 'X'){
    arrayRandom.unshift(2)
    return console.log('1')
  }
  if(ceil[6].innerHTML == 'X' && ceil[2].innerHTML == 'X'){
    arrayRandom.unshift(1)
    return console.log('2')
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
            arrayRandom = winCombinations[i].concat(arrayRandom)
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

document.querySelector('.reset').addEventListener('click', scoreReset)

function checkWin(arr){
  for (let i = 0; i < winCombinations.length;  i++) {
    let someWinArr = winCombinations[i],
    count = 0;
      for (let k = 0; k < someWinArr.length; k++){
        if (arr.indexOf(someWinArr[k]) !== -1) {
          count++
          if (count == 3){
            ceil.forEach(element => element.removeEventListener('click', currentStep));

            let winarr = winCombinations[i]
            console.log(winCombinations[i],winarr)
            for(let w = 0; w <winarr.length; w++){
              ceil[winarr[w]].style.backgroundColor = "white"
              ceil[winarr[w]].style.color = "red"
            }
            return true
          }
        }
      }
    count = 0
  }
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++

function currentStep(){

  randomAi()
  if(!this.innerHTML){
    playerScore = document.querySelector('.playerScore')
    compScore = document.querySelector('.compScore')
    let num = +this.getAttribute('data-ceil')
    this.innerHTML = 'X'
    this.classList.remove('hover')
    dataX.push(num)
    stepCount++
    stepAi()
    if(!checkWin(dataX)){
    aiTurn(arrayRandom)
    }
    stepAi()

    if(checkWin(dataX)){
      scorePlayer++
      gameCount++
      printScore()
    }

    if(checkWin(dataO)){
      scoreAi++
      gameCount++
      printScore()
    }
    if(stepCount === 9 && !checkWin(dataX) && !checkWin(dataO) ){//Draw +++++++++++
      ceil.forEach(element => element.removeEventListener('click', currentStep));
      scoreDraw++
      gameCount++
      printScore()
    }
    // console.log('stepCount :',stepCount)
    // console.log('dataX :',dataX)
    // console.log('dataO :',dataO)
  }
}

function stepAi(){
  check(dataX)
  check(dataO)
  checkWin(dataX)
  checkWin(dataO)
  return
}

