var startBtn = document.querySelector('#button')
var contactBtn = document.querySelectorAll('.contactBtn')
var aboutBtn = document.querySelectorAll('.aboutBtn')
var projectBtn = document.querySelectorAll('.projectBtn')
var homeBtn = document.querySelectorAll('.homeBtn')

var stages = document.querySelectorAll('[id^=stage]')

var aboutStage = document.querySelector('#stage-aboutME')
var contactStage = document.querySelector('.contact-content')
var projectStage = document.querySelector('.project-content')
var homeStage = document.querySelector('.hero')
var singleProjectStage = document.querySelector('#stage-singleProject')
var mobileAppLink = document.querySelector('#mobileApp')

var trigelDown = document.querySelector('#triangle-down')
var trigelUP = document.querySelector('#triangle-up')

var heroStage = document.querySelector('.hero')
var startScreen = document.querySelector('#startscreen')
function activeHome() {
    removeStages()
    trigelDown.classList.toggle('usenand')
    trigelUP.classList.toggle('usenand')
    heroStage.classList.add('krassInefade')

    heroStage.classList.add('add')
   startScreen.classList.add('remo')
    this.classList.add('flow')
}
startBtn.addEventListener('click', activeHome)

async function removeStages() {
    
    stages.forEach(stage => stage.style.transform.scale= "1.2");
    
    stages.forEach(stage => stage.classList.remove('add'));

}

function contact() {
    contactStage.classList.add('add')
}


function about () {
    aboutStage.classList.add('add')
}

function project () {
    projectStage.classList.add('add')
}
function home() {
    heroStage.classList.add('add');
   
}
function AppStage() {
    
    singleProjectStage.classList.add('add');
   
}

contactBtn.forEach(btn => btn.addEventListener('click', removeStages));
contactBtn.forEach(btn => btn.addEventListener('click', contact));
aboutBtn.forEach(btn => btn.addEventListener('click', removeStages));
aboutBtn.forEach(btn => btn.addEventListener('click', about));
projectBtn.forEach(btn => btn.addEventListener('click', removeStages));
projectBtn.forEach(btn => btn.addEventListener('click', project));
homeBtn.forEach(btn => btn.addEventListener('click', removeStages));
homeBtn.forEach(btn => btn.addEventListener('click', home));


mobileAppLink.addEventListener('click', removeStages);
mobileAppLink.addEventListener('click', AppStage);



