import { renderEndScreen } from './endGameScreen'

export function gameLogick(): void {
    const cards = document.querySelectorAll('.memory-card')

    let couple = 0

    setTimeout(() => {
        cards.forEach((card) => {
            card.classList.remove('flipped')

            cards.forEach((card, index) =>
                card.addEventListener('click', (e: Event) => {
                    card.classList.add('flipped')
                    checkCards(cards[index])
                })
            )
            const checkCards = (e: Element) => {
                const clickedCard = e
                if (clickedCard !== null) {
                    clickedCard.classList.add('flip')
                }
                const flippedCards = document.querySelectorAll('.flip')

                if (flippedCards.length === 2) {
                    if (
                        flippedCards[0].getAttribute('name') ===
                        flippedCards[1].getAttribute('name')
                    ) {
                        couple++
                        flippedCards.forEach((card) => {
                            card.classList.remove('flip')
                        })

                        if (cards.length === couple * 2) {
                            setTimeout(() => {
                                renderEndScreen(
                                    'Вы победили!',
                                    "url('./static/img/win.png')"
                                )
                            }, 1000)
                        }
                    } else {
                        setTimeout(() => {
                            renderEndScreen(
                                'Вы проиграли!',
                                "url('./static/img/lose.png')"
                            )
                        }, 1000)
                    }
                }
            }
        })
    }, 5000)
}
