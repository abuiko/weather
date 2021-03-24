const menu = document.querySelector('.menu__cards');
const search = document.getElementById('search');
const form = document.querySelector('form');

const cards = [{
        name: 'New York',
        temp: 15,
        img: '/img/vector1.jpg',
    },
    {
        name: 'Tokyo',
        temp: 8,
        img: '/img/vector2.jpg',

    },

    {
        name: 'London',
        temp: 11,
        img: '/img/vector4.jpg',

    },

    {
        name: 'Paris',
        temp: 5,
        img: '/img/vector7.jpg',
    },
    {
        name: 'Prague',
        temp: 9,
        img: '/img/vector7.jpg',
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

        menu.innerHTML = `<h1>There is no such city in the list &#128533;</h1>`;


    }
}

function displayMenu(items) {
    let displayMenu = items.map(item => {
        return `<article class="card">
        <img src=${item.img} class="card__photo" alt="${item.img}">
 
        <div class="card__info">
            
                <h3 class="city">${item.name}</h3>
                <h2 class="temp">${item.temp}&#176</h2>
                        
        </div>
    </article>`;

    })
    displayMenu = displayMenu.join('');
    menu.innerHTML = displayMenu;
}