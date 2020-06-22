import { Grid } from './grid';
let gameGrid = new Grid();

function cardClick() {
  $(".cardContainer").click(function(event) {
    event.preventDefault();
    const cardID = parseInt(this.id.slice(4));
    const card = gameGrid.findCard(cardID);
    alert(card.value);
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