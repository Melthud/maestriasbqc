// script.js
document.getElementById("navbar-toggle").addEventListener("click", function() {
    var menu = document.getElementById("navbar-menu");
    menu.classList.toggle("active");
});

window.addEventListener("scroll", function() {
    const video = document.querySelector(".hero-video");
    const scrollY = window.scrollY;
    video.style.transform = `translateY(${scrollY * 0.5}px) scale(1)`;
});

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 600) { // Cambia el valor si quieres que el efecto ocurra a otra altura
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    // Mostrar/ocultar el menú desplegable al hacer clic
    dropdown.addEventListener('click', function(event) {
        event.stopPropagation(); // Evita que el clic cierre el menú inmediatamente
        dropdown.classList.toggle('active'); // Alterna la clase 'active'
        dropdownMenu.style.display = dropdown.classList.contains('active') ? 'block' : 'none';
    });

    // Cierra el menú si se hace clic fuera
    document.addEventListener('click', function() {
        dropdown.classList.remove('active');
        dropdownMenu.style.display = 'none';
    });
});
