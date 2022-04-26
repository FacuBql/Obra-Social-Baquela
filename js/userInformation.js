const enterAge = prompt(
  "Ingrese su edad para recibir información online de nuestro servicio de atención al publico."
);
const userInformation = {
  enterAge,
};
const permit = userInformation.enterAge > 17 ? true : false;
permit
  ? swal("Un asesor se comunicara en breve con usted.")
  : swal(
      "Debe cumplir con la mayoria de edad para poder recibir información online de un asesor."
    );
