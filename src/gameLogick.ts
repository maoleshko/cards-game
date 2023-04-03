import { renderEndScreen } from './endGameScreen'

export function gameLogick(card: HTMLElement | null): void {
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
        playcard = card
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
        if (couple === 3) {
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
      card.classList.add('flip')
      flipCard(card)
  })
)
    // cards.forEach((card) => card.addEventListener('click', flipCard))
}
