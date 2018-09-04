

var hamburger = document.querySelector('.hamburger')
var hamburgerNav = document.querySelector('.hamburger-nav')

function active() {
    this.classList.toggle('is-active')
    hamburgerNav.classList.toggle('add')
}

hamburger.addEventListener('click', active)