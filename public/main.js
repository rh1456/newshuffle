const suits = ['hearts', 'clubs', 'spades', 'diamonds']

const rank = [
  'Ace',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'Jack',
  'Queen',
  'King'
]

const deck = []

//create the deck

const makeDeck = () => {
  for (let suitsIndex = 0; suitsIndex < suits.length; suitsIndex++) {
    for (let rankIndex = 0; rankIndex < rank.length; rankIndex++) {
      deck.push(rank[rankIndex] + ' ' + 'of' + ' ' + suits[suitsIndex])
    }
  }
}
//shuffle the deck
//use algorithm
const shuffleDeck = () => {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const holder = deck[i]
    deck[i] = deck[j]
    deck[j] = holder
  }

  console.log(shuffleDeck)
}

const dealCard = () => {
  // document.querySelector('h1').textContent = deck[0]
  document.querySelector('h1').textContent = deck.splice(deck.length - 1, 1)[0]
}
const makeAndShuffleDeck = () => {
  makeDeck()
  shuffleDeck()
}

document.addEventListener('click', dealCard)
document.addEventListener('DOMContentLoaded', makeAndShuffleDeck)
