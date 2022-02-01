const cardTemplate = document.querySelector("[data-card-template]");
const cardContainer = document.querySelector("[data-cards-container]");
const searchInput = document.querySelector("[data-search]");


let cards = []

searchInput.addEventListener("input", e => {
    const value = e.target.value;
    console.log(cards);
})

fetch("https://rep-tiled.tk/msearch/data.json")
    .then(res => res.json())
    .then(data =>{
        cards = data.map(user => {
        const card = cardTemplate.content.cloneNode(true).children[0];
        const header = card.querySelector("[data-header]");
        const body = card.querySelector("[data-body]");
        header.textContent = user.name
        header.textContent = user.email
        cardContainer.append(card);
        return { title: data.title, url: data.url, element: card}
        });
        
        

    })