// +++++++++++++++++++++++++++++++++++++++GAME+++++++++++++++++++++++++++++++
const options = document.querySelector('.menu__table')
let level = options.querySelector('.active').innerHTML
setLevel()


function setLevel(){
  const gameLev = document.querySelectorAll('.option')
  gameLev.forEach(elem => elem.addEventListener('click', function(){
    level = this.innerHTML
    newGame()
  }))
}

function randomAi(){

  arrayRandom = [4,0,1,2,3,4,5,6,7,8]
  if(ceil[4].innerHTML === 'X'){
    arrayRandom.unshift(2)
    return
  }
}

function check(arr){//hard add
  for (let i = 0; i < winCombinations.length;  i++) {
    let someWinArr = winCombinations[i],
    count = 0;
      for (let k = 0; k < someWinArr.length; k++){
        if (arr.indexOf(someWinArr[k]) !== -1) {
          count++
          if (count == 2){
            arrayRandom = winCombinations[i].concat(arrayRandom)
          }
          if (level == 'hard' && count == 1 && ceil[7].innerHTML == 'X' && ceil[5].innerHTML == 'X' ){
            arrayRandom.unshift(6)
          }
          if (level == 'hard' && count == 1 && ceil[6].innerHTML == 'X' && ceil[2].innerHTML == 'X' ){
            arrayRandom.unshift(7)
          }
        }
      }
    count = 0
  }
}

function aiTurn(arr){ //arrayRandom
  stepCount++
  for(let i = 0; i < arr.length; i++){
    if(ceil[arr[i]].innerHTML !== "X" && ceil[arr[i]].innerHTML !== "O"){
      dataO.push(arr[i])
      ceil[arr[i]].classList.remove('hover')
      return ceil[arr[i]].innerHTML = 'O'
    }
  }
}

function printScore(){
  document.querySelector('.playerScore').innerHTML = `${scorePlayer}`
  document.querySelector('.drawScore').innerHTML = `${scoreDraw}`
  document.querySelector('.compScore').innerHTML = `${scoreAi}`
  document.querySelector('.countGames').innerHTML = `Games played: ${gameCount}`
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
            let winarr = winCombinations[i]
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
  stepCount++
  randomAi()
  if(!this.innerHTML){
    playerScore = document.querySelector('.playerScore')
    compScore = document.querySelector('.compScore')
    let num = +this.getAttribute('data-ceil')
    this.innerHTML = 'X'
    this.classList.remove('hover')
    dataX.push(num)
  }

  stepAi()

  if(!checkWin(dataX)){
    aiTurn(arrayRandom)
  }

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
}

function stepAi(){
  if(level == 'easy'){
    return
  }
  else{
    check(dataX)
    check(dataO)
    checkWin(dataX)
    checkWin(dataO)
    return
  }
}

