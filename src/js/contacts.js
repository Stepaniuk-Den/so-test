const form = document.querySelector('.contacts__form');
form.addEventListener('input', checkEmpty);
function checkEmpty(e) {
    if (e.target.value.length > 0) {
        e.target.classList.remove('empty');
        e.target.classList.add('checked');
    } else {
        e.target.classList.add('empty');
        e.target.classList.remove('checked');
    }
}
