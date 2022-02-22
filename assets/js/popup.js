const popupInfo = document.querySelector('.gameinfo')  // .gameinfo для опред попапа , если попапов больше => дублировать функции с их именами
const popBody = document.querySelector('.popup__content')
const popCls = document.querySelector('.x')


function openPopupInfo(){ // попап с информацией
    popupInfo.classList.toggle('popup_open')
    document.body.classList.toggle('open')

    if(popupInfo.classList.contains('popup_open')){
        popBody.style.transitionDelay = `0.9s`
        document.querySelector('.main__nav').style.display ='none' //если использовать burger-nav

    }
    else{
        popBody.style.transitionDelay = '0s'
        document.querySelector('.menu__nav').style.display ='flex' //если использовать burger-nav
    }

}


function popClose (){
    openPopupInfo()
}
popCls.addEventListener('click', popClose)
