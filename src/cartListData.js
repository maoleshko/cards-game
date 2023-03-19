function renderCardList(cardListNumber) {

    const cards_container = document.querySelector('.cards_container')

    const cardListData = [
        {
            id: 'spades-6',
            name: 'spades 6',
            image: './img/6p.png',
        },
        {
            id: 'spades-7',
            name: 'spades 7',
            image: './img/7p.png',
        },
        {
            id: 'spades-8',
            name: 'spades 8',
            image: './img/8p.png',
        },
        {
            id: 'spades-9',
            name: 'spades 9',
            image: './img/9p.png',
        },
        {
            id: 'spades-10',
            name: 'spades 10',
            image: './img/10p.png',
        },
        {
            id: 'spades-j',
            name: 'spades j',
            image: './img/jp.png',
        },
        {
            id: 'spades-q',
            name: 'spades q',
            image: './img/qp.png',
        },
        {
            id: 'spades-k',
            name: 'spades k',
            image: './img/kp.png',
        },
        {
            id: 'spades-a',
            name: 'spades a',
            image: './img/ap.png',
        },
        {
            id: 'hearts-6',
            name: 'Hearts 6',
            image: './img/6c.png',
        },
        {
            id: 'hearts-7',
            name: 'Hearts 7',
            image: './img/7c.png',
        },
        {
            id: 'hearts-8',
            name: 'Hearts 8',
            image: './img/8c.png',
        },
        {
            id: 'hearts-9',
            name: 'Hearts 9',
            image: './img/9c.png',
        },
        {
            id: 'hearts-10',
            name: 'Hearts 10',
            image: './img/10c.png',
        },
        {
            id: 'hearts-j',
            name: 'Hearts j',
            image: './img/jc.png',
        },
        {
            id: 'hearts-q',
            name: 'Hearts q',
            image: './img/qc.png',
        },
        {
            id: 'hearts-k',
            name: 'Hearts k',
            image: './img/kc.png',
        },
        {
            id: 'hearts-a',
            name: 'Hearts a',
            image: './img/ac.png',
        },

        {
            id: 'diamonds-6',
            name: 'diamonds 6',
            image: './img/6b.png',
        },
        {
            id: 'diamonds-7',
            name: 'diamonds 7',
            image: './img/7b.png',
        },
        {
            id: 'diamonds-8',
            name: 'diamonds 8',
            image: './img/8b.png',
        },
        {
            id: 'diamonds-9',
            name: 'diamonds 9',
            image: './img/9b.png',
        },
        {
            id: 'diamonds-10',
            name: 'diamonds 10',
            image: './img/10b.png',
        },
        {
            id: 'diamonds-j',
            name: 'diamonds j',
            image: './img/jb.png',
        },
        {
            id: 'diamonds-q',
            name: 'diamonds q',
            image: './img/qb.png',
        },
        {
            id: 'diamonds-k',
            name: 'diamonds k',
            image: './img/kb.png',
        },
        {
            id: 'diamonds-a',
            name: 'diamonds a',
            image: './img/ab.png',
        },
        {
            id: 'clubs-6',
            name: 'clubs 6',
            image: './img/6k.png',
        },
        {
            id: 'clubs-7',
            name: 'clubs 7',
            image: './img/7k.png',
        },
        {
            id: 'clubs-8',
            name: 'clubs 8',
            image: './img/8k.png',
        },
        {
            id: 'clubs-9',
            name: 'clubs 9',
            image: './img/9k.png',
        },
        {
            id: 'clubs-10',
            name: 'clubs 10',
            image: './img/10k.png',
        },
        {
            id: 'clubs-j',
            name: 'clubs j',
            image: './img/jk.png',
        },
        {
            id: 'clubs-q',
            name: 'clubs q',
            image: './img/qk.png',
        },
        {
            id: 'clubs-k',
            name: 'clubs k',
            image: './img/kk.png',
        },
        {
            id: 'clubs-a',
            name: 'clubs a',
            image: './img/ak.png',
        }
    ]
// Возвращаем новый массив элементов, который будет содержать от 0 до указанного количества карт
    const cardList = cardListData.slice(0, cardListNumber)
    // Для каждого элемента массива будет создан div 
    cardList.forEach((card) => {
        const cardElement = document.createElement('div')
        cardElement.classList.add('card')
        //Создаем элемент img и указываем атрибуты
        const imgElement = document.createElement('img')
        //Задаем атрибуты для игоровой карточки
        imgElement.setAttribute('src', card.image)
        imgElement.setAttribute('alt', card.name)
        // Добавляем элемент в div с классом card
        cardElement.appendChild(imgElement)
        // Добавляем элемент div с классом card на освной экран с контейнер
        cards_container.appendChild(cardElement)
    })
}