var cards = ["queen","queen","king","king"];

var cardsInPlay = [];

var cardOne = cards[0];

cardsInPlay.push(cardOne);

console.log("User flipped" + " " + cardsInPlay);

var cardTwo = cards [1];

cardsInPlay.push(cardTwo);

console.log("User flipped" + " " + cardsInPlay[1]);

if (cardsInPlay.length === 2) {
	if(cardsInPlay[0] === cardsInPlay [1]){
	alert("You found a match!")
}

	else if (cardsInPlay[0] !== cardsInPlay[1]){
		alert("Sorry try again");

	}
}

