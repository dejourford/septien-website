// NAV OPEN AND CLOSE

const mobileNav = document.querySelector('.mobile-nav')
const heroSection = document.querySelector('.hero')
const mainNav = document.querySelector('.main-nav')
const mainLinks = document.querySelector('.main-links')

closeMenu = () => {
    mobileNav.classList.remove('show')
    mobileNav.classList.add('close')
}

showMenu = () => {
    mobileNav.classList.remove('close')
    mobileNav.classList.add('show')
}

consoleLog = () => {
    console.log('scroll')
}

// HERO TEXT EFFECT
var words = ['SONG PRODUCTION', 'VIDEO', 'SOCIAL MEDIA', 'PROMOTION',
'TRAINING', 'SUMMER PROGRAMS', 'ACTING'];

textSequence(0);
function textSequence(i) {

    if (words.length > i) {
        setTimeout(function() {
            document.querySelector("h1").innerHTML = words[i];
            textSequence(++i);
        }, 2000); // 1 second (in milliseconds)

    } else if (words.length == i) { // Loop
        textSequence(0);
    }

}

// CHANGE NAV COLOR ON SCROLL
// trigger this function every time the user scrolls
const scroll = window.pageYOffset;
if (scroll == 0) {
    // white text
    mainLinks.style.color = 'white'
    
} 



window.onscroll = function (event) {
    
    const scroll = window.pageYOffset;
    
    if (scroll == 0 || scroll < 800) {
        // transparent
        mainNav.style.background = 'transparent';
        mainLinks.style.color = 'white'
        mainNav.style.transition = '0.5s'
        mainLinks.style.transition = '0.5s'
        
    } 
    else {
        // if anywhere other than hero section
        mainNav.style.background = 'white';
        mainLinks.style.color = 'black'
    }
}