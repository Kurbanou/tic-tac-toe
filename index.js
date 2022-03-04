const main = document.querySelector('main')
const footer = document.querySelector('footer')
let gameCount, playerName, scorePlayer, scoreAi, scoreDraw, gameInfo;
let dataX = []
let dataO = []
const start = document.querySelector('[data-text]')
start.addEventListener('click', createApp)
gameInfo =  'Game'
gameCount = 0
playerName = 'Player'
scorePlayer = 0
scoreAi = 0
scoreDraw = 0
let stepCount = 0
let arrayRandom = []
let ceil = []
    ceil.length=9
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




// ++++++++++++++++++++++++++++++++++++++++++++++++++

function createInner(){
    const app = document.createElement('section')
    app.classList.add('app')
    main.append(app)
    const innerAppFirst = document.createElement('div')
    innerAppFirst.classList.add('app__inner', 'Game')
    app.append(innerAppFirst)
    const innerAppSecond = document.createElement('div')
    innerAppSecond.classList.add('app__inner', 'Table')
    app.append(innerAppSecond)

}
createInner()
createTable()
createFooter()

function newGame(){

    stepCount = 0
    dataX = []
    dataO = []
    const innerAppFirst = document.querySelector('.Game')
    const colorGarme = ['#b62b6e','#9628c6','#4374b7','#98c807','#b1a24a','#ef9421','#d13814']
    let color
    for (let i = 0; i < 6; i++) {
        color = colorGarme[Math.floor(Math.random() * 7)]
    }
    document.documentElement.style.setProperty('--color', `${color}`)
    const game = document.createElement('div')
    game.classList.add('game')

    if(document.querySelector('.game')) {
        document.querySelector('.game').remove()
    }
    innerAppFirst.append(game)
    for(let i = 0; i<ceil.length; i++){
        function sss(){
        ceil[i] = document.createElement('div')
        ceil[i].classList.add('ceil','hover')
        ceil[i].setAttribute('data-ceil', i)
        ceil[i].style.backgroundColor = `${color}`
        ceil[i].addEventListener('click', currentStep)
        game.append(ceil[i])}
        setTimeout( function(){sss()}, i*80)

    }

}

function createTable(){
    const innerAppSecond = document.querySelector('.Table')
    const table =document.createElement('div')
    table.classList.add('table','border-animate')
    innerAppSecond.append(table)
    const message = document.createElement('div')
    message.classList.add('message')
    message.innerHTML = gameInfo
    table.append(message)
    const countGames =document.createElement('div')
    countGames.classList.add('countGames')
    countGames.innerHTML = `Games played: ${gameCount}`
    table.append(countGames)
    const score =document.createElement('div')
    score.classList.add('score')
    table.append(score)
    const player =document.createElement('div')
    player.classList.add('player')
    player.innerHTML = playerName
    score.append(player)
    const draw = document.createElement('div')
    draw.classList.add('draw')
    draw.innerHTML = 'Draw'
    score.append(draw)
    const comp = document.createElement('div')
    comp.classList.add('comp')
    comp.innerHTML = 'AI'
    score.append(comp)
    const playerScore =document.createElement('div')
    playerScore.classList.add('playerScore')
    playerScore.innerHTML = scorePlayer
    score.append(playerScore)
    const drawScore = document.createElement('div')
    drawScore.classList.add('drawScore')
    drawScore.innerHTML = scoreDraw
    score.append(drawScore)
    const compScore = document.createElement('div')
    compScore.classList.add('compScore')
    compScore.innerHTML = scoreAi
    score.append(compScore)
    const innerButton= document.createElement('div')
    innerButton.classList.add('inner__button')
    table.append(innerButton)
    const reGame = document.createElement('button')
    reGame.classList.add('learn-more', 'newGame')
    reGame.innerHTML = `<span class="circle" aria-hidden="true">
                        <span class="icon arrow"></span>
                        </span>
                        <span class="button-text">new game</span>`
    innerButton.append(reGame)
    reGame.addEventListener('click', newGame)
    const resetScore = document.createElement('button')
    resetScore.classList.add('learn-more', 'reset')
    resetScore.innerHTML = `<span class="circle" aria-hidden="true">
                            <span class="icon arrow"></span>
                            </span>
                            <span class="button-text">reset score</span>`
    innerButton.append(resetScore)

}

function createFooter(){
    const container = document.createElement('div')
    container.classList.add('container')
    container.innerHTML = `
    <div class="footerbody">
        <div class="footerbody__item git">
            <a href="https://github.com/Kurbanou" target="blank">
                <svg aria-hidden="true" height="24" viewBox="0 0 16 16" version="1.1" width="24" data-view-component="true" class="git_svg">
                <path class="st0" fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
            </a>
            <span>© 2021 Kurbanou, Inc.</span>
        </div>
        <div class="footerbody__item rs_school">
            <a href="https://rs.school/js/" target="blank"><img src="./assets/img/RS.svg" alt="rs school" width="70">
            </a>
        </div>
        <div class="footerbody__item contact">
            <ul>
                <li><a href="mailto:kurbanou.faridun@gmail.com">kurbanou.faridun@gmail.com</a></li>
                <li><a href="https://t.me/OttFonBismark" target="blank">https://t.me/OttFonBismark</a></li>
            </ul>
        </div>
    </div>`
    footer.append(container)
}
function ceilShow (){
    const ceil = document.querySelectorAll('.ceil')
    ceil.forEach(el => el.classList.remove('hide'))
}



function createApp(){
    setTimeout( function(){
       document.querySelector('.table').classList.add('show')
    }, 1000)
    setTimeout( function(){
        document.querySelector('.container').classList.add('show')
    }, 1000)
    newGame()
}