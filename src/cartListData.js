function renderCardList(cardListNumber) {
    const cards_container = document.querySelector('.cards_container')

    const cardListData = [
        {
            id: 'spades-6',
            name: 'spades 6',
            image: './img/6p.png',
        },
        {
            id: 'spades-7',
            name: 'spades 7',
            image: './img/7p.png',
        },
        {
            id: 'spades-8',
            name: 'spades 8',
            image: './img/8p.png',
        },
        {
            id: 'spades-9',
            name: 'spades 9',
            image: './img/9p.png',
        },
        {
            id: 'spades-10',
            name: 'spades 10',
            image: './img/10p.png',
        },
        {
            id: 'spades-j',
            name: 'spades j',
            image: './img/jp.png',
        },
        {
            id: 'spades-q',
            name: 'spades q',
            image: './img/qp.png',
        },
        {
            id: 'spades-k',
            name: 'spades k',
            image: './img/kp.png',
        },
        {
            id: 'spades-a',
            name: 'spades a',
            image: './img/ap.png',
        },
        {
            id: 'hearts-6',
            name: 'hearts 6',
            image: './img/6c.png',
        },
        {
            id: 'hearts-7',
            name: 'hearts 7',
            image: './img/7c.png',
        },
        {
            id: 'hearts-8',
            name: 'hearts 8',
            image: './img/8c.png',
        },
        {
            id: 'hearts-9',
            name: 'hearts 9',
            image: './img/9c.png',
        },
        {
            id: 'hearts-10',
            name: 'hearts 10',
            image: './img/10c.png',
        },
        {
            id: 'hearts-j',
            name: 'hearts j',
            image: './img/jc.png',
        },
        {
            id: 'hearts-q',
            name: 'hearts q',
            image: './img/qc.png',
        },
        {
            id: 'hearts-k',
            name: 'hearts k',
            image: './img/kc.png',
        },
        {
            id: 'hearts-a',
            name: 'hearts a',
            image: './img/ac.png',
        },

        {
            id: 'diamonds-6',
            name: 'diamonds 6',
            image: './img/6b.png',
        },
        {
            id: 'diamonds-7',
            name: 'diamonds 7',
            image: './img/7b.png',
        },
        {
            id: 'diamonds-8',
            name: 'diamonds 8',
            image: './img/8b.png',
        },
        {
            id: 'diamonds-9',
            name: 'diamonds 9',
            image: './img/9b.png',
        },
        {
            id: 'diamonds-10',
            name: 'diamonds 10',
            image: './img/10b.png',
        },
        {
            id: 'diamonds-j',
            name: 'diamonds j',
            image: './img/jb.png',
        },
        {
            id: 'diamonds-q',
            name: 'diamonds q',
            image: './img/qb.png',
        },
        {
            id: 'diamonds-k',
            name: 'diamonds k',
            image: './img/kb.png',
        },
        {
            id: 'diamonds-a',
            name: 'diamonds a',
            image: './img/ab.png',
        },
        {
            id: 'clubs-6',
            name: 'clubs 6',
            image: './img/6k.png',
        },
        {
            id: 'clubs-7',
            name: 'clubs 7',
            image: './img/7k.png',
        },
        {
            id: 'clubs-8',
            name: 'clubs 8',
            image: './img/8k.png',
        },
        {
            id: 'clubs-9',
            name: 'clubs 9',
            image: './img/9k.png',
        },
        {
            id: 'clubs-10',
            name: 'clubs 10',
            image: './img/10k.png',
        },
        {
            id: 'clubs-j',
            name: 'clubs j',
            image: './img/jk.png',
        },
        {
            id: 'clubs-q',
            name: 'clubs q',
            image: './img/qk.png',
        },
        {
            id: 'clubs-k',
            name: 'clubs k',
            image: './img/kk.png',
        },
        {
            id: 'clubs-a',
            name: 'clubs a',
            image: './img/ak.png',
        }
    ]

    shuffle(cardListData);
// Возвращаем новый массив элементов, который будет содержать от 0 до указанного количества карт
    const cardList = cardListData.slice(0, cardListNumber)
    const duplicateCardsArray = duplicateArray(cardList); 
    shuffle(duplicateCardsArray);
    // Для каждого элемента массива будет создан div 
    duplicateCardsArray.forEach((card) => {
        const cardElement = document.createElement('div')
        cardElement.classList.add('memory-card')
        //Создаем элемент img и указываем атрибуты
        const imgElement = document.createElement('img')
        //Задаем атрибуты для игоровой карточки
        imgElement.setAttribute('src', card.image)
        imgElement.setAttribute('alt', card.name)
        imgElement.setAttribute('class', 'front-face')
        cardElement.setAttribute('data-framework', `${card.name}`)
        const imgElementBack = document.createElement('img')
        imgElementBack.setAttribute('src', './img/back.png')
        imgElementBack.setAttribute('alt', 'backSide')
        imgElementBack.setAttribute('class', 'back-face')
        // Добавляем элемент в div с классом card
        
        cardElement.appendChild(imgElement)
        cardElement.appendChild(imgElementBack)
       
        // Добавляем элемент div с классом card на освной экран с контейнер
        cards_container.appendChild(cardElement)
    })

    const cards = document.querySelectorAll('.memory-card');

  let hasFlippedCard = false;
  let lockBoard = false;
  let firstCard, secondCard;

  function flipCard() {
    if (lockBoard) return;
   if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
      return;
    }

    secondCard = this;

    checkForMatch();
  }

  function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();
  }

  function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

   resetBoard();
  }

  function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');

     resetBoard();
    }, 1500);
  }

 function resetBoard() {
   [hasFlippedCard, lockBoard] = [false, false];
   [firstCard, secondCard] = [null, null];
 }

  cards.forEach(card => card.addEventListener('click', flipCard));
}

const shuffle = (array) => {
    let currentIndex = array.length,
        randomIndex;
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

const duplicateArray = (array) =>
    array.reduce((res, current) => res.concat([current, current]), []);

