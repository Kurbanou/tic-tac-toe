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

arrayRandom = [4,0,1,2,3,5,6,7,8]

start.addEventListener('click', createApp)


function currentStep(){
  if(!this.innerHTML){
    let num = +this.getAttribute('data-ceil')
    this.innerHTML = 'X'
    this.classList.remove('hover')
    dataX.push(num)
    stepCount++   
    if(dataX.length === 1){
      aiTurn(arrayRandom)
    }
    check(dataX)
    

    // check(dataX)
   
 


    // console.log('stepCount :',stepCount)   
    // console.log('dataX :',dataX)
    // console.log('dataO :',dataO)
    
  }
  
}









function aiTurn(array){  
  for(let i = 0; i < array.length; i++){          
    if(ceil[array[i]].innerHTML !== "X" && ceil[array[i]].innerHTML !== "O"){     
      ceil[array[i]].innerHTML = 'O'
      ceil[array[i]].classList.remove('hover')      
      stepCount++
      dataO.push(array[i])
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
            console.log('best',winCombinations[i])
            a = winCombinations[i].concat(arrayRandom)
            console.log('a',a)
            return   aiTurn(a)         
          }          
        }  
      }
    count = 0
  }
}

