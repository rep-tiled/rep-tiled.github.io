const cardTemplate = document.querySelector("[data-card-template]");

fetch("")
    .then(res => res.json())
    .then(data =>{
        const card = cardTemplate.content.cloneNode(true)


    })