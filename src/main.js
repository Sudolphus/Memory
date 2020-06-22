import { Grid } from './grid';

function cardClick(id) {
  $(".row").on('click', `card${id}`, function() {
    return id;
  });
}

function newGame() {
  let gameGrid = new Grid();
  gameGrid.shuffle();
  for (let i = 1; i <= 12; i++) {
    cardClick(i);
  }
}

$(document).ready(function() {
  $("#newGame").click(function(event) {
    event.preventDefault();
    newGame();
  });
});