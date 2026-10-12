// Completamos la variable apuntando a un elemento del HTML
const valor = document.getElementById("titulo");

// Agregamos un evento al botón para mostrar tu alerta
document.getElementById("miBoton").addEventListener("click", function() {
    alert("Esta funcionando Script");
    valor.style.color = "blue"; // Cambia el color del título como prueba adicional
});