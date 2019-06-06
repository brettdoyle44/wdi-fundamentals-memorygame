
const cards = [
	{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},

{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},

{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}

	];

function createBoard() {
	for (var i = 0; i < cards.length; i++) {
		const cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id',[i]);
		cardElement.addEventListener('click',flipCard);
		document.getElementById('game-board').appendChild(cardElement);

	}
}


const cardsInPlay = [];

function checkForMatch(){
	
	if (cardsInPlay[0] === cardsInPlay[1]) {
  		alert("You found a match!");
	} else {
  		alert("Sorry, try again.");
		}
}


function flipCard() {

	const cardId = this.getAttribute('data-id');

	cardsInPlay.push(cards[cardId].rank);
 	
 	this.setAttribute('src', cards[cardId].cardImage);

	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
	
}

createBoard();


// It might be useful to add a "Reset" button to the HTML and set up an event in 
// the JavaScript file so that the user can reset the game after playing.

// For an extra challenge, consider how you could keep track of and display the user's score.

