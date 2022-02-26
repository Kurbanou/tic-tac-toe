const main = document.querySelector('main')
const start = document.querySelector('[data-text]')
const footer = document.querySelector('footer')

// ++++++++++++++++++++++++++++++++++++++++++++++++++

function createApp(){
    const app = document.createElement('section')
    app.classList.add('app')
    main.append(app)
    let ceil = []
    ceil.length=9

    const innerAppFirst = document.createElement('div')
    innerAppFirst.classList.add('app__inner')
    app.append(innerAppFirst)
    const innerAppSecond = document.createElement('div')
    innerAppSecond.classList.add('app__inner')
    app.append(innerAppSecond)

    function newGame(){
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
            innerAppFirst.append(game)
            for(let i = 0; i<ceil.length; i++){
                function sss(){
                ceil[i] = document.createElement('div')
                ceil[i].classList.add('ceil','hover')
                ceil[i].setAttribute('data-ceil', i)
                ceil[i].style.backgroundColor = `${color}`
                ceil[i].innerHTML = 'X'
                game.append(ceil[i])}
                setTimeout( function(){sss()}, i*80)
            }
        }
        else{
            innerAppFirst.append(game)
            for(let i = 0; i<ceil.length; i++){
                function sss(){
                ceil[i] = document.createElement('div')
                ceil[i].classList.add('ceil','hover')
                ceil[i].setAttribute('data-ceil', i)
                ceil[i].style.backgroundColor = `${color}`
                ceil[i].innerHTML = 'X'
                game.append(ceil[i])}
                setTimeout( function(){sss()}, i*80)
            }
        }
    }

    function createTable(){
        const table =document.createElement('div')
        table.classList.add('table')
        innerAppSecond.append(table)
        const message = document.createElement('div')
        message.classList.add('message')
        message.innerHTML = 'Player turn'
        table.append(message)
        const countGames =document.createElement('div')
        countGames.classList.add('countGames')
        countGames.innerHTML = 'Games played: 0'
        table.append(countGames)
        const score =document.createElement('div')
        score.classList.add('score')
        table.append(score)
        const player =document.createElement('div')
        player.classList.add('player')
        player.innerHTML = 'Player'
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
        resetScore.innerHTML = 'Reset score'
        table.append(resetScore)
        resetScore.addEventListener('click', newGame)
        setTimeout( function(){
            table.classList.add('show')
        }, 1000)
    }

    function createFooter(){
        const footerBody = document.createElement('div')
        footerBody.classList.add('footerBody')
        footer.append(footerBody)




    }
    newGame()
    createTable()
    createFooter()


}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

start.addEventListener('click', createApp)

