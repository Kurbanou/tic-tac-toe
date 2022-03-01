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

function midlOrCorner(){ //AI занять центр или угол только на первом шагу
  if(ceil[4].innerHTML == ''){ceil[4].innerHTML = 'O'; stepCount++; dataO.push(4); ceil[4].classList.remove('hover'); return console.log('free ceil') }
  else if(ceil[0].innerHTML == ''){ceil[0].innerHTML = 'O'; stepCount++; dataO.push(0); ceil[0].classList.remove('hover'); return console.log('free ceil')}
  else if(ceil[2].innerHTML == ''){ceil[2].innerHTML = 'O'; stepCount++; dataO.push(2); ceil[2].classList.remove('hover'); return console.log('free ceil')}
  else if(ceil[6].innerHTML == ''){ceil[6].innerHTML = 'O'; stepCount++; dataO.push(6); ceil[6].classList.remove('hover'); return console.log('free ceil')}
  else if(ceil[8].innerHTML == ''){ceil[8].innerHTML = 'O'; stepCount++; dataO.push(8); ceil[8].classList.remove('hover'); return console.log('free ceil')}
}

function currentStep(){
  if(!this.innerHTML){
    let num = +this.getAttribute('data-ceil')
    this.innerHTML = 'X'
    this.classList.remove('hover')
    dataX.push(num)
    stepCount++
    

    if(dataX.length === 1){midlOrCorner()}
    // else{
    //   stepAiBest(dataO, num)
    //   stepPlBest(dataX, num)
    // }
    else if(dataX.length === 2){stepPlBest(dataX, num)}



    else if(dataX.length > 2){
      stepAiBest(dataO)
      


    }



    console.log('stepCount :',stepCount)   
    console.log('dataX :',dataX)
    console.log('dataO :',dataO)

  }
}
function stepAiBest(arr){
  for (let i = 0; i < winCombinations.length;  i++) {
    let someWinArr = winCombinations[i],
      count = 0;
    
      for (let k = 0; k < someWinArr.length; k++) {
        if (arr.indexOf(someWinArr[k]) !== -1) {
          count++
          if (count === 2) {
            console.log(winCombinations[i])

            if (ceil[winCombinations[i][0]].innerHTML == ''){
              ceil[winCombinations[i][0]].innerHTML = 'O'
              stepCount++
              dataO.push(winCombinations[i][0])
              ceil[winCombinations[i][0]].classList.remove('hover')
              console.log('step[0]')
            }
            else if (ceil[winCombinations[i][1]].innerHTML == ''){
              ceil[winCombinations[i][1]].innerHTML = 'O'
              stepCount++
              dataO.push(winCombinations[i][1])
              ceil[winCombinations[i][1]].classList.remove('hover')
              console.log('step[1]')
            }
            else if (ceil[winCombinations[i][2]].innerHTML == ''){
              ceil[winCombinations[i][2]].innerHTML = 'O'
              stepCount++
              dataO.push(winCombinations[i][2])
              ceil[winCombinations[i][2]].classList.remove('hover')
              console.log('step[2]')
            }

          }
          if(count === 3){
            console.log('count ===3 ')
            for(let i = 0; i<ceil.length; i++){
            ceil[i].removeEventListener('click', currentStep)}
          }
        }
      }     
  }
}

function stepPlBest(arr, number) {
  for (let i = 0; i < winCombinations.length;  i++) {
    let someWinArr = winCombinations[i],
      count = 0;
    if (someWinArr.indexOf(number) !== -1) {
      for (let k = 0; k < someWinArr.length; k++) {
        if (arr.indexOf(someWinArr[k]) !== -1) {
          count++
          if (count === 1) {
            midlOrCorner()

          }
          if (count === 2) {
            console.log(winCombinations[i])

            if (ceil[winCombinations[i][0]].innerHTML == ''){
              ceil[winCombinations[i][0]].innerHTML = 'O'
              stepCount++
              dataO.push(winCombinations[i][0])
              ceil[winCombinations[i][0]].classList.remove('hover')
              console.log('step[0]')
            }
            else if (ceil[winCombinations[i][1]].innerHTML == ''){
              ceil[winCombinations[i][1]].innerHTML = 'O'
              stepCount++
              dataO.push(winCombinations[i][1])
              ceil[winCombinations[i][1]].classList.remove('hover')
              console.log('step[1]')
            }
            else if (ceil[winCombinations[i][2]].innerHTML == ''){
              ceil[winCombinations[i][2]].innerHTML = 'O'
              stepCount++
              dataO.push(winCombinations[i][2])
              ceil[winCombinations[i][2]].classList.remove('hover')
              console.log('step[2]')
            }
            else {console.log('hz')}

          }
          if(count === 3){
            console.log('count ===4 ')
            for(let i = 0; i<ceil.length; i++){
            ceil[i].removeEventListener('click', currentStep)}
          }
        }
      }
      count = 0
    }
  }
}

// function randomTurn(arr){
//   for(let i = 0; i < arr.length; i++){
//     if (!arr)
//   }

// }



