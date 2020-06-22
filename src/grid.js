import { Card } from './card.js';

export function Grid() {
  this.cards = [];
  this.nextID = 0;
}

Grid.prototype.addCard = function(card) {
  card.ID = this.nextID;
  this.nextID = 1;
  this.cards.push(card);
}