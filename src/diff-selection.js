const APP_CONTAINER = document.querySelector('.app')
const cards_container = document.querySelector('.cards_container')

const button = document.querySelectorAll('.button')
const boxButton = document.querySelector('.level__content')
const startButton = document.querySelector('.button__start')
const labelsButton = document.querySelectorAll('.button-label')

startButton.addEventListener('click', gameStart)

function gameStart() {
    for (const control of button) {
        if (control.checked === true) {
            window.application.levels = control.value
            APP_CONTAINER.innerHTML = ''
            APP_CONTAINER.classList.add('hide')
            switch (window.application.levels) {
                case '1':
                    renderCardList(3)
                    break
                case '2':
                    renderCardList(12)
                    break
                case '3':
                    renderCardList(18)
                    break
                default:
                    break
            }
        }
    }
}
