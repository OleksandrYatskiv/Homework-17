rows = [];
cardNumber = 1;
suits = ['clubs', 'spades', 'diamonds', 'hearts'];
specialCards = ['J', 'Q', 'K', 'T'];
suits = suits.concat(suits);

for (i = 0; i < 7; i++) {
    cards = [];

    for (j = 0; j < 8; j++) {
        if (j % 4 === 0) cardNumber++;

        if (i === 6 && j > 3) {
            break;
            
        } else if (cardNumber <= 10) {
            cards.push(`<div class="card">
                            <div class="card__info">${cardNumber}<img src="images/${suits[j]}.svg" alt="${suits[j]}"></div>
                            <div class="card__info">${cardNumber}<img src="images/${suits[j]}.svg" alt="${suits[j]}"></div>
                        </div>`);
        } else {
            cards.push(`<div class="card">
                            <div class="card__info">${specialCards[cardNumber - 11]}<img src="images/${suits[j]}.svg" alt="${suits[j]}"></div>
                            <div class="card__info">${specialCards[cardNumber - 11]}<img src="images/${suits[j]}.svg" alt="${suits[j]}"></div>
                        </div>`);
        }
    }

    rows.push(`${cards.join('')}`);

}

htmlCode = `<div class="wrapper"> ${rows.join('')} </div>`;

document.write(htmlCode);