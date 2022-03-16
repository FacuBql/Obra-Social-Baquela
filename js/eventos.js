let informationForm = document.getElementById("form");
const validateForm = (e) => {
  e.preventDefault();
  console.log(e);
  console.log(
    "El formulario ha sido enviado."
  );
  alert("Su información ha sido enviada, pronto un asesor se pondrá en contacto.")
};
informationForm.addEventListener("submit", validateForm);
