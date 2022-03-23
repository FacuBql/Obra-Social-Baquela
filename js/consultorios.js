const healthCenter = [
  "Hospital Italiano de Buenos Aires",
  "Hospital de Pediatría S.A.M.I.C. Prof. Dr. Juan P. Garrahan",
  "Fundación Favaloro Hospital Universitario",
  "FLENI",
  "Hospital Britanico",
  "Hospital Privado de Rosario - Grupo GAMMA",
  "Hospital Provincial de Rosario",
];

const addressCenter = [
  "Tte. Gral. Juan Domingo Perón 4190, CABA",
  "Combate de los Pozos 1881, CABA",
  "Belgrano 1746, CABA",
  "Montañeses 2325, CABA",
  "Perdriel 74, CABA",
  "Presidente Roca 2440, Rosario - Santa Fe",
];

const phoneCenter = [
  1149590200, 1141226000, 1143781200, 1143781300, 1143781400, 1157773200,
  1143096400, 3414893500,
];

healthCenter.splice(6);

for (let i = 0; i < healthCenter.length; i++) {
  console.log(healthCenter[i]);
}

for (let i = 0; i < addressCenter.length; i++) {
  console.log(addressCenter[i]);
}

for (let i = 0; i < phoneCenter.length; i++) {
  console.log(phoneCenter[i]);
}
