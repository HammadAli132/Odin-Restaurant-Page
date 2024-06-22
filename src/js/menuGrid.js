class CARD {
    constructor() {
        this.card = document.createElement('div');
        this.card.classList.add('card');
        this.cardImg = document.createElement('div');
        this.cardImg.classList.add('card-img');
        this.image = document.createElement('img');
        this.image.src = '#';
        this.image.alt = 'Menu-Image';
        this.cardImg.appendChild(this.image);
        this.cardDesc = document.createElement('div');
        this.cardDesc.classList.add('card-desc');
        this.desc = document.createElement('p');
        this.desc.classList.add('desc');
        this.desc.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, eaque.';
        this.button = document.createElement('button');
        this.button.classList.add('btn');
        this.button.innerText = 'Read More...';
        this.cardDesc.appendChild(this.desc);
        this.cardDesc.appendChild(this.button);
        this.card.appendChild(this.cardImg);
        this.card.appendChild(this.cardDesc);
    }
    getCard() {
        return this.card;
    }
};

class GRID {
    constructor(number) {
        this.cards = [];
        this.grid = document.createElement('div');
        this.grid.id = 'menu-grid';
        while (number) {
            this.cards.push(new CARD());
            number--;
        }
        this.cards.forEach(card => {
            this.grid.appendChild(card.getCard());
        });
    }
};

function getGrid(number) {
    return new GRID(number);   
};

export default getGrid;