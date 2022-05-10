


function changeBg(){
    var navbar = document.getElementById('navbar')
    var navScroll = window.scrollY

    if(navScroll < 390){
        navbar.style.background = 'transparent'
    }else{
        navbar.style.background = 'rgba(33,37,41,1)'
    }
    console.log(navScroll)

}

window.addEventListener('scroll', changeBg)