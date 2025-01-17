// Simplemente muestra un mensaje de confirmación
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Formulario enviado correctamente.");
});
