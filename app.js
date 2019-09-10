


const textUp = document.querySelector('h1');
const textDown = document.querySelector('.title-down');
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
    removeStages(homeStage)
    trigelDown.classList.toggle('usenand')
    trigelUP.classList.toggle('usenand')
    heroStage.classList.add('krassInefade')

  //  heroStage.classList.add('add')
   startScreen.classList.add('remo')
    this.classList.add('flow')
   
    TweenMax.from(textUp,1, { opacity: 0,  left:"45%", delay : 3.5})
    TweenMax.from(textDown,1, { opacity: 0,  left:"52%", delay : 3.5})
}
startBtn.addEventListener('click', activeHome)

//  function removeStages() {
//     stages.forEach(stage => stage.classList.remove('add'));
// }


  function removeStages(val) {
    var tl = new TimelineLite();
     stages.forEach(stage => {
         tl.to(stage, 2 ,{left:"-100%"})
         .to(val, 0.5, { left : 0})
         .to(val, 1, { scale :(1,1)})
     });
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



