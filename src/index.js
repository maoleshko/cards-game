import './css/style.css'
import { renderBlockChoice, renderScreenChoice } from './mainScreen'

window.application = {
    blocks: {},
    screens: {},
    renderScreen: function (screenName) {
        this.screens[screenName]()
    },
    renderBlock: function (blockName, container) {
        this.blocks[blockName](container)
    },
    levels: [],
}

window.application.blocks['blockChoice'] = renderBlockChoice
window.application.screens['screenChoice'] = renderScreenChoice
window.application.renderScreen('screenChoice')
