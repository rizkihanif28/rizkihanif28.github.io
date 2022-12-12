// // const menuToggle = document.querySelector('menu-toggle label');
// // const nav = document.querySelector('.navbar .navbar-nav');

// // menuToggle.addEventListener('click', () => {
// //     nav.classList.toggle('slide');
// //     // nav.classList.toggle('show');
// // });

// (function ($) {
//     'use strict';

//     /*---------------------------------------------------- */
//     /* Preloader
// 	------------------------------------------------------ */
//     $(window).load(function () {
//         // will first fade out the loading animation
//         $('#loader').fadeOut('slow', function () {
//             // will fade out the whole DIV that covers the website.
//             $('#preloader').delay(300).fadeOut('slow');
//         });
//     });

//     const toggleButton = $('#icon'),
//         nav = $('#main-navigation');

//     // toggle button
//     toggleButton.on('click', function (e) {
//         e.preventDefault();
//         toggleButton.toggleClass('is-clicked');
//         nav.slideToggle();
//     });

//     // nav items
//     nav.find('li a').on('click', function () {
//         // update the toggle button
//         toggleButton.toggleClass('is-clicked');
//         // fadeout the navigation panel
//         nav.fadeOut();
//     });

//     var sections = $('section'),
//         navigation_links = $('#main-navigation li a');

//     sections.waypoint({
//         handler: function (direction) {
//             var active_section;

//             active_section = $('section#' + this.element.id);

//             if (direction === 'up') active_section = active_section.prev();

//             var active_link = $('#main-navigation a[href="#' + active_section.attr('id') + '"]');

//             navigation_links.parent().removeClass('current');
//             active_link.parent().addClass('current');
//         },

//         offset: '25%',
//     });
// });
