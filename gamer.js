function Card(name, id, img) {
    this.name = name;
    this.id = id;
    this.frontFace = 'pirates/back.jpg';
    this.backFace = img;
    this.status = false;
    this.getImage = function () {
        if (!this.status) {
            return `<img src=${this.frontFace} onclick="findCard(${this.id})">`;

        } else {
            return `<img src=${this.backFace}>`;
        }
    };

    this.changeStatus = function () {
        this.status = true;
    };
}


let cards =[];
function addCard() {
    for(let i=1;i<=16;i++){
        let name= "picture"+i;
        let id =i;
        let img='pirates/onepiece'+i+'.jpg';
        cards.push(new Card(name,id,img));
        id= i+16;
        cards.push(new Card(name,id,img));
    }
}
addCard();

let shuffleCards = shuffle(cards);
let count = 0;
let checkName = [];
let mapClick = [];
let checkWin = 0;
let countClick = -1;
let music1 = new Audio();
music1.src = 'BinksSake.mp3';

function display() {
    document.getElementById('myPicture').innerHTML = '';
    music1.play();
    for (let i = 0; i < shuffleCards.length; i++) {
        document.getElementById('myPicture').innerHTML += shuffleCards[i].getImage();
    }
    countClick += 1;
    document.getElementById('myScore').value = countClick;
    if (checkWin === 15 && checkName[checkName.length - 1] === checkName[checkName.length - 2]) {
        alert('CONGRATULATION!');
    }
}

function findCard(id) {
    for (let i = 0; i < shuffleCards.length; i++) {
        if (shuffleCards[i].id === id) {
            shuffleCards[i].changeStatus();
            mapClick.push(i);
            checkName.push(shuffleCards[i].name);
            if (count === 2) {
                if ((checkName.length - 3) % 2 === 0) {
                    if (checkName[checkName.length - 3] !== checkName[checkName.length - 2]) {
                        shuffleCards[mapClick[mapClick.length - 2]].status = false;
                        shuffleCards[mapClick[mapClick.length - 3]].status = false;
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
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

