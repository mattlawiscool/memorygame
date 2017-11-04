/* 
10.19
Added code to write into the class of the cards. Need to find a way to loop through each possibly "this"

10.31 .hasclass() may be the key.

11.1 
Able to to get clicked classes into a variable but it's a string where do you go to next?
Got the Cards into an array! Yay!

*/



/*
 * Create a list that holds all of your cards
 */
let deck = ['fa fa-diamond', 'fa fa-diamond', 'fa fa-paper-plane-o', 'fa fa-paper-plane-o', 'fa fa-anchor', 'fa fa-anchor', 'fa fa-bolt', 'fa fa-bolt', 'fa fa-cube', 'fa fa-cube', 'fa fa-leaf', 'fa fa-leaf', 'fa fa-bomb', 'fa fa-bomb', 'fa fa-bicycle', 'fa fa-bicycle']
let moves = 0
let openCard = [];
let openedCards = [];

let cards = $(".card").children()

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


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

// Listener Function

function checkMatch() {

}


function cardClick() {
    card = $('.card')
    $(card).click(function() {
        $(this).attr('class', 'card open show remove');
        openCard = $(this).children().prop("class"); //Creates List that I can compare! 
        openCard += openedCards.push(openCard)
        console.log(openCard)
            //console.log(openedCards)
        if (openedCards.length == 2) {
            $(".moves").text(moves += 1)
            if (openedCards[0] == openedCards[1]) {
                console.log(`It's a match!`)
                $(".open").attr('class', 'card show match remove');
                openedCards = [];
            } else {
                console.log(`It's not a match`)
                $(".open").attr('class', 'card remove')
                openedCards = [];
            }
        }
    });

}

cardClick()

function newCards() {
    let decks = "";
    let newCard = "";
    $(".remove").remove();
    for (var i = 0; i < deck.length; i++) {
        newCard += `<li class="card remove"><i class="${deck[i]} remove"></i></li>`;
    }

    $(".deck").append(newCard)
}

function shuffleDeck() {
    reset = $('.restart');
    $(reset).click(function() {
        alert(`You shuffled the deck!`)
        shuffle(deck);
        newCards();
        cardClick();
    });
}
shuffleDeck();