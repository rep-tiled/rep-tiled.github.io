const cardTemplate = document.querySelector("[data-card-template]");
const cardContainer = document.querySelector("[data-cards-container]");
const searchInput = document.querySelector("[data-search]");


let cards = []

searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase();
    cards.forEach(data => {
        const isVisible = data.title.includes(value); 
        data.element.classList.toggle("hide", !isVisible);
    });
})

fetch("https://rep-tiled.tk/msearch/data.json")
    .then(res => res.json())
    .then(data =>{
        cards = data.map(data => {
        const card = cardTemplate.content.cloneNode(true).children[0];
        const header = card.querySelector("[data-header]");
        const body = card.querySelector("[data-body]");
        header.textContent = data.title.toLowerCase();
        body.textContent = data.url
        body.href= "https://" + data.url
        cardContainer.append(card);
        return { title: data.title, url: data.url, element: card}
        });
        
        

    })