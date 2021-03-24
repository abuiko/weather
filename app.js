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
];




window.addEventListener('DOMContentLoaded', () => {
    displayMenu(cards);

})

form.addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    filterMenu(cards);
}

function filterMenu(items) {
    let value = search.value;

    let filteredMenu = items.filter(item => item.name.toUpperCase() === value.toUpperCase());
    displayMenu(filteredMenu);
    if (value === '') {
        displayMenu(cards);
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