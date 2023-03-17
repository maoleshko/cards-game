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
                    window.application.renderScreen('play');
                    break
                case '2':
                    console.log('экран сложность 2')
                    break
                case '3':
                    console.log('экран сложность 3')
                    break
                default:
                    break
            }
        }
    }
}
