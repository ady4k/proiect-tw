const butonDarkMode = document.querySelector('#butonDarkMode');
const body = document.querySelector('body');
const nav = document.querySelector('#main-nav');
const footer = document.querySelector('#page-footer');

butonDarkMode.onclick = function() {
    nav.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
}