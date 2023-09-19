let openShopping = document.querySelector('.shopping')
let closeShopping = document.querySelector('.closeShopping')
let list = document.querySelector('.list')
let listCart = document.querySelector('.listCard')
let body = document.querySelector('body')
let total = document.querySelector('total')
let quantily = document.querySelector('.quantily')

openShopping.addEventListener('click', () => {
    body.classList.add('active');
})

closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
})

let pruduct = [
    {
        id: 1,
        name: 'Pruduct name 1',
        image: '1.png',
        price: 1200
    },
    {
        id: 2,
        name: 'Pruduct name 2',
        image: '2.png',
        price: 1200
    },
    {
        id: 3,
        name: 'Pruduct name 3',
        image: '3.png',
        price: 1200
    },
    {
        id: 4,
        name: 'Pruduct name 4',
        image: '4.png',
        price: 1200
    },
    {
        id: 5,
        name: 'Pruduct name 5',
        image: '5.png',
        price: 1200
    },
    {
        id: 6,
        name: 'Pruduct name 6',
        image: '6.png',
        price: 1200
    },
];

let listCards = [];
function intitApp() {
    pruduct.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <img src = "img/${value.image}"/>
        <div class="title">${value.name}</div>
        <div class="price">${value.price.toLocaleString()}</div>
        <button onclick="addToCard(${key}">Add to card</button>
        `;
        list.appendChild(newDiv);
    })
}
intitApp();

function addToCard(key) {
    if (listCards[key] == null) {
        listCards[key] = product[key];
        listCards[key].quantily = 1;
    }
    reLoadCard();
}

function reLoadCard() {
    listCards.innerHTML = '';
    let count = 0;
    let totalPrice = totalPrice + value.price;

    if (value != null) {
        let newDiv = document.createElement('li');
        newDiv.innerHTML = `
        <div>${value.name}</div>
        <div>${value.price.toLocaleString()}</div>
        <div>${value.quantily}</div>
        <div>
        <button onclick="changeQuanttity(${key},${value.quantily - 1})>-<button>
        <div class="count">${value.quantily}</div>
        <button onclick="changeQuanttity(${key},${value.quantily + 1})>+<button>
        </div>        
        `;
    }
}