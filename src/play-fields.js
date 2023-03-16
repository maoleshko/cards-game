function renderPlayBlock(container) {
    const h1 = document.createElement('h1')
    h1.textContent = '00:00'
    h1.classList.add('timer')

    const resetButton = document.createElement('button')
    resetButton.textContent = 'Начать заново'
    resetButton.classList.add('button', 'btn-reset')


    container.appendChild(h1)
    container.appendChild(resetButton)
    
    
}

window.application.blocks['play'] = renderPlayBlock

function renderCardListBlock(container) {
    
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
            id: 'hearts-7',
            name: 'Hearts 7',
            image: './img/7c.png',
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
            id: 'diamonds-7',
            name: 'diamonds 7',
            image: './img/7b.png',
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
            id: 'clubs-7',
            name: 'clubs 7',
            image: './img/7k.png',
        }





    ]

    cardListData.forEach((card) => {
        const cardElement = document.createElement('div')
        cardElement.classList.add('card')
        const imgElement = document.createElement('img')
        imgElement.setAttribute('src', card.image)
        imgElement.setAttribute('alt', card.name)
        cardElement.appendChild(imgElement)
        document.body.appendChild(cardElement)
    })

    container.appendChild(cardListData);
    
}

window.application.blocks['cardList'] = renderCardListBlock

function renderPlayScreen() {

    window.application.renderBlock('play', div);
    window.application.renderBlock('cardList', div);

    app.appendChild(h1)
    app.appendChild(cardField)

}

window.application.screens['play'] = renderPlayScreen

// window.application.renderScreen('play');
