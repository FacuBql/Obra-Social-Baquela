const enterAge = prompt("Ingrese su edad");
const userInformation = {
  enterAge,
};
const permit = userInformation.enterAge > 17 ? true : false;
permit
  ? alert(
      "Complete el formulario para recibir información acerca de nuestros servicios"
    )
  : alert("No podemos brindarle información");
