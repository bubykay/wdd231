document.querySelector('#menu').addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('toggleNav')
})

window.addEventListener('resize', () => {
    if (window.innerWidth >= 769) {
        document.querySelector('nav').classList.remove('toggleNav')
    } else {
        document.querySelector('nav').classList.add('toggleNav')
    }
})
