import { Grid } from './grid';

function cardClick(id, gameGrid) {
  $(".row").on('click', `card${id}`, function() {
    const card = gameGrid.findCard(id);
    if (!card.faceup) {
      this.text(card.value());
    }
  });
}

function newGame() {
  let gameGrid = new Grid();
  gameGrid.shuffle();
  for (let i = 1; i <= 12; i++) {
    cardClick(i, gameGrid);
  }
}

$(document).ready(function() {
  $("#newGame").click(function(event) {
    event.preventDefault();
    newGame();
  });
});