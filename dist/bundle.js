/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/cardsRandom.ts":
/*!****************************!*\
  !*** ./src/cardsRandom.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "duplicateArray": () => (/* binding */ duplicateArray),
/* harmony export */   "shuffle": () => (/* binding */ shuffle)
/* harmony export */ });
const shuffle = (array) => {
    let count = array.length;
    let currentIndex = count, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }
    return array;
};
let array = [];
const duplicateArray = (array) => {
    const duplicated = [...array, ...array];
    return duplicated.reduce((res, current) => res.concat([current, current]), []);
};


/***/ }),

/***/ "./src/cartListData.ts":
/*!*****************************!*\
  !*** ./src/cartListData.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderCardList": () => (/* binding */ renderCardList)
/* harmony export */ });
/* harmony import */ var _endGameScreen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./endGameScreen */ "./src/endGameScreen.ts");
/* harmony import */ var _reloadGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reloadGame */ "./src/reloadGame.ts");
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timer */ "./src/timer.ts");
/* harmony import */ var _cardsRandom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cardsRandom */ "./src/cardsRandom.ts");




//Главный игровой экран с полем карт и игровой логикой
const cardListData = [
    {
        id: 'spades-6',
        name: 'spades 6',
        image: './static/img/6p.png',
    },
    {
        id: 'spades-7',
        name: 'spades 7',
        image: './static/img/7p.png',
    },
    {
        id: 'spades-8',
        name: 'spades 8',
        image: './static/img/8p.png',
    },
    {
        id: 'spades-9',
        name: 'spades 9',
        image: './static/img/9p.png',
    },
    {
        id: 'spades-10',
        name: 'spades 10',
        image: './static/img/10p.png',
    },
    {
        id: 'spades-j',
        name: 'spades j',
        image: './static/img/jp.png',
    },
    {
        id: 'spades-q',
        name: 'spades q',
        image: './static/img/qp.png',
    },
    {
        id: 'spades-k',
        name: 'spades k',
        image: './static/img/kp.png',
    },
    {
        id: 'spades-a',
        name: 'spades a',
        image: './static/img/ap.png',
    },
    {
        id: 'hearts-6',
        name: 'hearts 6',
        image: './static/img/6c.png',
    },
    {
        id: 'hearts-7',
        name: 'hearts 7',
        image: './static/img/7c.png',
    },
    {
        id: 'hearts-8',
        name: 'hearts 8',
        image: './static/img/8c.png',
    },
    {
        id: 'hearts-9',
        name: 'hearts 9',
        image: './static/img/9c.png',
    },
    {
        id: 'hearts-10',
        name: 'hearts 10',
        image: './static/img/10c.png',
    },
    {
        id: 'hearts-j',
        name: 'hearts j',
        image: './static/img/jc.png',
    },
    {
        id: 'hearts-q',
        name: 'hearts q',
        image: './static/img/qc.png',
    },
    {
        id: 'hearts-k',
        name: 'hearts k',
        image: './static/img/kc.png',
    },
    {
        id: 'hearts-a',
        name: 'hearts a',
        image: './static/img/ac.png',
    },
    {
        id: 'diamonds-6',
        name: 'diamonds 6',
        image: './static/img/6b.png',
    },
    {
        id: 'diamonds-7',
        name: 'diamonds 7',
        image: './static/img/7b.png',
    },
    {
        id: 'diamonds-8',
        name: 'diamonds 8',
        image: './static/img/8b.png',
    },
    {
        id: 'diamonds-9',
        name: 'diamonds 9',
        image: './static/img/9b.png',
    },
    {
        id: 'diamonds-10',
        name: 'diamonds 10',
        image: './static/img/10b.png',
    },
    {
        id: 'diamonds-j',
        name: 'diamonds j',
        image: './static/img/jb.png',
    },
    {
        id: 'diamonds-q',
        name: 'diamonds q',
        image: './static/img/qb.png',
    },
    {
        id: 'diamonds-k',
        name: 'diamonds k',
        image: './static/img/kb.png',
    },
    {
        id: 'diamonds-a',
        name: 'diamonds a',
        image: './static/img/ab.png',
    },
    {
        id: 'clubs-6',
        name: 'clubs 6',
        image: './static/img/6k.png',
    },
    {
        id: 'clubs-7',
        name: 'clubs 7',
        image: './static/img/7k.png',
    },
    {
        id: 'clubs-8',
        name: 'clubs 8',
        image: './static/img/8k.png',
    },
    {
        id: 'clubs-9',
        name: 'clubs 9',
        image: './static/img/9k.png',
    },
    {
        id: 'clubs-10',
        name: 'clubs 10',
        image: './static/img/10k.png',
    },
    {
        id: 'clubs-j',
        name: 'clubs j',
        image: './static/img/jk.png',
    },
    {
        id: 'clubs-q',
        name: 'clubs q',
        image: './static/img/qk.png',
    },
    {
        id: 'clubs-k',
        name: 'clubs k',
        image: './static/img/kk.png',
    },
    {
        id: 'clubs-a',
        name: 'clubs a',
        image: './static/img/ak.png',
    },
];
function renderCardList(cardListNumber) {
    const gameMenu = document.querySelector('.game-menu');
    const timeBoard = document.createElement('div');
    timeBoard.classList.add('timeBoard');
    const label = document.createElement('div');
    label.classList.add('label');
    const min = document.createElement('div');
    min.classList.add('min');
    const sec = document.createElement('div');
    sec.classList.add('sec');
    const timeLabelmin = document.createElement('timeLabel');
    timeLabelmin.classList.add('timer');
    timeLabelmin.textContent = 'min';
    label.textContent = '.';
    const timeLabelsec = document.createElement('timeLabel');
    timeLabelsec.classList.add('timeLabel');
    timeLabelsec.textContent = 'sec';
    const timemin = document.createElement('h2');
    timemin.classList.add('timemin');
    timemin.textContent = '00';
    const timesec = document.createElement('h2');
    timesec.classList.add('timesec');
    timesec.textContent = '00';
    const reloadButton = document.createElement('button');
    reloadButton.textContent = 'Начать заново';
    reloadButton.classList.add('button', 'btn-reload');
    if (gameMenu !== null) {
        gameMenu.appendChild(timeBoard);
        gameMenu.appendChild(reloadButton);
    }
    else {
        console.warn('error');
    }
    timeBoard.appendChild(min);
    timeBoard.appendChild(label);
    timeBoard.appendChild(sec);
    min.appendChild(timeLabelmin);
    sec.appendChild(timeLabelsec);
    min.appendChild(timemin);
    sec.appendChild(timesec);
    (0,_timer__WEBPACK_IMPORTED_MODULE_2__.timer)();
    reloadButton.addEventListener('click', _reloadGame__WEBPACK_IMPORTED_MODULE_1__.tryAgain);
    const cardsСontainer = document.querySelector('.container');
    (0,_cardsRandom__WEBPACK_IMPORTED_MODULE_3__.shuffle)(cardListData);
    // Возвращаем новый массив элементов, который будет содержать от 0 до указанного количества карт
    const cardList = cardListData.slice(0, cardListNumber);
    const duplicateCardsArray = (0,_cardsRandom__WEBPACK_IMPORTED_MODULE_3__.duplicateArray)(cardList);
    (0,_cardsRandom__WEBPACK_IMPORTED_MODULE_3__.shuffle)(duplicateCardsArray);
    // Для каждого элемента массива будет создан div
    duplicateCardsArray.forEach((card) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('memory-card');
        cardElement.classList.add('flip');
        //Создаем элемент img и указываем атрибуты
        const imgElement = document.createElement('img');
        //Задаем атрибуты для игоровой карточки
        imgElement.setAttribute('src', card.image);
        imgElement.setAttribute('alt', card.name);
        imgElement.setAttribute('class', 'front-face');
        cardElement.setAttribute('data-framework', `${card.name}`);
        const imgElementBack = document.createElement('img');
        imgElementBack.setAttribute('src', './static/img/back.png');
        imgElementBack.setAttribute('alt', 'backSide');
        imgElementBack.setAttribute('class', 'back-face');
        // Добавляем элемент в div с классом card
        cardElement.appendChild(imgElement);
        cardElement.appendChild(imgElementBack);
        // Добавляем элемент div с классом card на освной экран с контейнер
        cardsСontainer.appendChild(cardElement);
    });
    const cards = document.querySelectorAll('.memory-card');
    setTimeout(() => {
        cards.forEach((card) => {
            card.classList.remove('flip');
        });
    }, 1000);
    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard = null;
    let secondCard = null;
    let couple = 0;
    function flipCard(card) {
        if (lockBoard)
            return;
        if (card === firstCard)
            return;
        if (card !== null) {
            card === null || card === void 0 ? void 0 : card.classList.add('flip');
        }
        if (!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = card;
            return;
        }
        secondCard = card;
        checkForMatch();
    }
    function checkForMatch() {
        if (firstCard === null || secondCard === null) {
            return;
        }
        if (firstCard.dataset.framework === secondCard.dataset.framework) {
            disableCards();
            return;
        }
        unflipCards();
        couple++;
        if (couple === cardListNumber) {
            setTimeout(() => {
                (0,_endGameScreen__WEBPACK_IMPORTED_MODULE_0__.renderEndScreen)('Вы победили!', "url('./static/img/win.png')");
            }, 1000);
        }
    }
    function disableCards() {
        firstCard === null || firstCard === void 0 ? void 0 : firstCard.removeEventListener('click', (event) => {
            flipCard;
        });
        secondCard === null || secondCard === void 0 ? void 0 : secondCard.removeEventListener('click', (event) => {
            flipCard;
        });
        // firstCard?.removeEventListener('click', flipCard)
        // secondCard?.removeEventListener('click', flipCard)
        resetBoard();
    }
    function unflipCards() {
        lockBoard = true;
        setTimeout(() => {
            firstCard === null || firstCard === void 0 ? void 0 : firstCard.classList.remove('flip');
            secondCard === null || secondCard === void 0 ? void 0 : secondCard.classList.remove('flip');
            (0,_endGameScreen__WEBPACK_IMPORTED_MODULE_0__.renderEndScreen)('Вы проиграли!', "url('./static/img/lose.png')");
        }, 1500);
    }
    function resetBoard() {
        hasFlippedCard = false;
        lockBoard = false;
        firstCard = null;
        secondCard = null;
    }
    cards.forEach((card) => card.addEventListener('click', (event) => {
        console.log('Карта нажата');
        card.classList.add('flip');
    }));
    // cards.forEach((card) => card.addEventListener('click', flipCard))
}


/***/ }),

/***/ "./src/endGameScreen.ts":
/*!******************************!*\
  !*** ./src/endGameScreen.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderEndScreen": () => (/* binding */ renderEndScreen)
/* harmony export */ });
/* harmony import */ var _reloadGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reloadGame */ "./src/reloadGame.ts");

// Экран вывода победы и поражения
function renderEndScreen(Status, image) {
    const min = document.querySelector('.timemin');
    const sec = document.querySelector('.timesec');
    const element = document.querySelector('.timemin');
    window.application.time = min + '.' + sec;
    const gameMenu = document.querySelector('.game-menu');
    gameMenu.textContent = '';
    const gamecontainer = document.querySelector('.container');
    gamecontainer.textContent = '';
    const APP_CONTAINER = document.querySelector('.app');
    APP_CONTAINER.innerHTML = '';
    window.application.levels = '';
    const emojiImage = document.createElement('div');
    emojiImage.classList.add('emojiImage');
    // emojiImage.style.backgroundImage = "url('./static/img/lose.png')"
    emojiImage.style.backgroundImage = image;
    console.log(image);
    console.log(emojiImage);
    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = Status;
    const h2 = document.createElement('h2');
    h2.classList.add('timeRoundLabel');
    h2.textContent = 'Затраченное время:';
    const timeRound = document.createElement('h1');
    timeRound.classList.add('timeRound');
    timeRound.textContent = window.application.time;
    window.application.stopInterval();
    const buttonRestart = document.createElement('button');
    buttonRestart.classList.add('button-restart', 'button');
    buttonRestart.textContent = 'Играть снова';
    buttonRestart.addEventListener('click', _reloadGame__WEBPACK_IMPORTED_MODULE_0__.resetGame);
    APP_CONTAINER.classList.remove('hide');
    APP_CONTAINER.appendChild(emojiImage);
    APP_CONTAINER.appendChild(title);
    APP_CONTAINER.appendChild(h2);
    APP_CONTAINER.appendChild(timeRound);
    APP_CONTAINER.appendChild(buttonRestart);
}


/***/ }),

/***/ "./src/gameStart.ts":
/*!**************************!*\
  !*** ./src/gameStart.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameStart": () => (/* binding */ gameStart)
/* harmony export */ });
/* harmony import */ var _cartListData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cartListData */ "./src/cartListData.ts");

// Кнопка "Старт " при выборе уровня сложности
function gameStart() {
    const APP_CONTAINER = document.querySelector('.app');
    const button = document.querySelectorAll('.button');
    for (const control of button) {
        if (control.checked === true) {
            window.application.levels = control.value;
            APP_CONTAINER.innerHTML = '';
            APP_CONTAINER.classList.add('hide');
            switch (window.application.levels) {
                case '1':
                    (0,_cartListData__WEBPACK_IMPORTED_MODULE_0__.renderCardList)(3);
                    break;
                case '2':
                    (0,_cartListData__WEBPACK_IMPORTED_MODULE_0__.renderCardList)(6);
                    break;
                case '3':
                    (0,_cartListData__WEBPACK_IMPORTED_MODULE_0__.renderCardList)(9);
                    break;
                default:
                    break;
            }
        }
    }
}


/***/ }),

/***/ "./src/mainScreen.ts":
/*!***************************!*\
  !*** ./src/mainScreen.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderBlockChoice": () => (/* binding */ renderBlockChoice),
/* harmony export */   "renderScreenChoice": () => (/* binding */ renderScreenChoice)
/* harmony export */ });
/* harmony import */ var _gameStart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameStart */ "./src/gameStart.ts");

// Экран выбора сложности игры
function renderBlockChoice(levelContent) {
    const buttonName = ['1', '2', '3'];
    buttonName.forEach((elements) => {
        const buttonLevels = document.createElement('input');
        buttonLevels.setAttribute('type', 'radio');
        buttonLevels.setAttribute('value', elements);
        buttonLevels.setAttribute('id', elements);
        buttonLevels.setAttribute('name', 'group-button');
        buttonLevels.classList.add('input', 'button');
        const buttonLabel = document.createElement('label');
        buttonLabel.setAttribute('for', elements);
        buttonLabel.classList.add('button-label');
        buttonLabel.textContent = elements;
        levelContent.appendChild(buttonLevels);
        levelContent.appendChild(buttonLabel);
    });
}
function renderScreenChoice() {
    const APP_CONTAINER = document.querySelector('.app');
    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'Выбери сложность';
    const levelContent = document.createElement('div');
    levelContent.classList.add('level-content');
    const ButtonStart = document.createElement('button');
    ButtonStart.classList.add('button-start', 'button');
    ButtonStart.textContent = 'Старт';
    ButtonStart.addEventListener('click', _gameStart__WEBPACK_IMPORTED_MODULE_0__.gameStart);
    APP_CONTAINER.appendChild(title);
    window.application.renderBlock('blockChoice', levelContent);
    APP_CONTAINER.appendChild(levelContent);
    APP_CONTAINER.appendChild(ButtonStart);
}


/***/ }),

/***/ "./src/reloadGame.ts":
/*!***************************!*\
  !*** ./src/reloadGame.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resetGame": () => (/* binding */ resetGame),
/* harmony export */   "tryAgain": () => (/* binding */ tryAgain)
/* harmony export */ });
/* harmony import */ var _cartListData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cartListData */ "./src/cartListData.ts");

function resetGame() {
    const APP_CONTAINER = document.querySelector('.app');
    if (APP_CONTAINER !== null) {
        APP_CONTAINER.innerHTML = '';
        window.application.renderScreen('screenChoice');
    }
}
function tryAgain() {
    const APP_CONTAINER = document.querySelector('.app');
    const gameMenu = document.querySelector('.game-menu');
    gameMenu.textContent = '';
    const gamecontainer = document.querySelector('.container');
    gamecontainer.textContent = '';
    APP_CONTAINER.innerHTML = '';
    APP_CONTAINER.classList.add('hide');
    switch (window.application.levels) {
        case '1':
            (0,_cartListData__WEBPACK_IMPORTED_MODULE_0__.renderCardList)(3);
            break;
        case '2':
            (0,_cartListData__WEBPACK_IMPORTED_MODULE_0__.renderCardList)(6);
            break;
        case '3':
            (0,_cartListData__WEBPACK_IMPORTED_MODULE_0__.renderCardList)(9);
            break;
        default:
            break;
    }
}


/***/ }),

/***/ "./src/timer.ts":
/*!**********************!*\
  !*** ./src/timer.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timer": () => (/* binding */ timer)
/* harmony export */ });
//Таймер
function timer() {
    let secs = 0;
    let mins = 0;
    const timemin = document.querySelector('.timemin');
    const timesec = document.querySelector('.timesec');
    const gameTime = setInterval(function () {
        secs++;
        if (secs === 60) {
            secs = 0;
            mins++;
        }
        let clockmin = mins < 10 ? '0' + mins : mins;
        timemin.textContent = clockmin.toString();
        let clocksec = secs < 10 ? '0' + secs : secs;
        timesec.textContent = clocksec.toString();
    }, 1000);
    window.application.timers.push(gameTime);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _mainScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainScreen */ "./src/mainScreen.ts");


window.application = {
    blocks: {},
    screens: {},
    renderScreen: function (screenName) {
        this.screens[screenName]();
    },
    renderBlock: function (blockName, container) {
        this.blocks[blockName](container);
    },
    levels: [],
    timers: [],
    stopInterval: function () {
        this.timers.forEach((timer) => {
            clearInterval(timer);
        });
    },
    time: '',
};
window.application.blocks['blockChoice'] = _mainScreen__WEBPACK_IMPORTED_MODULE_1__.renderBlockChoice;
window.application.screens['screenChoice'] = _mainScreen__WEBPACK_IMPORTED_MODULE_1__.renderScreenChoice;
window.application.renderScreen('screenChoice');

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map