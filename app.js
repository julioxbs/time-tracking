const cards = document.querySelector(".cards");

const getAPI = async function() {
    const res = await fetch("./data.json");
    const data = await res.json();

    createCards(data)
}

getAPI();

const createCards = function(data) {
    data.forEach(({title, timeframes: {weekly}}) => {
        let html = `<div class="card ${title}">
            <div class="card-top">
                <img src="./images/icon-${title === "Self Care" ? "self-care" : title}.svg" alt="${title}" class="img-top">
            </div>

            <div class="card-body">
                <div class="card-title">
                    ${title} <span><img src="./images/icon-ellipsis.svg" alt=""></span>
                </div>

                <div class="card-text">
                    <span>${weekly.current}hrs</span>
                    Last Week - ${weekly.previous}hrs
                </div>
            </div>
        </div>`
    
        cards.insertAdjacentHTML("beforeend", html)
    })
}