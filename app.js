/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
//declare global variables
const deck = document.querySelector('.deck');
let toggledCards = [];

let clockOff = true;
let time = 0;
let moves =0;
let clockId;
let matched = 0;

//function to shuffle cards
function cardShuffle(){
	const cardsToShuffle = Array.from(document.querySelectorAll('.deck li'));
	const shuffledCards = shuffle(cardsToShuffle);
	for (card of shuffledCards){
		deck.appendChild(card);
	}
}
cardShuffle();
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

//event listener for clicking cards
deck.addEventListener('click', event =>{
	const clickTarget = event.target;
	if(isClickValid(clickTarget)){
		if(clockOff){
			gameTimer();
			clockOff = false;
		}
	}
	if(clickTarget.classList.contains('card') && toggledCards.length < 2 && !toggledCards.includes(clickTarget)){
		toggleCard(clickTarget);
		addToggleCard(clickTarget);
		if(toggledCards.length === 2){
			checkMatch(clickTarget);
			addMove();
			checkScore();
		}
		const TOTAL_PAIRS = 8;
		if(matched === TOTAL_PAIRS){
			gameOver();
		}
	}
});

//funtion to toggle cards open/close
function toggleCard(card){
	card.classList.toggle('open');
	card.classList.toggle('show');
}

function addToggleCard(clickTarget){
	toggledCards.push(clickTarget);
	//console.log(toggledCards);
	}

//funtion to check card match
function checkMatch(){
	if(toggledCards[0].firstElementChild.className === toggledCards[1].firstElementChild.className){
		toggledCards[0].classList.toggle('match');
		toggledCards[1].classList.toggle('match');
		toggledCards = [];
		matched++;
	}else{
		setTimeout(() =>{
			toggleCard(toggledCards[0]);
			toggleCard(toggledCards[1]);
			toggledCards = [];
		}, 1000);
	}
}

// function to check is user clicking is valid
function isClickValid(clickTarget){
	return(
		clickTarget.classList.contains('card')&& !clickTarget.classList.contains('match')&&toggledCards.length <2 && !toggledCards.includes(clickTarget)
		);
}

//function to add user moves
function addMove(){
	moves++;
	const moveText = document.querySelector('.moves');
	moveText.innerHTML = moves;
}

////function to ccheck the score
function checkScore(){
	if(moves === 16 || moves === 24){
		hideStar();
	}
}


function hideStar(){
	const starList = document.querySelectorAll('.stars li');
	for (star of starList){
		if (star.style.display !== 'none'){
			star.style.display = 'none';
			break;
		}
		
	}
}

//function to calcuate the time/duration of game
function gameTimer(){
	 clockId = setInterval(()=> {
		time++;
		displayTime();
		console.log(time);
	},1000);
}

function stopClock(){
	clearInterval(clockId);
}

// function to display the time in seconds
function displayTime(){
	const minutes = Math.floor(time/60);
	const seconds = Math.floor(time%60);
	const clock = document.querySelector('.clock');
	if(seconds<10){
		clock.innerHTML = `${minutes}:0${seconds}`;
	}else{
		clock.innerHTML = `${minutes}:${seconds}`;
	}
	//console.log(clock);
}

//funtion to hide modal
function toggleModal(){
	const modal = document.querySelector('.modal_background');
	modal.classList.toggle('hide');
	checkScore();
	displayModalStatus();
}

//funtion to display the modal when the game is complete
function displayModalStatus(){
	const timeStatus = document.querySelector('.modal_time');
	const clockTime = document.querySelector('.clock').innerHTML;
	const moveStatus = document.querySelector('.modal_moves');
	const starStatus  = document.querySelector('.modal_stars');
	const stars = getStars();
	timeStatus.innerHTML = `Time = ${clockTime}`;
	moveStatus.innerHTML = 	`Moves = ${moves}`;
	starStatus.innerHTML = `Stars = ${stars}`;
}

// funtion to count stars and rate the player
function getStars(){
	stars = document.querySelectorAll('.stars li');
	starCount = 0;
	for(star of stars){
		if(star.style.display !== 'none'){
			starCount++;
		}
	}
	//console.log(starCount);
	return starCount;
}

document.querySelector('.modal_cancel').addEventListener('click', ()=>{
	toggleModal();
});

document.querySelector('.modal_replay').addEventListener('click', replayGame);

document.querySelector('.restart').addEventListener('click', resetGame);

//function to reset game
function resetGame(){
	toggledCards = [];
	matched = 0;
	resetClockAndTime();
	resetMoves();
	resetStars();
	resetCards();
	cardShuffle();	
}

//function to reset the time
function resetClockAndTime(){
	stopClock();
	clockOff = true;
	time = 0;
	displayTime();
}

//function to reset the cards opened when the cards didnt match
function resetMoves(){
	moves = 0;
	document.querySelector('.moves').innerHTML = moves;
}

//functio to reset the stars rating
function resetStars(){
	stars = 0;
	const starList = document.querySelectorAll('.stars li');
	for(star of starList){
		star.style.display = 'inline';
	}
}

//function to end the game
function gameOver(){
	stopClock();
	displayModalStatus();
	toggleModal();
}

//funtion to replay game
function replayGame(){
	matched = 0;
	resetGame();
	toggleModal();
}

//funtion to reset cards when the game is over
function resetCards(){
	const cards = document.querySelectorAll('.deck li');
	for (let card of cards){
		card.className = 'card';
	}
}
// Shuffle function from http://stackoverflow.com/a/2450976



/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
//the reference that enabled me start the game was gotten from https://matthewcranford.com/memory-game-walkthrough
