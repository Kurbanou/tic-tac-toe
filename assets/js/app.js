// +++++++++++++++++++++++++++++++++++++++GAME+++++++++++++++++++++++++++++++
function aiTurn(arr){
  for(let i = 0; i < arr.length; i++){
    if(ceil[arr[i]].innerHTML !== "X" && ceil[arr[i]].innerHTML !== "O"){
      ceil[arr[i]].innerHTML = 'O'
      dataO.push(arr[i])
      ceil[arr[i]].classList.remove('hover')
      stepCount++
      return
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
            return arrayRandom = winCombinations[i].concat(arrayRandom)
          }
        }
      }
    count = 0
  }
}

function checkWin(arr,score,inner){
  for (let i = 0; i < winCombinations.length;  i++) {
    let someWinArr = winCombinations[i],
    count = 0;
      for (let k = 0; k < someWinArr.length; k++){
        if (arr.indexOf(someWinArr[k]) !== -1) {
          count++
          if (count == 3){
            ceil.forEach(element => element.removeEventListener('click', currentStep))
            score++  
            inner.innerHTML = `${score}`
            return true
          }
        }
      }
    count = 0
  }
}


function currentStep(){

  if(!this.innerHTML){
    playerScore = document.querySelector('.playerScore')
    compScore = document.querySelector('.compScore')
   

    let num = +this.getAttribute('data-ceil')
    this.innerHTML = 'X'    
    this.classList.remove('hover')  
    dataX.push(num)
    checkWin(dataX, scorePlayer, playerScore)
    if(checkWin(dataX)){
      gameInfo = playerName + ' win'
      document.querySelector('.message').innerHTML = gameInfo      
    }

    stepCount++

    check(dataO)
    check(dataX)
    aiTurn(arrayRandom)
    checkWin(dataO, scoreAi, compScore)
    if(checkWin(dataO)){
      gameInfo = 'AI Win'
      document.querySelector('.message').innerHTML = gameInfo     
    }
    arrayRandom = [4,0,2,1,6,5,3,7,8]
    // console.log('stepCount :',stepCount)
    // console.log('dataX :',dataX)
    // console.log('dataO :',dataO)
    console.log( scorePlayer, scoreAi)
  }
}




