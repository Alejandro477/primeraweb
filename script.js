document.addEventListener("DOMContentLoaded", () => {
   
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });


    const formulario = document.getElementById("formulario");
    const respuesta = document.getElementById("respuesta");
    
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();
        
        if (nombre === "" || email === "" || mensaje === "") {
            respuesta.textContent = "Todos los campos son obligatorios.";
            respuesta.style.color = "red";
        } else {
            respuesta.textContent = "¡Mensaje enviado con éxito!";
            respuesta.style.color = "green";
            formulario.reset();
        }
    });

    
    const sections = document.querySelectorAll(".seccion");
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.3 });
    
    sections.forEach(section => {
        observer.observe(section);
    });
});
