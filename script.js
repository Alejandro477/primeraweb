document.addEventListener("DOMContentLoaded", () => {
    // Menú responsive
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Validación de formulario en tiempo real
    const formulario = document.getElementById("formulario");
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const mensaje = document.getElementById("mensaje");
    const respuesta = document.getElementById("respuesta");
    
    function validarInput(input) {
        if (input.value.trim() === "") {
            input.classList.add("error");
        } else {
            input.classList.remove("error");
        }
    }
    
    nombre.addEventListener("input", () => validarInput(nombre));
    email.addEventListener("input", () => validarInput(email));
    mensaje.addEventListener("input", () => validarInput(mensaje));
    
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        if (nombre.value.trim() === "" || email.value.trim() === "" || mensaje.value.trim() === "") {
            respuesta.textContent = "Todos los campos son obligatorios.";
            respuesta.style.color = "red";
        } else {
            respuesta.textContent = "¡Mensaje enviado con éxito!";
            respuesta.style.color = "green";
            formulario.reset();
        }
    });

    // Animaciones al hacer scroll
    const sections = document.querySelectorAll(".seccion");
    
    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight * 0.75) {
                section.classList.add("visible");
            }
        });
    }
    
    window.addEventListener("scroll", checkScroll);
    checkScroll();
});
