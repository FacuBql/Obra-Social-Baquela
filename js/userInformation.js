const enterAge = prompt("Ingrese su edad");
const userInformation = {
  enterAge,
};
const permit = userInformation.enterAge > 18 ? true : false;
permit
  ? alert(
      "Complete el formulario para recibir información acerca de nuestros servicios"
    )
  : alert("No podemos brindarle información");
