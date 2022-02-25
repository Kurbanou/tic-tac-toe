const main = document.querySelector('main')
const start = document.querySelector('[data-text]')
const footer = document.querySelector('footer')
// random color ++++++++++++++++++++++++++++++++++++++++++++++++
let color = '#'
    for (let i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 10)
    }
document.documentElement.style.setProperty('--color', `${color}`)
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




// ++++++++++++++++++++++++++++++++++++++++++++++++++

function createApp(){
    const app = document.createElement('section')
    app.classList.add('app')
    main.append(app)
    let ceil = [] 
    ceil.length=9

    function newGame(){   
        const game = document.createElement('div')
        game.classList.add('game')
          
        if(document.querySelector('.game')) {
            console.log('1')
            game.remove()
        }
        else{
            app.append(game)         
            for(let i = 0; i<ceil.length; i++){
                function sss(){
                ceil[i] = document.createElement('div')
                ceil[i].classList.add('ceil','hover')
                ceil[i].setAttribute('data-ceil', i)
                ceil[i].style.backgroundColor = `${color}`   
                ceil[i].innerHTML = 'X'             
                game.append(ceil[i])}        
                setTimeout( function(){sss()}, i*120)
            }
        }      
    }

    function createTable(){
        const table =document.createElement('div')
        table.classList.add('table','show')
        app.append(table)
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
    }
    
    function createFooter(){
        const footerBody = document.createElement('div')
        footerBody.classList.add('footerBody')
        footer.append(footerBody)      

        

    }
    

    setTimeout( function(){
        createFooter()
        createTable()        
    }, 1500)
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

start.addEventListener('click', createApp)

