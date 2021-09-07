const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      closeOverlaySide = document.querySelector('.menu__overlay'),
      linksToSections = document.querySelectorAll('.menu__link');

hamburger.addEventListener('click', () => {
    menu.classList.add('menu_active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('menu_active');
});

closeOverlaySide.addEventListener('click', () => {
    menu.classList.remove('menu_active');
});

linksToSections.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('menu_active');
    });
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
        lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});
