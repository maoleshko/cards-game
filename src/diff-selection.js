const APP_CONTAINER = document.querySelector('.app')

const button = document.querySelectorAll('.button')
const boxButton = document.querySelector('.level__content')
const startButton = document.querySelector('.button__start')
const labelsButton = document.querySelectorAll('.button-label')

startButton.addEventListener('click', gameStart)

function gameStart() {
    for (const control of button) {
        if (control.checked === true) {
            window.application.levels = control.value
            switch (window.application.levels) {
                case '1':
                    APP_CONTAINER.innerHTML = '';
                    renderCardList(6)
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
