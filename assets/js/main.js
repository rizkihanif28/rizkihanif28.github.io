const menuToggle = document.querySelector('#icon label');
const nav = document.querySelector('.navbar .navbar-nav');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
});
