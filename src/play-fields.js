function renderPlayBlock(container) {
    const resetButton = document.createElement('button')
    resetButton.textContent = 'Начать заново'
    resetButton.classList.add('button', 'btn-reset')

    const cardListData = [
        {
            id: 'hearts-6',
            name: 'Hearts 6',
            image: 'static/img/6_черви.svg',
        },
        {
            id: 'hearts-7',
            name: 'Hearts 7',
            image: 'static/img/7_черви.svg',
        },
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

    container.appendChild(resetButton)
}

window.application.blocks['play'] = renderPlayBlock

function renderPlayScreen() {
    const app = document.querySelector('.app')
    const h1 = document.createElement('h1')
    h1.textContent = '00:00'
    h1.classList.add('timer')

    const cardField = document.createElement('div')
    window.application.renderBlock('play', cardField)

    app.appendChild(h1)
    app.appendChild(cardField)
}

window.application.screens['play'] = renderPlayScreen

// window.application.renderScreen('play');
