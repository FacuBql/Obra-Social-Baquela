fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: new FormData()
})
.then(answer=> answer.ok ? answer.json() : Promise.reject(answer))
.then(json => {
    console.log(json);
})
.catch(error => {
    console.log(error);
})