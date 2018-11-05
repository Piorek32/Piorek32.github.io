const heros = document.querySelector('.hero');
const text = heros.querySelector('h1');
const text2 = heros.querySelector('.title-down')
const walk = 10; // 500px

function shadow(e) {
    const { offsetWidth: width, offsetHeight: height } = heros;
    let { offsetX: x, offsetY: y } = e;

    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2))
    text.style.textShadow =
        `${xWalk}px ${yWalk}px 0 rgba(255, 255, 255, 0.58)`;

    text2.style.textShadow =
        `${xWalk}px ${yWalk}px 0 rgba(255, 255, 255, 0.58)`;


}

heros.addEventListener('mousemove', shadow);



var skilssss = document.querySelector(".skills")
var temp = skilssss.querySelectorAll('div')


function debounce(func, wait = 10, immediate = true) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

//const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide() {
    temp.forEach(sliderImage => {

        const slideInAt = (window.scrollY + window.innerHeight) - 150;
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        if (isHalfShown ) {
            sliderImage.classList.add('out')
        } else {
            sliderImage.classList.remove('out')
        }
    });
}

window.addEventListener('scroll', debounce(checkSlide));