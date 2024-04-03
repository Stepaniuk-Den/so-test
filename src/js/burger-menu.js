const menu = document.getElementById('header__nav--list');
const btnBurger = document.getElementById('burger--btn');

btnBurger.addEventListener('click', toggleMenu);

function toggleMenu() {
    menu.classList.toggle('hidden');
}

window.addEventListener('DOMContentLoaded', function () {
    menu.classList.add('hidden');
});
