fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "Información enviada",
    body: "Su información ha sido cargada exitosamente",
    usderId: 1,
  }),
  headers: {
    "Content-type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data));
