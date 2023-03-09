const buttons = document.querySelectorAll('.buttons');
const boxButtons = document.querySelector('.level__content');
const startButtons = document.querySelector('.button__start');
const labelsButtons = document.querySelectorAll('.buttons-label');


startButtons.addEventListener('click', gameStart);

function gameStart () {
    for (const control of buttons) {
        if (control.checked === true) {
            window.application.levels = control.value;
            switch (window.application.levels) {
                case '1': console.log('экран сложность 1');
                break;
                case '2': console.log('экран сложность 2');
                break;
                case '3': console.log('экран сложность 3');
                break;
                default:break;
            }
        }
    }
};