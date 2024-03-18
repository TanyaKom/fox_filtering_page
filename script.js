const list = document.querySelector(".buttons"),
    items = document.querySelectorAll(".card");
    listItems = document.querySelectorAll(".list-items");
    cardsContainer = document.querySelector("#cards");
    cards = document.querySelectorAll(".cards .card");

document.querySelector(".header-title").addEventListener("click", function() {
    cards.forEach(card => {
        cardsContainer.appendChild(card);
        card.style.display = "block";
    });
});

function filter() {
    list.addEventListener("click", event => {
        const targetId = event.target.dataset.filter;
        const target = event.target;
        listItems.forEach(listItems => listItems.classList.remove("active"));
        target.classList.add("active");

        // switch(targetId) {
        //     case "fennec":
        //     case "arctic":
        //     case "kit":
        //     case "red":
        //     case "pet":
                getItems(targetId);
        //     break;
        // }           
    });
}
filter()

function getItems(className) {
    items.forEach(item => {
    item.style.display = item.classList.contains(className) ? "block" : "none";
    });
}





