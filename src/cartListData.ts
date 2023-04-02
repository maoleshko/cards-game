import { renderEndScreen } from './endGameScreen'
import { tryAgain } from './reloadGame'
import { timer } from './timer'
import { shuffle, duplicateArray } from './cardsRandom'

//Главный игровой экран с полем карт и игровой логикой
const cardListData: {
    id: string
    name: string
    image: string
}[] = [
    {
        id: 'spades-6',
        name: 'spades 6',
        image: './static/img/6p.png',
    },
    {
        id: 'spades-7',
        name: 'spades 7',
        image: './static/img/7p.png',
    },
    {
        id: 'spades-8',
        name: 'spades 8',
        image: './static/img/8p.png',
    },
    {
        id: 'spades-9',
        name: 'spades 9',
        image: './static/img/9p.png',
    },
    {
        id: 'spades-10',
        name: 'spades 10',
        image: './static/img/10p.png',
    },
    {
        id: 'spades-j',
        name: 'spades j',
        image: './static/img/jp.png',
    },
    {
        id: 'spades-q',
        name: 'spades q',
        image: './static/img/qp.png',
    },
    {
        id: 'spades-k',
        name: 'spades k',
        image: './static/img/kp.png',
    },
    {
        id: 'spades-a',
        name: 'spades a',
        image: './static/img/ap.png',
    },
    {
        id: 'hearts-6',
        name: 'hearts 6',
        image: './static/img/6c.png',
    },
    {
        id: 'hearts-7',
        name: 'hearts 7',
        image: './static/img/7c.png',
    },
    {
        id: 'hearts-8',
        name: 'hearts 8',
        image: './static/img/8c.png',
    },
    {
        id: 'hearts-9',
        name: 'hearts 9',
        image: './static/img/9c.png',
    },
    {
        id: 'hearts-10',
        name: 'hearts 10',
        image: './static/img/10c.png',
    },
    {
        id: 'hearts-j',
        name: 'hearts j',
        image: './static/img/jc.png',
    },
    {
        id: 'hearts-q',
        name: 'hearts q',
        image: './static/img/qc.png',
    },
    {
        id: 'hearts-k',
        name: 'hearts k',
        image: './static/img/kc.png',
    },
    {
        id: 'hearts-a',
        name: 'hearts a',
        image: './static/img/ac.png',
    },

    {
        id: 'diamonds-6',
        name: 'diamonds 6',
        image: './static/img/6b.png',
    },
    {
        id: 'diamonds-7',
        name: 'diamonds 7',
        image: './static/img/7b.png',
    },
    {
        id: 'diamonds-8',
        name: 'diamonds 8',
        image: './static/img/8b.png',
    },
    {
        id: 'diamonds-9',
        name: 'diamonds 9',
        image: './static/img/9b.png',
    },
    {
        id: 'diamonds-10',
        name: 'diamonds 10',
        image: './static/img/10b.png',
    },
    {
        id: 'diamonds-j',
        name: 'diamonds j',
        image: './static/img/jb.png',
    },
    {
        id: 'diamonds-q',
        name: 'diamonds q',
        image: './static/img/qb.png',
    },
    {
        id: 'diamonds-k',
        name: 'diamonds k',
        image: './static/img/kb.png',
    },
    {
        id: 'diamonds-a',
        name: 'diamonds a',
        image: './static/img/ab.png',
    },
    {
        id: 'clubs-6',
        name: 'clubs 6',
        image: './static/img/6k.png',
    },
    {
        id: 'clubs-7',
        name: 'clubs 7',
        image: './static/img/7k.png',
    },
    {
        id: 'clubs-8',
        name: 'clubs 8',
        image: './static/img/8k.png',
    },
    {
        id: 'clubs-9',
        name: 'clubs 9',
        image: './static/img/9k.png',
    },
    {
        id: 'clubs-10',
        name: 'clubs 10',
        image: './static/img/10k.png',
    },
    {
        id: 'clubs-j',
        name: 'clubs j',
        image: './static/img/jk.png',
    },
    {
        id: 'clubs-q',
        name: 'clubs q',
        image: './static/img/qk.png',
    },
    {
        id: 'clubs-k',
        name: 'clubs k',
        image: './static/img/kk.png',
    },
    {
        id: 'clubs-a',
        name: 'clubs a',
        image: './static/img/ak.png',
    },
]

export function renderCardList(cardListNumber: number) {
    const gameMenu = document.querySelector('.game-menu')
    const timeBoard = document.createElement('div')
    timeBoard.classList.add('timeBoard')
    const label = document.createElement('div')
    label.classList.add('label')
    const min = document.createElement('div')
    min.classList.add('min')
    const sec = document.createElement('div')
    sec.classList.add('sec')
    const timeLabelmin = document.createElement('timeLabel')
    timeLabelmin.classList.add('timer')
    timeLabelmin.textContent = 'min'
    label.textContent = '.'
    const timeLabelsec = document.createElement('timeLabel')
    timeLabelsec.classList.add('timeLabel')
    timeLabelsec.textContent = 'sec'
    const timemin = document.createElement('h2')
    timemin.classList.add('timemin')
    timemin.textContent = '00'
    const timesec = document.createElement('h2')
    timesec.classList.add('timesec')
    timesec.textContent = '00'
    const reloadButton = document.createElement('button')
    reloadButton.textContent = 'Начать заново'
    reloadButton.classList.add('button', 'btn-reload')
    if (gameMenu !== null) {
        gameMenu.appendChild(timeBoard)
        gameMenu.appendChild(reloadButton)
    } else {
        console.warn('error')
    }
    timeBoard.appendChild(min)
    timeBoard.appendChild(label)
    timeBoard.appendChild(sec)
    min.appendChild(timeLabelmin)
    sec.appendChild(timeLabelsec)
    min.appendChild(timemin)
    sec.appendChild(timesec)

    timer()
    reloadButton.addEventListener('click', tryAgain)
    const cardsСontainer = document.querySelector('.container') as HTMLElement

    shuffle(cardListData)
    // Возвращаем новый массив элементов, который будет содержать от 0 до указанного количества карт
    const cardList = cardListData.slice(0, cardListNumber)

    const duplicateCardsArray = duplicateArray(cardList)

    shuffle(duplicateCardsArray)

    // Для каждого элемента массива будет создан div
    duplicateCardsArray.forEach((card) => {
        const cardElement = document.createElement('div')
        cardElement.classList.add('memory-card')
        cardElement.classList.add('flip')

        //Создаем элемент img и указываем атрибуты
        const imgElement = document.createElement('img') as HTMLImageElement
        //Задаем атрибуты для игоровой карточки
        imgElement.setAttribute('src', card.image)
        imgElement.setAttribute('alt', card.name)
        imgElement.setAttribute('class', 'front-face')
        cardElement.setAttribute('data-framework', `${card.name}`)
        const imgElementBack = document.createElement('img')
        imgElementBack.setAttribute('src', './static/img/back.png')
        imgElementBack.setAttribute('alt', 'backSide')
        imgElementBack.setAttribute('class', 'back-face')
        // Добавляем элемент в div с классом card

        cardElement.appendChild(imgElement)
        cardElement.appendChild(imgElementBack)

        // Добавляем элемент div с классом card на освной экран с контейнер
        cardsСontainer.appendChild(cardElement)
    })
    const cards = document.querySelectorAll('.memory-card')

    setTimeout(() => {
        cards.forEach((cards) => {
            cards.classList.remove('flip')
        })
    }, 1000)

    let hasFlippedCard: boolean = false
    let lockBoard: boolean = false
    let firstCard: null | HTMLElement = null
    let secondCard: null | HTMLElement = null
    let couple: number = 0

    function flipCard(playcard: HTMLElement | null) {
        if (lockBoard) return
        if (playcard === firstCard) return

        if (playcard !== null) {
            playcard?.classList.add('flip')
        }

        if (!hasFlippedCard) {
            hasFlippedCard = true
            firstCard = playcard
            return
        }

        secondCard = playcard

        checkForMatch()
    }

    function checkForMatch() {
        if (firstCard === null || secondCard === null) {
            return
        }
        if (firstCard.dataset.framework === secondCard.dataset.framework) {
            disableCards()
            return
        }
        unflipCards()
        couple++
        if (couple === cardListNumber) {
            setTimeout(() => {
                renderEndScreen('Вы победили!', "url('./static/img/win.png')")
            }, 1000)
        }
    }

    function disableCards() {
        firstCard?.removeEventListener('click', (event: Event) => {
            flipCard
        })
        secondCard?.removeEventListener('click', (event: Event) => {
            flipCard
        })
        // firstCard?.removeEventListener('click', flipCard)
        // secondCard?.removeEventListener('click', flipCard)

        resetBoard()
    }

    function unflipCards() {
        lockBoard = true

        setTimeout(() => {
            firstCard?.classList.remove('flip')
            secondCard?.classList.remove('flip')
            renderEndScreen('Вы проиграли!', "url('./static/img/lose.png')")
        }, 1500)
    }

    function resetBoard() {
        hasFlippedCard = false
        lockBoard = false
        firstCard = null
        secondCard = null
    }

    cards.forEach((card) =>
        card.addEventListener('click', (event: Event) => {
            flipCard
        })
    )
    // cards.forEach((card) => card.addEventListener('click', flipCard))
}
