const specialists = [
  {
    name: "Dr. Matías Gonzalez",
    specialtie: "Clinica general",
    phone: 341285783,
    address: "Av. Alvaréz 89",
  },
  {
    name: "Dra. Catalina Pidi",
    specialtie: "Pediatría",
    phone: 341285634,
    address: "Av. Alvaréz 89",
  },
  {
    name: "Dr. Eduardo Martinez",
    specialtie: "Traumatología",
    phone: 3412047824,
    address: "Av. Alvaréz 89",
  },
  {
    name: "Dra. Viviana Sasque",
    specialtie: "Traumatología",
    phone: 3364205874,
    address: "Leon Guruciaga 714",
  },
  {
    name: "Dra. Haydee Beapica",
    specialtie: "Ginecología y Obstetricia",
    phone: 3413214589,
    address: "Av. Alvaréz 89",
  },
  {
    name: "Dr. Aquiles Lopez",
    specialtie: "Cardiología",
    phone: 3364786320,
    address: "Av. Alvaréz 89",
  },
  {
    name: "Dra. Eliana Torres",
    specialtie: "Neurología",
    phone: 3364897423,
    address: "Av. Alvaréz 89",
  },
  {
    name: "Dr. Pablo Nerón",
    specialtie: "Neurología",
    phone: 3417460233,
    address: "Rondeau 589",
  },
  {
    name: "Dra. Veronica Sanchez",
    specialtie: "Urología",
    phone: 3364429523,
    address: "Av. Alvaréz 89",
  },
  {
    name: "Dr. Gerardo Santillán",
    specialtie: "Urología",
    phone: 3419902469,
    address: "Av. Alvaréz 89",
  },
  {
    name: "Dr. Agustin Saucedo",
    specialtie: "Gastroenterología",
    phone: 3364779072,
    address: "Av. Alvaréz 89",
  },
  {
    name: "Dr. Rodrigo Peña",
    specialtie: "Oftalmología",
    phone: 116952374,
    address: "Av. Alvaréz 89",
  },
  {
    name: "Dra. Daniela Krauss",
    specialtie: "Oftalmología",
    phone: 3364455028,
    address: "Nación 113",
  },
  {
    name: "Dr. Diego Biafore",
    specialtie: "Odontología",
    phone: 3364893752,
    address: "Don Bosco 72",
  },
  {
    name: "Dra. Julia Perez",
    specialtie: "Otorrinolaringología",
    phone: 3416020746,
    address: "Nicanor Payan 276",
  },
  {
    name: "Dra. Julieta Romero",
    specialtie: "Dermatología",
    phone: 3412036987,
    address: "Av. Alvaréz 89",
  },
  {
    name: "Dr. Miguel Rodriguez",
    specialtie: "Psicología y Psiquiatría",
    phone: 3364451420,
    address: "Av. Alvaréz 89",
  },
  {
    name: "Dr. Raul Simón",
    specialtie: "Psicología y Psiquiatría",
    phone: 3364118463,
    address: "Av. Alvaréz 89",
  },
  {
    name: "Lic. Andrés Alario",
    specialtie: "Kinesiología",
    phone: 3364118463,
    address: "Roca 1527",
  },
];

const localSave = (clave, valor) => {
  localStorage.setItem(clave, valor);
};
localSave("specialistInformation", JSON.stringify(specialists));

console.log(...specialists);
