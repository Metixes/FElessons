let menuBtn = document.querySelector('.wrapper__label');
let menu = document.querySelector('.menu');
let body = document.querySelector('.body');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock')
});

