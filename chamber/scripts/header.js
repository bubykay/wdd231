document.querySelector('#menu').addEventListener('click', () => {
    document.querySelector('#menu').classList.toggle('active');
    document.querySelector('nav ul').classList.toggle('toggleMenu');
});
