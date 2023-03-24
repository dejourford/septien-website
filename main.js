// NAV OPEN AND CLOSE

const mobileNav = document.querySelector('.mobile-nav')
const heroSection = document.querySelector('.hero')

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
            document.getElementById("hero-text").innerHTML = words[i];
            textSequence(++i);
        }, 2000); // 1 second (in milliseconds)

    } else if (words.length == i) { // Loop
        textSequence(0);
    }

}