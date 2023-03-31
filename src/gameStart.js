import { renderCardList } from './cartListData'

// Кнопка "Старт " при выборе уровня сложности
export function gameStart() {
    const APP_CONTAINER = document.querySelector('.app')
    const button = document.querySelectorAll('.button')
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
                    renderCardList(6)
                    break
                case '3':
                    renderCardList(9)
                    break
                default:
                    break
            }
        }
    }
}
