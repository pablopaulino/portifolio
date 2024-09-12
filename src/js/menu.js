const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu-mobile');
const overlay = document.getElementById('overlay-menu');

const toggleMenu = () => {
    menu.classList.toggle('abrir-menu');
};

btnMenu.addEventListener("click", toggleMenu);
menu.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
