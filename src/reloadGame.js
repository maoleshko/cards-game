import { renderCardList } from './cartListData'

export function resetGame() {
    const app = document.querySelector('.app')
    app.innerHTML = ''
    window.application.renderScreen('screenChoice')
}

export function tryAgain() {
    const APP_CONTAINER = document.querySelector('.app')
    const gameMenu = document.querySelector('.game-menu')
    gameMenu.textContent = ''
    const gamecontainer = document.querySelector('.container')
    gamecontainer.textContent = ''

    APP_CONTAINER.innerHTML = ''
    APP_CONTAINER.classList.add('hide')
    switch (window.application.levels) {
        case '1':
            renderCardList(3)
            break
        case '2':
            renderCardList(6)
            break
        case '3':
            renderCardList(9)
            break
        default:
            break
    }
}
