const Formbtn = document.getElementById("btnFormulario");

console.log(Formbtn);

Formbtn.onclick = () => {
  Toastify({
    text: "Formulario enviado",
    duration: 4000,
    style: {
      background: "linear-gradient(to right, #b22222, #e61919)",
    },
    gravity: "bottom",
    position: "center",
  }).showToast();
};
