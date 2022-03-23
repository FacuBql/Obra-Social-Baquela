let umbrellaRed = 1250;
let umbrellaBlue = 1875;
let umbrellaGold = 2250;
let tariff = 2500;

const discountRed = (newPriceRed) => tariff - umbrellaRed;
const discountBlue = (newPriceBlue) => tariff - umbrellaBlue;
const discountGold = (newPriceGold) => tariff - umbrellaGold;

let newPriceRed = discountRed(tariff - umbrellaRed);
let newPriceBlue = discountBlue(tariff - umbrellaBlue);
let newPriceGold = discountGold(tariff - umbrellaGold);

console.log(
  "El valor de la consulta es de $" +
    tariff +
    ", a continuación, se presentarán los diferentes aranceles segun los planes disponibles."
);
console.log(
  "El precio final de su consulta, con el descuento del 50% aplicado sobre el valor de consulta, segun el plan Umbrella Red es de $" +
    newPriceRed +
    "."
);
console.log(
  "El precio final de su consulta, con el descuento del 75% aplicado sobre el valor de la consulta, segun el plan Umbrella Blue es de $" +
    newPriceBlue +
    "."
);
console.log(
  "El precio final de su consulta, con el descuento del 90% aplicado sobre el valor de la consulta, segun el plan Umbrella Gold es de $" +
    newPriceGold +
    "."
);

const coveragePlan1 = {
  plan: "Umbrella Red",
  coverage: "50%",
  fee: "$3500",
  inscription: "$4000",
};
const coveragePlan2 = {
  plan: "Umbrella Blue",
  coverage: "75%",
  fee: "$5000",
  inscription: "$4000",
};
const coveragePlan3 = {
  plan: "Umbrella Gold",
  coverage: "90%",
  fee: "$7000",
  inscription: "$4000",
};

console.log(
  "Nuestro plan basico" +
    " " +
    coveragePlan1.plan +
    " " +
    "tiene un valor de inscripcion de" +
    " " +
    coveragePlan1.inscription +
    ", con un valor mensual de" +
    " " +
    coveragePlan1.fee +
    " " +
    "y una cobertura del" +
    " " +
    coveragePlan1.coverage +
    " " +
    "para el afiliado."
);

console.log(
  "Nuestro plan intermedio" +
    " " +
    coveragePlan2.plan +
    " " +
    "tiene un valor de inscripcion de" +
    " " +
    coveragePlan2.inscription +
    ", con un valor mensual de" +
    " " +
    coveragePlan2.fee +
    " " +
    "y una cobertura del" +
    " " +
    coveragePlan2.coverage +
    " " +
    "para el afiliado."
);

console.log(
  "Nuestro plan avanzado" +
    " " +
    coveragePlan3.plan +
    " " +
    "tiene un valor de inscripcion de" +
    " " +
    coveragePlan3.inscription +
    ", con un valor mensual de" +
    " " +
    coveragePlan3.fee +
    " " +
    "y una cobertura del" +
    " " +
    coveragePlan3.coverage +
    " " +
    "para el afiliado."
);
