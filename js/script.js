// menu burger
document.addEventListener('DOMContentLoaded', function() {
    const burgerIcon = document.getElementById('burger-icon');
    const menu = document.getElementById('menu');

     burgerIcon.addEventListener('click', function() {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
     });
});

// theme sombre
const themebutton = document.querySelector('.themebutton');
themebutton.addEventListener('click', () => {
    const body = document.body;

    body.classList.toggle('dark');
});
