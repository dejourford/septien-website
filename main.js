// NAV OPEN AND CLOSE
const closeBtn = document.querySelector('.fa-xmark')
const openBtn =  document.querySelector('.fa-bars-staggered')
const mobileNav = document.querySelector('.mobile-nav')

closeMenu = () => {
    mobileNav.classList.remove('show')
    mobileNav.classList.add('close')
}

showMenu = () => {
    mobileNav.classList.remove('close')
    mobileNav.classList.add('show')
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