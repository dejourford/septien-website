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