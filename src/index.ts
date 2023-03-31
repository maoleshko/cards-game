import './css/style.css'
import { renderBlockChoice, renderScreenChoice } from './mainScreen'

declare global {
    interface Window {
        application: {
            blocks: {
                [key: string]: (container: HTMLElement) => void
            }
            screens: {
                [key: string]: () => void
            }
            renderBlock: (blockName: string, container: HTMLElement) => void
            renderScreen: (screenName: string) => void
            levels: []
            timers: [],
            time: string | [] | NodeJS.Timer
            stopInterval: () => void
        }
    }
}

window.application = {
    blocks: {},
    screens: {},
    renderScreen: function (screenName: string) {
        this.screens[screenName]()
    },
    renderBlock: function (blockName: string, container: HTMLElement) {
        this.blocks[blockName](container)
    },
    levels: [],
    timers: [],
    stopInterval: function () {
        this.timers.forEach((timer: string) => {
            clearInterval(timer)
        })
    },
    time: '',
}

window.application.blocks['blockChoice'] = renderBlockChoice
window.application.screens['screenChoice'] = renderScreenChoice
window.application.renderScreen('screenChoice')
