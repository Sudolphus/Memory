import { Grid } from './grid';
import './styles.css';
let gameGrid = new Grid();

function winner() {
  $("#winner").show();
}

function displayCard(card) {
  $(`#card${card.ID}`).text(card.value);
}

function cardCompare(card) {
  if (gameGrid.firstCard === 0) {
    gameGrid.setFirstCard(card.value, card.ID);
  } else if (gameGrid.firstCard === card.value) {
    gameGrid.removeMatch(card);
    $(`#card${gameGrid.firstCardID}`).text('');
    $(`#card${card.ID}`).text('');
    gameGrid.resetFirstCard();
  } else {
    $(`#card${gameGrid.firstCardID}`).text('This card is face down');
    $(`#card${card.ID}`).text('This card is face down');
    gameGrid.resetFirstCard();
  }
  if (gameGrid.cards.length === 0) {
    winner();
  }
}

function cardClick() {
  $(".cardContainer").click(function(event) {
    event.preventDefault();
    const cardID = parseInt(this.id.slice(4));
    const card = gameGrid.findCard(cardID);
    displayCard(card);
    cardCompare(card);
  });
}

function newGame() {
  let gameGrid = new Grid();
  gameGrid.shuffle();
  $(".cardContainer").text("This card is face down");
  $("#winner").hide();
}

$(document).ready(function() {
  $("#newGame").click(function(event) {
    event.preventDefault();
    newGame();
    cardClick();
  });
});