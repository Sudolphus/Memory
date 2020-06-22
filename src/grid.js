import { Card } from './card.js';

export function Grid() {
  this.cards = [];
  this.nextID = 1;
  this.firstCard = 0;
  this.firstCardID = 0;
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

Grid.prototype.setFirstCard = function(value, id) {
  this.firstCard = value;
  this.firstCardID = id;
};

Grid.prototype.resetFirstCard = function() {
  this.firstCard = 0;
  this.firstCardID = 0;
};

Grid.prototype.removeMatch = function(card) {
  const firstID = this.firstCardID;
  this.cards = this.cards.filter(function(element) {
    return (element.ID != card.ID && element.ID != firstID);
  });
};