const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.navbar .navbar-nav');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
});

function changeIcon(icon) {
    icon.classList.toggle('fa-times');
}

// changeIcon = (icon) => icon.classList.toggle('fa fa-times');
