

var hamburger = document.querySelector('.hamburger')


function active() {
    this.classList.toggle('is-active')
}

hamburger.addEventListener('click', active)