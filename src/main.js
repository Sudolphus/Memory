import { Grid } from './grid';
let gameGrid = new Grid();

function displayCard(card) {
  $(`#card${card.ID}`).text(card.value);
}

function cardCompare(card) {
  if (gameGrid.firstCard === 0) {
    gameGrid.firstCard = card.value;
  } else if (gameGrid.firstCard === card.value) {
    cardMatch();
  } else {
    noMatch();
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
  gameGrid.shuffle();
}

$(document).ready(function() {
  $("#newGame").click(function(event) {
    event.preventDefault();
    newGame();
    cardClick();
  });
});