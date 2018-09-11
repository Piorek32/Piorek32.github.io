

var hamburger = document.querySelectorAll('.hamburger')
var hamburgerNav = document.querySelectorAll('.hamburger-nav')
console.log(hamburger)
function active() {
    this.classList.toggle('is-active')
   // hamburgerNav.classList.toggle('add')
   this.nextElementSibling.classList.add('add')
}

hamburger.forEach(hamb => hamb.addEventListener('click', active))


var stages = document.querySelectorAll('[id^=stage]')
var contactBtn = document.querySelectorAll('.nav-Contact')
var aboutBtn = document.querySelectorAll('.nav-aboutME')
var projectBtn = document.querySelectorAll('.nav-project')
var homeBtn = document.querySelectorAll('.nav-home')


var aboutStage = document.querySelector('#stage-aboutME')
var contactStage = document.querySelector('.contact-content')
var projectStage = document.querySelector('.project-content')
var homeStage = document.querySelector('.hero')


contactBtn.forEach(btn => btn.addEventListener('click', function () {
    hamburger.forEach(hamb => hamb.classList.remove('is-active'))
    hamburgerNav.forEach(hamb => hamb.classList.remove('add'))
    stages.forEach(stage => stage.classList.remove('add'))
    contactStage.classList.add('add')

}))

aboutBtn.forEach(btn => btn.addEventListener('click', function () {
    hamburger.forEach(hamb => hamb.classList.remove('is-active'))
    hamburgerNav.forEach(hamb => hamb.classList.remove('add'))
    stages.forEach(stage => stage.classList.remove('add'))
    aboutStage.classList.add('add')
}))

projectBtn.forEach(btn => btn.addEventListener('click', function () {
    hamburger.forEach(hamb => hamb.classList.remove('is-active'))
    hamburgerNav.forEach(hamb => hamb.classList.remove('add'))
    stages.forEach(stage => stage.classList.remove('add'))
    projectStage.classList.add('add')

}))
//
homeBtn.forEach(btn => btn.addEventListener('click', function () {
    hamburger.forEach(hamb => hamb.classList.remove('is-active'))
    hamburgerNav.forEach(hamb => hamb.classList.remove('add'))
    stages.forEach(stage => stage.classList.remove('add'))
    homeStage.classList.add('add')

}))

