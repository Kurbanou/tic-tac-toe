const menu = document.querySelector('.main__menu')
const links = menu.getElementsByTagName('a')
const li = menu.getElementsByTagName('li')

setTimeout(function () {
    burger();
}, 3000);

function randomBg(){ //dark color onli
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += Math.floor(Math.random() * 10);
        }
        document.documentElement.style.setProperty('--burger-color', `${color}`)
}

function burger() {
    document.body.classList.toggle('open')
    for (let i = 0; i < li.length; i++){
        if(document.body.classList.contains('open')){
            li[i].style.transitionDelay = `${i * 0.1 + 0.65}s`
        }
        else{li[i].style.transitionDelay = '0s'}
    }
}

/*для добавления атрибута и стилизации https://codepen.io/hexagoncircle/pen/OMJeja */
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click',burger)
    links[i].setAttribute('data-text', links[i].innerHTML)
}