let list_product = document.querySelector('.products');

let product_list = [
    {
        id: 1,
        tag: '18+',
        name: 'Suy nghĩ ngược',
        img: '1.jfif',
        price: 100,
    },
    {
        id: 2,
        tag: '18+',
        name: 'papillon người tù khổ sai',
        img: '2.jfif',
        price: 100,
    },
    {
        id: 3,
        tag: '18+',
        name: 'vợ nhặt',
        img: '3.jfif',
        price: 100,
    },
    {
        id: 4,
        tag: '18+',
        name: 'your name',
        img: '4.jfif',
        price: 100,
    },
    {
        id: 5,
        tag: '18+',
        name: 'albelt einstein',
        img: '5.jfif',
        price: 100,
    },
    {
        id: 6,
        tag: '18+',
        name: 'nơi khu rừng chạm tới nhũng vì sao',
        img: '6.jfif',
        price: 100,
    },
    {
        id: 7,
        tag: '18+',
        name: 'thuật thao túng',
        img: '7.jfif',
        price: 100,
    },
    {
        id: 8,
        tag: '18+',
        name: 'những người khốn khổ',
        img: '8.jfif',
        price: 100,
    },
    {
        id: 9,
        tag: '18+',
        name: 'rèn luyện tư duy phản biện',
        img: '9.jfif',
        price: 100,
    },
    {
        id: 10,
        tag: '18+',
        name: 'hành tinh của một kẻ nghĩ nhiều',
        img: '10.jfif',
        price: 100,
    }
]

function addProduct() {
    product_list.forEach((value, key) => {
        let newDiv = document.createElement('li');
        // newDiv.classList.add('product-item');
        newDiv.innerHTML = `
            <li>
                <div class="product-top">
                    <a href="" class="product-thumb">
                        <img src="img/${value.img}" alt="">
                    </a>
                    <a href="" class="mua">Mua</a>
                </div>
                <div class="product-info">
                    <a href="" class="product-TheLoai">${value.tag}</a>
                    <a href="" class="product-name">${value.name}</a>
                    <div class="product-price">${value.price.toLocaleString()}</div>
                </div>
            </li>
        `;
        list_product.appendChild(newDiv);
    })
}

addProduct();