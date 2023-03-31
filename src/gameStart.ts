import { renderCardList } from './cartListData'

// Кнопка "Старт " при выборе уровня сложности
export function gameStart(): void {
    const APP_CONTAINER = document.querySelector('.app') as HTMLElement
    const button = document.querySelectorAll('.button')
    for (const control of button) {
        if ((control as HTMLInputElement).checked === true) {
            window.application.levels = (control as HTMLInputElement).value
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
