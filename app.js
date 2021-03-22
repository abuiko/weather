const menu = document.querySelector('.menu__cards');
const input = document.getElementById('search');

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
    // filterMenu(cards);
})

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