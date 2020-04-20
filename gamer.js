function Card(name, id, img) {
    this.name = name;
    this.id = id;
    this.frontFace = 'pirates/back.jpg';
    this.backFace = img;
    this.status = false;
    this.getImage = function () {
        if (!this.status) {
            return `<img src=${this.frontFace} onclick="findCard(${this.id})">`;
            // return '<img src=${this.frontFace} onclick="findCard(${this.id})">'
        } else {
            return `<img src=${this.backFace}>`;
        }
    };

    this.changeStatus = function () {
        this.status = true;
    };
}

let card1 = new Card('picture1', 1, "pirates/onepiece1.jpg");
let card2 = new Card('picture2', 2, 'pirates/onepiece2.jpg');
let card3 = new Card('picture3', 3, 'pirates/onepiece3.jpg');
let card4 = new Card('picture4', 4, 'pirates/onepiece4.jpg');
let card5 = new Card('picture5', 5, 'pirates/onepiece5.jpg');
let card6 = new Card('picture6', 6, 'pirates/onepiece6.jpg');
let card7 = new Card('picture7', 7, 'pirates/onepiece7.jpg');
let card8 = new Card('picture8', 8, 'pirates/onepiece8.jpg');
let card9 = new Card('picture1', 9, "pirates/onepiece1.jpg");
let card10 = new Card('picture2', 10, 'pirates/onepiece2.jpg');
let card11 = new Card('picture3', 11, 'pirates/onepiece3.jpg');
let card12 = new Card('picture4', 12, 'pirates/onepiece4.jpg');
let card13 = new Card('picture5', 13, 'pirates/onepiece5.jpg');
let card14 = new Card('picture6', 14, 'pirates/onepiece6.jpg');
let card15 = new Card('picture7', 15, 'pirates/onepiece7.jpg');
let card16 = new Card('picture8', 16, 'pirates/onepiece8.jpg');
let cards = [card1, card2, card3, card4, card5, card6, card7, card8,
    card9, card10, card11, card12, card13, card14, card15, card16];
let doubleCards = shuffle(cards);
let count = 0;
let check = [];
let x = [];
let checkWin = 0;
let countClick = -1;
let music1 = new Audio();
music1.src = 'BinksSake.mp3';

function display() {
    document.getElementById('myPicture').innerHTML = '';
    music1.play();
    for (let i = 0; i < doubleCards.length; i++) {
        document.getElementById('myPicture').innerHTML += doubleCards[i].getImage();
    }
    countClick += 1;
    document.getElementById('myScore').value = countClick;
    if (checkWin === 7 && check[check.length - 1] === check[check.length - 2]) {
        alert('CONGRATULATION!');
    }
}

function findCard(id) {
    for (let i = 0; i < doubleCards.length; i++) {
        if (doubleCards[i].id === id) {
            doubleCards[i].changeStatus();
            x.push(i);
            check.push(doubleCards[i].name);
            if (count === 2) {
                if ((check.length - 3) % 2 === 0) {
                    if (check[check.length - 3] !== check[check.length - 2]) {
                        doubleCards[x[x.length - 2]].status = false;
                        doubleCards[x[x.length - 3]].status = false;
                    } else {
                        checkWin += 1;
                    }
                }
            }
        }
    }
    if (count === 2) {
        count = 0;
    }
    display();
    count++;
}

function resetGame() {
    location.reload();
}


display();

function shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
    return array;
}
