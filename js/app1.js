document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu-toggle1');
    const nav = document.querySelector('.nav1');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});
