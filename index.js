const main = document.querySelector('main')
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
    ceil.length=9      
    for(let i = 0; i<ceil.length; i++){
        ceil[i] = document.createElement('div')
        ceil[i].classList.add('ceil')
        ceil[i].setAttribute('data-ceil', i)        
        game.append(ceil[i])
    }
}
createApp()
