let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu')
let overlay = document.getElementById('overlay-menu-1')

btnMenu.addEventListener('click', () =>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', () =>{
    menu.classList.remove('abrir-menu')
})
overlay.addEventListener('click', () =>{
    menu.classList.remove('abrir-menu')
})