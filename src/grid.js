import { Card } from './card.js';

export function Grid() {
  this.cards = [];
  this.nextID = 1;
  this.firstCard = 0;
}

Grid.prototype.addCard = function(card) {
  card.ID = this.nextID;
  this.nextID += 1;
  this.cards.push(card);
};

Grid.prototype.shuffle = function() {
  for (let i = 1; i <= 6; i++) {
    this.addCard(new Card(i));
    this.addCard(new Card(i));
  }
};

Grid.prototype.findCard = function(id) {
  for (const card of this.cards) {
    if (card.ID === id) {
      return card;
    }
  }
};