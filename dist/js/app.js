const menu = document.querySelector('.menu__cards');
const search = document.getElementById('search');
const form = document.querySelector('form');
const savedHeader = document.querySelector('.saved');
const recommendedHeader = document.querySelector('.recommended');


const cards = [{
        name: 'New York',
        temp: 15,
        img: 'dist/img/clear.jpg',
        icon: 'dist/icons/sun.png',
        background: 'dist/img/blue.png',
    },
    {
        name: 'Tokyo',
        temp: 8,
        img: 'dist/img/night.jpg',
        icon: 'dist/icons/night.png',
        background: 'dist/img/red.png',

    },

    {
        name: 'London',
        temp: 11,
        img: 'dist/img/rain.jpg',
        icon: 'dist/icons/rain.png',
        background: 'dist/img/violet.png',

    },

    {
        name: 'Paris',
        temp: 5,
        img: 'dist/img/snow.jpg',
        icon: 'dist/icons/snowy.png',
        background: 'dist/img/orange.png',
    },
    {
        name: 'Prague',
        temp: 9,
        img: 'dist/img/cloudy.jpg',
        icon: 'dist/icons/cloud.png',
        background: 'dist/img/blue.png',
    },
];

// event listeners
window.addEventListener('DOMContentLoaded', () => {

    document.getElementById('search').value = '';
    displayMenu(cards);



})
form.addEventListener('input', submitForm);

// functions

// filters cards according to input
function submitForm(e) {
    e.preventDefault();
    filterMenu();
}

function filterMenu() {
    let value = search.value;
    let filteredItems = [];
    if (value === '') {
        displayMenu(cards);
        return;
    }

    cards.forEach(card => {

        if (card.name.toUpperCase().startsWith(value.toUpperCase())) {
            filteredItems.push(card);

        }

    })


    displayMenu(filteredItems);
    if (!filteredItems.length) {
        savedHeader.style.display = 'none';
        recommendedHeader.style.display = 'none';
        menu.innerHTML = `<h1>There is no such city in the list &#128533;</h1>`;
    }

}

function displayMenu(items) {
    let displayMenu = items.map(item => {
        return `<article class="card">
        <img src=${item.img} class="card__photo" alt="${item.img}">
 
        <div class="card__info">
                <div class="info-text">
                <h3 class="city">${item.name}</h3>
                <h2 class="temp">${item.temp}&#176C</h2>
                </div>
                <div lass="info-icon">
                    <img src=${item.icon} class="card-icon" alt="${item.icon}">
                </div>
                
                        
        </div>
    </article>`;

    })
    savedHeader.style.display = 'block';
    recommendedHeader.style.display = 'block';
    displayMenu = displayMenu.join('');
    menu.innerHTML = displayMenu;
}