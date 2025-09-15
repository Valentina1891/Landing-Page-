// Mostrar el año actual en el footer
const footerYear = document.getElementById("year");
if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}

// Aviso al enviar formulario (solo en reservas.html)
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("¡Tu reserva fue enviada con éxito!");
    form.reset();
  });
}
