const main = document.querySelector('main')
const start = document.querySelector('a')


// ++++++++++++++++++++++++++++++++++++++++++++++++++

function createApp(){
    const app = document.createElement('section')
    app.classList.add('app')
    main.append(app)
    const game = document.createElement('div')
    game.classList.add('game')
    app.append(game)
    const table =document.createElement('div')
    table.classList.add('table')
    app.append(table)
    let ceil = []
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 10)
    }
    ceil.length=9
    for(let i = 0; i<ceil.length; i++){
        function sss(){
        ceil[i] = document.createElement('div')
        ceil[i].classList.add('ceil','hover')
        ceil[i].setAttribute('data-ceil', i)
        ceil[i].style.backgroundColor = `${color}`
        game.append(ceil[i])}
        setTimeout( function(){sss()}, i*120)
    }

    function createTable(){
        const message = document.createElement('div')
        message.classList.add('message')
        message.innerHTML = 'Ходит игрок'
        table.append(message)
        const countGames =document.createElement('div')
        countGames.classList.add('countGames')
        countGames.innerHTML = 'Сыгранно игр : 0'
        table.append(countGames)
        const score =document.createElement('div')
        score.classList.add('score')
        table.append(score)
        const player =document.createElement('div')
        player.classList.add('player')
        player.innerHTML = 'Имя игрока'
        score.append(player)
        const draw = document.createElement('div')
        draw.classList.add('draw')
        draw.innerHTML = 'Ничьи'
        score.append(draw)
        const comp = document.createElement('div')
        comp.classList.add('comp')
        comp.innerHTML = 'Компьютер'
        score.append(comp)
        const playerScore =document.createElement('div')
        playerScore.classList.add('playerScore')
        playerScore.innerHTML = '0'
        score.append(playerScore)
        const drawScore = document.createElement('div')
        drawScore.classList.add('drawScore')
        drawScore.innerHTML = '0'
        score.append(drawScore)
        const compScore = document.createElement('div')
        compScore.classList.add('compScore')
        compScore.innerHTML = '0'
        score.append(compScore)
        const resetScore = document.createElement('div')
        resetScore.classList.add('resetScore')
        resetScore.innerHTML = 'Сбросить счет'
        table.append(resetScore)
    }
    setTimeout( function(){
        createTable()
        table.classList.add('show')
    }, 1500)

}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++



start.addEventListener('click', createApp)

