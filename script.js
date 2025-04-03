document.getElementById("cambiarColor").addEventListener("click", function() {
    const colores = ["#ff5733", "#33ff57", "#3357ff", "#ff33a1", "#ffd633"];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
});
