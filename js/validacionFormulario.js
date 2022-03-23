const form = document.getElementById("form");

const sendForm = (event) => {
  event.preventDefault();
  const {
    name,
    lastName,
    address,
    floorNumber,
    deparment,
    city,
    state,
    zipCode,
    phoneNumber,
    mail,
    gridCheck,
  } = event.target;

  console.log(
    name.value,
    lastName.value,
    address.value,
    floorNumber.value,
    deparment.value,
    city.value,
    state.value,
    zipCode.value,
    phoneNumber.value,
    mail.value,
    gridCheck.value
  );

  const confirmForm = document.getElementById("confirmForm");
  confirmForm.innerText = "El formulario ha sido enviado exitosamente.";
  console.log(confirmForm.innerText);
};

form.addEventListener("submit", sendForm);
