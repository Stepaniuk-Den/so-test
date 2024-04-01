const navList = document.querySelector('.header__nav--list');
navList.addEventListener('click', handleCurrent);

function handleCurrent(e) {
    const category = e.target;
    const categoryCurr = e.currentTarget;
    const active = categoryCurr.querySelector('.js-header-nav-active');

    if (category === active || category === navList) return;
    active.classList.remove('js-header-nav-active');
    category.classList.add('js-header-nav-active');
}
