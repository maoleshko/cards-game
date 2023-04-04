import { count } from 'console'
import { renderEndScreen } from './endGameScreen'

export function gameLogick(): void {
    const cards = document.querySelectorAll('.memory-card')

    setTimeout(() => {
        cards.forEach((card) => {
            card.classList.remove('flipped')
        })
    }, 2000)

    cards.forEach((card) =>
        card.addEventListener('click', (e: Event) => {
            card.classList.toggle('toggleCard')
            card.classList.add('flipped')
            checkCards(e)
        })
    )

   

    const checkCards = (e: Event) => {
        const clickedCard = e.target
        if (clickedCard !== null) {
            // clickedCard.classList.add('flipped')
        }
        cards.forEach((card, index) =>
        card.addEventListener('click', () => {
            card.classList.add('flip');
            if(index) {
                card.classList.add('flipped')
                console.log(cards[index])
            }
            
        })
)
        const flippedCard = document.querySelectorAll('flipped')

       

        if (flippedCard.length === 2) {
            if (
                flippedCard[0].getAttribute('name') ===
                flippedCard[1].getAttribute('name')
            ) {
                console.log('match')
            } else {
                setTimeout(() => {
                    renderEndScreen(
                        'Вы проиграли!',
                        "url('./static/img/lose.png')"
                    )
                }, 1500)
            }
        }
        console.log('flippedCard.length',flippedCard.length)
    }
}
