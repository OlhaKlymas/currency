
// 1. У своєму репозиторії створити нову гілку exchange_Прізвище. 
// УВАГА!!! Бранчування повинно бути від гілки lesson4!

// 2. Дістати інформацію про поточний курс валют USD та EUR на сайті https://api.privatbank.ua/#p24/exchange
// Тобто робимо запит на https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5

// 3. У розмітці є select з класом js-goods-currency. При зміні валюти у select варто перерахувати вартість всіх товарів до сотих.
// Для обчислень використовуємо ціну продажу 'sale'.
// Напрклад, 549 ₴ ->  549/41.3 => 13.30 € або 549/40.0 => 13.73 $

// 4. Зробити обробку помилки як проміса (.catch)

// 5. Код заливаємо на гілку в репозиторій та робимо Pull request, де включити інструктора та колегу по групі у список перевіряючих. 
// 6. Перевірити код один одного, лишити зауваження в коментарях.

// Актуальний розподіл по групах, варіантах та посилання на репозиторій за посиланням
// https://docs.google.com/spreadsheets/d/1e_1-pSf3aVmDAOZLV5unlNWdg9sjXAc2JjtxMFnjQy4/edit?usp=sharing 
// *Якщо у Вас виникли проблеми з доступом, зверніться до інструктора

async function getCur() {
    let url = `https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`;
    let response = await fetch(url);
    console.log(response);
}

let goods = [
    {
        "id": 14606570,
        "href": "https://hard.rozetka.com.ua/ua/kingston_sa400s37_240g/p14606570/",
        "title": "Kingston SSDNow A400 240GB 2.5\" SATAIII 3D TLC (SA400S37/240G)",
        "images": [
            {
                "preview": "https://content.rozetka.com.ua/goods/images/preview/10957834.jpg"
            }
        ],
        "price": {
            "old": 806,
            "current": 549,
        },
        "badge": "new"
    },
    {
        "id": 280807508,
        "href": "https://rozetka.com.ua/ua/persil_9000101428230/p280807508/",
        "title": "Пральний порошок Persil автомат Колор 8.1 кг (9000101428230)",
        "images": [
            {
                "preview": "https://content1.rozetka.com.ua/goods/images/preview/242978958.jpg"
            }
        ],
        "price": {
            "old": 896,
            "current": 509,
        },
        "badge": "sale"
    },
    {
        "id": 258053376,
        "href": "https://rozetka.com.ua/ua/jacobs_8714599108932/p258053376/",
        "title": "Кава розчинна Jacobs Monarch 500 г (8714599108932)",
        "images": [
            {
                "preview": "https://content1.rozetka.com.ua/goods/images/preview/151054150.jpg"
            }
        ],
        "price": {
            "old": 496,
            "current": 249,
        },
        "badge": "sale"
    },
    {
        "id": 14606558,
        "href": "https://hard.rozetka.com.ua/ua/kingston_sa400s37_480g/p14606558/",
        "title": "Kingston SSDNow A400 480GB 2.5\" SATAIII 3D V-NAND (SA400S37/480G)",
        "images": [
            {
                "preview": "https://content1.rozetka.com.ua/goods/images/preview/172239507.jpg"
            }
        ],
        "price": {
            "old": 1296,
            "current": 559,
        },
        "badge": "new"
    },
    {
        "id": 114194984,
        "href": "https://rozetka.com.ua/ua/finish_5997321736280/p114194984/",
        "title": "Таблетки для посудомийних машин FINISH All in 1 Max 94 шт. (5997321736280)",
        "images": [
            {
                "preview": "https://content1.rozetka.com.ua/goods/images/preview/191113870.jpg"
            }
        ],
        "price": {
            "old": 696,
            "current": 349,
        },
        "badge": "new"
    },
    {
        "id": 224265469,
        "href": "https://rozetka.com.ua/ua/catsan_4008429130403/p224265469/",
        "title": "Наповнювач для котячого туалету Catsan Hygiene plus Мінеральний вбирний 4.9 кг (10 л) (4008429130403)",
        "images": [
            {
                "preview": "https://content.rozetka.com.ua/goods/images/preview/26038622.jpg"
            }
        ],
        "price": {
            "old": 1696,
            "current": 1249,
        },
        "badge": "sale"
    },
    {
        "id": 5873133,
        "href": "https://rozetka.com.ua/ua/frosch_4009175191908/p5873133/",
        "title": "Таблетки для миття посуду в посудомийних машинах Frosch Сода 30 шт (4009175191908)",
        "images": [
            {
                "preview": "https://content.rozetka.com.ua/goods/images/preview/10693594.jpg"
            }
        ],
        "price": {
            "old": 1495,
            "current": 1289,
        },
        "badge": "new"
    },
    {
        "id": 4918269,
        "href": "https://rozetka.com.ua/ua/bells_5000387905474_5000387905634/p4918269/",
        "title": "Віскі Bell's Original 0.7 л 40% (5000387905474_5000387905634)",
        "images": [
            {
                "preview": "https://content1.rozetka.com.ua/goods/images/preview/48122198.jpg"
            }
        ],
        "price": {
            "old": 498,
            "current": 299
        },
        "badge": "sale"
    },
    {
        "id": 23488125,
        "href": "https://rozetka.com.ua/ua/ambassador_7612654000034/p23488125/",
        "title": "Кава в зернах Ambassador Blue Label 1 кг (7612654000034)",
        "images": [
            {
                "preview": "https://content2.rozetka.com.ua/goods/images/preview/11251220.jpg"
            }
        ],
        "price": {
            "old": 633,
            "current": 359
        },
        "badge": "sale"
    },
    {
        "id": 24852941,
        "href": "https://bt.rozetka.com.ua/ua/philips_mg5730_15/p24852941/",
        "title": "Тример універсальний PHILIPS Series 5000 MG5730/15",
        "images": [
            {
                "preview": "https://content.rozetka.com.ua/goods/images/preview/11314684.jpg"
            }
        ],
        "price": {
            "old": 2599,
            "current": 1999
        },
        "badge": "new"
    }
];

goods.forEach(item => {

    const article = document.createElement('article');
    article.classList.add('product-list__item', 'tile');
    article.classList.add('js-product');
    article.setAttribute('data-id', item.id);

    article.innerHTML = `
        <a href="${item.href}" class="tile__link">
            <span class="tile__top">
                <span class="tile__badge tile__badge--${item.badge}">${item.badge}</span>
                <span class="tile__delete js-tile-delete hidden"> 
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_6043_11153)">
                        <path d="M2.03125 3.85352H12.9687" stroke="#EF3E33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11.753 3.85352V12.3605C11.753 12.9681 11.1454 13.5757 10.5378 13.5757H4.46137C3.85373 13.5757 3.24609 12.9681 3.24609 12.3605V3.85352" stroke="#EF3E33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5.06934 3.85341V2.63813C5.06934 2.03049 5.67697 1.42285 6.28461 1.42285H8.71517C9.32281 1.42285 9.93045 2.03049 9.93045 2.63813V3.85341" stroke="#EF3E33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_6043_11153">
                        <rect width="14.5833" height="14.5833" fill="white" transform="translate(0.208008 0.208008)"/>
                        </clipPath>
                        </defs>
                    </svg>
                </span>
            </span>
            <span class="tile__image">
                <img src="${item.images[0].preview}" alt="${item.title}">
            </span>
            <span class="tile__title">${item.title}</span>
            <span class="tile__info">
            <span class="tile__price">
                <span class="tile__old-price">${item.price.old} ₴</span>
                <span class="tile__new-price">${item.price.current} ₴</span>
            </span>
                <button class="btn">Купити</button>
            </span>
        </a>
    `;
    document.querySelector('.product-list').appendChild(article);
});

// ! console.log(localStorage.key(0)); // => null

const jsProduct = document.querySelectorAll('.js-product');
const jsCount = document.querySelector('.js-count');


// let currentArrey = localStorage.getItem('cart')?.split(', ');

function setCounter() {
    let currentArrey = localStorage.getItem('cart')?.split(', ');
    jsCount.textContent = currentArrey?.length;
}
setCounter();

function checkDeleteIcon() {

    if (localStorage.getItem('cart')) {
        let currentArrey = localStorage.getItem('cart')?.split(', ');
        currentArrey.forEach(item => {
            const element = document.querySelector(`[data-id="${item}"] .tile__delete`);
            element.classList.remove('hidden');
        });
    }
};

checkDeleteIcon();

jsProduct.forEach(product => {
    product.addEventListener('click', (e) => {
    e.preventDefault();
    let currentValueCard = localStorage.getItem('cart');

        if (e.target.classList.contains('btn')) {
            // console.dir(e.currentTarget);

            if (currentValueCard) {
                currentValueCard += ', ' + e.currentTarget.dataset.id;
            } else {
                currentValueCard = e.currentTarget.dataset.id;
            }
            localStorage.setItem('cart', currentValueCard);
            showNotification(e.currentTarget, 'Додано в корзину');
        }
        setCounter();
        checkDeleteIcon();
        

    });
});

function dellElem () {
    jsProduct.forEach(item =>{
        let bucket = item.querySelector('.js-tile-delete');
        bucket.addEventListener('click', (e) => {
            e.currentTarget.classList.add('hidden');
            let parent = e.target.closest('.js-product');
            let id = parent.dataset.id;
            console.log(id);
            let currentArrey = localStorage.getItem('cart')?.split(', ');
            let newCurrent = currentArrey.filter(item =>{
                return item !== id;
            })
            if(newCurrent.length == 0){
                localStorage.removeItem('cart');            
            } else{
            localStorage.setItem('cart', newCurrent.join(', '));
            }
            showNotification(parent, 'Видалено з корзини');
            console.log(newCurrent)
        })
    })
};
dellElem ()

function showNotification (item, text){
    let notification = document.querySelector('.js-notification');
    notification.classList.add('notification--active');
    let title = item.querySelector('.tile__title').innerText;
    let content = notification.querySelector('.js-notification-content');
    content.innerHTML = '';
    let p = document.createElement('p');
    p.innerText = title + ' ' + text;
    content.appendChild(p);
} 

function hideNotification (){
    let notification = document.querySelector('.js-notification');
    notification.classList.remove('notification--active');
} 




let notificationClose = document.querySelector('.js-notification-close');
notificationClose.addEventListener('click', hideNotification);


// Реалізувати попап з переглядом товарів, які є в корзині.
// - попап має з'являтись при натисненні на іконку корзини в хедері і зникати принатисненні на хрестик
// - заповнити список реальними товарами
// - додати можливість видалення товару з корзини
// - при натисненні на Оформлення товару закривати цей попап та відкривати попап Оформлення замовлення

    let popup = document.querySelector('.js-popup-cart');
function showPopupCart (){
    let currentArrey = localStorage.getItem('cart')?.split(', ');
    console.log(currentArrey)
    if(currentArrey?.length > 0){        
        popup.classList.add('popup--active');
        let list = document.querySelector('.js-popup-cart-list');
        
        goods.forEach(item => {
            console.log(item.id)
            if(currentArrey.includes(String(item.id))) {
                const li = document.createElement('li');
            li.classList.add('popup-cart__list-item', 'cart-item');

            li.innerHTML = `
                <span class="cart-item__img">
                    <img src="https://content2.rozetka.com.ua/goods/images/preview/250024064.jpg" alt="Капсули для прання Persil Power Caps Колір Doy 70 шт. (9000101536591)">
                </span>
                <span class="cart-item__info">
                    <a href="https://rozetka.com.ua/ua/persil-9000101536591/p333692440/" class="cart-item__link">
                        <span class="cart-item__title">Капсули для прання Persil Power Caps Колір Doy 70 шт. (9000101536591)</span>
                        <span class="cart-item__price">
                            <span class="tile__count">2 шт</span>
                            <span class="tile__price">Вартість - 500 ₴</span>
                            <span class="tile__total-price">Сума - 1000 ₴</span>
                        </span>
                    </a>
                </span>
                <span class="cart-item__remove">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_6043_11153)">
                        <path d="M2.03125 3.85352H12.9687" stroke="#EF3E33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11.753 3.85352V12.3605C11.753 12.9681 11.1454 13.5757 10.5378 13.5757H4.46137C3.85373 13.5757 3.24609 12.9681 3.24609 12.3605V3.85352" stroke="#EF3E33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5.06934 3.85341V2.63813C5.06934 2.03049 5.67697 1.42285 6.28461 1.42285H8.71517C9.32281 1.42285 9.93045 2.03049 9.93045 2.63813V3.85341" stroke="#EF3E33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_6043_11153">
                        <rect width="14.5833" height="14.5833" fill="white" transform="translate(0.208008 0.208008)"/>
                        </clipPath>
                        </defs>
                    </svg>
                </span>
            `;
            list.appendChild(li);
            console.log(li)
            }
            
        });
    }
    
}

function hidePopupCart (){
    popup.classList.remove('popup--active');

}
popup.querySelector('.js-popup-close').addEventListener('click', hidePopupCart);
document.querySelector('.js-count').addEventListener('click', showPopupCart);


let button = document.querySelector('.js-show-order');

button.addEventListener('click', () => {
    hidePopupCart();
    showPopupOrder();
})

let popupOrder = document.querySelector('.js-popup-order');

function showPopupOrder() {
    popupOrder.classList.add('popup--active');
}

function hidePopupOrder() {
    popupOrder.classList.remove('popup--active');
}

popupOrder.querySelector('.js-popup-close').addEventListener('click', hidePopupOrder);