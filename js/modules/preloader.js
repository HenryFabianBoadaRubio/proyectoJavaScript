// app.js
document.addEventListener("DOMContentLoaded", function() {
    const preloader = document.querySelector(".preloader");
    const content = document.querySelector(".content");
    const loadButton = document.getElementById("loadButton");

    // Ocultar preloader y mostrar contenido al hacer clic en el botón
    loadButton.addEventListener("click", function() {
        preloader.classList.add("hide-preloader");
        content.style.display = "block";
    });
});
